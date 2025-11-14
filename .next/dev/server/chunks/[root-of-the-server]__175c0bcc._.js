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
"[externals]/fs/promises [external] (fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

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
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[project]/app/api/convert-pdf-to-docx/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdfStorage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pdfStorage.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$child_process__$5b$external$5d$__$28$child_process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/child_process [external] (child_process, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/util [external] (util, cjs)");
;
;
;
;
;
;
const execAsync = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["promisify"])(__TURBOPACK__imported__module__$5b$externals$5d2f$child_process__$5b$external$5d$__$28$child_process$2c$__cjs$29$__["exec"]);
const runtime = 'nodejs';
async function POST(request) {
    try {
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
        // Convert PDF to DOCX using LibreOffice command line
        console.log('🔄 Converting PDF to DOCX using LibreOffice...');
        let docxBuffer;
        const tempDir = '/tmp';
        const timestamp = Date.now();
        const tempPdfPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(tempDir, `temp-${timestamp}.pdf`);
        const tempDocxPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(tempDir, `temp-${timestamp}.docx`);
        try {
            // Write PDF to temp file
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["writeFile"])(tempPdfPath, pdfBuffer);
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
            docxBuffer = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["readFile"])(tempDocxPath);
            console.log('✅ Conversion successful, DOCX size:', docxBuffer.length, 'bytes');
            if (!docxBuffer || docxBuffer.length === 0) {
                throw new Error('Conversion produced an empty file');
            }
            // Clean up temp files
            try {
                await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["unlink"])(tempPdfPath);
                await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["unlink"])(tempDocxPath);
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
                await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["unlink"])(tempPdfPath).catch(()=>{});
                await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["unlink"])(tempDocxPath).catch(()=>{});
            } catch  {}
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Failed to convert PDF to DOCX',
                message: conversionErrorMessage,
                details: detailedMessage,
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
        // Return DOCX file
        const outputFileName = file.name.replace(/\.pdf$/i, '.docx');
        console.log('📤 Sending DOCX file:', outputFileName);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](new Uint8Array(docxBuffer), {
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

//# sourceMappingURL=%5Broot-of-the-server%5D__175c0bcc._.js.map