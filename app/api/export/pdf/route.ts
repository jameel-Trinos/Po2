import { NextRequest, NextResponse } from 'next/server';
import { convertWordToPdf, htmlToWordBlob } from '@/lib/services/pdfWordConverter';

export async function POST(req: NextRequest) {
  try {
    const { html } = await req.json();
    if (!html) {
      return NextResponse.json({ error: 'html is required' }, { status: 400 });
    }
    const blob = await htmlToWordBlob(html);
    const dataUrl = await convertWordToPdf(blob);
    return NextResponse.json({ pdfDataUrl: dataUrl });
  } catch (err) {
    console.error('Export PDF error', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}


