import { GoogleGenAI, Type } from "@google/genai";
import type { Suggestion } from '@/lib/types/proofreader';
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { saveAISuggestions } from '@/lib/db-helpers';

export async function POST(request: NextRequest) {
  try {
    // Get authenticated user
    const { userId } = await auth();
    
    // Note: For analyze route, we'll make authentication optional for backward compatibility
    // but require documentId if saving to database
    
    // Check for GEMINI_API_KEY (server-side) or NEXT_PUBLIC_API_KEY (for backward compatibility)
    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { error: "API_KEY environment variable not set. Please set GEMINI_API_KEY or NEXT_PUBLIC_API_KEY." },
        { status: 500 }
      );
    }

    const { pdfTextByPage, documentId } = await request.json();

    console.log('[API /analyze] Received request');
    console.log('[API /analyze] Text length:', pdfTextByPage?.length || 0);
    console.log('[API /analyze] Text preview:', pdfTextByPage?.substring(0, 200));
    console.log('[API /analyze] Document ID:', documentId || 'none');
    console.log('[API /analyze] User ID:', userId || 'none');

    if (!pdfTextByPage || typeof pdfTextByPage !== 'string') {
      console.error('[API /analyze] Invalid request: pdfTextByPage is missing or not a string');
      return NextResponse.json(
        { error: "Invalid request: pdfTextByPage is required." },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    const prompt = `
      You are an expert financial compliance reviewer specializing in FINRA and SEC regulations. Analyze the following text extracted from a financial document. The text for each page is separated by '--- PAGE [number] ---'.
      
      CRITICAL INSTRUCTIONS:
      - ONLY report issues that ACTUALLY EXIST in the provided text
      - Extract the EXACT original text from the document (word-for-word, including any errors)
      - DO NOT make up or infer issues that aren't clearly present
      - Focus on providing HIGH-QUALITY, RELEVANT suggestions based on what you actually see
      
      Your task is to identify:
      1. COMPLIANCE VIOLATIONS (critical/warning):
         - Missing risk disclosures required by FINRA/SEC
         - Prohibited claims (guaranteed returns, misleading performance predictions)
         - Required disclaimers that are missing or incomplete
         - Misleading or deceptive language about investments
         - Failure to disclose conflicts of interest
         - Omission of material facts
         - Improper comparisons or benchmarks
         - Use of superlatives without substantiation
      
      2. GRAMMAR/STYLE ISSUES (suggestion):
         - Grammatical mistakes (subject-verb agreement, tense errors, etc.)
         - Spelling errors
         - Awkward or unclear phrasing
         - Punctuation issues
         - Sentence structure problems
         - Word choice improvements for clarity
      
      For each issue found, you MUST provide:
      - text: the EXACT problematic text snippet copied word-for-word from the document (minimum 3-5 words for context)
      - suggestion: the corrected version with the same context length
      - issue: a clear, specific explanation of what's wrong and why the change is needed
      - page: the exact page number where found
      - category: one of "compliance", "grammar", or "style"
      - severity: "critical" (compliance violations, must fix), "warning" (important issues), or "suggestion" (improvements)
      
      IMPORTANT RULES:
      1. The "text" field MUST be an exact copy from the document - verify it exists in the text provided
      2. Include enough context (3-10 words) so the text can be uniquely identified
      3. Make sure your suggestion replaces ONLY the problematic part while maintaining context
      4. If you cannot find clear, specific issues, return an empty array rather than generic suggestions
      5. Focus on quality over quantity - only report genuine issues you can clearly identify
      
      Compliance violations should be marked as "critical" or "warning" severity.
      Grammar/style issues should be marked as "suggestion" severity.
      
      Return your findings as a JSON array. If there are no genuine issues found, return an empty array.

      Here is the text:
      ${pdfTextByPage}
    `;

    const responseSchema = {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          issue: {
            type: Type.STRING,
            description: "A brief description of the issue (e.g., 'Performance disclaimer missing').",
          },
          page: {
            type: Type.INTEGER,
            description: "The page number where the issue was found.",
          },
          text: {
            type: Type.STRING,
            description: "The original problematic text snippet.",
          },
          suggestion: {
            type: Type.STRING,
            description: "The suggested correction for the text.",
          },
          category: {
            type: Type.STRING,
            description: "The category of the issue: compliance, grammar, or style.",
            enum: ["compliance", "grammar", "style"],
          },
          severity: {
            type: Type.STRING,
            description: "The severity level: critical (must fix), warning (should fix), or suggestion (nice to have).",
            enum: ["critical", "warning", "suggestion"],
          },
        },
        required: ["issue", "page", "text", "suggestion"],
      },
    };

    console.log('[API /analyze] Calling Gemini AI...');
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      },
    });

    console.log('[API /analyze] Received response from Gemini');
    // Check if response has text property
    if (!response || typeof response.text !== 'string') {
      console.error("Invalid response structure:", response);
      throw new Error(`Invalid response from AI: response.text is not available. Response structure: ${JSON.stringify(response)}`);
    }

    const jsonText = response.text.trim();
    
    if (!jsonText) {
      throw new Error(`Empty response from AI.`);
    }

    let suggestions: Suggestion[];
    
    try {
      const parsed = JSON.parse(jsonText);
      // Validate that parsed is an array
      if (!Array.isArray(parsed)) {
        throw new Error(`Invalid response format: expected an array of suggestions, got ${typeof parsed}`);
      }
      
      // Map response to Suggestion format with backward compatibility
      suggestions = parsed.map((item: any) => ({
        issue: item.issue || item.explanation || 'Issue found',
        page: item.page || 1,
        text: item.text || item.original || '',
        suggestion: item.suggestion || '',
        category: item.category || 'compliance',
        severity: item.severity || 'warning',
        // Backward compatibility aliases
        original: item.text || item.original || '',
        explanation: item.issue || item.explanation || 'Issue found',
      }));
    } catch (parseError) {
      console.error("Failed to parse Gemini response as JSON:", parseError);
      console.error("Response text:", jsonText);
      throw new Error(`Failed to parse AI response. The response may not be valid JSON.`);
    }
    
    console.log('[API /analyze] Parsed suggestions count:', suggestions.length);
    console.log('[API /analyze] First suggestion:', suggestions[0]);
    
    // Save suggestions to database if documentId and userId are provided
    if (documentId && userId && suggestions.length > 0) {
      try {
        console.log('[API /analyze] Saving suggestions to database...');
        const dbSuggestions = suggestions.map(s => ({
          category: s.category || 'compliance',
          issue: s.issue || s.explanation || 'Issue found',
          severity: s.severity || 'warning',
          startIndex: null, // Could calculate from text position if needed
          endIndex: null,
          suggestedFix: s.suggestion || null,
        }));
        
        await saveAISuggestions(documentId, dbSuggestions);
        console.log('[API /analyze] ✅ Saved suggestions to database');
      } catch (dbError) {
        console.error('[API /analyze] ❌ Database error:', dbError);
        // Continue with response even if database save fails
      }
    }
    
    return NextResponse.json({ suggestions });
  } catch (error) {
    console.error("Error analyzing content with Gemini:", error);
    
    // Extract error information from various error formats
    let errorMessage = "Failed to get suggestions from the AI. Please check the console for details.";
    let statusCode = 500;
    
    if (error instanceof Error) {
      errorMessage = error.message || errorMessage;
      
      // Check if error has additional properties (common in API errors)
      const errorAny = error as any;
      if (errorAny.status || errorAny.code) {
        statusCode = errorAny.status || errorAny.code || statusCode;
      }
      
      // Handle nested error structures from Gemini API
      if (errorAny.error) {
        const nestedError = errorAny.error;
        if (typeof nestedError === 'object') {
          if (nestedError.message) {
            errorMessage = nestedError.message;
          }
          if (nestedError.code) {
            statusCode = nestedError.code;
          } else if (nestedError.status) {
            // Map status strings to HTTP codes
            const statusMap: Record<string, number> = {
              'UNAVAILABLE': 503,
              'RESOURCE_EXHAUSTED': 429,
              'UNAUTHENTICATED': 401,
              'PERMISSION_DENIED': 403,
              'INVALID_ARGUMENT': 400,
              'NOT_FOUND': 404,
            };
            statusCode = statusMap[nestedError.status] || statusCode;
          }
        }
      }
    } else if (typeof error === 'string') {
      errorMessage = error;
    } else if (error && typeof error === 'object') {
      // Handle error objects directly
      const errorObj = error as any;
      if (errorObj.message) {
        errorMessage = errorObj.message;
      }
      if (errorObj.error?.message) {
        errorMessage = errorObj.error.message;
      }
      if (errorObj.error?.code) {
        statusCode = errorObj.error.code;
      } else if (errorObj.error?.status) {
        const statusMap: Record<string, number> = {
          'UNAVAILABLE': 503,
          'RESOURCE_EXHAUSTED': 429,
          'UNAUTHENTICATED': 401,
          'PERMISSION_DENIED': 403,
          'INVALID_ARGUMENT': 400,
          'NOT_FOUND': 404,
        };
        statusCode = statusMap[errorObj.error.status] || statusCode;
      }
    }
    
    // Ensure status code is valid (between 400-599)
    if (statusCode < 400 || statusCode >= 600) {
      statusCode = 500;
    }
    
    return NextResponse.json(
      { error: { message: errorMessage, code: statusCode, status: statusCode === 503 ? 'UNAVAILABLE' : 'ERROR' } },
      { status: statusCode }
    );
  }
}

