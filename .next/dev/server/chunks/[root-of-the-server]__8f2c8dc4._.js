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
;
;
const runtime = 'nodejs';
// Mock compliance issues generator
function generateMockCompliance(text) {
    const suggestions = [];
    // FINRA compliance suggestions
    const finraPatterns = [
        {
            pattern: /\b(guaranteed|guarantee|guarantees)\s+(returns?|profits?|income|gains?)\b/gi,
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
    // Find matches in text
    allPatterns.forEach((pattern)=>{
        const matches = text.matchAll(pattern.pattern);
        for (const match of matches){
            if (match[0]) {
                // Get the suggested replacement text
                const suggestedText = pattern.getReplacement(match[0]);
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
    try {
        console.log('Starting document analysis...');
        const formData = await request.formData();
        const file = formData.get('file');
        if (!file) {
            console.log('No file provided');
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'No file provided'
            }, {
                status: 400
            });
        }
        console.log('File received:', file.name, 'Size:', file.size, 'Type:', file.type);
        // Validate file type
        const fileName = file.name.toLowerCase();
        if (!fileName.endsWith('.docx')) {
            console.log('Invalid file type:', fileName);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Only .docx files are supported'
            }, {
                status: 400
            });
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
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mammoth$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].extractRawText({
            buffer
        });
        const extractedText = result.value;
        console.log('Extracted text length:', extractedText.length);
        // Also convert to HTML for editor
        console.log('Converting to HTML with mammoth...');
        const htmlResult = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mammoth$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].convertToHtml({
            buffer
        });
        const htmlContent = htmlResult.value;
        console.log('HTML content length:', htmlContent.length);
        // Generate mock compliance suggestions
        const suggestions = generateMockCompliance(extractedText);
        // Mock: Deduct balance for API usage (0.10 credits per analysis)
        const costPerAnalysis = 0.10;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            documentId: Date.now().toString(),
            htmlContent,
            extractedText,
            suggestions,
            cost: costPerAnalysis,
            message: `Analysis complete. Found ${suggestions.length} suggestions.`
        });
    } catch (error) {
        console.error('Error analyzing document:', error);
        console.error('Error details:', {
            name: error instanceof Error ? error.name : 'Unknown',
            message: error instanceof Error ? error.message : String(error),
            stack: error instanceof Error ? error.stack : 'No stack trace'
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to analyze document',
            details: error instanceof Error ? error.message : String(error)
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8f2c8dc4._.js.map