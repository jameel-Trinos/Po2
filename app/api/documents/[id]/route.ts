import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { getDocumentWithSuggestions, updateDocument } from '@/lib/db-helpers';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> | { id: string } }
) {
  try {
    // Get authenticated user
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Handle params - in Next.js 15+ params is a Promise
    const resolvedParams = params instanceof Promise ? await params : params;
    const documentId = resolvedParams.id;

    if (!documentId) {
      return NextResponse.json(
        { error: 'Document ID is required' },
        { status: 400 }
      );
    }

    // Fetch document with suggestions from database
    const document = await getDocumentWithSuggestions(documentId, userId);

    if (!document) {
      return NextResponse.json(
        { error: 'Document not found or access denied' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      document: {
        id: document.id,
        originalName: document.originalName,
        fileType: document.fileType,
        storageUrl: document.storageUrl,
        createdAt: document.createdAt,
        updatedAt: document.updatedAt,
        suggestions: document.suggestions.map(s => ({
          id: s.id,
          category: s.category,
          issue: s.issue,
          severity: s.severity,
          startIndex: s.startIndex,
          endIndex: s.endIndex,
          suggestedFix: s.suggestedFix,
        })),
      },
    });
  } catch (error) {
    console.error('Error fetching document:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch document',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> | { id: string } }
) {
  try {
    // Get authenticated user
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Handle params - in Next.js 15+ params is a Promise
    const resolvedParams = params instanceof Promise ? await params : params;
    const documentId = resolvedParams.id;

    if (!documentId) {
      return NextResponse.json(
        { error: 'Document ID is required' },
        { status: 400 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { originalName, fileType, storageUrl } = body;

    // Update document in database
    const updatedDocument = await updateDocument(
      documentId,
      userId,
      {
        ...(originalName && { originalName }),
        ...(fileType && { fileType }),
        ...(storageUrl && { storageUrl }),
      }
    );

    if (!updatedDocument) {
      return NextResponse.json(
        { error: 'Document not found or access denied' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      document: {
        id: updatedDocument.id,
        originalName: updatedDocument.originalName,
        fileType: updatedDocument.fileType,
        storageUrl: updatedDocument.storageUrl,
        createdAt: updatedDocument.createdAt.toISOString(),
        updatedAt: updatedDocument.updatedAt.toISOString(),
      },
    });
  } catch (error) {
    console.error('Error updating document:', error);
    return NextResponse.json(
      { 
        error: 'Failed to update document',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}

