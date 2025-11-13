(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/editor/PdfViewerPdfJs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable react-hooks/exhaustive-deps */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
// Helper function to load pdfjs dynamically
async function loadPdfJs() {
    const pdfjs = await __turbopack_context__.A("[project]/node_modules/pdfjs-dist/build/pdf.mjs [app-client] (ecmascript, async loader)");
    if (("TURBOPACK compile-time value", "object") !== 'undefined' && !pdfjs.GlobalWorkerOptions.workerSrc) {
        pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs';
    }
    return pdfjs;
}
const PdfViewerPdfJs = ({ fileUrl, fileName = 'document.pdf', onReady, className })=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const renderTasksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const renderingInProgressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const [pdfDoc, setPdfDoc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [totalPages, setTotalPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [zoom, setZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1.5);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [renderedPages, setRenderedPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    // Load PDF document
    const loadPdf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PdfViewerPdfJs.useCallback[loadPdf]": async (url)=>{
            try {
                setIsLoading(true);
                setError(null);
                // Dynamically load pdfjs
                const pdfjs = await loadPdfJs();
                const loadingTask = pdfjs.getDocument(url);
                const pdf = await loadingTask.promise;
                setPdfDoc(pdf);
                setTotalPages(pdf.numPages);
                setRenderedPages(new Set());
                console.log('[PdfViewerPdfJs] PDF loaded successfully:', pdf.numPages, 'pages');
                setIsLoading(false);
            } catch (err) {
                console.error('[PdfViewerPdfJs] Error loading PDF:', err);
                setError(err instanceof Error ? err.message : 'Failed to load PDF document');
                setIsLoading(false);
            }
        }
    }["PdfViewerPdfJs.useCallback[loadPdf]"], []);
    // Render a single page
    const renderPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PdfViewerPdfJs.useCallback[renderPage]": async (pageNum)=>{
            if (!pdfDoc) return;
            // Check if already rendering this page
            if (renderingInProgressRef.current.get(pageNum)) {
                console.log(`[PdfViewerPdfJs] Page ${pageNum} is already rendering, skipping`);
                return;
            }
            // Wait a bit for canvas to be ready if it's not available yet
            const canvas = canvasRefs.current.get(pageNum);
            if (!canvas) {
                console.log(`[PdfViewerPdfJs] Canvas not ready for page ${pageNum}, skipping render`);
                return;
            }
            // Mark as rendering in progress
            renderingInProgressRef.current.set(pageNum, true);
            // Cancel any existing render task for this page
            const existingTask = renderTasksRef.current.get(pageNum);
            if (existingTask) {
                try {
                    console.log(`[PdfViewerPdfJs] Cancelling existing render for page ${pageNum}`);
                    await existingTask.cancel();
                    renderTasksRef.current.delete(pageNum);
                    // Wait for cancellation to fully complete
                    await new Promise({
                        "PdfViewerPdfJs.useCallback[renderPage]": (resolve)=>setTimeout(resolve, 100)
                    }["PdfViewerPdfJs.useCallback[renderPage]"]);
                } catch (e) {
                    // Ignore errors during cancellation
                    console.log(`[PdfViewerPdfJs] Cancellation error for page ${pageNum}:`, e);
                }
            }
            try {
                const page = await pdfDoc.getPage(pageNum);
                // Double-check canvas is still available
                const currentCanvas = canvasRefs.current.get(pageNum);
                if (!currentCanvas) {
                    renderingInProgressRef.current.set(pageNum, false);
                    return;
                }
                const context = currentCanvas.getContext('2d');
                if (!context) {
                    renderingInProgressRef.current.set(pageNum, false);
                    return;
                }
                const viewport = page.getViewport({
                    scale: zoom
                });
                // Clear any previous content before resizing
                context.clearRect(0, 0, currentCanvas.width, currentCanvas.height);
                currentCanvas.width = viewport.width;
                currentCanvas.height = viewport.height;
                currentCanvas.style.width = '100%';
                currentCanvas.style.height = 'auto';
                const renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };
                const renderTask = page.render(renderContext);
                renderTasksRef.current.set(pageNum, renderTask);
                await renderTask.promise;
                renderTasksRef.current.delete(pageNum);
                setRenderedPages({
                    "PdfViewerPdfJs.useCallback[renderPage]": (prev)=>new Set([
                            ...prev,
                            pageNum
                        ])
                }["PdfViewerPdfJs.useCallback[renderPage]"]);
                console.log(`[PdfViewerPdfJs] Rendered page ${pageNum}/${totalPages}`);
            } catch (err) {
                // Clean up the render task reference
                renderTasksRef.current.delete(pageNum);
                // Ignore cancellation errors
                if (err?.name !== 'RenderingCancelledException') {
                    console.error(`[PdfViewerPdfJs] Error rendering page ${pageNum}:`, err);
                }
            } finally{
                // Always mark as no longer rendering
                renderingInProgressRef.current.set(pageNum, false);
            }
        }
    }["PdfViewerPdfJs.useCallback[renderPage]"], [
        pdfDoc,
        zoom,
        totalPages
    ]);
    // Cleanup render tasks when zoom changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PdfViewerPdfJs.useEffect": ()=>{
            // Cancel all existing render tasks when zoom changes
            const cancelAllTasks = {
                "PdfViewerPdfJs.useEffect.cancelAllTasks": async ()=>{
                    const cancelPromises = [];
                    renderTasksRef.current.forEach({
                        "PdfViewerPdfJs.useEffect.cancelAllTasks": (task, pageNum)=>{
                            cancelPromises.push(({
                                "PdfViewerPdfJs.useEffect.cancelAllTasks": async ()=>{
                                    try {
                                        await task.cancel();
                                    } catch (e) {
                                    // Ignore errors during cancellation
                                    }
                                }
                            })["PdfViewerPdfJs.useEffect.cancelAllTasks"]());
                        }
                    }["PdfViewerPdfJs.useEffect.cancelAllTasks"]);
                    await Promise.all(cancelPromises);
                    renderTasksRef.current.clear();
                    renderingInProgressRef.current.clear();
                    setRenderedPages(new Set());
                }
            }["PdfViewerPdfJs.useEffect.cancelAllTasks"];
            cancelAllTasks();
        }
    }["PdfViewerPdfJs.useEffect"], [
        zoom
    ]);
    // Cleanup on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PdfViewerPdfJs.useEffect": ()=>{
            return ({
                "PdfViewerPdfJs.useEffect": ()=>{
                    // Cancel all render tasks on unmount
                    renderTasksRef.current.forEach({
                        "PdfViewerPdfJs.useEffect": (task)=>{
                            try {
                                task.cancel();
                            } catch (e) {
                            // Ignore errors during cleanup
                            }
                        }
                    }["PdfViewerPdfJs.useEffect"]);
                    renderTasksRef.current.clear();
                    renderingInProgressRef.current.clear();
                }
            })["PdfViewerPdfJs.useEffect"];
        }
    }["PdfViewerPdfJs.useEffect"], []);
    // Initial PDF load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PdfViewerPdfJs.useEffect": ()=>{
            if (fileUrl) {
                loadPdf(fileUrl);
            }
        }
    }["PdfViewerPdfJs.useEffect"], [
        fileUrl,
        loadPdf
    ]);
    // Render visible pages
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PdfViewerPdfJs.useEffect": ()=>{
            if (pdfDoc && totalPages > 0) {
                // Render current page and a few pages around it for smooth scrolling
                const pagesToRender = [
                    currentPage,
                    Math.max(1, currentPage - 1),
                    Math.min(totalPages, currentPage + 1)
                ];
                // Render pages sequentially to avoid canvas conflicts
                const renderSequentially = {
                    "PdfViewerPdfJs.useEffect.renderSequentially": async ()=>{
                        for (const pageNum of pagesToRender){
                            if (!renderedPages.has(pageNum) && !renderingInProgressRef.current.get(pageNum)) {
                                await renderPage(pageNum);
                                // Small delay between renders to ensure clean separation
                                await new Promise({
                                    "PdfViewerPdfJs.useEffect.renderSequentially": (resolve)=>setTimeout(resolve, 50)
                                }["PdfViewerPdfJs.useEffect.renderSequentially"]);
                            }
                        }
                    }
                }["PdfViewerPdfJs.useEffect.renderSequentially"];
                // Use a small delay to ensure canvases are mounted and ready
                const timeoutId = setTimeout({
                    "PdfViewerPdfJs.useEffect.timeoutId": ()=>{
                        renderSequentially();
                    }
                }["PdfViewerPdfJs.useEffect.timeoutId"], 100);
                return ({
                    "PdfViewerPdfJs.useEffect": ()=>clearTimeout(timeoutId)
                })["PdfViewerPdfJs.useEffect"];
            }
        }
    }["PdfViewerPdfJs.useEffect"], [
        pdfDoc,
        currentPage,
        totalPages,
        renderPage,
        renderedPages
    ]);
    // Setup APIs
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PdfViewerPdfJs.useEffect": ()=>{
            if (!pdfDoc || !onReady) return;
            const apis = {
                gotoLocation: {
                    "PdfViewerPdfJs.useEffect": async ({ pageNumber, zoom: newZoom })=>{
                        if (pageNumber > 0 && pageNumber <= totalPages) {
                            setCurrentPage(pageNumber);
                            if (newZoom) {
                                setZoom(newZoom / 100); // Convert percentage to scale
                            }
                            // Scroll to page
                            const pageElement = document.getElementById(`pdf-page-${pageNumber}`);
                            if (pageElement) {
                                pageElement.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }
                        }
                    }
                }["PdfViewerPdfJs.useEffect"],
                getCurrentPage: {
                    "PdfViewerPdfJs.useEffect": ()=>currentPage
                }["PdfViewerPdfJs.useEffect"],
                getTotalPages: {
                    "PdfViewerPdfJs.useEffect": ()=>totalPages
                }["PdfViewerPdfJs.useEffect"],
                reload: {
                    "PdfViewerPdfJs.useEffect": async (file)=>{
                        const url = typeof file === 'string' ? file : URL.createObjectURL(file);
                        await loadPdf(url);
                    }
                }["PdfViewerPdfJs.useEffect"],
                search: {
                    "PdfViewerPdfJs.useEffect": async (query)=>{
                        // Basic text search implementation
                        try {
                            for(let pageNum = 1; pageNum <= totalPages; pageNum++){
                                const page = await pdfDoc.getPage(pageNum);
                                const textContent = await page.getTextContent();
                                const text = textContent.items.map({
                                    "PdfViewerPdfJs.useEffect.text": (item)=>item.str
                                }["PdfViewerPdfJs.useEffect.text"]).join(' ');
                                if (text.toLowerCase().includes(query.toLowerCase())) {
                                    return {
                                        pageNumber: pageNum
                                    };
                                }
                            }
                            return null;
                        } catch (err) {
                            console.error('[PdfViewerPdfJs] Search error:', err);
                            return null;
                        }
                    }
                }["PdfViewerPdfJs.useEffect"]
            };
            onReady(apis);
        }
    }["PdfViewerPdfJs.useEffect"], [
        pdfDoc,
        currentPage,
        totalPages,
        onReady,
        loadPdf
    ]);
    // Handle scroll to update current page
    const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PdfViewerPdfJs.useCallback[handleScroll]": ()=>{
            if (!containerRef.current) return;
            const container = containerRef.current;
            const scrollTop = container.scrollTop;
            // Find which page is most visible
            for(let pageNum = 1; pageNum <= totalPages; pageNum++){
                const pageElement = document.getElementById(`pdf-page-${pageNum}`);
                if (pageElement) {
                    const rect = pageElement.getBoundingClientRect();
                    const containerRect = container.getBoundingClientRect();
                    if (rect.top <= containerRect.top + 100 && rect.bottom >= containerRect.top) {
                        setCurrentPage(pageNum);
                        break;
                    }
                }
            }
        }
    }["PdfViewerPdfJs.useCallback[handleScroll]"], [
        totalPages
    ]);
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: className ?? 'w-full h-[75vh] rounded-md overflow-hidden border border-zinc-200 dark:border-zinc-800',
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center h-full p-6 bg-red-50 dark:bg-red-900/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-16 h-16 text-red-500 dark:text-red-400 mb-4",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        }, void 0, false, {
                            fileName: "[project]/components/editor/PdfViewerPdfJs.tsx",
                            lineNumber: 315,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/editor/PdfViewerPdfJs.tsx",
                        lineNumber: 309,
                        columnNumber: 6
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-red-700 dark:text-red-300 mb-2",
                        children: "Failed to Load PDF"
                    }, void 0, false, {
                        fileName: "[project]/components/editor/PdfViewerPdfJs.tsx",
                        lineNumber: 322,
                        columnNumber: 6
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-red-600 dark:text-red-400 text-center max-w-md",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/components/editor/PdfViewerPdfJs.tsx",
                        lineNumber: 323,
                        columnNumber: 6
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/editor/PdfViewerPdfJs.tsx",
                lineNumber: 308,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/editor/PdfViewerPdfJs.tsx",
            lineNumber: 307,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: className ?? 'w-full h-[75vh] rounded-md overflow-hidden border border-zinc-200 dark:border-zinc-800',
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center h-full p-6 bg-zinc-50 dark:bg-zinc-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-zinc-900 dark:border-zinc-100 mb-4"
                    }, void 0, false, {
                        fileName: "[project]/components/editor/PdfViewerPdfJs.tsx",
                        lineNumber: 333,
                        columnNumber: 6
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-zinc-600 dark:text-zinc-400",
                        children: "Loading PDF viewer..."
                    }, void 0, false, {
                        fileName: "[project]/components/editor/PdfViewerPdfJs.tsx",
                        lineNumber: 334,
                        columnNumber: 6
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/editor/PdfViewerPdfJs.tsx",
                lineNumber: 332,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/editor/PdfViewerPdfJs.tsx",
            lineNumber: 331,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: className ?? 'w-full h-[75vh] rounded-md overflow-auto border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900',
        onScroll: handleScroll,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 z-10 bg-white dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700 px-4 py-2 flex items-center justify-between shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    const newPage = Math.max(1, currentPage - 1);
                                    setCurrentPage(newPage);
                                    document.getElementById(`pdf-page-${newPage}`)?.scrollIntoView({
                                        behavior: 'smooth'
                                    });
                                },
                                disabled: currentPage <= 1,
                                className: "px-3 py-1 text-sm bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors",
                                children: "Previous"
                            }, void 0, false, {
                                fileName: "[project]/components/editor/PdfViewerPdfJs.tsx",
                                lineNumber: 349,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-zinc-700 dark:text-zinc-300",
                                children: [
                                    "Page ",
                                    currentPage,
                                    " of ",
                                    totalPages
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/editor/PdfViewerPdfJs.tsx",
                                lineNumber: 360,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    const newPage = Math.min(totalPages, currentPage + 1);
                                    setCurrentPage(newPage);
                                    document.getElementById(`pdf-page-${newPage}`)?.scrollIntoView({
                                        behavior: 'smooth'
                                    });
                                },
                                disabled: currentPage >= totalPages,
                                className: "px-3 py-1 text-sm bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors",
                                children: "Next"
                            }, void 0, false, {
                                fileName: "[project]/components/editor/PdfViewerPdfJs.tsx",
                                lineNumber: 363,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/editor/PdfViewerPdfJs.tsx",
                        lineNumber: 348,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setZoom((z)=>Math.max(0.5, z - 0.25)),
                                className: "px-3 py-1 text-sm bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 rounded hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors",
                                children: "-"
                            }, void 0, false, {
                                fileName: "[project]/components/editor/PdfViewerPdfJs.tsx",
                                lineNumber: 377,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-zinc-700 dark:text-zinc-300 min-w-[60px] text-center",
                                children: [
                                    Math.round(zoom * 100),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/editor/PdfViewerPdfJs.tsx",
                                lineNumber: 383,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setZoom((z)=>Math.min(3, z + 0.25)),
                                className: "px-3 py-1 text-sm bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 rounded hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors",
                                children: "+"
                            }, void 0, false, {
                                fileName: "[project]/components/editor/PdfViewerPdfJs.tsx",
                                lineNumber: 386,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/editor/PdfViewerPdfJs.tsx",
                        lineNumber: 376,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/editor/PdfViewerPdfJs.tsx",
                lineNumber: 347,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 space-y-4",
                children: Array.from({
                    length: totalPages
                }, (_, i)=>i + 1).map((pageNum)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: `pdf-page-${pageNum}`,
                        className: "bg-white dark:bg-white shadow-lg mx-auto",
                        style: {
                            maxWidth: 'fit-content'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                            ref: (el)=>{
                                if (el) {
                                    canvasRefs.current.set(pageNum, el);
                                // Don't eagerly render here - let the useEffect control rendering
                                } else {
                                    // Clean up when canvas is unmounted
                                    canvasRefs.current.delete(pageNum);
                                }
                            },
                            className: "block"
                        }, void 0, false, {
                            fileName: "[project]/components/editor/PdfViewerPdfJs.tsx",
                            lineNumber: 404,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0))
                    }, pageNum, false, {
                        fileName: "[project]/components/editor/PdfViewerPdfJs.tsx",
                        lineNumber: 398,
                        columnNumber: 6
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/editor/PdfViewerPdfJs.tsx",
                lineNumber: 396,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/editor/PdfViewerPdfJs.tsx",
        lineNumber: 341,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PdfViewerPdfJs, "VqrybKqv/B6YXFOWcp9h6sWHw5E=");
_c = PdfViewerPdfJs;
const __TURBOPACK__default__export__ = PdfViewerPdfJs;
var _c;
__turbopack_context__.k.register(_c, "PdfViewerPdfJs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/editor/PdfViewerPdfJs.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/editor/PdfViewerPdfJs.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_editor_PdfViewerPdfJs_tsx_1f0851c0._.js.map