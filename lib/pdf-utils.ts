/**
 * PDF Utilities Library
 * Provides modular functions for PDF parsing, text extraction, highlighting, and modifications
 */

import type { Suggestion } from './types/proofreader';

// Type definitions
export interface PdfTextLocation {
  pageNumber: number;
  text: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface PdfPageText {
  pageNumber: number;
  text: string;
  items: PdfTextLocation[];
}

export interface PdfExtractionResult {
  fullText: string;
  pageTexts: PdfPageText[];
  numPages: number;
}

export interface HighlightInfo {
  pageNumber: number;
  text: string;
  boundingBox?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

/**
 * Load pdfjs dynamically to avoid SSR issues
 */
async function loadPdfJs() {
  const pdfjs = await import('pdfjs-dist');
  if (typeof window !== 'undefined' && !pdfjs.GlobalWorkerOptions.workerSrc) {
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
  }
  return pdfjs;
}

/**
 * Extract text from PDF with page and position information
 * Useful for highlighting and compliance analysis
 */
export async function extractPdfText(pdfFile: File | Blob | string): Promise<PdfExtractionResult> {
  try {
    const pdfjs = await loadPdfJs();
    
    // Load PDF bytes
    let arrayBuffer: ArrayBuffer;
    
    if (typeof pdfFile === 'string') {
      // URL or data URL
      if (pdfFile.startsWith('data:')) {
        const base64Data = pdfFile.split(',')[1];
        const binaryString = atob(base64Data);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        arrayBuffer = bytes.buffer;
      } else {
        const response = await fetch(pdfFile);
        arrayBuffer = await response.arrayBuffer();
      }
    } else {
      arrayBuffer = await pdfFile.arrayBuffer();
    }
    
    const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
    const pageTexts: PdfPageText[] = [];
    let fullText = '';
    
    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      try {
        const page = await pdf.getPage(pageNum);
        const textContent = await page.getTextContent();
        const viewport = page.getViewport({ scale: 1.0 });
        
        const items: PdfTextLocation[] = [];
        let pageText = '';
        
        textContent.items.forEach((item: any) => {
          if (!item.str) return;
          
          const text = item.str;
          pageText += text + ' ';
          
          // Get position information
          const transform = item.transform;
          const x = transform[4];
          const y = viewport.height - transform[5]; // Flip Y coordinate
          const width = item.width || 0;
          const height = item.height || 12;
          
          items.push({
            pageNumber: pageNum,
            text,
            x,
            y,
            width,
            height,
          });
        });
        
        pageTexts.push({
          pageNumber: pageNum,
          text: pageText.trim(),
          items,
        });
        
        fullText += `--- PAGE ${pageNum} ---\n${pageText.trim()}\n\n`;
      } catch (err: any) {
        // Silently ignore abort/cancellation errors
        if (err?.name === 'AbortError' || err?.name === 'AbortException' || 
            err?.message?.includes('cancelled') || err?.message?.includes('abort')) {
          continue;
        }
        throw err;
      }
    }
    
    return {
      fullText,
      pageTexts,
      numPages: pdf.numPages,
    };
  } catch (error) {
    console.error('Error extracting PDF text:', error);
    throw new Error('Failed to extract text from PDF');
  }
}

/**
 * Find text location in PDF for highlighting
 * Returns page number and bounding box coordinates
 */
export function findTextLocation(
  pageTexts: PdfPageText[],
  searchText: string
): HighlightInfo | null {
  // Normalize search text
  const normalizedSearch = searchText.toLowerCase().trim();
  
  for (const pageText of pageTexts) {
    const normalizedPageText = pageText.text.toLowerCase();
    const index = normalizedPageText.indexOf(normalizedSearch);
    
    if (index !== -1) {
      // Found the text, now find bounding box
      let charCount = 0;
      let startItem: PdfTextLocation | null = null;
      let endItem: PdfTextLocation | null = null;
      
      for (const item of pageText.items) {
        const itemLength = item.text.length;
        
        if (charCount <= index && index < charCount + itemLength && !startItem) {
          startItem = item;
        }
        
        if (charCount <= index + normalizedSearch.length && 
            index + normalizedSearch.length <= charCount + itemLength) {
          endItem = item;
          break;
        }
        
        charCount += itemLength + 1; // +1 for space
      }
      
      if (startItem) {
        return {
          pageNumber: pageText.pageNumber,
          text: searchText,
          boundingBox: {
            x: startItem.x,
            y: startItem.y,
            width: endItem ? (endItem.x + endItem.width - startItem.x) : startItem.width,
            height: startItem.height,
          },
        };
      }
    }
  }
  
  return null;
}

/**
 * Map suggestions to PDF page numbers
 * Useful for navigation and highlighting
 */
export function mapSuggestionsToPages(
  suggestions: Suggestion[],
  pageTexts: PdfPageText[]
): (Suggestion & { pageNumber: number })[] {
  return suggestions.map(suggestion => {
    const searchText = suggestion.original || suggestion.text;
    const location = findTextLocation(pageTexts, searchText);
    
    return {
      ...suggestion,
      pageNumber: location?.pageNumber || suggestion.page || 1,
    };
  });
}

/**
 * Convert PDF to Blob URL for rendering
 */
export function createPdfBlobUrl(pdfFile: File | Blob): string {
  return URL.createObjectURL(pdfFile);
}

/**
 * Extract text from specific PDF page
 */
export async function extractPageText(pdfFile: File | Blob | string, pageNumber: number): Promise<string> {
  try {
    const pdfjs = await loadPdfJs();
    
    let arrayBuffer: ArrayBuffer;
    
    if (typeof pdfFile === 'string') {
      if (pdfFile.startsWith('data:')) {
        const base64Data = pdfFile.split(',')[1];
        const binaryString = atob(base64Data);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        arrayBuffer = bytes.buffer;
      } else {
        const response = await fetch(pdfFile);
        arrayBuffer = await response.arrayBuffer();
      }
    } else {
      arrayBuffer = await pdfFile.arrayBuffer();
    }
    
    const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
    
    if (pageNumber < 1 || pageNumber > pdf.numPages) {
      throw new Error(`Invalid page number: ${pageNumber}`);
    }
    
    const page = await pdf.getPage(pageNumber);
    const textContent = await page.getTextContent();
    const pageText = textContent.items.map((item: any) => item.str).join(' ');
    
    return pageText;
  } catch (error: any) {
    // Silently return empty string for abort/cancellation errors
    if (error?.name === 'AbortError' || error?.name === 'AbortException' || 
        error?.message?.includes('cancelled') || error?.message?.includes('abort')) {
      return '';
    }
    console.error(`Error extracting text from page ${pageNumber}:`, error);
    throw new Error(`Failed to extract text from page ${pageNumber}`);
  }
}

/**
 * Convert PDF to images for rendering
 * Useful for displaying PDF with annotations
 */
export async function convertPdfToImages(
  pdfFile: File | Blob | string,
  scale: number = 1.5
): Promise<{ pageNumber: number; imageUrl: string }[]> {
  try {
    const pdfjs = await loadPdfJs();
    
    let arrayBuffer: ArrayBuffer;
    
    if (typeof pdfFile === 'string') {
      if (pdfFile.startsWith('data:')) {
        const base64Data = pdfFile.split(',')[1];
        const binaryString = atob(base64Data);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        arrayBuffer = bytes.buffer;
      } else {
        const response = await fetch(pdfFile);
        arrayBuffer = await response.arrayBuffer();
      }
    } else {
      arrayBuffer = await pdfFile.arrayBuffer();
    }
    
    const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
    const images: { pageNumber: number; imageUrl: string }[] = [];
    
    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const viewport = page.getViewport({ scale });
      
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      
      if (!context) {
        throw new Error('Failed to get canvas context');
      }
      
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      
      await page.render({
        canvas,
        canvasContext: context,
        viewport,
      }).promise;
      
      const imageUrl = canvas.toDataURL('image/png');
      images.push({ pageNumber: pageNum, imageUrl });
    }
    
    return images;
  } catch (error) {
    console.error('Error converting PDF to images:', error);
    throw new Error('Failed to convert PDF to images');
  }
}

