import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, unlink } from 'fs/promises';
import { getPDF } from '@/lib/pdfStorage';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export const runtime = 'nodejs';

/**
 * Convert PDF to DOCX using LibreOffice
 * Accepts either a file upload or a document ID to fetch from storage
 */
export async function POST(request: NextRequest) {
  try {
    // Validate request
    const contentType = request.headers.get('content-type');
    console.log('📥 Incoming request content-type:', contentType);
    
    let file: File | null = null;
    let fileName = 'document.pdf';
    
    // Check if it's JSON (document ID-based) or multipart (file upload)
    if (contentType?.includes('application/json')) {
      console.log('📋 Parsing JSON body...');
      const body = await request.json();
      const documentId = body.documentId as string | undefined;
      
      if (documentId) {
        console.log('📥 Processing PDF from storage (documentId:', documentId, ')...');
        
        // Retrieve PDF from storage
        const storedPdf = getPDF(documentId);
        if (!storedPdf) {
          return NextResponse.json(
            { 
              error: 'PDF not found',
              message: `No PDF found for document ID: ${documentId}. The PDF may have expired or been deleted.`,
              details: 'PDFs are stored temporarily (24 hours). Please re-upload the document.'
            },
            { status: 404 }
          );
        }
        
        // Convert buffer to File
        fileName = storedPdf.fileName;
        file = new File([new Uint8Array(storedPdf.buffer)], fileName, { type: 'application/pdf' });
        console.log('✅ Retrieved PDF from storage:', fileName, '(', storedPdf.buffer.length, 'bytes)');
      } else {
        return NextResponse.json(
          { 
            error: 'No PDF source provided',
            message: 'Please provide a documentId in the request body'
          },
          { status: 400 }
        );
      }
    } else if (contentType?.includes('multipart/form-data')) {
      console.log('📋 Parsing form data (file upload)...');
      const formData = await request.formData();
      file = formData.get('file') as File;

      // Log all form data entries for debugging
      console.log('📋 Form data entries:');
      for (const [key, value] of formData.entries()) {
        if (value instanceof File) {
          console.log(`  - ${key}: File(name="${value.name}", type="${value.type}", size=${value.size})`);
        } else {
          console.log(`  - ${key}:`, value);
        }
      }
    } else {
      console.warn('⚠️ Unexpected content type:', contentType);
      return NextResponse.json(
        { 
          error: 'Invalid content type',
          message: 'Request must be either application/json (with documentId) or multipart/form-data (with file)'
        },
        { status: 400 }
      );
    }

    if (!file) {
      console.error('❌ No file provided');
      return NextResponse.json(
        { 
          error: 'No file provided',
          message: 'Please ensure a file is included in the request or a valid documentId is provided'
        },
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    console.log('✅ Processing file:', {
      name: file.name,
      type: file.type,
      size: file.size
    });

    // Check if it's a PDF
    const hasValidExtension = file.name.toLowerCase().endsWith('.pdf');
    const hasValidMimeType = file.type === 'application/pdf';
    
    console.log('🔍 File validation:');
    console.log('  - Has .pdf extension:', hasValidExtension);
    console.log('  - Has PDF MIME type:', hasValidMimeType);
    console.log('  - File type:', file.type || '(empty)');
    
    if (!hasValidExtension && !hasValidMimeType) {
      console.error('❌ Invalid file type:', file.type, 'for file:', file.name);
      return NextResponse.json(
        { 
          error: 'File must be a PDF',
          message: `Received file type: ${file.type || 'unknown'}`,
          details: `File name: ${file.name}. Expected .pdf extension and/or application/pdf MIME type.`
        },
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    // Check file size (optional validation)
    if (file.size === 0) {
      console.error('❌ Empty file provided');
      return NextResponse.json(
        { 
          error: 'Empty file provided',
          message: 'The PDF file appears to be empty (0 bytes)',
          details: `File name: ${file.name}, Size: ${file.size} bytes`
        },
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }
    
    console.log('✅ File validation passed');

    // Read PDF file as buffer
    console.log('📄 Reading PDF file...');
    let pdfBuffer: Buffer;
    try {
      const arrayBuffer = await file.arrayBuffer();
      pdfBuffer = Buffer.from(arrayBuffer);
      console.log('✅ PDF file read, size:', pdfBuffer.length, 'bytes');
    } catch (readError) {
      console.error('❌ Failed to read PDF file:', readError);
      const readErrorMessage = readError instanceof Error ? readError.message : 'Unknown error';
      return NextResponse.json(
        {
          error: 'Failed to read PDF file',
          message: readErrorMessage,
          details: 'The PDF file could not be read from the request.'
        },
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    // Convert PDF to DOCX using LibreOffice command line
    console.log('🔄 Converting PDF to DOCX using LibreOffice...');
    let docxBuffer: Buffer;
    const tempDir = '/tmp';
    const timestamp = Date.now();
    const tempPdfPath = path.join(tempDir, `temp-${timestamp}.pdf`);
    const tempDocxPath = path.join(tempDir, `temp-${timestamp}.docx`);
    
    try {
      // Write PDF to temp file
      await writeFile(tempPdfPath, pdfBuffer);
      console.log('📝 Wrote temp PDF file:', tempPdfPath);
      
      // Use LibreOffice directly with writer_pdf_import filter
      // This is the only reliable way to convert PDF to DOCX with LibreOffice
      const sofficeCommand = `/usr/local/bin/soffice --headless --infilter="writer_pdf_import" --convert-to docx "${tempPdfPath}" --outdir "${tempDir}"`;
      console.log('🔧 Running command:', sofficeCommand);
      
      const { stdout, stderr } = await execAsync(sofficeCommand);
      console.log('📤 LibreOffice output:', stdout);
      if (stderr) {
        console.warn('⚠️ LibreOffice stderr:', stderr);
      }
      
      // Read the converted DOCX file
      docxBuffer = await readFile(tempDocxPath);
      console.log('✅ Conversion successful, DOCX size:', docxBuffer.length, 'bytes');
      
      if (!docxBuffer || docxBuffer.length === 0) {
        throw new Error('Conversion produced an empty file');
      }
      
      // Clean up temp files
      try {
        await unlink(tempPdfPath);
        await unlink(tempDocxPath);
        console.log('🧹 Cleaned up temp files');
      } catch (cleanupError) {
        console.warn('⚠️ Failed to clean up temp files:', cleanupError);
      }
    } catch (conversionError) {
      console.error('❌ LibreOffice conversion failed:', conversionError);
      const conversionErrorMessage = conversionError instanceof Error ? conversionError.message : 'Unknown error';
      const conversionErrorStack = conversionError instanceof Error ? conversionError.stack : undefined;
      
      // Clean up temp files on error
      try {
        await unlink(tempPdfPath).catch(() => {});
        await unlink(tempDocxPath).catch(() => {});
      } catch {}
      
      console.error('Conversion error details:', {
        message: conversionErrorMessage,
        stack: conversionErrorStack,
        errorType: conversionError instanceof Error ? conversionError.constructor.name : typeof conversionError
      });
      
      // Provide helpful error message
      let detailedMessage = 'LibreOffice conversion failed. ';
      if (conversionErrorMessage.includes('no export filter')) {
        detailedMessage += 'LibreOffice could not determine the file format. Make sure the file is a valid PDF.';
      } else if (conversionErrorMessage.includes('soffice')) {
        detailedMessage += 'Ensure LibreOffice is properly installed on the server.';
      } else if (conversionErrorMessage.includes('ENOENT')) {
        detailedMessage += 'LibreOffice (soffice) not found. Please install LibreOffice on the server.';
      } else {
        detailedMessage += 'The file may be corrupted or in an unsupported format.';
      }
      
      return NextResponse.json(
        {
          error: 'Failed to convert PDF to DOCX',
          message: conversionErrorMessage,
          details: detailedMessage,
          ...(process.env.NODE_ENV === 'development' && conversionErrorStack ? { stack: conversionErrorStack } : {})
        },
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    // Return DOCX file
    const outputFileName = file.name.replace(/\.pdf$/i, '.docx');
    console.log('📤 Sending DOCX file:', outputFileName);
    
    return new NextResponse(new Uint8Array(docxBuffer), {
      status: 200,
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'Content-Disposition': `attachment; filename="${outputFileName}"`,
      },
    });
  } catch (error) {
    console.error('❌ PDF to DOCX conversion error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : undefined;
    const errorName = error instanceof Error ? error.name : 'Error';
    
    // Log full error details for debugging
    console.error('Error name:', errorName);
    console.error('Error message:', errorMessage);
    if (errorStack) {
      console.error('Error stack:', errorStack);
    }
    
    // Ensure we always return a valid JSON error response
    const errorResponse = {
      error: 'Failed to convert PDF to DOCX',
      message: errorMessage,
      ...(process.env.NODE_ENV === 'development' && {
        details: errorMessage,
        name: errorName,
        ...(errorStack ? { stack: errorStack } : {})
      })
    };
    
    console.error('Returning error response:', JSON.stringify(errorResponse, null, 2));
    
    return NextResponse.json(
      errorResponse,
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  }
}

