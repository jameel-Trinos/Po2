module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[project]/lib/pdfStorage.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * In-memory storage for PDF documents
 * Stores PDFs temporarily for conversion operations
 * 
 * Note: This is a simple in-memory solution. For production,
 * consider using Redis, S3, or a database.
 */ __turbopack_context__.s([
    "deletePDF",
    ()=>deletePDF,
    "getPDF",
    ()=>getPDF,
    "getStorageStats",
    ()=>getStorageStats,
    "storePDF",
    ()=>storePDF
]);
// In-memory storage Map
const pdfStorage = new Map();
// Cleanup interval (remove PDFs older than 24 hours)
const CLEANUP_INTERVAL = 60 * 60 * 1000; // 1 hour (check every hour)
const MAX_AGE = 24 * 60 * 60 * 1000; // 24 hours (keep PDFs for 24 hours)
// Periodic cleanup
if (typeof setInterval !== 'undefined') {
    setInterval(()=>{
        const now = new Date();
        for (const [id, pdf] of pdfStorage.entries()){
            const age = now.getTime() - pdf.uploadedAt.getTime();
            if (age > MAX_AGE) {
                console.log(`🗑️  Cleaning up old PDF: ${id} (${pdf.fileName})`);
                pdfStorage.delete(id);
            }
        }
    }, CLEANUP_INTERVAL);
}
function storePDF(documentId, buffer, fileName) {
    console.log(`💾 Storing PDF: ${documentId} (${fileName}, ${buffer.length} bytes)`);
    pdfStorage.set(documentId, {
        buffer,
        fileName,
        uploadedAt: new Date()
    });
}
function getPDF(documentId) {
    const stored = pdfStorage.get(documentId);
    if (!stored) {
        console.log(`❌ PDF not found: ${documentId}`);
        return null;
    }
    console.log(`✅ Retrieved PDF: ${documentId} (${stored.fileName}, ${stored.buffer.length} bytes)`);
    return {
        buffer: stored.buffer,
        fileName: stored.fileName
    };
}
function deletePDF(documentId) {
    const deleted = pdfStorage.delete(documentId);
    if (deleted) {
        console.log(`🗑️  Deleted PDF: ${documentId}`);
    }
    return deleted;
}
function getStorageStats() {
    let totalSize = 0;
    for (const pdf of pdfStorage.values()){
        totalSize += pdf.buffer.length;
    }
    return {
        count: pdfStorage.size,
        totalSize
    };
}
}),
"[project]/app/api/convert/pdf-to-docx/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "maxDuration",
    ()=>maxDuration,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/stream [external] (stream, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdfStorage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pdfStorage.ts [app-route] (ecmascript)");
;
;
;
const runtime = 'nodejs';
const maxDuration = 60; // 60 seconds max for conversion
/**
 * Fallback conversion using open-source libraries
 * This is used if Adobe PDF Services fails
 */ async function fallbackPdfToDocx(pdfBuffer) {
    console.log('🔄 Using fallback conversion method (pdf-lib + docx)...');
    try {
        // Import required libraries dynamically
        const pdfjsLib = await __turbopack_context__.A("[project]/node_modules/pdfjs-dist/legacy/build/pdf.mjs [app-route] (ecmascript, async loader)");
        const { Document, Paragraph, TextRun, HeadingLevel } = await __turbopack_context__.A("[project]/node_modules/docx/dist/index.mjs [app-route] (ecmascript, async loader)");
        const { Packer } = await __turbopack_context__.A("[project]/node_modules/docx/dist/index.mjs [app-route] (ecmascript, async loader)");
        console.log('✅ Fallback libraries loaded');
        // Parse PDF (worker is not needed in Node.js environment)
        // In Node.js, pdfjs-dist works synchronously without a worker
        const loadingTask = pdfjsLib.getDocument({
            data: pdfBuffer,
            // Disable worker for Node.js environment
            useWorkerFetch: false,
            isEvalSupported: false,
            useSystemFonts: true
        });
        const pdfDoc = await loadingTask.promise;
        const numPages = pdfDoc.numPages;
        console.log(`📄 PDF has ${numPages} pages, extracting text...`);
        // Extract text from all pages
        const paragraphs = [];
        for(let pageNum = 1; pageNum <= numPages; pageNum++){
            const page = await pdfDoc.getPage(pageNum);
            const textContent = await page.getTextContent();
            // Group text items by their Y position (lines)
            const lines = new Map();
            for (const item of textContent.items){
                if ('str' in item && item.str.trim()) {
                    const y = Math.round(item.transform[5]); // Y position
                    if (!lines.has(y)) {
                        lines.set(y, []);
                    }
                    lines.get(y).push(item.str);
                }
            }
            // Convert lines to paragraphs, sorted by Y position (top to bottom)
            const sortedLines = Array.from(lines.entries()).sort((a, b)=>b[0] - a[0]);
            for (const [_, textParts] of sortedLines){
                const lineText = textParts.join(' ').trim();
                if (lineText) {
                    // Simple heuristic to detect headings (short lines with capital letters)
                    const isHeading = lineText.length < 50 && lineText === lineText.toUpperCase() && !lineText.match(/^\d+/);
                    paragraphs.push(new Paragraph({
                        children: [
                            new TextRun(lineText)
                        ],
                        ...isHeading ? {
                            heading: HeadingLevel.HEADING_2
                        } : {},
                        spacing: {
                            after: 200
                        }
                    }));
                }
            }
            // Add page break (except for last page)
            if (pageNum < numPages) {
                paragraphs.push(new Paragraph({
                    children: [
                        new TextRun('')
                    ],
                    pageBreakBefore: true
                }));
            }
        }
        console.log(`✅ Extracted ${paragraphs.length} paragraphs`);
        // Create DOCX document
        const doc = new Document({
            sections: [
                {
                    properties: {},
                    children: paragraphs
                }
            ]
        });
        // Generate buffer
        const docxBuffer = await Packer.toBuffer(doc);
        console.log(`✅ Fallback conversion successful, DOCX size: ${docxBuffer.length} bytes`);
        return Buffer.from(docxBuffer);
    } catch (fallbackError) {
        console.error('❌ Fallback conversion also failed:', fallbackError);
        throw new Error(`Fallback conversion failed: ${fallbackError instanceof Error ? fallbackError.message : 'Unknown error'}`);
    }
}
async function POST(request) {
    try {
        // Validate Adobe credentials
        const clientId = process.env.ADOBE_PDFSERVICES_CLIENT_ID;
        const clientSecret = process.env.ADOBE_PDFSERVICES_CLIENT_SECRET;
        if (!clientId || !clientSecret) {
            console.error('❌ Adobe PDF Services credentials not configured');
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Configuration Error',
                message: 'Adobe PDF Services credentials are not configured',
                details: 'Please ensure ADOBE_PDFSERVICES_CLIENT_ID and ADOBE_PDFSERVICES_CLIENT_SECRET are set in your environment variables'
            }, {
                status: 500
            });
        }
        console.log('✅ Adobe credentials found');
        // Validate request
        const contentType = request.headers.get('content-type');
        console.log('📥 Incoming request content-type:', contentType);
        let file = null;
        let fileName = 'document.pdf';
        // Check if it's JSON (document ID-based) or multipart (file upload)
        if (contentType?.includes('application/json')) {
            console.log('📋 Parsing JSON body...');
            const body = await request.json();
            const documentId = body.documentId;
            if (documentId) {
                console.log('📥 Processing PDF from storage (documentId:', documentId, ')...');
                // Retrieve PDF from storage
                const storedPdf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdfStorage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPDF"])(documentId);
                if (!storedPdf) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        error: 'PDF not found',
                        message: `No PDF found for document ID: ${documentId}. The PDF may have expired or been deleted.`,
                        details: 'PDFs are stored temporarily (24 hours). Please re-upload the document.'
                    }, {
                        status: 404
                    });
                }
                // Convert buffer to File
                fileName = storedPdf.fileName;
                file = new File([
                    new Uint8Array(storedPdf.buffer)
                ], fileName, {
                    type: 'application/pdf'
                });
                console.log('✅ Retrieved PDF from storage:', fileName, '(', storedPdf.buffer.length, 'bytes)');
            } else {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'No PDF source provided',
                    message: 'Please provide a documentId in the request body'
                }, {
                    status: 400
                });
            }
        } else if (contentType?.includes('multipart/form-data')) {
            console.log('📋 Parsing form data (file upload)...');
            const formData = await request.formData();
            file = formData.get('file');
            // Log all form data entries for debugging
            console.log('📋 Form data entries:');
            for (const [key, value] of formData.entries()){
                if (value instanceof File) {
                    console.log(`  - ${key}: File(name="${value.name}", type="${value.type}", size=${value.size})`);
                } else {
                    console.log(`  - ${key}:`, value);
                }
            }
        } else {
            console.warn('⚠️ Unexpected content type:', contentType);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Invalid content type',
                message: 'Request must be either application/json (with documentId) or multipart/form-data (with file)'
            }, {
                status: 400
            });
        }
        if (!file) {
            console.error('❌ No file provided');
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'No file provided',
                message: 'Please ensure a file is included in the request or a valid documentId is provided'
            }, {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'File must be a PDF',
                message: `Received file type: ${file.type || 'unknown'}`,
                details: `File name: ${file.name}. Expected .pdf extension and/or application/pdf MIME type.`
            }, {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        // Check file size (optional validation)
        if (file.size === 0) {
            console.error('❌ Empty file provided');
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Empty file provided',
                message: 'The PDF file appears to be empty (0 bytes)',
                details: `File name: ${file.name}, Size: ${file.size} bytes`
            }, {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        console.log('✅ File validation passed');
        // Read PDF file as buffer
        console.log('📄 Reading PDF file...');
        let pdfBuffer;
        try {
            const arrayBuffer = await file.arrayBuffer();
            pdfBuffer = Buffer.from(arrayBuffer);
            console.log('✅ PDF file read, size:', pdfBuffer.length, 'bytes');
        } catch (readError) {
            console.error('❌ Failed to read PDF file:', readError);
            const readErrorMessage = readError instanceof Error ? readError.message : 'Unknown error';
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Failed to read PDF file',
                message: readErrorMessage,
                details: 'The PDF file could not be read from the request.'
            }, {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        // Convert PDF to DOCX using Adobe PDF Services
        console.log('🔄 Converting PDF to DOCX using Adobe PDF Services...');
        let docxBuffer;
        try {
            // Dynamically import Adobe SDK (ensures it's only loaded on server)
            const { ServicePrincipalCredentials, PDFServices, MimeType, ExportPDFJob, ExportPDFResult, ExportPDFParams, ExportPDFTargetFormat, ClientConfig } = await __turbopack_context__.A("[project]/node_modules/@adobe/pdfservices-node-sdk/lib/index.js [app-route] (ecmascript, async loader)");
            console.log('✅ Adobe SDK loaded');
            // Create credentials from environment variables (SDK v4.x)
            const credentials = new ServicePrincipalCredentials({
                clientId: clientId,
                clientSecret: clientSecret
            });
            console.log('✅ Credentials created');
            // Configure client with increased timeout (60 seconds = 60000ms)
            // ClientConfig directly accepts timeout in constructor
            const clientConfig = new ClientConfig({
                timeout: 60000 // 60 seconds timeout for all operations
            });
            console.log('✅ Client config created with 60s timeout');
            // Initialize PDF Services with custom timeout configuration
            const pdfServices = new PDFServices({
                credentials,
                clientConfig
            });
            console.log('✅ PDF Services initialized with extended timeout');
            // Retry logic with exponential backoff
            const maxRetries = 3;
            let lastError = null;
            for(let attempt = 1; attempt <= maxRetries; attempt++){
                try {
                    console.log(`🔄 Conversion attempt ${attempt}/${maxRetries}...`);
                    // Create a read stream from the buffer
                    const readStream = __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["Readable"].from(pdfBuffer);
                    // Upload PDF as asset
                    console.log('📤 Uploading PDF to Adobe...');
                    const inputAsset = await pdfServices.upload({
                        readStream,
                        mimeType: MimeType.PDF
                    });
                    console.log('✅ PDF uploaded as asset');
                    // Create export parameters for DOCX format
                    const params = new ExportPDFParams({
                        targetFormat: ExportPDFTargetFormat.DOCX
                    });
                    // Create export job to convert PDF to DOCX
                    const job = new ExportPDFJob({
                        inputAsset,
                        params
                    });
                    console.log('✅ Export job created for DOCX conversion');
                    // Submit job and poll until complete
                    console.log('⏳ Submitting conversion job...');
                    const pollingURL = await pdfServices.submit({
                        job
                    });
                    console.log('✅ Job submitted, polling for result...');
                    const pdfServicesResponse = await pdfServices.getJobResult({
                        pollingURL,
                        resultType: ExportPDFResult
                    });
                    console.log('✅ Job completed');
                    // Get result asset
                    const resultAsset = pdfServicesResponse.result.asset;
                    const streamAsset = await pdfServices.getContent({
                        asset: resultAsset
                    });
                    // Read the stream into a buffer
                    console.log('📥 Downloading DOCX result...');
                    const chunks = [];
                    for await (const chunk of streamAsset.readStream){
                        chunks.push(Buffer.from(chunk));
                    }
                    docxBuffer = Buffer.concat(chunks);
                    console.log('✅ Conversion successful, DOCX size:', docxBuffer.length, 'bytes');
                    if (!docxBuffer || docxBuffer.length === 0) {
                        throw new Error('Conversion produced an empty file');
                    }
                    break;
                } catch (retryError) {
                    lastError = retryError instanceof Error ? retryError : new Error(String(retryError));
                    const isNetworkError = lastError.message.includes('timeout') || lastError.message.includes('network') || lastError.message.includes('ECONNRESET') || lastError.message.includes('ETIMEDOUT');
                    if (attempt < maxRetries && isNetworkError) {
                        const waitTime = Math.pow(2, attempt) * 1000; // Exponential backoff: 2s, 4s, 8s
                        console.warn(`⚠️ Attempt ${attempt} failed (${lastError.message}), retrying in ${waitTime}ms...`);
                        await new Promise((resolve)=>setTimeout(resolve, waitTime));
                    } else {
                        // Last attempt failed or non-retryable error
                        throw lastError;
                    }
                }
            }
        } catch (conversionError) {
            console.error('❌ Adobe PDF Services conversion failed:', conversionError);
            const conversionErrorMessage = conversionError instanceof Error ? conversionError.message : 'Unknown error';
            const conversionErrorStack = conversionError instanceof Error ? conversionError.stack : undefined;
            console.error('Conversion error details:', {
                message: conversionErrorMessage,
                stack: conversionErrorStack,
                errorType: conversionError instanceof Error ? conversionError.constructor.name : typeof conversionError
            });
            // Try fallback conversion method
            console.warn('⚠️ Attempting fallback conversion method...');
            try {
                docxBuffer = await fallbackPdfToDocx(pdfBuffer);
                console.log('✅ Fallback conversion succeeded!');
            // Continue to the return statement below
            } catch (fallbackError) {
                console.error('❌ Fallback conversion also failed:', fallbackError);
                // Both methods failed - return detailed error
                let detailedMessage = 'PDF to DOCX conversion failed using both Adobe services and fallback method. ';
                if (conversionErrorMessage.includes('credentials')) {
                    detailedMessage += 'Please check your Adobe API credentials are correct.';
                } else if (conversionErrorMessage.includes('quota') || conversionErrorMessage.includes('limit')) {
                    detailedMessage += 'API quota may have been exceeded. Check your Adobe account.';
                } else if (conversionErrorMessage.includes('network') || conversionErrorMessage.includes('timeout')) {
                    detailedMessage += 'Network error occurred. This is often temporary - please try again.';
                } else {
                    detailedMessage += 'The PDF file may be corrupted, encrypted, or in an unsupported format.';
                }
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Failed to convert PDF to DOCX',
                    message: conversionErrorMessage,
                    details: detailedMessage,
                    fallbackError: fallbackError instanceof Error ? fallbackError.message : String(fallbackError),
                    ...("TURBOPACK compile-time value", "development") === 'development' && conversionErrorStack ? {
                        stack: conversionErrorStack
                    } : {}
                }, {
                    status: 500,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            }
        }
        // Return DOCX file
        const outputFileName = file.name.replace(/\.pdf$/i, '.docx');
        console.log('📤 Sending DOCX file:', outputFileName);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](docxBuffer, {
            status: 200,
            headers: {
                'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'Content-Disposition': `attachment; filename="${outputFileName}"`
            }
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
            ...("TURBOPACK compile-time value", "development") === 'development' && {
                details: errorMessage,
                name: errorName,
                ...errorStack ? {
                    stack: errorStack
                } : {}
            }
        };
        console.error('Returning error response:', JSON.stringify(errorResponse, null, 2));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(errorResponse, {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__94d29f61._.js.map