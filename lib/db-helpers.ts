import { prisma } from "./db";
import type { Prisma } from "@prisma/client";

/**
 * Save an uploaded document to the database
 * @param userId - Clerk user ID (string)
 * @param originalName - Original filename
 * @param fileType - File type (e.g., "pdf", "docx")
 * @param storageUrl - URL or path where the file is stored
 * @returns The created document
 */
export async function saveUploadedDocument(
  userId: string,
  originalName: string,
  fileType: string,
  storageUrl: string
) {
  try {
    const document = await prisma.document.create({
      data: {
        userId,
        originalName,
        fileType,
        storageUrl,
      },
    });
    return document;
  } catch (error) {
    console.error("Error saving document:", error);
    throw new Error("Failed to save document to database");
  }
}

/**
 * Save AI-generated suggestions for a document
 * @param documentId - Document ID
 * @param suggestions - Array of suggestion objects
 * @returns Array of created suggestions
 */
export async function saveAISuggestions(
  documentId: string,
  suggestions: Array<{
    category: string;
    issue: string;
    severity: string;
    startIndex?: number | null;
    endIndex?: number | null;
    suggestedFix?: string | null;
  }>
) {
  try {
    // Delete existing suggestions for this document (optional - you might want to keep them)
    // await prisma.suggestion.deleteMany({ where: { documentId } });

    // Create new suggestions
    const createdSuggestions = await prisma.suggestion.createMany({
      data: suggestions.map((s) => ({
        documentId,
        category: s.category,
        issue: s.issue,
        severity: s.severity,
        startIndex: s.startIndex ?? null,
        endIndex: s.endIndex ?? null,
        suggestedFix: s.suggestedFix ?? null,
      })),
      skipDuplicates: true,
    });

    // Fetch and return the created suggestions
    const savedSuggestions = await prisma.suggestion.findMany({
      where: { documentId },
      orderBy: { id: "asc" },
    });

    return savedSuggestions;
  } catch (error) {
    console.error("Error saving suggestions:", error);
    throw new Error("Failed to save suggestions to database");
  }
}

/**
 * Get a document with all its suggestions
 * @param documentId - Document ID
 * @param userId - Optional user ID for security check
 * @returns Document with suggestions, or null if not found
 */
export async function getDocumentWithSuggestions(
  documentId: string,
  userId?: string
) {
  try {
    const where: Prisma.DocumentWhereInput = { id: documentId };
    if (userId) {
      where.userId = userId;
    }

    const document = await prisma.document.findFirst({
      where,
      include: {
        suggestions: {
          orderBy: [
            { severity: "asc" }, // Critical first
            { category: "asc" },
          ],
        },
      },
    });

    return document;
  } catch (error) {
    console.error("Error fetching document:", error);
    throw new Error("Failed to fetch document from database");
  }
}

/**
 * Get all documents for a user
 * @param userId - Clerk user ID
 * @returns Array of documents with suggestion counts
 */
export async function getUserDocuments(userId: string) {
  try {
    const documents = await prisma.document.findMany({
      where: { userId },
      include: {
        _count: {
          select: { suggestions: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return documents;
  } catch (error) {
    console.error("Error fetching user documents:", error);
    
    // Provide more specific error messages
    if (error instanceof Error) {
      // Check for common Prisma errors
      if (error.message.includes('P1001') || error.message.includes('Can\'t reach database server')) {
        throw new Error("Database connection failed. Please check your DATABASE_URL environment variable.");
      }
      if (error.message.includes('P2002')) {
        throw new Error("Database constraint violation");
      }
      if (error.message.includes('P2025')) {
        throw new Error("Record not found");
      }
      // Re-throw with original message for other errors
      throw new Error(`Failed to fetch user documents: ${error.message}`);
    }
    
    throw new Error("Failed to fetch user documents: Unknown error");
  }
}

/**
 * Update a document
 * @param documentId - Document ID
 * @param userId - User ID for security check
 * @param data - Partial document data to update
 * @returns Updated document
 */
export async function updateDocument(
  documentId: string,
  userId: string,
  data: Partial<{
    originalName: string;
    fileType: string;
    storageUrl: string;
  }>
) {
  try {
    const document = await prisma.document.updateMany({
      where: {
        id: documentId,
        userId, // Ensure user owns the document
      },
      data,
    });

    if (document.count === 0) {
      throw new Error("Document not found or access denied");
    }

    return await prisma.document.findUnique({
      where: { id: documentId },
    });
  } catch (error) {
    console.error("Error updating document:", error);
    throw new Error("Failed to update document");
  }
}

/**
 * Delete a document and its suggestions (cascade)
 * @param documentId - Document ID
 * @param userId - User ID for security check
 */
export async function deleteDocument(documentId: string, userId: string) {
  try {
    const result = await prisma.document.deleteMany({
      where: {
        id: documentId,
        userId, // Ensure user owns the document
      },
    });

    if (result.count === 0) {
      throw new Error("Document not found or access denied");
    }

    return { success: true };
  } catch (error) {
    console.error("Error deleting document:", error);
    throw new Error("Failed to delete document");
  }
}

/**
 * Update a suggestion
 * @param suggestionId - Suggestion ID
 * @param data - Partial suggestion data to update
 * @param documentId - Optional document ID to verify the suggestion belongs to the document
 * @returns Updated suggestion
 */
export async function updateSuggestion(
  suggestionId: string,
  data: Partial<{
    category: string;
    issue: string;
    severity: string;
    startIndex: number | null;
    endIndex: number | null;
    suggestedFix: string | null;
  }>,
  documentId?: string
) {
  try {
    // First, check if the suggestion exists
    const existingSuggestion = await prisma.suggestion.findUnique({
      where: { id: suggestionId },
    });

    if (!existingSuggestion) {
      throw new Error(`Suggestion with ID ${suggestionId} not found`);
    }

    // If documentId is provided, verify the suggestion belongs to that document
    if (documentId && existingSuggestion.documentId !== documentId) {
      throw new Error("Suggestion does not belong to the specified document");
    }

    // Update the suggestion
    const suggestion = await prisma.suggestion.update({
      where: { id: suggestionId },
      data,
    });

    return suggestion;
  } catch (error) {
    console.error("Error updating suggestion:", error);
    
    // Handle Prisma P2025 error (record not found)
    if (error && typeof error === 'object' && 'code' in error && error.code === 'P2025') {
      throw new Error(`Suggestion with ID ${suggestionId} not found`);
    }
    
    // Re-throw if it's already our custom error
    if (error instanceof Error) {
      throw error;
    }
    
    throw new Error("Failed to update suggestion");
  }
}

