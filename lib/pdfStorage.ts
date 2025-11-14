/**
 * In-memory storage for PDF documents
 * Stores PDFs temporarily for conversion operations
 * 
 * Note: This is a simple in-memory solution. For production,
 * consider using Redis, S3, or a database.
 */

interface StoredPDF {
  buffer: Buffer;
  fileName: string;
  uploadedAt: Date;
}

// In-memory storage Map
const pdfStorage = new Map<string, StoredPDF>();

// Cleanup interval (remove PDFs older than 24 hours)
const CLEANUP_INTERVAL = 60 * 60 * 1000; // 1 hour (check every hour)
const MAX_AGE = 24 * 60 * 60 * 1000; // 24 hours (keep PDFs for 24 hours)

// Periodic cleanup
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = new Date();
    for (const [id, pdf] of pdfStorage.entries()) {
      const age = now.getTime() - pdf.uploadedAt.getTime();
      if (age > MAX_AGE) {
        console.log(`🗑️  Cleaning up old PDF: ${id} (${pdf.fileName})`);
        pdfStorage.delete(id);
      }
    }
  }, CLEANUP_INTERVAL);
}

/**
 * Store a PDF in memory
 */
export function storePDF(documentId: string, buffer: Buffer, fileName: string): void {
  console.log(`💾 Storing PDF: ${documentId} (${fileName}, ${buffer.length} bytes)`);
  pdfStorage.set(documentId, {
    buffer,
    fileName,
    uploadedAt: new Date(),
  });
}

/**
 * Retrieve a stored PDF
 */
export function getPDF(documentId: string): { buffer: Buffer; fileName: string } | null {
  const stored = pdfStorage.get(documentId);
  if (!stored) {
    console.log(`❌ PDF not found: ${documentId}`);
    return null;
  }
  console.log(`✅ Retrieved PDF: ${documentId} (${stored.fileName}, ${stored.buffer.length} bytes)`);
  return {
    buffer: stored.buffer,
    fileName: stored.fileName,
  };
}

/**
 * Delete a stored PDF
 */
export function deletePDF(documentId: string): boolean {
  const deleted = pdfStorage.delete(documentId);
  if (deleted) {
    console.log(`🗑️  Deleted PDF: ${documentId}`);
  }
  return deleted;
}

/**
 * Get storage statistics
 */
export function getStorageStats(): { count: number; totalSize: number } {
  let totalSize = 0;
  for (const pdf of pdfStorage.values()) {
    totalSize += pdf.buffer.length;
  }
  return {
    count: pdfStorage.size,
    totalSize,
  };
}

