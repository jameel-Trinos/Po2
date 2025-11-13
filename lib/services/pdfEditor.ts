import { PDFDocument, PDFPage, rgb } from 'pdf-lib';
import type { Suggestion } from '../types/proofreader';

/**
 * Load PDF from base64 data URL or blob URL
 */
export async function loadPdfFromUrl(url: string): Promise<PDFDocument> {
  try {
    let pdfBytes: Uint8Array;

    if (url.startsWith('data:')) {
      // Base64 data URL
      const base64Data = url.split(',')[1];
      const binaryString = atob(base64Data);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      pdfBytes = bytes;
    } else if (url.startsWith('blob:')) {
      // Blob URL - fetch it
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      pdfBytes = new Uint8Array(arrayBuffer);
    } else {
      // Assume it's a URL - fetch it
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      pdfBytes = new Uint8Array(arrayBuffer);
    }

    return await PDFDocument.load(pdfBytes);
  } catch (error) {
    console.error('Error loading PDF:', error);
    throw new Error('Failed to load PDF document');
  }
}

/**
 * Load PDF from ArrayBuffer
 */
export async function loadPdfFromArrayBuffer(buffer: ArrayBuffer): Promise<PDFDocument> {
  try {
    const pdfBytes = new Uint8Array(buffer);
    return await PDFDocument.load(pdfBytes);
  } catch (error) {
    console.error('Error loading PDF from ArrayBuffer:', error);
    throw new Error('Failed to load PDF document from ArrayBuffer');
  }
}

/**
 * Find and replace text in a PDF page
 * Note: pdf-lib doesn't have direct text replacement, so we overlay new text
 */
export async function replaceTextInPage(
  page: PDFPage,
  originalText: string,
  newText: string
): Promise<void> {
  try {
    // Get page dimensions
    const { width, height } = page.getSize();

    // Get all text content from the page to find position
    // Note: pdf-lib doesn't provide text extraction, so we'll need to use pdfjs for that
    // For now, we'll add text at a default position (this is a limitation)
    // In a real implementation, you'd need to track text positions from pdfjs

    // This is a placeholder - actual implementation would need text position data
    // from pdfjs extraction
    const fontSize = 12;
    page.drawText(newText, {
      x: 50,
      y: height - 50,
      size: fontSize,
      color: rgb(0, 0, 0),
    });
  } catch (error) {
    console.error('Error replacing text in page:', error);
    throw error;
  }
}

/**
 * Apply suggestions to PDF document
 * This function uses text position data to accurately place replacements
 */
export async function applySuggestionsToPdf(
  pdfDoc: PDFDocument,
  suggestions: Suggestion[],
  textPositions?: Map<number, Array<{ text: string; x: number; y: number; fontSize: number }>>
): Promise<PDFDocument> {
  try {
    const pages = pdfDoc.getPages();

    // Group suggestions by page
    const suggestionsByPage = new Map<number, Suggestion[]>();
    suggestions.forEach(suggestion => {
      const pageNum = suggestion.page - 1; // Convert to 0-based index
      if (!suggestionsByPage.has(pageNum)) {
        suggestionsByPage.set(pageNum, []);
      }
      suggestionsByPage.get(pageNum)!.push(suggestion);
    });

    // Apply suggestions to each page
    suggestionsByPage.forEach((pageSuggestions, pageIndex) => {
      if (pageIndex >= 0 && pageIndex < pages.length) {
        const page = pages[pageIndex];
        const { width, height } = page.getSize();

        pageSuggestions.forEach(suggestion => {
          // If we have text positions, use them; otherwise use default positioning
          if (textPositions && textPositions.has(pageIndex)) {
            const positions = textPositions.get(pageIndex)!;
            const originalText = suggestion.original || suggestion.text;
            const position = positions.find(p => p.text.includes(originalText));
            
            if (position) {
              // Draw white rectangle to "erase" old text (approximation)
              page.drawRectangle({
                x: position.x - 2,
                y: position.y - position.fontSize / 2,
                width: position.text.length * position.fontSize * 0.6,
                height: position.fontSize * 1.2,
                color: rgb(1, 1, 1), // White background
              });

              // Draw new text
              page.drawText(suggestion.suggestion, {
                x: position.x,
                y: position.y,
                size: position.fontSize,
                color: rgb(0, 0, 0),
              });
            } else {
              // Fallback: add text at bottom of page
              page.drawText(suggestion.suggestion, {
                x: 50,
                y: height - 50 - (pageSuggestions.indexOf(suggestion) * 20),
                size: 12,
                color: rgb(0, 0, 0),
              });
            }
          } else {
            // Fallback: add text at bottom of page
            page.drawText(suggestion.suggestion, {
              x: 50,
              y: height - 50 - (pageSuggestions.indexOf(suggestion) * 20),
              size: 12,
              color: rgb(0, 0, 0),
            });
          }
        });
      }
    });

    return pdfDoc;
  } catch (error) {
    console.error('Error applying suggestions to PDF:', error);
    throw new Error('Failed to apply suggestions to PDF');
  }
}

/**
 * Export PDF document to base64 data URL
 */
export async function exportPdfToBase64(pdfDoc: PDFDocument): Promise<string> {
  try {
    const pdfBytes = await pdfDoc.save();
    const base64 = btoa(String.fromCharCode(...pdfBytes));
    return `data:application/pdf;base64,${base64}`;
  } catch (error) {
    console.error('Error exporting PDF to base64:', error);
    throw new Error('Failed to export PDF to base64');
  }
}

/**
 * Export PDF document to Blob
 */
export async function exportPdfToBlob(pdfDoc: PDFDocument): Promise<Blob> {
  try {
    const pdfBytes = await pdfDoc.save();
    // Create a proper ArrayBuffer by copying the data
    const buffer = new ArrayBuffer(pdfBytes.length);
    const view = new Uint8Array(buffer);
    view.set(pdfBytes);
    return new Blob([buffer], { type: 'application/pdf' });
  } catch (error) {
    console.error('Error exporting PDF to blob:', error);
    throw new Error('Failed to export PDF to blob');
  }
}

/**
 * Export PDF document to ArrayBuffer
 */
export async function exportPdfToArrayBuffer(pdfDoc: PDFDocument): Promise<ArrayBuffer> {
  try {
    const pdfBytes = await pdfDoc.save();
    // Create a proper ArrayBuffer by copying the data
    const buffer = new ArrayBuffer(pdfBytes.length);
    const view = new Uint8Array(buffer);
    view.set(pdfBytes);
    return buffer;
  } catch (error) {
    console.error('Error exporting PDF to ArrayBuffer:', error);
    throw new Error('Failed to export PDF to ArrayBuffer');
  }
}

/**
 * Complete workflow: Load PDF, apply suggestions, export
 */
export async function editPdfWithSuggestions(
  pdfUrl: string,
  suggestions: Suggestion[],
  textPositions?: Map<number, Array<{ text: string; x: number; y: number; fontSize: number }>>
): Promise<string> {
  try {
    const pdfDoc = await loadPdfFromUrl(pdfUrl);
    const modifiedPdf = await applySuggestionsToPdf(pdfDoc, suggestions, textPositions);
    return await exportPdfToBase64(modifiedPdf);
  } catch (error) {
    console.error('Error editing PDF with suggestions:', error);
    throw error;
  }
}


