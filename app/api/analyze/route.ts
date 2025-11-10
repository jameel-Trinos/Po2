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

    const jsonText = response.text.trim();
    const suggestions: Suggestion[] = JSON.parse(jsonText);
    
    return NextResponse.json({ suggestions });
  } catch (error) {
    console.error("Error analyzing content with Gemini:", error);
    return NextResponse.json(
      { error: "Failed to get suggestions from the AI. Please check the console for details." },
      { status: 500 }
    );
  }
}

