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
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[externals]/node:events [external] (node:events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:events", () => require("node:events"));

module.exports = mod;
}),
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/node:process [external] (node:process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:process", () => require("node:process"));

module.exports = mod;
}),
"[externals]/node:console [external] (node:console, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:console", () => require("node:console"));

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
"[project]/app/api/compliance/analyze/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mammoth$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mammoth/lib/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf2json$2f$dist$2f$pdfparser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf2json/dist/pdfparser.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdfStorage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pdfStorage.ts [app-route] (ecmascript)");
;
;
;
;
const runtime = 'nodejs';
// Helper function to create properly formatted error responses
function createErrorResponse(error, details, status = 500) {
    const errorResponse = {
        error,
        details,
        timestamp: new Date().toISOString()
    };
    console.error('📤 Creating error response:', JSON.stringify(errorResponse, null, 2));
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(errorResponse, {
        status,
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache, no-store, must-revalidate'
        }
    });
}
// Mock compliance issues generator
function generateMockCompliance(text) {
    const suggestions = [];
    // Clean up text: normalize whitespace and preserve original casing for display
    const normalizedText = text.replace(/\s+/g, ' ').trim();
    // FINRA compliance suggestions
    const finraPatterns = [
        {
            pattern: /\b(guaranteed?|guarantees?)\s+(returns?|profits?|income|gains?)\b/gi,
            category: 'FINRA',
            severity: 'critical',
            explanation: 'FINRA Rule 2210 prohibits guarantees of investment returns',
            getReplacement: (match)=>match.replace(/guaranteed?|guarantees?/gi, 'potential')
        },
        {
            pattern: /\b(promise|promises|assure|assures)\s+(returns?|profits?|income|gains?)\b/gi,
            category: 'FINRA',
            severity: 'critical',
            explanation: 'FINRA Rule 2210 prohibits promises of specific investment returns',
            getReplacement: (match)=>match.replace(/promise|promises|assure|assures/gi, 'target')
        },
        {
            pattern: /\bhigh returns?\b/gi,
            category: 'FINRA',
            severity: 'critical',
            explanation: 'Claims of "high returns" may violate FINRA communications standards',
            getReplacement: (match)=>'competitive returns'
        },
        {
            pattern: /\brisk[- ]free\b/gi,
            category: 'FINRA',
            severity: 'critical',
            explanation: 'No investment is truly risk-free. This violates FINRA Rule 2210',
            getReplacement: (match)=>'lower-risk'
        },
        {
            pattern: /\b(best|top|#1|number one)\s+(investment|fund|stock|opportunity)\b/gi,
            category: 'FINRA',
            severity: 'warning',
            explanation: 'Superlative claims require substantiation per FINRA Rule 2210',
            getReplacement: (match)=>match.replace(/best|top|#1|number one/gi, 'leading')
        },
        {
            pattern: /\bno risk\b/gi,
            category: 'FINRA',
            severity: 'critical',
            explanation: 'All investments carry some level of risk per FINRA requirements',
            getReplacement: (match)=>'minimal risk'
        },
        {
            pattern: /\bsafe investment\b/gi,
            category: 'FINRA',
            severity: 'warning',
            explanation: 'The term "safe" may be misleading per FINRA standards',
            getReplacement: (match)=>'conservative investment'
        },
        {
            pattern: /\b(can'?t|cannot|won'?t)\s+(lose|fail)\b/gi,
            category: 'FINRA',
            severity: 'critical',
            explanation: 'Statements implying no possibility of loss violate FINRA Rule 2210',
            getReplacement: (match)=>'historically resilient'
        }
    ];
    // SEC compliance suggestions
    const secPatterns = [
        {
            pattern: /\binsider (information|knowledge|tip|trading)\b/gi,
            category: 'SEC',
            severity: 'critical',
            explanation: 'Reference to insider information may violate SEC Rule 10b-5',
            getReplacement: (match)=>'publicly available information'
        },
        {
            pattern: /\bconfidential (deal|agreement|information|data)\b/gi,
            category: 'SEC',
            severity: 'warning',
            explanation: 'Disclosure of confidential information may violate SEC regulations',
            getReplacement: (match)=>match.replace(/confidential/gi, 'publicly disclosed')
        },
        {
            pattern: /\b(manipulation|manipulate|manipulating)\s+(price|market|stock)\b/gi,
            category: 'SEC',
            severity: 'critical',
            explanation: 'References to market manipulation should be avoided or clarified',
            getReplacement: (match)=>'market activity'
        },
        {
            pattern: /\bunregistered (security|securities|offering)\b/gi,
            category: 'SEC',
            severity: 'critical',
            explanation: 'Unregistered securities must comply with SEC regulations',
            getReplacement: (match)=>'private placement'
        }
    ];
    // Grammar suggestions
    const grammarPatterns = [
        {
            pattern: /\btheir\s+are\b/gi,
            category: 'Grammar',
            severity: 'info',
            explanation: 'Incorrect usage: "their" should be "there"',
            getReplacement: (match)=>'there are'
        },
        {
            pattern: /\btheir\s+(is|was|were)\b/gi,
            category: 'Grammar',
            severity: 'info',
            explanation: 'Incorrect usage: "their" should be "there"',
            getReplacement: (match)=>match.replace(/their/gi, 'there')
        },
        {
            pattern: /\byour\s+welcome\b/gi,
            category: 'Grammar',
            severity: 'info',
            explanation: 'Incorrect usage: "your" should be "you\'re" (you are)',
            getReplacement: (match)=>"you're welcome"
        },
        {
            pattern: /\bits\s+(a|the|an)\b/gi,
            category: 'Grammar',
            severity: 'info',
            explanation: 'Incorrect usage: "its" should be "it\'s" (it is)',
            getReplacement: (match)=>match.replace(/its/gi, "it's")
        },
        {
            pattern: /\beffect\s+(change|growth|improvement)\b/gi,
            category: 'Grammar',
            severity: 'info',
            explanation: 'Should use "affect" (verb) not "effect" (noun) in this context',
            getReplacement: (match)=>match.replace(/effect/gi, 'affect')
        },
        {
            pattern: /\balot\b/gi,
            category: 'Grammar',
            severity: 'info',
            explanation: 'Incorrect spelling: should be "a lot" (two words)',
            getReplacement: (match)=>'a lot'
        },
        {
            pattern: /\bcould\s+of\b/gi,
            category: 'Grammar',
            severity: 'info',
            explanation: 'Incorrect usage: should be "could have" or "could\'ve"',
            getReplacement: (match)=>'could have'
        },
        {
            pattern: /\bshould\s+of\b/gi,
            category: 'Grammar',
            severity: 'info',
            explanation: 'Incorrect usage: should be "should have" or "should\'ve"',
            getReplacement: (match)=>'should have'
        },
        {
            pattern: /\bwould\s+of\b/gi,
            category: 'Grammar',
            severity: 'info',
            explanation: 'Incorrect usage: should be "would have" or "would\'ve"',
            getReplacement: (match)=>'would have'
        }
    ];
    const allPatterns = [
        ...finraPatterns,
        ...secPatterns,
        ...grammarPatterns
    ];
    // Find matches in text - use both original and normalized text
    allPatterns.forEach((pattern)=>{
        const matches = Array.from(text.matchAll(pattern.pattern));
        console.log(`  Pattern "${pattern.pattern}" found ${matches.length} matches`);
        for (const match of matches){
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
                    page: 1
                });
            }
        }
    });
    return suggestions;
}
async function POST(request) {
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
            return createErrorResponse('Invalid request format', 'Failed to parse form data. Please ensure you are sending a valid multipart/form-data request.', 400);
        }
        console.log('✅ FormData parsed successfully');
        const file = formData.get('file');
        if (!file) {
            console.error('❌ No file provided in form data');
            return createErrorResponse('No file provided', 'The file field is missing from the form data', 400);
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
            return createErrorResponse('Invalid file type', `Only .pdf, .docx, and .txt files are supported. Received: ${fileName} (${file.type})`, 400);
        }
        // Extract text from file
        console.log('Converting file to array buffer...');
        let arrayBuffer;
        try {
            arrayBuffer = await file.arrayBuffer();
            console.log('Array buffer size:', arrayBuffer.byteLength);
        } catch (bufferError) {
            console.error('❌ Failed to read file:', bufferError);
            return createErrorResponse('File read error', 'Failed to read the uploaded file. The file may be corrupted or too large.', 400);
        }
        let extractedText;
        let htmlContent;
        let fileType;
        let pdfUrl;
        // Generate document ID early (before processing) so we can use it for PDF storage
        const documentId = Date.now().toString();
        // Declare buffer at function scope to avoid duplicate declarations
        let buffer;
        if (isPdf) {
            fileType = 'pdf';
            console.log('Processing PDF file...');
            try {
                // Convert ArrayBuffer to Buffer for pdf2json
                buffer = Buffer.from(arrayBuffer);
                // Extract text using pdf2json with page information
                const { text: extractedTextResult, pageTexts } = await new Promise((resolve, reject)=>{
                    // Create PDFParser without the problematic second parameter
                    const pdfParser = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf2json$2f$dist$2f$pdfparser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]();
                    pdfParser.on('pdfParser_dataError', (errData)=>{
                        console.error('PDF parse error:', errData.parserError);
                        reject(new Error(errData.parserError || 'Failed to parse PDF'));
                    });
                    pdfParser.on('pdfParser_dataReady', (pdfData)=>{
                        try {
                            // Extract text from all pages
                            const fullText = pdfParser.getRawTextContent();
                            // Try to extract per-page text if available
                            const pageTexts = [];
                            if (pdfData?.Pages && Array.isArray(pdfData.Pages)) {
                                console.log(`📄 PDF has ${pdfData.Pages.length} pages`);
                                pdfData.Pages.forEach((page, index)=>{
                                    let pageText = '';
                                    if (page.Texts && Array.isArray(page.Texts)) {
                                        pageText = page.Texts.map((text)=>{
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
                            resolve({
                                text: fullText,
                                pageTexts
                            });
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
                htmlContent = extractedText.split('\n\n').filter((p)=>p.trim()).map((p)=>`<p>${p.trim().replace(/\n/g, '<br>')}</p>`).join('\n');
                // Store the PDF buffer in memory for later conversion
                // (buffer was already created at line 323)
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdfStorage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["storePDF"])(documentId, buffer, file.name);
                // Create a blob URL for the PDF (base64 encoded) for viewing
                const base64 = buffer.toString('base64');
                pdfUrl = `data:application/pdf;base64,${base64}`;
            } catch (pdfError) {
                console.error('❌ PDF processing failed:', pdfError);
                return createErrorResponse('PDF processing error', pdfError instanceof Error ? pdfError.message : 'Failed to process PDF file. The file may be corrupted or use an unsupported format.', 400);
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
                htmlContent = extractedText.split('\n').filter((p)=>p.trim()).map((p)=>`<p>${p.trim()}</p>`).join('\n');
                console.log('HTML content length:', htmlContent.length);
            } catch (textError) {
                console.error('❌ Text processing failed:', textError);
                return createErrorResponse('Text processing error', textError instanceof Error ? textError.message : 'Failed to process text file.', 400);
            }
        } else {
            fileType = 'docx';
            console.log('Processing DOCX file...');
            try {
                // Convert ArrayBuffer to Buffer for mammoth
                buffer = Buffer.from(arrayBuffer);
                console.log('Buffer size:', buffer.length);
                console.log('Extracting raw text with mammoth...');
                const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mammoth$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].extractRawText({
                    buffer
                });
                extractedText = result.value;
                console.log('Extracted text length:', extractedText.length);
                // Also convert to HTML for editor
                console.log('Converting to HTML with mammoth...');
                const htmlResult = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mammoth$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].convertToHtml({
                    buffer
                });
                htmlContent = htmlResult.value;
                console.log('HTML content length:', htmlContent.length);
            } catch (docxError) {
                console.error('❌ DOCX processing failed:', docxError);
                return createErrorResponse('DOCX processing error', docxError instanceof Error ? docxError.message : 'Failed to process DOCX file. The file may be corrupted or use an unsupported format.', 400);
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
            documentId,
            fileName: file.name,
            fileType,
            htmlContent,
            extractedText,
            suggestions,
            pdfUrl,
            cost: costPerAnalysis,
            message: `Analysis complete. Found ${suggestions.length} suggestions.`
        };
        console.log('✅ Returning success response');
        console.log('  Document ID:', successResponse.documentId);
        console.log('  File type:', successResponse.fileType);
        console.log('  Suggestions count:', successResponse.suggestions.length);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(successResponse);
    } catch (error) {
        console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.error('❌ ERROR in /api/compliance/analyze');
        console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.error('Error type:', error?.constructor?.name || typeof error);
        console.error('Error message:', error instanceof Error ? error.message : String(error));
        console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
        console.error('Full error object:', JSON.stringify(error, Object.getOwnPropertyNames(error), 2));
        const errorMessage = error instanceof Error ? error.message : String(error);
        const errorResponse = createErrorResponse('Failed to analyze document', errorMessage || 'An unexpected error occurred during document analysis', 500);
        // Final safety check: ensure the response has a body
        console.log('📤 Returning error response with status:', errorResponse.status);
        return errorResponse;
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__91fb879a._.js.map