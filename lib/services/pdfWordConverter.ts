import mammoth from 'mammoth';
import { 
  Document, 
  Packer, 
  Paragraph, 
  TextRun, 
  HeadingLevel, 
  AlignmentType,
  Table,
  TableRow,
  TableCell,
  WidthType,
  BorderStyle,
  ImageRun,
  UnderlineType
} from 'docx';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import type { Suggestion } from '../types/proofreader';

// Helper function to load pdfjs dynamically
async function loadPdfJs() {
  const pdfjs = await import('pdfjs-dist');
  if (typeof window !== 'undefined' && !pdfjs.GlobalWorkerOptions.workerSrc) {
    pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs';
  }
  return pdfjs;
}

/**
 * Sanitize text to replace Unicode characters that can't be encoded in WinAnsi
 * with ASCII equivalents
 */
function sanitizeTextForPdf(text: string): string {
  // Map of common Unicode characters to ASCII equivalents
  const unicodeMap: Record<string, string> = {
    '→': '->',
    '←': '<-',
    '↑': '^',
    '↓': 'v',
    '⇒': '=>',
    '⇐': '<=',
    '•': '*',
    '–': '-',
    '—': '--',
    '…': '...',
    '\u201C': '"',
    '\u201D': '"',
    '\u2018': "'",
    '\u2019': "'",
    '©': '(c)',
    '®': '(R)',
    '™': '(TM)',
    '€': 'EUR',
    '£': 'GBP',
    '¥': 'JPY',
  };

  let sanitized = text;
  
  // Replace known Unicode characters
  Object.entries(unicodeMap).forEach(([unicode, ascii]) => {
    sanitized = sanitized.replace(new RegExp(unicode, 'g'), ascii);
  });

  // Remove any remaining non-ASCII characters that can't be encoded
  // This regex keeps ASCII printable characters (32-126) and common whitespace (excluding newlines as they're handled separately)
  sanitized = sanitized.replace(/[^\x20-\x7E\n\r\t]/g, '?');

  return sanitized;
}

/**
 * Convert PDF to HTML for rich text editing
 * Uses pdfjs-dist to extract text with layout preservation
 */
export async function convertPdfToHtml(pdfUrl: string): Promise<string> {
  try {
    // Dynamically load pdfjs
    const pdfjs = await loadPdfJs();

    // Load PDF bytes
    let pdfBytes: ArrayBuffer;
    
    if (pdfUrl.startsWith('data:')) {
      const base64Data = pdfUrl.split(',')[1];
      const binaryString = atob(base64Data);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      pdfBytes = bytes.buffer;
    } else {
      const response = await fetch(pdfUrl);
      pdfBytes = await response.arrayBuffer();
    }

    const pdf = await pdfjs.getDocument({ data: pdfBytes }).promise;
    const htmlParts: string[] = [];

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const textContent = await page.getTextContent();
      
      // Group text items into paragraphs based on vertical position
      const lines: { y: number; items: any[] }[] = [];
      let currentLine: { y: number; items: any[] } | null = null;
      
      textContent.items.forEach((item: any) => {
        const y = item.transform[5];
        
        if (!currentLine || Math.abs(currentLine.y - y) > 5) {
          currentLine = { y, items: [item] };
          lines.push(currentLine);
        } else {
          currentLine.items.push(item);
        }
      });

      // Convert lines to HTML paragraphs
      lines.forEach(line => {
        const text = line.items.map((item: any) => item.str).join(' ').trim();
        if (text) {
          // Detect if it might be a heading (simple heuristic: short lines with larger font)
          const avgFontSize = line.items.reduce((sum: number, item: any) => 
            sum + (item.height || 12), 0) / line.items.length;
          
          if (avgFontSize > 16 && text.length < 100) {
            htmlParts.push(`<h2>${text}</h2>`);
          } else {
            htmlParts.push(`<p>${text}</p>`);
          }
        }
      });
    }

    return htmlParts.join('\n');
  } catch (error) {
    console.error('Error converting PDF to HTML:', error);
    throw new Error('Failed to convert PDF to HTML');
  }
}

