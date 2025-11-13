import { NextRequest, NextResponse } from 'next/server';
import { htmlToWordBlob } from '@/lib/services/pdfWordConverter';

export async function POST(req: NextRequest) {
  try {
    const { html } = await req.json();
    if (!html) {
      return NextResponse.json({ error: 'html is required' }, { status: 400 });
    }
    const blob = await htmlToWordBlob(html);
    const arrayBuffer = await blob.arrayBuffer();
    return new NextResponse(Buffer.from(arrayBuffer), {
      status: 200,
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'Content-Disposition': 'attachment; filename="document.docx"',
      },
    });
  } catch (err) {
    console.error('Export DOCX error', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}


