/**
 * Download PDF from various sources (base64, blob URL, or regular URL)
 */
export function downloadPdf(
  pdfUrl: string,
  filename: string = 'document.pdf'
): void {
  try {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error downloading PDF:', error);
    throw new Error('Failed to download PDF');
  }
}

/**
 * Download PDF from Blob
 */
export function downloadPdfFromBlob(
  blob: Blob,
  filename: string = 'document.pdf'
): void {
  try {
    const url = URL.createObjectURL(blob);
    downloadPdf(url, filename);
    // Clean up the object URL after a delay
    setTimeout(() => URL.revokeObjectURL(url), 100);
  } catch (error) {
    console.error('Error downloading PDF from blob:', error);
    throw new Error('Failed to download PDF from blob');
  }
}

/**
 * Download PDF from ArrayBuffer
 */
export function downloadPdfFromArrayBuffer(
  buffer: ArrayBuffer,
  filename: string = 'document.pdf'
): void {
  try {
    const blob = new Blob([buffer], { type: 'application/pdf' });
    downloadPdfFromBlob(blob, filename);
  } catch (error) {
    console.error('Error downloading PDF from ArrayBuffer:', error);
    throw new Error('Failed to download PDF from ArrayBuffer');
  }
}

/**
 * Generate a safe filename from a project name
 */
export function generatePdfFilename(
  projectName: string,
  suffix: string = 'modified'
): string {
  // Remove invalid filename characters
  const safeName = projectName
    .replace(/[<>:"/\\|?*]/g, '_')
    .replace(/\s+/g, '_')
    .trim();
  
  return `${safeName || 'document'}_${suffix}.pdf`;
}