/**
 * Get PDF metadata
 */
export async function getPdfMetadata(pdfFile: File | Blob | string): Promise<{
  numPages: number;
  title?: string;
  author?: string;
  subject?: string;
  keywords?: string;
  creator?: string;
  producer?: string;
  creationDate?: Date;
  modificationDate?: Date;
}> {
  try {
    const pdfjs = await loadPdfJs();
    
    let arrayBuffer: ArrayBuffer;
    
    if (typeof pdfFile === 'string') {
      if (pdfFile.startsWith('data:')) {
        const base64Data = pdfFile.split(',')[1];
        const binaryString = atob(base64Data);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        arrayBuffer = bytes.buffer;
      } else {
        const response = await fetch(pdfFile);
        arrayBuffer = await response.arrayBuffer();
      }
    } else {
      arrayBuffer = await pdfFile.arrayBuffer();
    }
    
    const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
    const metadata = await pdf.getMetadata();
    const info = metadata.info as any;
    
    return {
      numPages: pdf.numPages,
      title: info?.Title,
      author: info?.Author,
      subject: info?.Subject,
      keywords: info?.Keywords,
      creator: info?.Creator,
      producer: info?.Producer,
      creationDate: info?.CreationDate ? new Date(info.CreationDate) : undefined,
      modificationDate: info?.ModDate ? new Date(info.ModDate) : undefined,
    };
  } catch (error) {
    console.error('Error getting PDF metadata:', error);
    throw new Error('Failed to get PDF metadata');
  }
}

