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
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[project]/app/api/pdf-to-docx/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/docx/dist/index.mjs [app-route] (ecmascript)");
;
;
const runtime = 'nodejs';
async function POST(request) {
    try {
        // Validate request
        const contentType = request.headers.get('content-type');
        if (!contentType || !contentType.includes('multipart/form-data')) {
            console.warn('Invalid content type:', contentType);
        }
        const formData = await request.formData();
        const file = formData.get('file');
        if (!file) {
            console.error('No file provided in form data');
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'No file provided',
                message: 'Please ensure a file is included in the request'
            }, {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        console.log('Received file:', {
            name: file.name,
            type: file.type,
            size: file.size
        });
        // Check if it's a PDF
        if (!file.name.toLowerCase().endsWith('.pdf') && file.type !== 'application/pdf') {
            console.error('Invalid file type:', file.type, 'for file:', file.name);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'File must be a PDF',
                message: `Received file type: ${file.type || 'unknown'}`
            }, {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        // Check file size (optional validation)
        if (file.size === 0) {
            console.error('Empty file provided');
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Empty file provided',
                message: 'The PDF file appears to be empty'
            }, {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        console.log('Reading PDF file...');
        let arrayBuffer;
        try {
            arrayBuffer = await file.arrayBuffer();
            console.log('PDF file read, size:', arrayBuffer.byteLength, 'bytes');
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
        let pdfData = null;
        try {
            // Use require for CommonJS module compatibility in Node.js runtime
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const pdfParse = __turbopack_context__.r("[project]/node_modules/pdf-parse/dist/pdf-parse/cjs/index.cjs [app-route] (ecmascript)");
            if (!pdfParse || typeof pdfParse !== 'function') {
                throw new Error('pdf-parse function not found in module exports');
            }
            // Call pdf-parse directly with the buffer
            const result = await pdfParse(Buffer.from(arrayBuffer));
            pdfData = {
                text: result.text || '',
                numpages: result.numpages || 0
            };
            console.log('PDF parsed successfully, pages:', pdfData.numpages);
        } catch (parseError) {
            console.error('Failed to parse PDF:', parseError);
            const parseErrorMessage = parseError instanceof Error ? parseError.message : 'Unknown error';
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Failed to parse PDF',
                message: parseErrorMessage,
                details: 'The PDF file could not be parsed. It may be corrupted or in an unsupported format.'
            }, {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        if (!pdfData) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Failed to parse PDF',
                message: 'No data was extracted from the PDF document',
                details: 'The PDF parser returned no data. The file may be empty or unsupported.'
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
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](buffer, {
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
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b473dc44._.js.map