import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI, Type } from '@google/genai';

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API_KEY environment variable not set. Please set GEMINI_API_KEY or NEXT_PUBLIC_API_KEY." },
        { status: 500 }
      );
    }

    const { text } = await request.json();
    if (!text || typeof text !== 'string') {
      return NextResponse.json(
        { error: "Invalid request: text is required." },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });
    const prompt = `
You are an expert financial compliance reviewer specializing in FINRA and SEC regulations. Analyze the following text extracted from a Word document.

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
- page: 1 (since Word documents don't have page markers in extracted text)
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
${text}
`;

    const responseSchema = {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          issue: { type: Type.STRING, description: "Brief description of the issue" },
          page: { type: Type.INTEGER },
          text: { type: Type.STRING, description: "The original problematic text" },
          suggestion: { type: Type.STRING },
          category: { type: Type.STRING, enum: ["compliance", "grammar", "style"] },
          severity: { type: Type.STRING, enum: ["critical", "warning", "suggestion"] },
        },
        required: ["issue", "page", "text", "suggestion"],
      },
    };

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema,
      },
    });

    if (!response || typeof (response as any).text !== 'string') {
      return NextResponse.json({ error: 'Invalid response from AI' }, { status: 502 });
    }

    const raw = (response as any).text.trim();
    const parsed = raw ? JSON.parse(raw) : [];
    
    // Map response to Suggestion format with backward compatibility
    const suggestions = Array.isArray(parsed)
      ? parsed.map((s: any) => ({
          issue: s.issue || s.explanation || 'Issue found',
          page: s.page || 1,
          text: s.text || s.original || '',
          suggestion: s.suggestion || '',
          category: s.category || 'compliance',
          severity: s.severity || 'warning',
          // Backward compatibility aliases
          original: s.text || s.original || '',
          explanation: s.issue || s.explanation || 'Issue found',
        }))
      : [];

    return NextResponse.json({ suggestions });
  } catch (error) {
    console.error("Error analyzing DOCX content:", error);
    return NextResponse.json({ error: "Failed to analyze DOCX content" }, { status: 500 });
  }
}


