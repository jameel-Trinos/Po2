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
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

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
// Cleanup interval (remove PDFs older than 1 hour)
const CLEANUP_INTERVAL = 60 * 60 * 1000; // 1 hour
const MAX_AGE = 60 * 60 * 1000; // 1 hour
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
"[externals]/pdf-parse [external] (pdf-parse, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("pdf-parse");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/app/api/pdf-to-docx/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/docx/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdfStorage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pdfStorage.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pdf$2d$parse__$5b$external$5d$__$28$pdf$2d$parse$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/pdf-parse [external] (pdf-parse, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pdf$2d$parse__$5b$external$5d$__$28$pdf$2d$parse$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pdf$2d$parse__$5b$external$5d$__$28$pdf$2d$parse$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const runtime = 'nodejs';
/**
 * Extract text from PDF using pdf-parse (Node.js native)
 */ async function extractTextFromPdf(buffer) {
    console.log('Parsing PDF with pdf-parse...');
    try {
        const data = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$pdf$2d$parse__$5b$external$5d$__$28$pdf$2d$parse$2c$__esm_import$29$__["default"])(buffer);
        console.log('PDF parsed successfully');
        console.log('Pages:', data.numpages);
        console.log('Text length:', data.text.length);
        return {
            text: data.text,
            numPages: data.numpages
        };
    } catch (error) {
        console.error('PDF parsing error:', error);
        throw error;
    }
}
async function POST(request) {
    try {
        // Validate request
        const contentType = request.headers.get('content-type');
        console.log('📥 Incoming request content-type:', contentType);
        let file = null;
        let fileName = 'document.pdf';
        // Check if it's JSON (URL-based or document ID-based) or multipart (file upload)
        if (contentType?.includes('application/json')) {
            console.log('📋 Parsing JSON body...');
            const body = await request.json();
            const documentId = body.documentId;
            const pdfUrl = body.pdfUrl;
            // Priority: documentId > pdfUrl
            if (documentId) {
                console.log('📥 Processing PDF from storage (documentId:', documentId, ')...');
                // Retrieve PDF from storage
                const storedPdf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdfStorage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPDF"])(documentId);
                if (!storedPdf) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        error: 'PDF not found',
                        message: `No PDF found for document ID: ${documentId}. The PDF may have expired or been deleted.`,
                        details: 'PDFs are stored temporarily (1 hour). Please re-upload the document.'
                    }, {
                        status: 404
                    });
                }
                // Convert buffer to File
                fileName = storedPdf.fileName;
                file = new File([
                    storedPdf.buffer
                ], fileName, {
                    type: 'application/pdf'
                });
                console.log('✅ Retrieved PDF from storage:', fileName, '(', storedPdf.buffer.length, 'bytes)');
            } else if (pdfUrl) {
                console.log('📥 Processing PDF from URL...');
                try {
                    let pdfBlob;
                    // Check if it's a data URL (starts with data:)
                    if (pdfUrl.startsWith('data:')) {
                        console.log('📋 Detected data URL, converting directly to blob...');
                        // Extract the base64 data from the data URL
                        const base64Data = pdfUrl.split(',')[1];
                        if (!base64Data) {
                            throw new Error('Invalid data URL format');
                        }
                        // Convert base64 to binary
                        const binaryString = atob(base64Data);
                        const bytes = new Uint8Array(binaryString.length);
                        for(let i = 0; i < binaryString.length; i++){
                            bytes[i] = binaryString.charCodeAt(i);
                        }
                        pdfBlob = new Blob([
                            bytes
                        ], {
                            type: 'application/pdf'
                        });
                        console.log('✅ Data URL converted to blob, size:', pdfBlob.size, 'bytes');
                    } else {
                        console.log('🌐 Fetching PDF from remote URL:', pdfUrl.substring(0, 100) + '...');
                        // Fetch PDF from URL server-side
                        const pdfResponse = await fetch(pdfUrl, {
                            headers: {
                                'Accept': 'application/pdf,*/*'
                            }
                        });
                        if (!pdfResponse.ok) {
                            throw new Error(`Failed to fetch PDF: ${pdfResponse.statusText}`);
                        }
                        pdfBlob = await pdfResponse.blob();
                        console.log('✅ PDF fetched from URL, size:', pdfBlob.size, 'bytes');
                    }
                    // Extract filename from URL if possible (skip for data URLs)
                    if (!pdfUrl.startsWith('data:')) {
                        const urlPath = pdfUrl.split('?')[0];
                        const urlFileName = urlPath.split('/').pop();
                        if (urlFileName && urlFileName.endsWith('.pdf')) {
                            fileName = urlFileName;
                        }
                    }
                    // Convert blob to File
                    file = new File([
                        pdfBlob
                    ], fileName, {
                        type: 'application/pdf'
                    });
                } catch (fetchError) {
                    console.error('❌ Failed to process PDF from URL:', fetchError);
                    const fetchErrorMessage = fetchError instanceof Error ? fetchError.message : 'Unknown error';
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        error: 'Failed to process PDF from URL',
                        message: fetchErrorMessage,
                        details: `Could not retrieve or convert PDF from the provided URL`
                    }, {
                        status: 400
                    });
                }
            } else {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'No PDF source provided',
                    message: 'Please provide either a documentId or pdfUrl in the request body'
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
                message: 'Request must be either application/json (with pdfUrl) or multipart/form-data (with file)'
            }, {
                status: 400
            });
        }
        if (!file) {
            console.error('❌ No file provided');
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'No file provided',
                message: 'Please ensure a file is included in the request or a valid pdfUrl is provided'
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
        console.log('Reading PDF file...');
        let pdfBuffer;
        try {
            const arrayBuffer = await file.arrayBuffer();
            pdfBuffer = Buffer.from(arrayBuffer);
            console.log('PDF file read, size:', pdfBuffer.length, 'bytes');
        } catch (readError) {
            console.error('Failed to read PDF file:', readError);
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
        console.log('Parsing PDF document...');
        let pdfData;
        try {
            // Extract text using pdf-parse (Node.js native library)
            pdfData = await extractTextFromPdf(pdfBuffer);
            console.log('PDF parsed successfully, pages:', pdfData.numPages);
            console.log('Text length:', pdfData.text.length);
            if (!pdfData.text || pdfData.text.length === 0) {
                console.warn('No text extracted from PDF');
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'No text found in PDF',
                    message: 'The PDF appears to be empty or contains only images/scanned content.',
                    details: 'Try using a PDF with selectable text, or use OCR for scanned documents.'
                }, {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            }
        } catch (parseError) {
            console.error('Failed to parse PDF:', parseError);
            const parseErrorMessage = parseError instanceof Error ? parseError.message : 'Unknown error';
            const parseErrorStack = parseError instanceof Error ? parseError.stack : undefined;
            console.error('Parse error details:', {
                message: parseErrorMessage,
                stack: parseErrorStack,
                errorType: parseError instanceof Error ? parseError.constructor.name : typeof parseError
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Failed to parse PDF',
                message: parseErrorMessage,
                details: 'The PDF file could not be parsed. It may be corrupted or in an unsupported format.',
                ...("TURBOPACK compile-time value", "development") === 'development' && parseErrorStack ? {
                    stack: parseErrorStack
                } : {}
            }, {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        // Extract text and structure from PDF
        console.log('Extracting text from PDF...');
        const paragraphs = [];
        try {
            // Split text into paragraphs (double newlines indicate paragraph breaks)
            const textBlocks = pdfData.text.split(/\n\s*\n/).filter((block)=>block.trim());
            textBlocks.forEach((textBlock)=>{
                const trimmedText = textBlock.trim();
                if (!trimmedText) return;
                // Simple heuristic: detect headings (short lines, typically at start)
                const lines = trimmedText.split('\n');
                const firstLine = lines[0]?.trim() || '';
                let paragraphOptions = {
                    children: [
                        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TextRun"]({
                            text: trimmedText
                        })
                    ]
                };
                // Determine if it's a heading (short first line, typically less than 100 chars)
                if (firstLine.length < 100 && lines.length === 1) {
                    // Check if it looks like a heading (all caps, or starts with number, etc.)
                    if (firstLine === firstLine.toUpperCase() || /^\d+\.?\s/.test(firstLine)) {
                        paragraphOptions.heading = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_2;
                    } else if (firstLine.length < 60) {
                        paragraphOptions.heading = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_3;
                    }
                }
                paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Paragraph"](paragraphOptions));
            });
        } catch (extractionError) {
            console.error('Error extracting text from PDF:', extractionError);
            const extractionErrorMessage = extractionError instanceof Error ? extractionError.message : 'Unknown error';
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Failed to extract text from PDF',
                message: extractionErrorMessage,
                details: 'An error occurred while extracting text from the PDF.'
            }, {
                status: 500,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        console.log('Text extraction complete. Paragraphs:', paragraphs.length);
        // Create DOCX document
        console.log('Creating DOCX document...');
        let doc;
        try {
            doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Document"]({
                sections: [
                    {
                        properties: {},
                        children: paragraphs.length > 0 ? paragraphs : [
                            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Paragraph"]({
                                children: [
                                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TextRun"]({
                                        text: 'No text content found in PDF.'
                                    })
                                ]
                            })
                        ]
                    }
                ]
            });
            console.log('DOCX document created successfully');
        } catch (docError) {
            console.error('Error creating DOCX document:', docError);
            const docErrorMessage = docError instanceof Error ? docError.message : 'Unknown error';
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Failed to create DOCX document',
                message: docErrorMessage,
                details: 'An error occurred while creating the DOCX document structure.'
            }, {
                status: 500,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        // Generate DOCX buffer
        console.log('Generating DOCX buffer...');
        let buffer;
        try {
            buffer = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Packer"].toBuffer(doc);
            console.log('DOCX buffer generated, size:', buffer.length, 'bytes');
        } catch (bufferError) {
            console.error('Error generating DOCX buffer:', bufferError);
            const bufferErrorMessage = bufferError instanceof Error ? bufferError.message : 'Unknown error';
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Failed to generate DOCX file',
                message: bufferErrorMessage,
                details: 'An error occurred while generating the DOCX file buffer.'
            }, {
                status: 500,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        // Return DOCX file
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](new Uint8Array(buffer), {
            status: 200,
            headers: {
                'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'Content-Disposition': `attachment; filename="${file.name.replace(/\.pdf$/i, '.docx')}"`
            }
        });
    } catch (error) {
        console.error('PDF to DOCX conversion error:', error);
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
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__aa07e56e._.js.map