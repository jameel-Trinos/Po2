(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/pdfjs-dist/build/pdf.mjs [app-client] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "static/chunks/node_modules_pdfjs-dist_build_pdf_mjs_3d65fee8._.js",
  "static/chunks/node_modules_pdfjs-dist_build_pdf_mjs_e73e82d2._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/node_modules/pdfjs-dist/build/pdf.mjs [app-client] (ecmascript)");
    });
});
}),
"[project]/components/compliance/PdfViewerWithHighlight.tsx [app-client] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "static/chunks/node_modules_d95ab8be._.js",
  "static/chunks/components_compliance_PdfViewerWithHighlight_tsx_4b363f1e._.js",
  {
    "path": "static/chunks/node_modules_react-pdf_dist_Page_68a5a099._.css",
    "included": [
      "[project]/node_modules/react-pdf/dist/Page/AnnotationLayer.css [app-client] (css)",
      "[project]/node_modules/react-pdf/dist/Page/TextLayer.css [app-client] (css)"
    ],
    "moduleChunks": [
      "static/chunks/node_modules_react-pdf_dist_Page_AnnotationLayer_css_bad6b30c._.single.css",
      "static/chunks/node_modules_react-pdf_dist_Page_TextLayer_css_bad6b30c._.single.css"
    ]
  },
  "static/chunks/components_compliance_PdfViewerWithHighlight_tsx_e4507a6e._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/components/compliance/PdfViewerWithHighlight.tsx [app-client] (ecmascript, next/dynamic entry)");
    });
});
}),
]);