/**
 * Draw HTML table in PDF
 */
async function drawTableInPdf(
  tableElement: HTMLTableElement,
  pdfDoc: PDFDocument,
  currentPage: any,
  yPosition: number,
  font: any,
  boldFont: any,
  margin: number
): Promise<{ page: any; yPosition: number }> {
  const cellPadding = 5;
  const cellHeight = 25;
  const pageWidth = 612;
  const maxWidth = pageWidth - (margin * 2);
  
  // Get all rows
  const allRows = Array.from(tableElement.querySelectorAll('tr'));
  const numCols = Math.max(...allRows.map(row => row.querySelectorAll('td, th').length));
  const colWidth = maxWidth / numCols;
  
  let page = currentPage;
  let y = yPosition;
  
  for (const row of allRows) {
    // Check if we need a new page
    if (y < 50) {
      page = pdfDoc.addPage([612, 792]);
      y = 750;
    }
    
    const cells = Array.from(row.querySelectorAll('td, th'));
    const isHeader = cells[0]?.tagName === 'TH';
    
    // Draw cell backgrounds for headers
    if (isHeader) {
      page.drawRectangle({
        x: margin,
        y: y - cellHeight,
        width: maxWidth,
        height: cellHeight,
        color: rgb(0.9, 0.9, 0.9),
      });
    }
    
    // Draw cell borders and content
    cells.forEach((cell, colIndex) => {
      const x = margin + (colIndex * colWidth);
      
      // Draw cell border
      page.drawRectangle({
        x,
        y: y - cellHeight,
        width: colWidth,
        height: cellHeight,
        borderColor: rgb(0, 0, 0),
        borderWidth: 1,
      });
      
      // Draw cell text
      let text = cell.textContent?.trim() || '';
      text = sanitizeTextForPdf(text);
      
      // Truncate text if too long
      const maxTextWidth = colWidth - (cellPadding * 2);
      const currentFont = isHeader ? boldFont : font;
      const fontSize = 10;
      
      while (currentFont.widthOfTextAtSize(text, fontSize) > maxTextWidth && text.length > 0) {
        text = text.slice(0, -4) + '...';
      }
      
      page.drawText(text, {
        x: x + cellPadding,
        y: y - cellHeight + cellPadding + 5,
        size: fontSize,
        font: currentFont,
        color: rgb(0, 0, 0),
      });
    });
    
    y -= cellHeight;
  }
  
  return { page, yPosition: y - 10 }; // Add extra spacing after table
}

/**
 * Embed image in PDF
 */
async function embedImageInPdf(
  imgElement: HTMLImageElement,
  pdfDoc: PDFDocument,
  currentPage: any,
  yPosition: number,
  margin: number
): Promise<{ page: any; yPosition: number }> {
  try {
    let src = imgElement.src;
    
    if (!src.startsWith('data:') && !src.startsWith('http')) {
      console.warn('Cannot embed relative URL images in PDF:', src);
      return { page: currentPage, yPosition };
    }
    
    // Fetch image data
    let imageBytes: Uint8Array;
    let imageType: 'png' | 'jpg';
    
    if (src.startsWith('data:')) {
      const base64Data = src.split(',')[1];
      const mimeType = src.split(';')[0].split(':')[1];
      imageType = mimeType.includes('png') ? 'png' : 'jpg';
      
      const binaryString = atob(base64Data);
      imageBytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        imageBytes[i] = binaryString.charCodeAt(i);
      }
    } else {
      const response = await fetch(src);
      const arrayBuffer = await response.arrayBuffer();
      imageBytes = new Uint8Array(arrayBuffer);
      imageType = src.toLowerCase().endsWith('.png') ? 'png' : 'jpg';
    }
    
    // Embed image
    const image = imageType === 'png' 
      ? await pdfDoc.embedPng(imageBytes)
      : await pdfDoc.embedJpg(imageBytes);
    
    const imgDims = image.scale(0.5); // Scale down by 50%
    const maxWidth = 512;
    const maxHeight = 400;
    
    let width = imgDims.width;
    let height = imgDims.height;
    
    // Scale to fit within max dimensions
    if (width > maxWidth) {
      height = (height * maxWidth) / width;
      width = maxWidth;
    }
    if (height > maxHeight) {
      width = (width * maxHeight) / height;
      height = maxHeight;
    }
    
    // Check if we need a new page
    let page = currentPage;
    let y = yPosition;
    
    if (y - height < 50) {
      page = pdfDoc.addPage([612, 792]);
      y = 750;
    }
    
    // Draw image
    page.drawImage(image, {
      x: margin,
      y: y - height,
      width,
      height,
    });
    
    return { page, yPosition: y - height - 10 };
  } catch (error) {
    console.error('Error embedding image in PDF:', error);
    return { page: currentPage, yPosition };
  }
}

