import type { Suggestion } from '../types/proofreader';

export async function analyzePdfContent(pdfTextByPage: string): Promise<Suggestion[]> {
    try {
        const response = await fetch('/api/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ pdfTextByPage }),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
            throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.suggestions || [];
    } catch (error) {
        console.error("Error analyzing content with Gemini:", error);
        throw new Error("Failed to get suggestions from the AI. Please check the console for details.");
    }
}