/**
 * Search for text in PDF and return all matches with locations
 */
export async function searchPdfText(
  pdfFile: File | Blob | string,
  searchQuery: string,
  caseSensitive: boolean = false
): Promise<HighlightInfo[]> {
  try {
    const { pageTexts } = await extractPdfText(pdfFile);
    const matches: HighlightInfo[] = [];
    
    const normalizedQuery = caseSensitive ? searchQuery : searchQuery.toLowerCase();
    
    for (const pageText of pageTexts) {
      const textToSearch = caseSensitive ? pageText.text : pageText.text.toLowerCase();
      let startIndex = 0;
      
      while (true) {
        const index = textToSearch.indexOf(normalizedQuery, startIndex);
        
        if (index === -1) break;
        
        const actualText = pageText.text.substring(index, index + searchQuery.length);
        const location = findTextLocation([pageText], actualText);
        
        if (location) {
          matches.push(location);
        }
        
        startIndex = index + 1;
      }
    }
    
    return matches;
  } catch (error) {
    console.error('Error searching PDF text:', error);
    throw new Error('Failed to search PDF text');
  }
}

/**
 * Highlight text in PDF canvas
 * To be used with canvas-based PDF rendering
 */
export function highlightTextOnCanvas(
  canvas: HTMLCanvasElement,
  highlightInfo: HighlightInfo,
  color: string = 'rgba(255, 255, 0, 0.3)'
): void {
  const context = canvas.getContext('2d');
  
  if (!context || !highlightInfo.boundingBox) return;
  
  const { x, y, width, height } = highlightInfo.boundingBox;
  
  context.save();
  context.fillStyle = color;
  context.fillRect(x, y, width, height);
  context.restore();
}

/**
 * Create a blob URL for a PDF file
 */
export function pdfToUrl(pdfBlob: Blob): string {
  return URL.createObjectURL(pdfBlob);
}

/**
 * Clean up blob URL
 */
export function revokePdfUrl(url: string): void {
  URL.revokeObjectURL(url);
}

/**
 * Download PDF file
 */
export function downloadPdf(pdfBlob: Blob, filename: string): void {
  const url = URL.createObjectURL(pdfBlob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Validate if a file is a valid PDF
 */
export async function isValidPdf(file: File | Blob): Promise<boolean> {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);
    
    // Check PDF magic number: %PDF-
    const pdfHeader = String.fromCharCode(...uint8Array.slice(0, 5));
    return pdfHeader === '%PDF-';
  } catch (error) {
    console.error('Error validating PDF:', error);
    return false;
  }
}