/**
 * Convert HTML from rich text editor to PDF with full formatting
 */
export async function convertHtmlToPdf(html: string): Promise<string> {
  try {
    const pdfDoc = await PDFDocument.create();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    
    let currentPage = pdfDoc.addPage([612, 792]); // US Letter size
    let yPosition = 750;
    const lineHeight = 18;
    const margin = 50;
    const maxWidth = 512;

    // Parse HTML into structured content
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const elements = doc.body.children;

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const tagName = element.tagName.toLowerCase();
      
      // Handle tables
      if (tagName === 'table') {
        const result = await drawTableInPdf(
          element as HTMLTableElement,
          pdfDoc,
          currentPage,
          yPosition,
          font,
          boldFont,
          margin
        );
        currentPage = result.page;
        yPosition = result.yPosition;
        continue;
      }
      
      // Handle images
      if (tagName === 'img') {
        const result = await embedImageInPdf(
          element as HTMLImageElement,
          pdfDoc,
          currentPage,
          yPosition,
          margin
        );
        currentPage = result.page;
        yPosition = result.yPosition;
        continue;
      }
      
      // Handle lists
      if (tagName === 'ul' || tagName === 'ol') {
        const listItems = Array.from(element.querySelectorAll('li'));
        listItems.forEach((li, index) => {
          const bulletText = tagName === 'ul' ? '• ' : `${index + 1}. `;
          let text = li.textContent?.trim() || '';
          text = sanitizeTextForPdf(bulletText + text);
          
          // Wrap text
          const words = text.split(' ');
          let currentLine = '';
          
          for (const word of words) {
            const testLine = currentLine ? `${currentLine} ${word}` : word;
            const textWidth = font.widthOfTextAtSize(testLine, 12);
            
            if (textWidth > maxWidth && currentLine) {
              if (yPosition < 50) {
                currentPage = pdfDoc.addPage([612, 792]);
                yPosition = 750;
              }
              
              currentPage.drawText(currentLine, {
                x: margin + 20, // Indent list items
                y: yPosition,
                size: 12,
                font: font,
                color: rgb(0, 0, 0),
              });
              
              yPosition -= lineHeight;
              currentLine = word;
            } else {
              currentLine = testLine;
            }
          }
          
          if (currentLine) {
            if (yPosition < 50) {
              currentPage = pdfDoc.addPage([612, 792]);
              yPosition = 750;
            }
            
            currentPage.drawText(currentLine, {
              x: margin + 20,
              y: yPosition,
              size: 12,
              font: font,
              color: rgb(0, 0, 0),
            });
            
            yPosition -= lineHeight;
          }
        });
        continue;
      }
      
      // Handle regular text elements
      let text = element.textContent?.trim() || '';
      if (!text) continue;

      // Sanitize text for PDF encoding
      text = sanitizeTextForPdf(text);

      // Determine font size and style based on element type
      let fontSize = 12;
      let currentFont = font;
      let spacing = lineHeight;

      if (tagName.startsWith('h')) {
        const level = parseInt(tagName[1]);
        fontSize = 24 - (level * 2);
        currentFont = boldFont;
        spacing = lineHeight * 1.5;
      } else if (tagName === 'strong' || tagName === 'b') {
        currentFont = boldFont;
      }

      // Split text by newlines first to handle line breaks properly
      const lines = text.split(/\r?\n/);
      
      for (const line of lines) {
        // Wrap text to fit within page width
        const words = line.split(' ');
        let currentLine = '';

        for (const word of words) {
          const testLine = currentLine ? `${currentLine} ${word}` : word;
          const textWidth = currentFont.widthOfTextAtSize(testLine, fontSize);

          if (textWidth > maxWidth && currentLine) {
            // Draw current line
            if (yPosition < 50) {
              currentPage = pdfDoc.addPage([612, 792]);
              yPosition = 750;
            }

            currentPage.drawText(currentLine, {
              x: margin,
              y: yPosition,
              size: fontSize,
              font: currentFont,
              color: rgb(0, 0, 0),
            });

            yPosition -= spacing;
            currentLine = word;
          } else {
            currentLine = testLine;
          }
        }

        // Draw remaining text
        if (currentLine) {
          if (yPosition < 50) {
            currentPage = pdfDoc.addPage([612, 792]);
            yPosition = 750;
          }

          currentPage.drawText(currentLine, {
            x: margin,
            y: yPosition,
            size: fontSize,
            font: currentFont,
            color: rgb(0, 0, 0),
          });

          yPosition -= spacing;
        } else if (line === '') {
          // Handle empty lines (preserve blank lines)
          yPosition -= spacing;
        }
      }

      // Add extra spacing after headings
      if (tagName.startsWith('h')) {
        yPosition -= lineHeight * 0.5;
      }
    }

    const pdfBytes = await pdfDoc.save();
    const base64 = btoa(String.fromCharCode(...pdfBytes));
    return `data:application/pdf;base64,${base64}`;
  } catch (error) {
    console.error('Error converting HTML to PDF:', error);
    throw new Error('Failed to convert HTML to PDF');
  }
}

