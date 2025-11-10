import { GoogleGenAI, Type } from "@google/genai";
import type { Suggestion } from '@/lib/types/proofreader';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Check for GEMINI_API_KEY (server-side) or NEXT_PUBLIC_API_KEY (for backward compatibility)
    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { error: "API_KEY environment variable not set. Please set GEMINI_API_KEY or NEXT_PUBLIC_API_KEY." },
        { status: 500 }
      );
    }

    const { pdfTextByPage } = await request.json();

    if (!pdfTextByPage || typeof pdfTextByPage !== 'string') {
      return NextResponse.json(
        { error: "Invalid request: pdfTextByPage is required." },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    const prompt = `
      You are an expert proofreader. Analyze the following text extracted from a PDF document. The text for each page is separated by '--- PAGE [number] ---'.
      Identify any language errors, including grammatical mistakes, spelling errors, awkward phrasing, and punctuation issues.
      For each error you find, provide the original problematic text snippet, a corrected version, a brief explanation for the change, and the page number where it was found.
      Return your findings as a JSON array. Do not include suggestions if the text is perfect. If there are no errors, return an empty array.

      Here is the text:
      ${pdfTextByPage}
    `;

    const responseSchema = {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          page: {
            type: Type.INTEGER,
            description: "The page number where the error was found.",
          },
          original: {
            type: Type.STRING,
            description: "The original text snippet with the error.",
          },
          suggestion: {
            type: Type.STRING,
            description: "The suggested correction for the text.",
          },
          explanation: {
            type: Type.STRING,
            description: "A brief explanation of why the correction is needed.",
          },
        },
        required: ["page", "original", "suggestion", "explanation"],
      },
    };

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      },
    });

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
      suggestions = JSON.parse(jsonText);
    } catch (parseError) {
      console.error("Failed to parse Gemini response as JSON:", parseError);
      console.error("Response text:", jsonText);
      throw new Error(`Failed to parse AI response. The response may not be valid JSON.`);
    }
    
    // Validate that suggestions is an array
    if (!Array.isArray(suggestions)) {
      throw new Error(`Invalid response format: expected an array of suggestions, got ${typeof suggestions}`);
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

