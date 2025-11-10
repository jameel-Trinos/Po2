import type { Suggestion } from '../types/proofreader';

export async function analyzePdfContent(pdfTextByPage: string): Promise<Suggestion[]> {
    try {
        let response: Response;
        try {
            response = await fetch('/api/analyze', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ pdfTextByPage }),
            });
        } catch (fetchError) {
            // Handle network-level fetch failures (before getting a response)
            console.error("Network error during fetch:", fetchError);
            
            if (fetchError instanceof TypeError && fetchError.message.includes('fetch failed')) {
                throw new Error(
                    "Unable to connect to the server. Please check your internet connection and ensure the server is running."
                );
            }
            
            // Re-throw with a more user-friendly message
            throw new Error(
                `Network error: ${fetchError instanceof Error ? fetchError.message : 'Failed to send request'}. Please check your connection and try again.`
            );
        }

        if (!response.ok) {
            let errorMessage = `HTTP error! status: ${response.status}`;
            
            // Clone response to allow multiple reads if needed
            const responseClone = response.clone();
            
            // Try to read as JSON first (since our API returns JSON errors)
            let errorData: any = null;
            try {
                errorData = await response.json();
            } catch (jsonError) {
                // If JSON parsing fails, try reading the cloned response as text
                try {
                    const responseText = await responseClone.text();
                    errorMessage = responseText || errorMessage;
                } catch (textError) {
                    // If we can't read the response at all, use the default message
                    console.error("Could not read error response:", textError);
                }
            }
            
            // If we successfully parsed JSON, extract the error message
            if (errorData && typeof errorData === 'object' && errorData !== null) {
                // Handle nested error structure: { error: { message: "...", code: 503 } }
                // This is the format returned by our API route
                if (errorData.error !== undefined && errorData.error !== null) {
                    if (typeof errorData.error === 'string') {
                        errorMessage = errorData.error;
                    } else if (typeof errorData.error === 'object') {
                        // Extract message from nested error object
                        // Check for error.error.message (triple nested) first
                        if (errorData.error.error && typeof errorData.error.error === 'object' && typeof errorData.error.error.message === 'string') {
                            errorMessage = errorData.error.error.message;
                        } else if (typeof errorData.error.message === 'string' && errorData.error.message.length > 0) {
                            // This is the expected path: errorData.error.message
                            errorMessage = errorData.error.message;
                        } else if (errorData.error.error !== undefined) {
                            // Triple nested without message property
                            const innerError = errorData.error.error;
                            if (typeof innerError === 'string') {
                                errorMessage = innerError;
                            }
                        }
                    }
                } else if (typeof errorData.message === 'string' && errorData.message.length > 0) {
                    // Direct message property
                    errorMessage = errorData.message;
                }
            }
            
            // Final safety check: if errorMessage is still the default and we have errorData, try to stringify just the message part
            if (errorMessage === `HTTP error! status: ${response.status}` && errorData) {
                // Last resort: if we couldn't extract, at least try to get something meaningful
                if (errorData.error?.message) {
                    errorMessage = String(errorData.error.message);
                }
            }
            
            // Provide user-friendly messages for common error codes if we still have the default
            if (errorMessage === `HTTP error! status: ${response.status}`) {
                if (response.status === 503) {
                    errorMessage = "The AI service is temporarily unavailable. Please try again in a few moments.";
                } else if (response.status === 429) {
                    errorMessage = "Too many requests. Please wait a moment and try again.";
                } else if (response.status === 401 || response.status === 403) {
                    errorMessage = "Authentication failed. Please check your API key configuration.";
                } else if (response.status === 500) {
                    errorMessage = "An internal server error occurred. Please try again later.";
                }
            }
            
            // Ensure we have a string, not an object
            if (typeof errorMessage !== 'string') {
                errorMessage = String(errorMessage);
            }
            
            throw new Error(errorMessage);
        }

        const data = await response.json();
        return data.suggestions || [];
    } catch (error) {
        console.error("Error analyzing content with Gemini:", error);
        // Preserve the original error message if it's already an Error instance
        if (error instanceof Error) {
            throw error;
        }
        throw new Error("Failed to get suggestions from the AI. Please check the console for details.");
    }
}