/**
 * Convert Word document to PDF (legacy compatibility)
 */
export async function convertWordToPdf(wordBlob: Blob): Promise<string> {
  try {
    const html = await wordBlobToHtml(wordBlob);
    return await convertHtmlToPdf(html);
  } catch (error) {
    console.error('Error converting Word to PDF:', error);
    throw new Error('Failed to convert Word document to PDF');
  }
}

/**
 * Apply suggestions to Word document content
 */
export function applySuggestionsToWordContent(
  wordContent: string,
  suggestions: Suggestion[]
): string {
  let modifiedContent = wordContent;
  
  suggestions.forEach(suggestion => {
    // Replace original text with suggestion
    const originalText = suggestion.original || suggestion.text;
    const regex = new RegExp(originalText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    modifiedContent = modifiedContent.replace(regex, suggestion.suggestion);
  });
  
  return modifiedContent;
}

/**
 * Convert Word Blob to HTML string for editing
 */
export async function wordBlobToHtml(wordBlob: Blob): Promise<string> {
  try {
    const arrayBuffer = await wordBlob.arrayBuffer();
    const result = await mammoth.convertToHtml({ arrayBuffer });
    return result.value;
  } catch (error) {
    console.error('Error converting Word to HTML:', error);
    throw new Error('Failed to convert Word document to HTML');
  }
}

/**
 * Parse inline styles and return text run options
 */
function parseTextRunStyles(element: Element): any {
  const style = element.getAttribute('style') || '';
  const computedStyle = window.getComputedStyle(element);
  const options: any = {};

  // Bold
  if (element.tagName === 'STRONG' || element.tagName === 'B' || 
      computedStyle.fontWeight === 'bold' || parseInt(computedStyle.fontWeight) >= 700) {
    options.bold = true;
  }

  // Italic
  if (element.tagName === 'EM' || element.tagName === 'I' || 
      computedStyle.fontStyle === 'italic') {
    options.italics = true;
  }

  // Underline
  if (element.tagName === 'U' || computedStyle.textDecoration.includes('underline')) {
    options.underline = { type: UnderlineType.SINGLE };
  }

  // Font size (convert from px to points - 12pt = 16px)
  const fontSize = parseInt(computedStyle.fontSize);
  if (fontSize && fontSize > 0) {
    options.size = Math.round((fontSize * 72) / 96); // Convert pixels to points
  }

  return options;
}

/**
 * Process text node with inline formatting
 */
function processTextNode(node: Node, parentElement: Element): TextRun[] {
  const runs: TextRun[] = [];
  
  if (node.nodeType === Node.TEXT_NODE) {
    const text = node.textContent || '';
    if (text.trim()) {
      const styles = parseTextRunStyles(parentElement);
      runs.push(new TextRun({ text, ...styles }));
    }
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    const element = node as Element;
    const styles = parseTextRunStyles(element);
    
    // Process child nodes recursively
    Array.from(element.childNodes).forEach(child => {
      if (child.nodeType === Node.TEXT_NODE) {
        const text = child.textContent || '';
        if (text.trim()) {
          runs.push(new TextRun({ text, ...styles }));
        }
      } else {
        runs.push(...processTextNode(child, element));
      }
    });
  }
  
  return runs;
}

/**
 * Convert HTML table to Word Table
 */
async function htmlTableToWordTable(tableElement: HTMLTableElement): Promise<Table> {
  const rows: TableRow[] = [];
  
  // Process all rows (including thead and tbody)
  const allRows = Array.from(tableElement.querySelectorAll('tr'));
  
  for (const row of allRows) {
    const cells: TableCell[] = [];
    const cellElements = Array.from(row.querySelectorAll('td, th'));
    
    for (const cell of cellElements) {
      const isHeader = cell.tagName === 'TH';
      const textRuns: TextRun[] = [];
      
      // Get cell text with formatting
      Array.from(cell.childNodes).forEach(node => {
        const runs = processTextNode(node, cell);
        textRuns.push(...runs);
      });
      
      // If no formatted text, just get plain text
      if (textRuns.length === 0) {
        const text = cell.textContent?.trim() || '';
        textRuns.push(new TextRun({ 
          text, 
          bold: isHeader 
        }));
      }
      
      cells.push(
        new TableCell({
          children: [new Paragraph({ children: textRuns })],
          shading: isHeader ? {
            fill: 'E7E7E7', // Light gray for headers
          } : undefined,
        })
      );
    }
    
    rows.push(new TableRow({ children: cells }));
  }
  
  return new Table({
    rows,
    width: {
      size: 100,
      type: WidthType.PERCENTAGE,
    },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 1 },
      bottom: { style: BorderStyle.SINGLE, size: 1 },
      left: { style: BorderStyle.SINGLE, size: 1 },
      right: { style: BorderStyle.SINGLE, size: 1 },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 1 },
      insideVertical: { style: BorderStyle.SINGLE, size: 1 },
    },
  });
}

