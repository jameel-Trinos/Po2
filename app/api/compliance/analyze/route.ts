import { NextRequest, NextResponse } from 'next/server';
import mammoth from 'mammoth';
import PDFParser from 'pdf2json';
import { storePDF } from '@/lib/pdfStorage';

// Force Node.js runtime for mammoth compatibility
export const runtime = 'nodejs';

// Helper function to create properly formatted error responses
function createErrorResponse(error: string, details: string, status: number = 500) {
  const errorResponse = {
    error,
    details,
    timestamp: new Date().toISOString()
  };
  
  console.error('📤 Creating error response:', JSON.stringify(errorResponse, null, 2));
  
  return NextResponse.json(errorResponse, { 
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    }
  });
}

// Mock compliance issues generator
function generateMockCompliance(text: string) {
  const suggestions: Array<{
    category: string;
    severity: string;
    originalText: string;
    suggestedText: string;
    explanation: string;
    page: number;
  }> = [];
  
  // Clean up text: normalize whitespace and preserve original casing for display
  const normalizedText = text.replace(/\s+/g, ' ').trim();
  
  // FINRA compliance suggestions
  const finraPatterns = [
    {
      pattern: /\b(guaranteed?|guarantees?)\s+(returns?|profits?|income|gains?)\b/gi,
      category: 'FINRA',
      severity: 'critical',
      explanation: 'FINRA Rule 2210 prohibits guarantees of investment returns',
      getReplacement: (match: string) => match.replace(/guaranteed?|guarantees?/gi, 'potential')
    },
    {
      pattern: /\b(promise|promises|assure|assures)\s+(returns?|profits?|income|gains?)\b/gi,
      category: 'FINRA',
      severity: 'critical',
      explanation: 'FINRA Rule 2210 prohibits promises of specific investment returns',
      getReplacement: (match: string) => match.replace(/promise|promises|assure|assures/gi, 'target')
    },
    {
      pattern: /\bhigh returns?\b/gi,
      category: 'FINRA',
      severity: 'critical',
      explanation: 'Claims of "high returns" may violate FINRA communications standards',
      getReplacement: (match: string) => 'competitive returns'
    },
    {
      pattern: /\brisk[- ]free\b/gi,
      category: 'FINRA',
      severity: 'critical',
      explanation: 'No investment is truly risk-free. This violates FINRA Rule 2210',
      getReplacement: (match: string) => 'lower-risk'
    },
    {
      pattern: /\b(best|top|#1|number one)\s+(investment|fund|stock|opportunity)\b/gi,
      category: 'FINRA',
      severity: 'warning',
      explanation: 'Superlative claims require substantiation per FINRA Rule 2210',
      getReplacement: (match: string) => match.replace(/best|top|#1|number one/gi, 'leading')
    },
    {
      pattern: /\bno risk\b/gi,
      category: 'FINRA',
      severity: 'critical',
      explanation: 'All investments carry some level of risk per FINRA requirements',
      getReplacement: (match: string) => 'minimal risk'
    },
    {
      pattern: /\bsafe investment\b/gi,
      category: 'FINRA',
      severity: 'warning',
      explanation: 'The term "safe" may be misleading per FINRA standards',
      getReplacement: (match: string) => 'conservative investment'
    },
    {
      pattern: /\b(can'?t|cannot|won'?t)\s+(lose|fail)\b/gi,
      category: 'FINRA',
      severity: 'critical',
      explanation: 'Statements implying no possibility of loss violate FINRA Rule 2210',
      getReplacement: (match: string) => 'historically resilient'
    }
  ];

  // SEC compliance suggestions
  const secPatterns = [
    {
      pattern: /\binsider (information|knowledge|tip|trading)\b/gi,
      category: 'SEC',
      severity: 'critical',
      explanation: 'Reference to insider information may violate SEC Rule 10b-5',
      getReplacement: (match: string) => 'publicly available information'
    },
    {
      pattern: /\bconfidential (deal|agreement|information|data)\b/gi,
      category: 'SEC',
      severity: 'warning',
      explanation: 'Disclosure of confidential information may violate SEC regulations',
      getReplacement: (match: string) => match.replace(/confidential/gi, 'publicly disclosed')
    },
    {
      pattern: /\b(manipulation|manipulate|manipulating)\s+(price|market|stock)\b/gi,
      category: 'SEC',
      severity: 'critical',
      explanation: 'References to market manipulation should be avoided or clarified',
      getReplacement: (match: string) => 'market activity'
    },
    {
      pattern: /\bunregistered (security|securities|offering)\b/gi,
      category: 'SEC',
      severity: 'critical',
      explanation: 'Unregistered securities must comply with SEC regulations',
      getReplacement: (match: string) => 'private placement'
    }
  ];

  // Grammar suggestions
  const grammarPatterns = [
    {
      pattern: /\btheir\s+are\b/gi,
      category: 'Grammar',
      severity: 'info',
      explanation: 'Incorrect usage: "their" should be "there"',
      getReplacement: (match: string) => 'there are'
    },
    {
      pattern: /\btheir\s+(is|was|were)\b/gi,
      category: 'Grammar',
      severity: 'info',
      explanation: 'Incorrect usage: "their" should be "there"',
      getReplacement: (match: string) => match.replace(/their/gi, 'there')
    },
    {
      pattern: /\byour\s+welcome\b/gi,
      category: 'Grammar',
      severity: 'info',
      explanation: 'Incorrect usage: "your" should be "you\'re" (you are)',
      getReplacement: (match: string) => "you're welcome"
    },
    {
      pattern: /\bits\s+(a|the|an)\b/gi,
      category: 'Grammar',
      severity: 'info',
      explanation: 'Incorrect usage: "its" should be "it\'s" (it is)',
      getReplacement: (match: string) => match.replace(/its/gi, "it's")
    },
    {
      pattern: /\beffect\s+(change|growth|improvement)\b/gi,
      category: 'Grammar',
      severity: 'info',
      explanation: 'Should use "affect" (verb) not "effect" (noun) in this context',
      getReplacement: (match: string) => match.replace(/effect/gi, 'affect')
    },
    {
      pattern: /\balot\b/gi,
      category: 'Grammar',
      severity: 'info',
      explanation: 'Incorrect spelling: should be "a lot" (two words)',
      getReplacement: (match: string) => 'a lot'
    },
    {
      pattern: /\bcould\s+of\b/gi,
      category: 'Grammar',
      severity: 'info',
      explanation: 'Incorrect usage: should be "could have" or "could\'ve"',
      getReplacement: (match: string) => 'could have'
    },
    {
      pattern: /\bshould\s+of\b/gi,
      category: 'Grammar',
      severity: 'info',
      explanation: 'Incorrect usage: should be "should have" or "should\'ve"',
      getReplacement: (match: string) => 'should have'
    },
    {
      pattern: /\bwould\s+of\b/gi,
      category: 'Grammar',
      severity: 'info',
      explanation: 'Incorrect usage: should be "would have" or "would\'ve"',
      getReplacement: (match: string) => 'would have'
    }
  ];

  const allPatterns = [...finraPatterns, ...secPatterns, ...grammarPatterns];

  // Find matches in text - use both original and normalized text
  allPatterns.forEach((pattern) => {
    const matches = Array.from(text.matchAll(pattern.pattern));
    
    console.log(`  Pattern "${pattern.pattern}" found ${matches.length} matches`);
    
    for (const match of matches) {
      if (match[0]) {
        // Get the suggested replacement text
        const suggestedText = pattern.getReplacement(match[0]);
        
        // Get context around the match (50 chars before and after)
        const matchIndex = match.index || 0;
        const contextStart = Math.max(0, matchIndex - 50);
        const contextEnd = Math.min(text.length, matchIndex + match[0].length + 50);
        const context = text.substring(contextStart, contextEnd);
        
        console.log(`    Match: "${match[0]}" → "${suggestedText}"`);
        console.log(`    Context: ...${context}...`);
        
        suggestions.push({
          category: pattern.category,
          severity: pattern.severity,
          originalText: match[0],
          suggestedText: suggestedText,
          explanation: pattern.explanation,
          page: 1,
        });
      }
    }
  });

  return suggestions;
}

export async function POST(request: NextRequest) {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🚀 POST /api/compliance/analyze called');
  console.log('  Timestamp:', new Date().toISOString());
  console.log('  URL:', request.url);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  
  try {
    console.log('📋 Request details:');
    console.log('  Method:', request.method);
    console.log('  Content-Type:', request.headers.get('content-type'));
    
    // Wrap formData parsing in try-catch to handle parsing errors
    let formData;
    try {
      formData = await request.formData();
    } catch (parseError) {
      console.error('❌ Failed to parse form data:', parseError);
      return createErrorResponse(
        'Invalid request format',
        'Failed to parse form data. Please ensure you are sending a valid multipart/form-data request.',
        400
      );
    }
    console.log('✅ FormData parsed successfully');
    const file = formData.get('file') as File;

    if (!file) {
      console.error('❌ No file provided in form data');
      return createErrorResponse(
        'No file provided',
        'The file field is missing from the form data',
        400
      );
    }

    console.log('✅ File received:', {
      name: file.name,
      size: file.size,
      type: file.type
    });

    // Validate file type
    const fileName = file.name.toLowerCase();
    const isPdf = fileName.endsWith('.pdf') || file.type === 'application/pdf';
    const isDocx = fileName.endsWith('.docx') || file.type.includes('officedocument.wordprocessingml');
    const isPlainText = fileName.endsWith('.txt') || file.type === 'text/plain' || formData.get('isPlainText') === 'true';

    if (!isPdf && !isDocx && !isPlainText) {
      console.error('❌ Invalid file type:', fileName, 'Type:', file.type);
      return createErrorResponse(
        'Invalid file type',
        `Only .pdf, .docx, and .txt files are supported. Received: ${fileName} (${file.type})`,
        400
      );
    }

    // Extract text from file
    console.log('Converting file to array buffer...');
    let arrayBuffer;
    try {
      arrayBuffer = await file.arrayBuffer();
      console.log('Array buffer size:', arrayBuffer.byteLength);
    } catch (bufferError) {
      console.error('❌ Failed to read file:', bufferError);
      return createErrorResponse(
        'File read error',
        'Failed to read the uploaded file. The file may be corrupted or too large.',
        400
      );
    }
    
    let extractedText: string;
    let htmlContent: string;
    let fileType: 'pdf' | 'docx';
    let pdfUrl: string | undefined;
    
    // Generate document ID early (before processing) so we can use it for PDF storage
    const documentId = Date.now().toString();
    
    // Declare buffer at function scope to avoid duplicate declarations
    let buffer: Buffer;

    if (isPdf) {
      fileType = 'pdf';
      console.log('Processing PDF file...');
      
      try {
        // Convert ArrayBuffer to Buffer for pdf2json
        buffer = Buffer.from(arrayBuffer);
        
        // Extract text using pdf2json with page information
        const { text: extractedTextResult, pageTexts } = await new Promise<{ text: string; pageTexts: string[] }>((resolve, reject) => {
          // Create PDFParser without the problematic second parameter
          const pdfParser = new (PDFParser as any)();
          
          pdfParser.on('pdfParser_dataError', (errData: any) => {
            console.error('PDF parse error:', errData.parserError);
            reject(new Error(errData.parserError || 'Failed to parse PDF'));
          });
          
          pdfParser.on('pdfParser_dataReady', (pdfData: any) => {
            try {
              // Extract text from all pages
              const fullText = (pdfParser as any).getRawTextContent();
              
              // Try to extract per-page text if available
              const pageTexts: string[] = [];
              if (pdfData?.Pages && Array.isArray(pdfData.Pages)) {
                console.log(`📄 PDF has ${pdfData.Pages.length} pages`);
                pdfData.Pages.forEach((page: any, index: number) => {
                  let pageText = '';
                  if (page.Texts && Array.isArray(page.Texts)) {
                    pageText = page.Texts.map((text: any) => {
                      const encodedText = text.R?.[0]?.T || '';
                      try {
                        // Try to decode URI component, but fall back to raw text if it fails
                        return decodeURIComponent(encodedText);
                      } catch (decodeError) {
                        // If decoding fails (malformed URI), return the raw text
                        console.warn(`⚠️ Failed to decode text: "${encodedText}". Using raw text.`);
                        return encodedText;
                      }
                    }).join(' ');
                  }
                  pageTexts.push(pageText);
                  console.log(`  Page ${index + 1}: ${pageText.length} chars`);
                });
              }
              
              console.log('✅ PDF text extracted successfully');
              console.log('📄 First 200 chars:', fullText.substring(0, 200));
              resolve({ text: fullText, pageTexts });
            } catch (err) {
              console.error('Error extracting text:', err);
              reject(err);
            }
          });
          
          // Parse the buffer
          pdfParser.parseBuffer(buffer);
        });
        
        extractedText = extractedTextResult;
        
        console.log('Extracted text length:', extractedText.length);
        console.log('Extracted text preview:', extractedText.substring(0, 500));

        // Convert extracted text to basic HTML for editor
        htmlContent = extractedText
          .split('\n\n')
          .filter(p => p.trim())
          .map(p => `<p>${p.trim().replace(/\n/g, '<br>')}</p>`)
          .join('\n');
        
        // Store the PDF buffer in memory for later conversion
        // (buffer was already created at line 323)
        storePDF(documentId, buffer, file.name);
        
        // Create a blob URL for the PDF (base64 encoded) for viewing
        const base64 = buffer.toString('base64');
        pdfUrl = `data:application/pdf;base64,${base64}`;
      } catch (pdfError) {
        console.error('❌ PDF processing failed:', pdfError);
        return createErrorResponse(
          'PDF processing error',
          pdfError instanceof Error ? pdfError.message : 'Failed to process PDF file. The file may be corrupted or use an unsupported format.',
          400
        );
      }
      
    } else if (isPlainText) {
      fileType = 'docx'; // Treat plain text as editable content (same as DOCX)
      console.log('Processing plain text file...');
      
      try {
        // Read plain text directly
        const textDecoder = new TextDecoder('utf-8');
        extractedText = textDecoder.decode(arrayBuffer);
        console.log('Extracted text length:', extractedText.length);
        console.log('Extracted text preview:', extractedText.substring(0, 500));

        // Convert plain text to HTML for editor
        htmlContent = extractedText
          .split('\n')
          .filter(p => p.trim())
          .map(p => `<p>${p.trim()}</p>`)
          .join('\n');
        console.log('HTML content length:', htmlContent.length);
      } catch (textError) {
        console.error('❌ Text processing failed:', textError);
        return createErrorResponse(
          'Text processing error',
          textError instanceof Error ? textError.message : 'Failed to process text file.',
          400
        );
      }
      
    } else {
      fileType = 'docx';
      console.log('Processing DOCX file...');
      
      try {
        // Convert ArrayBuffer to Buffer for mammoth
        buffer = Buffer.from(arrayBuffer);
        console.log('Buffer size:', buffer.length);
        
        console.log('Extracting raw text with mammoth...');
        const result = await mammoth.extractRawText({ buffer });
        extractedText = result.value;
        console.log('Extracted text length:', extractedText.length);

        // Also convert to HTML for editor
        console.log('Converting to HTML with mammoth...');
        const htmlResult = await mammoth.convertToHtml({ buffer });
        htmlContent = htmlResult.value;
        console.log('HTML content length:', htmlContent.length);
      } catch (docxError) {
        console.error('❌ DOCX processing failed:', docxError);
        return createErrorResponse(
          'DOCX processing error',
          docxError instanceof Error ? docxError.message : 'Failed to process DOCX file. The file may be corrupted or use an unsupported format.',
          400
        );
      }
    }

    // Generate mock compliance suggestions
    console.log('🔍 Analyzing text for compliance issues...');
    const suggestions = generateMockCompliance(extractedText);
    console.log(`✅ Found ${suggestions.length} compliance suggestions`);
    
    if (suggestions.length > 0) {
      console.log('Sample suggestion:', suggestions[0]);
    } else {
      console.log('⚠️ No compliance issues detected. Sample text:', extractedText.substring(0, 200));
    }

    // Mock: Deduct balance for API usage (0.10 credits per analysis)
    const costPerAnalysis = 0.10;

    const successResponse = {
      success: true,
      documentId, // Document ID generated earlier
      fileName: file.name,
      fileType,
      htmlContent,
      extractedText,
      suggestions,
      pdfUrl, // Only present for PDF files (as data URL for viewing)
      cost: costPerAnalysis,
      message: `Analysis complete. Found ${suggestions.length} suggestions.`,
    };
    
    console.log('✅ Returning success response');
    console.log('  Document ID:', successResponse.documentId);
    console.log('  File type:', successResponse.fileType);
    console.log('  Suggestions count:', successResponse.suggestions.length);
    
    return NextResponse.json(successResponse);
  } catch (error) {
    console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.error('❌ ERROR in /api/compliance/analyze');
    console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.error('Error type:', error?.constructor?.name || typeof error);
    console.error('Error message:', error instanceof Error ? error.message : String(error));
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    console.error('Full error object:', JSON.stringify(error, Object.getOwnPropertyNames(error), 2));
    
    const errorMessage = error instanceof Error ? error.message : String(error);
    const errorResponse = createErrorResponse(
      'Failed to analyze document',
      errorMessage || 'An unexpected error occurred during document analysis',
      500
    );
    
    // Final safety check: ensure the response has a body
    console.log('📤 Returning error response with status:', errorResponse.status);
    
    return errorResponse;
  }
}

