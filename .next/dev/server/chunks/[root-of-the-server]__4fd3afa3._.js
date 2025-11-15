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
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ?? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]({
    log: ("TURBOPACK compile-time truthy", 1) ? [
        "query",
        "info",
        "warn",
        "error"
    ] : "TURBOPACK unreachable"
});
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
}),
"[project]/lib/db-helpers.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteDocument",
    ()=>deleteDocument,
    "getDocumentWithSuggestions",
    ()=>getDocumentWithSuggestions,
    "getUserDocuments",
    ()=>getUserDocuments,
    "saveAISuggestions",
    ()=>saveAISuggestions,
    "saveUploadedDocument",
    ()=>saveUploadedDocument,
    "updateDocument",
    ()=>updateDocument,
    "updateSuggestion",
    ()=>updateSuggestion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-route] (ecmascript)");
;
async function saveUploadedDocument(userId, originalName, fileType, storageUrl) {
    try {
        const document = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].document.create({
            data: {
                userId,
                originalName,
                fileType,
                storageUrl
            }
        });
        return document;
    } catch (error) {
        console.error("Error saving document:", error);
        throw new Error("Failed to save document to database");
    }
}
async function saveAISuggestions(documentId, suggestions) {
    try {
        // Delete existing suggestions for this document (optional - you might want to keep them)
        // await prisma.suggestion.deleteMany({ where: { documentId } });
        // Create new suggestions
        const createdSuggestions = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].suggestion.createMany({
            data: suggestions.map((s)=>({
                    documentId,
                    category: s.category,
                    issue: s.issue,
                    severity: s.severity,
                    startIndex: s.startIndex ?? null,
                    endIndex: s.endIndex ?? null,
                    suggestedFix: s.suggestedFix ?? null
                })),
            skipDuplicates: true
        });
        // Fetch and return the created suggestions
        const savedSuggestions = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].suggestion.findMany({
            where: {
                documentId
            },
            orderBy: {
                id: "asc"
            }
        });
        return savedSuggestions;
    } catch (error) {
        console.error("Error saving suggestions:", error);
        throw new Error("Failed to save suggestions to database");
    }
}
async function getDocumentWithSuggestions(documentId, userId) {
    try {
        const where = {
            id: documentId
        };
        if (userId) {
            where.userId = userId;
        }
        const document = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].document.findFirst({
            where,
            include: {
                suggestions: {
                    orderBy: [
                        {
                            severity: "asc"
                        },
                        {
                            category: "asc"
                        }
                    ]
                }
            }
        });
        return document;
    } catch (error) {
        console.error("Error fetching document:", error);
        throw new Error("Failed to fetch document from database");
    }
}
async function getUserDocuments(userId) {
    try {
        const documents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].document.findMany({
            where: {
                userId
            },
            include: {
                _count: {
                    select: {
                        suggestions: true
                    }
                }
            },
            orderBy: {
                createdAt: "desc"
            }
        });
        return documents;
    } catch (error) {
        console.error("Error fetching user documents:", error);
        // Provide more specific error messages
        if (error instanceof Error) {
            // Check for common Prisma errors
            if (error.message.includes('P1001') || error.message.includes('Can\'t reach database server')) {
                throw new Error("Database connection failed. Please check your DATABASE_URL environment variable.");
            }
            if (error.message.includes('P2002')) {
                throw new Error("Database constraint violation");
            }
            if (error.message.includes('P2025')) {
                throw new Error("Record not found");
            }
            // Re-throw with original message for other errors
            throw new Error(`Failed to fetch user documents: ${error.message}`);
        }
        throw new Error("Failed to fetch user documents: Unknown error");
    }
}
async function updateDocument(documentId, userId, data) {
    try {
        const document = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].document.updateMany({
            where: {
                id: documentId,
                userId
            },
            data
        });
        if (document.count === 0) {
            throw new Error("Document not found or access denied");
        }
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].document.findUnique({
            where: {
                id: documentId
            }
        });
    } catch (error) {
        console.error("Error updating document:", error);
        throw new Error("Failed to update document");
    }
}
async function deleteDocument(documentId, userId) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].document.deleteMany({
            where: {
                id: documentId,
                userId
            }
        });
        if (result.count === 0) {
            throw new Error("Document not found or access denied");
        }
        return {
            success: true
        };
    } catch (error) {
        console.error("Error deleting document:", error);
        throw new Error("Failed to delete document");
    }
}
async function updateSuggestion(suggestionId, data, documentId) {
    try {
        // First, check if the suggestion exists
        const existingSuggestion = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].suggestion.findUnique({
            where: {
                id: suggestionId
            }
        });
        if (!existingSuggestion) {
            throw new Error(`Suggestion with ID ${suggestionId} not found`);
        }
        // If documentId is provided, verify the suggestion belongs to that document
        if (documentId && existingSuggestion.documentId !== documentId) {
            throw new Error("Suggestion does not belong to the specified document");
        }
        // Update the suggestion
        const suggestion = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].suggestion.update({
            where: {
                id: suggestionId
            },
            data
        });
        return suggestion;
    } catch (error) {
        console.error("Error updating suggestion:", error);
        // Handle Prisma P2025 error (record not found)
        if (error && typeof error === 'object' && 'code' in error && error.code === 'P2025') {
            throw new Error(`Suggestion with ID ${suggestionId} not found`);
        }
        // Re-throw if it's already our custom error
        if (error instanceof Error) {
            throw error;
        }
        throw new Error("Failed to update suggestion");
    }
}
}),
"[project]/app/api/documents/[id]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "PUT",
    ()=>PUT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2d$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db-helpers.ts [app-route] (ecmascript)");
