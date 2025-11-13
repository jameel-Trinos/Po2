import { NextRequest, NextResponse } from 'next/server';
import mammoth from 'mammoth';

// Force Node.js runtime for mammoth compatibility
export const runtime = 'nodejs';

// Mock compliance issues generator
function generateMockCompliance(text: string) {
  const suggestions = [];
  
  // FINRA compliance suggestions
  const finraPatterns = [
    {
      pattern: /\b(guaranteed|guarantee|guarantees)\s+(returns?|profits?|income|gains?)\b/gi,
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

  // Find matches in text
  allPatterns.forEach((pattern) => {
    const matches = text.matchAll(pattern.pattern);
    for (const match of matches) {
      if (match[0]) {
        // Get the suggested replacement text
        const suggestedText = pattern.getReplacement(match[0]);
        
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
  try {
    console.log('Starting document analysis...');
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      console.log('No file provided');
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    console.log('File received:', file.name, 'Size:', file.size, 'Type:', file.type);

    // Validate file type
    const fileName = file.name.toLowerCase();
    if (!fileName.endsWith('.docx')) {
      console.log('Invalid file type:', fileName);
      return NextResponse.json(
        { error: 'Only .docx files are supported' },
        { status: 400 }
      );
    }

    // Extract text from DOCX
    console.log('Converting file to array buffer...');
    const arrayBuffer = await file.arrayBuffer();
    console.log('Array buffer size:', arrayBuffer.byteLength);
    
    // Convert ArrayBuffer to Buffer for mammoth
    console.log('Converting to Buffer...');
    const buffer = Buffer.from(arrayBuffer);
    console.log('Buffer size:', buffer.length);
    
    console.log('Extracting raw text with mammoth...');
    const result = await mammoth.extractRawText({ buffer });
    const extractedText = result.value;
    console.log('Extracted text length:', extractedText.length);

    // Also convert to HTML for editor
    console.log('Converting to HTML with mammoth...');
    const htmlResult = await mammoth.convertToHtml({ buffer });
    const htmlContent = htmlResult.value;
    console.log('HTML content length:', htmlContent.length);

    // Generate mock compliance suggestions
    const suggestions = generateMockCompliance(extractedText);

    // Mock: Deduct balance for API usage (0.10 credits per analysis)
    const costPerAnalysis = 0.10;

    return NextResponse.json({
      success: true,
      documentId: Date.now().toString(), // Mock document ID
      htmlContent,
      extractedText,
      suggestions,
      cost: costPerAnalysis,
      message: `Analysis complete. Found ${suggestions.length} suggestions.`,
    });
  } catch (error) {
    console.error('Error analyzing document:', error);
    console.error('Error details:', {
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : 'No stack trace'
    });
    return NextResponse.json(
      { 
        error: 'Failed to analyze document',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}

