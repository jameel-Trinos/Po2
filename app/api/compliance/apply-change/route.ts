import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { documentId, originalText, suggestedText, suggestionId } = body;

    // Validate input
    if (!documentId || !originalText || !suggestedText) {
      return NextResponse.json(
        { error: 'Missing required fields: documentId, originalText, suggestedText' },
        { status: 400 }
      );
    }

    // Mock: In a real implementation, this would:
    // 1. Update the document content in the database
    // 2. Mark the suggestion as applied
    // 3. Deduct credits from user balance

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 100));

    // Mock: Deduct balance for applying change (0.01 credits per change)
    const costPerChange = 0.01;

    return NextResponse.json({
      success: true,
      documentId,
      appliedChange: {
        from: originalText,
        to: suggestedText,
        suggestionId,
      },
      cost: costPerChange,
      message: 'Change applied successfully',
    });
  } catch (error) {
    console.error('Error applying change:', error);
    return NextResponse.json(
      { error: 'Failed to apply change' },
      { status: 500 }
    );
  }
}