/**
 * Convert image to base64 and create ImageRun
 */
async function htmlImageToWordImage(imgElement: HTMLImageElement): Promise<ImageRun | null> {
  try {
    // Get image source
    let src = imgElement.src;
    
    // If it's a relative URL, we can't load it in the browser context
    if (!src.startsWith('data:') && !src.startsWith('http')) {
      console.warn('Cannot embed relative URL images:', src);
      return null;
    }
    
    // Fetch image as blob
    let imageBytes: Uint8Array;
    
    if (src.startsWith('data:')) {
      // Extract base64 data
      const base64Data = src.split(',')[1];
      const binaryString = atob(base64Data);
      imageBytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        imageBytes[i] = binaryString.charCodeAt(i);
      }
    } else {
      // Fetch from URL
      const response = await fetch(src);
      const arrayBuffer = await response.arrayBuffer();
      imageBytes = new Uint8Array(arrayBuffer);
    }
    
    // Get image dimensions
    const width = imgElement.width || 400;
    const height = imgElement.height || 300;
    
    return new ImageRun({
      data: imageBytes,
      transformation: {
        width: Math.min(width, 600), // Max width 600px
        height: Math.min(height, 450), // Max height 450px
      },
    });
  } catch (error) {
    console.error('Error embedding image:', error);
    return null;
  }
}

/**
 * Process HTML element and convert to Word elements
 */