;
;
;
async function GET(request, { params }) {
    try {
        // Get authenticated user
        const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auth"])();
        if (!userId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Unauthorized'
            }, {
                status: 401
            });
        }
        // Handle params - in Next.js 15+ params is a Promise
        const resolvedParams = params instanceof Promise ? await params : params;
        const documentId = resolvedParams.id;
        if (!documentId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Document ID is required'
            }, {
                status: 400
            });
        }
        // Fetch document with suggestions from database
        const document = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2d$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDocumentWithSuggestions"])(documentId, userId);
        if (!document) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Document not found or access denied'
            }, {
                status: 404
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            document: {
                id: document.id,
                originalName: document.originalName,
                fileType: document.fileType,
                storageUrl: document.storageUrl,
                createdAt: document.createdAt,
                updatedAt: document.updatedAt,
                suggestions: document.suggestions.map((s)=>({
                        id: s.id,
                        category: s.category,
                        issue: s.issue,
                        severity: s.severity,
                        startIndex: s.startIndex,
                        endIndex: s.endIndex,
                        suggestedFix: s.suggestedFix
                    }))
            }
        });
    } catch (error) {
        console.error('Error fetching document:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to fetch document',
            details: error instanceof Error ? error.message : String(error)
        }, {
            status: 500
        });
    }
}
async function PUT(request, { params }) {
    try {
        // Get authenticated user
        const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auth"])();
        if (!userId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Unauthorized'
            }, {
                status: 401
            });
        }
        // Handle params - in Next.js 15+ params is a Promise
        const resolvedParams = params instanceof Promise ? await params : params;
        const documentId = resolvedParams.id;
        if (!documentId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Document ID is required'
            }, {
                status: 400
            });
        }
        // Parse request body
        const body = await request.json();
        const { originalName, fileType, storageUrl } = body;
        // Update document in database
        const updatedDocument = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2d$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateDocument"])(documentId, userId, {
            ...originalName && {
                originalName
            },
            ...fileType && {
                fileType
            },
            ...storageUrl && {
                storageUrl
            }
        });
        if (!updatedDocument) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Document not found or access denied'
            }, {
                status: 404
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            document: {
                id: updatedDocument.id,
                originalName: updatedDocument.originalName,
                fileType: updatedDocument.fileType,
                storageUrl: updatedDocument.storageUrl,
                createdAt: updatedDocument.createdAt.toISOString(),
                updatedAt: updatedDocument.updatedAt.toISOString()
            }
        });
    } catch (error) {
        console.error('Error updating document:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to update document',
            details: error instanceof Error ? error.message : String(error)
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4fd3afa3._.js.map