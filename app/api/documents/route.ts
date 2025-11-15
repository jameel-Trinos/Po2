import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { getUserDocuments } from '@/lib/db-helpers';

export async function GET(request: NextRequest) {
  try {
    // Get authenticated user
    const { userId } = await auth();
    
    if (!userId) {
      console.error('[GET /api/documents] Unauthorized: No userId');
      return NextResponse.json(
        { error: 'Unauthorized', details: 'User not authenticated' },
        { status: 401 }
      );
    }

    console.log('[GET /api/documents] Fetching documents for user:', userId);

    // Fetch user's documents from database
    const documents = await getUserDocuments(userId);

    console.log('[GET /api/documents] Successfully fetched', documents.length, 'documents');

    return NextResponse.json({
      success: true,
      documents: documents.map(doc => ({
        id: doc.id,
        originalName: doc.originalName,
        fileType: doc.fileType,
        createdAt: doc.createdAt.toISOString(),
        updatedAt: doc.updatedAt.toISOString(),
        suggestionCount: doc._count?.suggestions || 0,
      })),
    });
  } catch (error) {
    console.error('[GET /api/documents] Error fetching documents:', error);
    
    // More detailed error logging
    if (error instanceof Error) {
      console.error('[GET /api/documents] Error name:', error.name);
      console.error('[GET /api/documents] Error message:', error.message);
      console.error('[GET /api/documents] Error stack:', error.stack);
    }

    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to fetch documents',
        details: error instanceof Error ? error.message : String(error),
        type: error instanceof Error ? error.name : 'UnknownError'
      },
      { status: 500 }
    );
  }
}