async function processHtmlElement(element: Element): Promise<any[]> {
  const wordElements: any[] = [];
  const tagName = element.tagName.toLowerCase();
  
  // Handle tables
  if (tagName === 'table') {
    const table = await htmlTableToWordTable(element as HTMLTableElement);
    wordElements.push(table);
    return wordElements;
  }
  
  // Handle images
  if (tagName === 'img') {
    const imageRun = await htmlImageToWordImage(element as HTMLImageElement);
    if (imageRun) {
      wordElements.push(new Paragraph({ children: [imageRun] }));
    }
    return wordElements;
  }
  
  // Handle lists
  if (tagName === 'ul' || tagName === 'ol') {
    const listItems = Array.from(element.querySelectorAll('li'));
    listItems.forEach((li, index) => {
      const textRuns: TextRun[] = [];
      Array.from(li.childNodes).forEach(node => {
        const runs = processTextNode(node, li);
        textRuns.push(...runs);
      });
      
      if (textRuns.length === 0) {
        const text = li.textContent?.trim() || '';
        textRuns.push(new TextRun({ text }));
      }
      
      const bulletText = tagName === 'ul' ? '• ' : `${index + 1}. `;
      textRuns.unshift(new TextRun({ text: bulletText }));
      
      wordElements.push(new Paragraph({ children: textRuns }));
    });
    return wordElements;
  }
  
  // Handle regular paragraphs and headings
  const text = element.textContent?.trim() || '';
  if (!text && tagName !== 'br') return wordElements;
  
  // Create paragraph options
  const paragraphOptions: any = { children: [] };
  
  // Handle headings
  if (tagName === 'h1') {
    paragraphOptions.heading = HeadingLevel.HEADING_1;
  } else if (tagName === 'h2') {
    paragraphOptions.heading = HeadingLevel.HEADING_2;
  } else if (tagName === 'h3') {
    paragraphOptions.heading = HeadingLevel.HEADING_3;
  } else if (tagName === 'h4') {
    paragraphOptions.heading = HeadingLevel.HEADING_4;
  }
  
  // Handle text alignment
  const style = element.getAttribute('style') || '';
  const computedStyle = window.getComputedStyle(element);
  const textAlign = computedStyle.textAlign;
  
  if (textAlign === 'center' || style.includes('text-align: center')) {
    paragraphOptions.alignment = AlignmentType.CENTER;
  } else if (textAlign === 'right' || style.includes('text-align: right')) {
    paragraphOptions.alignment = AlignmentType.RIGHT;
  } else if (textAlign === 'justify' || style.includes('text-align: justify')) {
    paragraphOptions.alignment = AlignmentType.JUSTIFIED;
  }
  
  // Process text with inline formatting
  const textRuns: TextRun[] = [];
  Array.from(element.childNodes).forEach(node => {
    const runs = processTextNode(node, element);
    textRuns.push(...runs);
  });
  
  // If no formatted text, just use plain text
  if (textRuns.length === 0 && text) {
    textRuns.push(new TextRun({ text }));
  }
  
  if (textRuns.length > 0) {
    paragraphOptions.children = textRuns;
    wordElements.push(new Paragraph(paragraphOptions));
  }
  
  return wordElements;
}

/**
 * Convert HTML string to Word Blob with full formatting preservation
 */
export async function htmlToWordBlob(htmlContent: string): Promise<Blob> {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const wordElements: any[] = [];
    
    // Process each top-level element in the HTML body
    const elements = Array.from(doc.body.children);
    
    for (const element of elements) {
      const processed = await processHtmlElement(element);
      wordElements.push(...processed);
    }
    
    // Create Word document with processed elements
    const wordDoc = new Document({
      sections: [
        {
          properties: {
            page: {
              margin: {
                top: 1440, // 1 inch = 1440 twentieths of a point
                right: 1440,
                bottom: 1440,
                left: 1440,
              },
            },
          },
          children: wordElements.length > 0 ? wordElements : [
            new Paragraph({
              children: [new TextRun({ text: '' })],
            }),
          ],
        },
      ],
    });

    return await Packer.toBlob(wordDoc);
  } catch (error) {
    console.error('Error converting HTML to Word:', error);
    throw new Error('Failed to convert HTML to Word document');
  }
}


