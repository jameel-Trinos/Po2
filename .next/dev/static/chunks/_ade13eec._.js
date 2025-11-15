(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/separator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Separator({ className, orientation = "horizontal", decorative = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "separator",
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/separator.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Separator;
;
var _c;
__turbopack_context__.k.register(_c, "Separator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/editor/TinyMCEEditor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tinymce$2f$tinymce$2d$react$2f$lib$2f$es2015$2f$main$2f$ts$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tinymce$2f$tinymce$2d$react$2f$lib$2f$es2015$2f$main$2f$ts$2f$components$2f$Editor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/Editor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const TinyMCEEditor = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s(({ content, onContentChange, suggestions = [], selectedSuggestionIndex = null, className }, ref)=>{
    _s();
    const editorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Force dark mode always - never change based on system theme
    const isDarkMode = true;
    // Expose methods to parent via ref
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "TinyMCEEditor.useImperativeHandle": ()=>({
                highlightText: ({
                    "TinyMCEEditor.useImperativeHandle": (text)=>{
                        if (!editorRef.current) return;
                        highlightTextInEditor(editorRef.current, text);
                    }
                })["TinyMCEEditor.useImperativeHandle"],
                replaceText: ({
                    "TinyMCEEditor.useImperativeHandle": (original, replacement)=>{
                        if (!editorRef.current) return;
                        replaceTextInEditor(editorRef.current, original, replacement);
                    }
                })["TinyMCEEditor.useImperativeHandle"],
                getEditor: ({
                    "TinyMCEEditor.useImperativeHandle": ()=>editorRef.current
                })["TinyMCEEditor.useImperativeHandle"],
                getContent: ({
                    "TinyMCEEditor.useImperativeHandle": ()=>editorRef.current?.getContent() || ''
                })["TinyMCEEditor.useImperativeHandle"]
            })
    }["TinyMCEEditor.useImperativeHandle"]);
    // Update content when it changes externally
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TinyMCEEditor.useEffect": ()=>{
            if (editorRef.current && content !== editorRef.current.getContent()) {
                editorRef.current.setContent(content);
            }
        }
    }["TinyMCEEditor.useEffect"], [
        content
    ]);
    // Highlight selected suggestion
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TinyMCEEditor.useEffect": ()=>{
            if (editorRef.current && selectedSuggestionIndex !== null && suggestions[selectedSuggestionIndex]) {
                const suggestion = suggestions[selectedSuggestionIndex];
                const textToHighlight = suggestion.text || suggestion.original || '';
                if (textToHighlight) {
                    highlightTextInEditor(editorRef.current, textToHighlight);
                }
            }
        }
    }["TinyMCEEditor.useEffect"], [
        selectedSuggestionIndex,
        suggestions
    ]);
    const handleEditorChange = (content)=>{
        onContentChange(content);
    };
    const handleEditorInit = (_evt, editor)=>{
        editorRef.current = editor;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "force-dark-mode",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: `border-zinc-700 bg-gradient-to-b from-zinc-900 to-zinc-950 shadow-xl ${className || ''}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tinymce$2f$tinymce$2d$react$2f$lib$2f$es2015$2f$main$2f$ts$2f$components$2f$Editor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"], {
                    apiKey: ("TURBOPACK compile-time value", "jwe3v9sshhzgble0jczqr1lbi19c59cxsucej3931qp23ak7") || 'no-api-key',
                    onInit: handleEditorInit,
                    value: content,
                    onEditorChange: handleEditorChange,
                    init: {
                        height: '70vh',
                        menubar: 'file edit view insert format tools table help',
                        plugins: [
                            'advlist',
                            'autolink',
                            'lists',
                            'link',
                            'image',
                            'charmap',
                            'preview',
                            'anchor',
                            'searchreplace',
                            'visualblocks',
                            'code',
                            'fullscreen',
                            'insertdatetime',
                            'media',
                            'table',
                            'code',
                            'help',
                            'wordcount',
                            'nonbreaking',
                            'pagebreak',
                            'save',
                            'directionality',
                            'emoticons',
                            'codesample'
                        ],
                        toolbar: [
                            'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | forecolor backcolor | superscript subscript',
                            'alignleft aligncenter alignright alignjustify | outdent indent | bullist numlist | link image media table | charmap emoticons pagebreak',
                            'searchreplace visualblocks code codesample | insertdatetime nonbreaking anchor | fullscreen preview | removeformat help'
                        ],
                        toolbar_mode: 'sliding',
                        toolbar_sticky: true,
                        toolbar_sticky_offset: 0,
                        content_style: `
                body { 
                  font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif; 
                  font-size: 16px; 
                  padding: 30px; 
                  line-height: 1.7;
                  color: #f1f5f9;
                  background-color: #18181b;
                  max-width: 1100px;
                  margin: 0 auto;
                }
                h1, h2, h3, h4, h5, h6 {
                  margin-top: 1.5em;
                  margin-bottom: 0.5em;
                  font-weight: 600;
                  line-height: 1.3;
                  color: #f8fafc;
                }
                p {
                  margin-bottom: 1em;
                  color: #f1f5f9;
                  line-height: 1.6;
                }
                a {
                  color: #818cf8;
                  text-decoration: none;
                  border-bottom: 1px solid rgba(129, 140, 248, 0.3);
                  transition: border-color 0.2s ease;
                }
                a:hover {
                  border-bottom-color: #818cf8;
                }
                /* Table styling for better formatting */
                table {
                  border-collapse: collapse;
                  width: 100%;
                  margin: 1.5rem 0;
                  border: 1px solid #3f3f46;
                  background-color: #27272a;
                  overflow: hidden;
                  border-radius: 8px;
                }
                th {
                  background-color: #3f3f46;
                  color: #f8fafc;
                  font-weight: 600;
                  padding: 12px 16px;
                  text-align: left;
                  border: 1px solid #52525b;
                }
                td {
                  padding: 10px 16px;
                  border: 1px solid #3f3f46;
                  color: #e4e4e7;
                  vertical-align: top;
                }
                tr:nth-child(even) {
                  background-color: #2d2d31;
                }
                tr:hover {
                  background-color: #35353a;
                }
                /* Image styling for proper display */
                img {
                  max-width: 100%;
                  height: auto;
                  display: block;
                  margin: 1.5rem auto;
                  border-radius: 8px;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
                }
                /* List styling */
                ul, ol {
                  margin: 1rem 0;
                  padding-left: 2rem;
                  color: #f1f5f9;
                }
                li {
                  margin: 0.5rem 0;
                  line-height: 1.6;
                }
                /* Code blocks */
                pre, code {
                  background-color: #27272a;
                  border: 1px solid #3f3f46;
                  border-radius: 6px;
                  padding: 0.2em 0.4em;
                  font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
                  font-size: 0.9em;
                  color: #a5f3fc;
                }
                pre {
                  padding: 1em;
                  overflow-x: auto;
                  margin: 1rem 0;
                }
                /* Blockquote styling */
                blockquote {
                  border-left: 4px solid #818cf8;
                  padding-left: 1rem;
                  margin: 1rem 0;
                  color: #d1d5db;
                  font-style: italic;
                  background-color: rgba(129, 140, 248, 0.05);
                  padding: 1rem;
                  border-radius: 4px;
                }
              `,
                        skin: 'oxide-dark',
                        content_css: 'dark',
                        branding: false,
                        promotion: false,
                        // Hide promotion elements via CSS and ensure proper theming
                        init_instance_callback: (editor)=>{
                            const style = document.createElement('style');
                            style.textContent = `
                  .tox-promotion,
                  .tox-promotion-button,
                  .tox-statusbar__branding {
                    display: none !important;
                  }
                  /* Force dark mode always - beautiful enhanced styling */
                  .force-dark-mode .tox .tox-menubar,
                  .force-dark-mode .tox .tox-toolbar,
                  .force-dark-mode .tox .tox-toolbar__primary {
                    background: linear-gradient(135deg, #1e1e24 0%, #27272a 100%) !important;
                    border-bottom: 1px solid rgba(124, 58, 237, 0.2) !important;
                  }
                  .force-dark-mode .tox .tox-toolbar__group,
                  .force-dark-mode .tox .tox-split-button,
                  .force-dark-mode .tox .tox-tbtn {
                    color: #e4e4e7 !important;
                  }
                  .force-dark-mode .tox .tox-tbtn__select-label,
                  .force-dark-mode .tox .tox-tbtn--select {
                    color: #e4e4e7 !important;
                    font-weight: 500 !important;
                  }
                  /* Enhanced menubar styling */
                  .force-dark-mode .tox .tox-mbtn {
                    color: #f4f4f5 !important;
                    font-weight: 500 !important;
                    padding: 8px 14px !important;
                    border-radius: 6px !important;
                    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
                  }
                  .force-dark-mode .tox .tox-mbtn:hover {
                    background: rgba(124, 58, 237, 0.15) !important;
                    transform: translateY(-1px) !important;
                  }
                  /* Enhanced toolbar button styling */
                  .force-dark-mode .tox .tox-tbtn {
                    border-radius: 6px !important;
                    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
                  }
                  .force-dark-mode .tox .tox-tbtn:hover {
                    background: rgba(124, 58, 237, 0.15) !important;
                    transform: scale(1.05) !important;
                  }
                  .force-dark-mode .tox .tox-tbtn--enabled {
                    background: rgba(124, 58, 237, 0.2) !important;
                  }
                  .force-dark-mode .tox .tox-tbtn svg {
                    fill: #d4d4d8 !important;
                  }
                  .force-dark-mode .tox .tox-tbtn:hover svg,
                  .force-dark-mode .tox .tox-tbtn--enabled svg {
                    fill: #c4b5fd !important;
                  }
                  /* Group separators */
                  .force-dark-mode .tox .tox-toolbar__group {
                    border-right: 1px solid rgba(124, 58, 237, 0.2) !important;
                  }
                  /* Editor container */
                  .force-dark-mode .tox-tinymce {
                    border: 1px solid rgba(124, 58, 237, 0.3) !important;
                    border-radius: 12px !important;
                    overflow: hidden !important;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(124, 58, 237, 0.1) !important;
                  }
                  /* Dropdowns and panels */
                  .force-dark-mode .tox .tox-collection,
                  .force-dark-mode .tox .tox-menu,
                  .force-dark-mode .tox .tox-dialog {
                    background: #27272a !important;
                    border: 1px solid rgba(124, 58, 237, 0.3) !important;
                  }
                `;
                            document.head.appendChild(style);
                        },
                        resize: true,
                        statusbar: false,
                        paste_as_text: false,
                        paste_auto_cleanup_on_paste: true,
                        paste_retain_style_properties: 'all',
                        paste_merge_formats: true,
                        convert_urls: false,
                        font_size_formats: '8pt 10pt 12pt 14pt 16pt 18pt 24pt 28pt 36pt 48pt',
                        font_family_formats: 'System Font=-apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, sans-serif; Arial=arial,helvetica,sans-serif; Times New Roman=times new roman,times,serif; Courier New=courier new,courier,monospace; Georgia=georgia,palatino,serif; Verdana=verdana,geneva,sans-serif',
                        // Table plugin settings for better table handling
                        table_use_colgroups: true,
                        table_resize_bars: true,
                        table_default_attributes: {
                            border: '1'
                        },
                        table_default_styles: {
                            'border-collapse': 'collapse',
                            'width': '100%',
                            'border': '1px solid #3f3f46',
                            'background-color': '#27272a'
                        },
                        table_cell_default_styles: {
                            'padding': '10px 16px',
                            'border': '1px solid #3f3f46',
                            'vertical-align': 'top'
                        },
                        table_header_default_styles: {
                            'background-color': '#3f3f46',
                            'font-weight': '600',
                            'padding': '12px 16px'
                        },
                        // Image settings for better image handling
                        image_advtab: true,
                        image_dimensions: true,
                        image_class_list: [
                            {
                                title: 'Responsive',
                                value: 'img-responsive'
                            },
                            {
                                title: 'Full Width',
                                value: 'img-full-width'
                            },
                            {
                                title: 'Center',
                                value: 'img-center'
                            }
                        ],
                        setup: (editor)=>{
                            // Add custom command to highlight text
                            editor.addCommand('highlightText', (ui, value)=>{
                                if (value) {
                                    highlightTextInEditor(editor, value);
                                }
                            });
                            // Add custom command to replace text
                            editor.addCommand('replaceText', (ui, value)=>{
                                if (value?.original && value?.replacement) {
                                    replaceTextInEditor(editor, value.original, value.replacement);
                                }
                            });
                        }
                    }
                }, "dark", false, {
                    fileName: "[project]/components/editor/TinyMCEEditor.tsx",
                    lineNumber: 74,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/editor/TinyMCEEditor.tsx",
                lineNumber: 73,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/editor/TinyMCEEditor.tsx",
            lineNumber: 72,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/editor/TinyMCEEditor.tsx",
        lineNumber: 71,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
}, "dLF0kuu5Z+Vav+inFWoZjx0Uo5c=")), "dLF0kuu5Z+Vav+inFWoZjx0Uo5c=");
_c1 = TinyMCEEditor;
TinyMCEEditor.displayName = 'TinyMCEEditor';
/**
 * Highlight text in TinyMCE editor (yellow highlight)
 */ function highlightTextInEditor(editor, text) {
    if (!text || !text.trim()) return;
    try {
        // Remove previous highlights
        const body = editor.getBody();
        const existingHighlights = body.querySelectorAll('mark.suggestion-highlight');
        existingHighlights.forEach((el)=>{
            const parent = el.parentNode;
            if (parent) {
                while(el.firstChild){
                    parent.insertBefore(el.firstChild, el);
                }
                parent.removeChild(el);
                parent.normalize();
            }
        });
        // Get plain text content for searching
        const plainText = editor.getContent({
            format: 'text'
        });
        const searchText = text.trim().toLowerCase();
        const lowerText = plainText.toLowerCase();
        const index = lowerText.indexOf(searchText);
        if (index === -1) {
            console.warn('Text not found in editor:', text);
            return;
        }
        // Use TinyMCE's searchreplace plugin or manual DOM manipulation
        const htmlContent = editor.getContent();
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlContent;
        // Find text nodes that contain the search text
        const walker = document.createTreeWalker(tempDiv, NodeFilter.SHOW_TEXT, null);
        let currentNode = null;
        let cumulativeLength = 0;
        let found = false;
        while((currentNode = walker.nextNode()) && !found){
            const textNode = currentNode;
            const nodeText = textNode.textContent || '';
            const nodeLowerText = nodeText.toLowerCase();
            const nodeStart = cumulativeLength;
            const nodeEnd = cumulativeLength + nodeText.length;
            cumulativeLength = nodeEnd;
            // Check if this node contains the search text
            const searchIndex = nodeLowerText.indexOf(searchText);
            if (searchIndex !== -1) {
                // Found the text in this node
                const beforeText = nodeText.substring(0, searchIndex);
                const matchText = nodeText.substring(searchIndex, searchIndex + searchText.length);
                const afterText = nodeText.substring(searchIndex + searchText.length);
                // Create fragment with highlighted text
                const fragment = document.createDocumentFragment();
                if (beforeText) {
                    fragment.appendChild(document.createTextNode(beforeText));
                }
                const mark = document.createElement('mark');
                mark.className = 'suggestion-highlight';
                mark.setAttribute('style', 'background-color: #fef08a; color: #000; padding: 2px 4px; border-radius: 3px;');
                mark.textContent = matchText;
                fragment.appendChild(mark);
                if (afterText) {
                    fragment.appendChild(document.createTextNode(afterText));
                }
                // Replace the text node with the fragment
                textNode.parentNode?.replaceChild(fragment, textNode);
                found = true;
            }
        }
        if (found) {
            // Update editor with highlighted content
            editor.setContent(tempDiv.innerHTML);
            // Scroll to highlighted text
            setTimeout(()=>{
                const highlight = editor.getBody().querySelector('mark.suggestion-highlight');
                if (highlight) {
                    editor.selection.select(highlight);
                    editor.selection.scrollIntoView();
                    // Also try to scroll the editor window
                    highlight.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                }
            }, 100);
        }
    } catch (error) {
        console.error('Error highlighting text in TinyMCE:', error);
    }
}
/**
 * Replace text in TinyMCE editor
 */ function replaceTextInEditor(editor, original, replacement) {
    if (!original || !original.trim()) return;
    try {
        // Remove any existing highlights first
        const body = editor.getBody();
        const existingHighlights = body.querySelectorAll('mark.suggestion-highlight');
        existingHighlights.forEach((el)=>{
            const parent = el.parentNode;
            if (parent) {
                while(el.firstChild){
                    parent.insertBefore(el.firstChild, el);
                }
                parent.removeChild(el);
                parent.normalize();
            }
        });
        // Get current content
        const htmlContent = editor.getContent();
        const plainText = editor.getContent({
            format: 'text'
        });
        const searchText = original.trim().toLowerCase();
        const lowerText = plainText.toLowerCase();
        const index = lowerText.indexOf(searchText);
        if (index === -1) {
            console.warn('Text not found in editor for replacement:', original);
            return;
        }
        // Create temporary DOM for manipulation
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlContent;
        // Find and replace text
        const walker = document.createTreeWalker(tempDiv, NodeFilter.SHOW_TEXT, null);
        let currentNode = null;
        let cumulativeLength = 0;
        let replaced = false;
        while((currentNode = walker.nextNode()) && !replaced){
            const textNode = currentNode;
            const nodeText = textNode.textContent || '';
            const nodeLowerText = nodeText.toLowerCase();
            const nodeStart = cumulativeLength;
            const nodeEnd = cumulativeLength + nodeText.length;
            cumulativeLength = nodeEnd;
            // Check if this node contains the search text
            const searchIndex = nodeLowerText.indexOf(searchText);
            if (searchIndex !== -1) {
                // Found the text in this node - replace it
                const beforeText = nodeText.substring(0, searchIndex);
                const afterText = nodeText.substring(searchIndex + searchText.length);
                // Create fragment with replacement text
                const fragment = document.createDocumentFragment();
                if (beforeText) {
                    fragment.appendChild(document.createTextNode(beforeText));
                }
                fragment.appendChild(document.createTextNode(replacement));
                if (afterText) {
                    fragment.appendChild(document.createTextNode(afterText));
                }
                // Replace the text node with the fragment
                textNode.parentNode?.replaceChild(fragment, textNode);
                replaced = true;
            }
        }
        if (replaced) {
            // Update editor with replaced content
            editor.setContent(tempDiv.innerHTML);
        }
    } catch (error) {
        console.error('Error replacing text in TinyMCE:', error);
    }
}
const __TURBOPACK__default__export__ = TinyMCEEditor;
var _c, _c1;
__turbopack_context__.k.register(_c, "TinyMCEEditor$forwardRef");
__turbopack_context__.k.register(_c1, "TinyMCEEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/compliance/SuggestionCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SuggestionCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
"use client";
;
;
;
;
;
function SuggestionCard({ suggestion, index, isSelected, onSelect, onApply, isApplying = false }) {
    const getSeverityIcon = ()=>{
        switch(suggestion.severity){
            case 'critical':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                    className: "h-4 w-4 text-red-500"
                }, void 0, false, {
                    fileName: "[project]/components/compliance/SuggestionCard.tsx",
                    lineNumber: 40,
                    columnNumber: 16
                }, this);
            case 'warning':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                    className: "h-4 w-4 text-yellow-500"
                }, void 0, false, {
                    fileName: "[project]/components/compliance/SuggestionCard.tsx",
                    lineNumber: 42,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                    className: "h-4 w-4 text-blue-500"
                }, void 0, false, {
                    fileName: "[project]/components/compliance/SuggestionCard.tsx",
                    lineNumber: 44,
                    columnNumber: 16
                }, this);
        }
    };
    const getSeverityColor = ()=>{
        switch(suggestion.severity){
            case 'critical':
                return 'destructive';
            case 'warning':
                return 'default';
            default:
                return 'secondary';
        }
    };
    const getCategoryColor = ()=>{
        switch(suggestion.category){
            case 'FINRA':
                return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
            case 'SEC':
                return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
            case 'Grammar':
                return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
        }
    };
    if (suggestion.isApplied) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/30",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 text-green-700 dark:text-green-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/components/compliance/SuggestionCard.tsx",
                            lineNumber: 77,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-medium",
                            children: "Applied"
                        }, void 0, false, {
                            fileName: "[project]/components/compliance/SuggestionCard.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/compliance/SuggestionCard.tsx",
                    lineNumber: 76,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/compliance/SuggestionCard.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/compliance/SuggestionCard.tsx",
            lineNumber: 74,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: `border cursor-pointer transition-all hover:shadow-md ${isSelected ? 'border-emerald-500 dark:border-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 shadow-lg' : 'border-zinc-200 dark:border-zinc-700'}`,
        onClick: onSelect,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "p-4 space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                getSeverityIcon(),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: getSeverityColor(),
                                    className: "text-xs",
                                    children: suggestion.severity
                                }, void 0, false, {
                                    fileName: "[project]/components/compliance/SuggestionCard.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/compliance/SuggestionCard.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            className: `text-xs ${getCategoryColor()}`,
                            children: suggestion.category
                        }, void 0, false, {
                            fileName: "[project]/components/compliance/SuggestionCard.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/compliance/SuggestionCard.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-700 dark:text-gray-300",
                    children: suggestion.explanation
                }, void 0, false, {
                    fileName: "[project]/components/compliance/SuggestionCard.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2 text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 bg-red-50 dark:bg-red-950/30 rounded border border-red-200 dark:border-red-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-700 dark:text-red-300 font-medium mb-1",
                                    children: "Original:"
                                }, void 0, false, {
                                    fileName: "[project]/components/compliance/SuggestionCard.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-900 dark:text-red-100",
                                    children: suggestion.originalText
                                }, void 0, false, {
                                    fileName: "[project]/components/compliance/SuggestionCard.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/compliance/SuggestionCard.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 bg-green-50 dark:bg-green-950/30 rounded border border-green-200 dark:border-green-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-green-700 dark:text-green-300 font-medium mb-1",
                                    children: "Suggested:"
                                }, void 0, false, {
                                    fileName: "[project]/components/compliance/SuggestionCard.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-green-900 dark:text-green-100",
                                    children: suggestion.suggestedText
                                }, void 0, false, {
                                    fileName: "[project]/components/compliance/SuggestionCard.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/compliance/SuggestionCard.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/compliance/SuggestionCard.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this),
                suggestion.page && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-gray-500 dark:text-gray-400",
                    children: [
                        "Page ",
                        suggestion.page
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/compliance/SuggestionCard.tsx",
                    lineNumber: 127,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "default",
                    size: "sm",
                    className: "w-full",
                    onClick: (e)=>{
                        e.stopPropagation();
                        onApply();
                    },
                    disabled: isApplying,
                    children: isApplying ? 'Applying...' : 'Apply Change'
                }, void 0, false, {
                    fileName: "[project]/components/compliance/SuggestionCard.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/compliance/SuggestionCard.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/compliance/SuggestionCard.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_c = SuggestionCard;
var _c;
__turbopack_context__.k.register(_c, "SuggestionCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/alert.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Alert",
    ()=>Alert,
    "AlertDescription",
    ()=>AlertDescription,
    "AlertTitle",
    ()=>AlertTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const alertVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", {
    variants: {
        variant: {
            default: "bg-card text-card-foreground",
            destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Alert({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert",
        role: "alert",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(alertVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = Alert;
function AlertTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c1 = AlertTitle;
function AlertDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c2 = AlertDescription;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Alert");
__turbopack_context__.k.register(_c1, "AlertTitle");
__turbopack_context__.k.register(_c2, "AlertDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/tooltip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tooltip",
    ()=>Tooltip,
    "TooltipContent",
    ()=>TooltipContent,
    "TooltipProvider",
    ()=>TooltipProvider,
    "TooltipTrigger",
    ()=>TooltipTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function TooltipProvider({ delayDuration = 0, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        "data-slot": "tooltip-provider",
        delayDuration: delayDuration,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tooltip.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = TooltipProvider;
function Tooltip({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TooltipProvider, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            "data-slot": "tooltip",
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/tooltip.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/tooltip.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c1 = Tooltip;
function TooltipTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "tooltip-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tooltip.tsx",
        lineNumber: 34,
        columnNumber: 10
    }, this);
}
_c2 = TooltipTrigger;
function TooltipContent({ className, sideOffset = 0, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "tooltip-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Arrow"], {
                    className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"
                }, void 0, false, {
                    fileName: "[project]/components/ui/tooltip.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/tooltip.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/tooltip.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c3 = TooltipContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "TooltipProvider");
__turbopack_context__.k.register(_c1, "Tooltip");
__turbopack_context__.k.register(_c2, "TooltipTrigger");
__turbopack_context__.k.register(_c3, "TooltipContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/compliance/DocumentUpload.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DocumentUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/alert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/tooltip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$type$2d$corner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileType2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-type-corner.js [app-client] (ecmascript) <export default as FileType2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function DocumentUpload({ onUploadSuccess, onError }) {
    _s();
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isConverting, setIsConverting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleFileChange = (e)=>{
        const selectedFile = e.target.files?.[0] || null;
        setFile(selectedFile);
        setError(null);
        if (selectedFile) {
            const fileName = selectedFile.name.toLowerCase();
            const isValidFile = fileName.endsWith('.docx') || fileName.endsWith('.pdf');
            if (!isValidFile) {
                setError('Please select a .docx or .pdf file');
                setFile(null);
            }
        }
    };
    const handleUpload = async ()=>{
        if (!file) {
            setError('Please select a document to upload.');
            return;
        }
        setIsUploading(true);
        setError(null);
        try {
            const formData = new FormData();
            formData.append('file', file);
            console.log('📤 Uploading file to /api/compliance/analyze...');
            const response = await fetch('/api/compliance/analyze', {
                method: 'POST',
                body: formData,
                credentials: 'include'
            });
            console.log('📥 Response status:', response.status, response.statusText);
            if (!response.ok) {
                console.log('⚠️ Response is not OK, handling error...');
                // Initialize with guaranteed default values
                const defaultError = {
                    error: 'Server Error',
                    details: `Request failed with status ${response.status}: ${response.statusText}`
                };
                let errorData = {
                    ...defaultError
                };
                console.log('🔧 Initialized errorData with defaults:', errorData);
                try {
                    console.log('📖 Attempting to read response body...');
                    // Clone the response so we can read it multiple times if needed
                    const clonedResponse = response.clone();
                    const text = await clonedResponse.text();
                    console.log('📄 Raw error response text:', text);
                    console.log('📄 Response text length:', text.length);
                    console.log('📄 Response Content-Type:', response.headers.get('content-type'));
                    console.log('📄 Text is truthy:', !!text);
                    console.log('📄 Trimmed text length:', text?.trim().length);
                    // Only try to parse if we have content
                    if (text && text.trim()) {
                        console.log('✅ Have text content, attempting to parse JSON...');
                        try {
                            const parsed = JSON.parse(text);
                            console.log('📄 Successfully parsed JSON:', parsed);
                            console.log('📄 Parsed type:', typeof parsed);
                            console.log('📄 Parsed keys:', parsed ? Object.keys(parsed) : 'null');
                            // Check if the parsed data has meaningful content
                            if (parsed && typeof parsed === 'object' && Object.keys(parsed).length > 0) {
                                console.log('✅ Parsed object has keys');
                                // Ensure we have at least error or details
                                if (parsed.error || parsed.details || parsed.message) {
                                    console.log('✅ Found error/details/message in parsed data');
                                    errorData = {
                                        error: parsed.error || 'Server error',
                                        details: parsed.details || parsed.message || 'An error occurred'
                                    };
                                    console.log('✅ Updated errorData:', errorData);
                                } else {
                                    // Has keys but no error/details - might be a different format
                                    console.warn('⚠️ Parsed JSON has no error/details/message fields:', parsed);
                                    errorData = {
                                        error: 'Server error',
                                        details: `Server returned: ${JSON.stringify(parsed)}`
                                    };
                                    console.log('✅ Updated errorData with stringified response:', errorData);
                                }
                            } else {
                                // Empty object or invalid JSON
                                console.warn('⚠️ Received empty or invalid JSON from server');
                                errorData = {
                                    error: 'Empty Response',
                                    details: `The server returned an empty response (HTTP ${response.status}). This may indicate an unhandled error in the API.`
                                };
                                console.log('✅ Updated errorData with empty response message:', errorData);
                            }
                        } catch (jsonError) {
                            console.error('❌ JSON parse error:', jsonError);
                            console.log('Using raw text as error details');
                            // If JSON parsing fails, use the raw text as details
                            errorData = {
                                error: 'Invalid Response Format',
                                details: text.length > 500 ? text.substring(0, 500) + '...' : text
                            };
                            console.log('✅ Updated errorData with raw text:', errorData);
                        }
                    } else {
                        console.warn('⚠️ Empty error response body (no text)');
                        errorData = {
                            error: 'Empty Response',
                            details: `The server returned an error (HTTP ${response.status}) but no response body. Please check the server logs.`
                        };
                        console.log('✅ Updated errorData for empty body:', errorData);
                    }
                } catch (readError) {
                    console.error('❌ Failed to read error response:', readError);
                    console.log('Keeping default errorData');
                // errorData already has default values, no need to change
                }
                // Final safety check - ensure errorData is never empty
                if (!errorData || typeof errorData !== 'object' || Object.keys(errorData).length === 0) {
                    console.error('🚨 CRITICAL: errorData is empty or invalid, resetting to default');
                    errorData = {
                        ...defaultError
                    };
                }
                // Ensure at least one of error or details is present
                if (!errorData.error && !errorData.details) {
                    console.error('🚨 CRITICAL: errorData has no error or details, adding defaults');
                    errorData = {
                        ...defaultError
                    };
                }
                console.error('❌ Final error data:', JSON.stringify(errorData));
                console.error('❌ Final error data keys:', Object.keys(errorData));
                console.error('❌ Final error data.error:', errorData.error);
                console.error('❌ Final error data.details:', errorData.details);
                // Build error message with multiple fallbacks
                let errorMsg = 'Unknown error occurred';
                if (errorData.error && errorData.details) {
                    errorMsg = `${errorData.error}: ${errorData.details}`;
                } else if (errorData.error) {
                    errorMsg = errorData.error;
                } else if (errorData.details) {
                    errorMsg = errorData.details;
                } else {
                    errorMsg = `Failed to analyze document (HTTP ${response.status}: ${response.statusText})`;
                }
                console.error('❌ Final error message:', errorMsg);
                throw new Error(errorMsg);
            }
            const data = await response.json();
            console.log('✅ Analysis complete! Response data:', data);
            onUploadSuccess(data);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to process the file.';
            setError(errorMessage);
            onError(errorMessage);
        } finally{
            setIsUploading(false);
        }
    };
    // Handle PDF to Word conversion
    const handleConvertToWord = async ()=>{
        if (!file) {
            setError('Please select a PDF file to convert.');
            return;
        }
        const fileName = file.name.toLowerCase();
        if (!fileName.endsWith('.pdf')) {
            setError('Only PDF files can be converted to Word.');
            return;
        }
        setIsConverting(true);
        setError(null);
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info('Converting PDF to Word...', {
                description: 'This may take a few moments.'
            });
            // Create FormData to send to the API
            const formData = new FormData();
            formData.append('file', file);
            console.log('📤 Converting PDF to DOCX via /api/convert/pdf-to-docx...');
            const response = await fetch('/api/convert/pdf-to-docx', {
                method: 'POST',
                body: formData
            });
            console.log('📥 Conversion response status:', response.status, response.statusText);
            if (!response.ok) {
                let errorMessage = 'Failed to convert PDF to Word';
                let errorDetails = '';
                try {
                    const contentType = response.headers.get('content-type');
                    const text = await response.text();
                    if (contentType && contentType.includes('application/json') && text) {
                        const errorData = JSON.parse(text);
                        errorMessage = errorData.message || errorData.error || errorMessage;
                        errorDetails = errorData.details || '';
                        // Provide user-friendly messages
                        if (errorDetails.includes('Network error') || errorDetails.includes('timeout')) {
                            errorMessage = 'Conversion timeout';
                            errorDetails = 'The conversion is taking too long. Please try again or use a smaller PDF.';
                        } else if (errorDetails.includes('credentials')) {
                            errorMessage = 'Configuration error';
                            errorDetails = 'PDF conversion service needs configuration. Please contact support.';
                        } else if (errorData.fallbackError) {
                            errorMessage = 'Cannot convert this PDF';
                            errorDetails = 'This PDF may be encrypted, corrupted, or in an unsupported format.';
                        }
                    } else if (text) {
                        errorDetails = text.substring(0, 200);
                    }
                } catch (e) {
                    console.error('Error reading response:', e);
                }
                // Show detailed error to user
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(errorMessage, {
                    description: errorDetails,
                    duration: 7000
                });
                throw new Error(errorMessage);
            }
            // Get the DOCX blob
            const docxBlob = await response.blob();
            console.log('✅ PDF converted to DOCX, blob size:', docxBlob.size);
            // Create a new File object from the blob
            const docxFile = new File([
                docxBlob
            ], file.name.replace(/\.pdf$/i, '.docx'), {
                type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('PDF converted to Word!', {
                description: 'Now analyzing the document for compliance...'
            });
            // Now upload the converted DOCX file for analysis
            const analysisFormData = new FormData();
            analysisFormData.append('file', docxFile);
            console.log('📤 Uploading converted DOCX to /api/compliance/analyze...');
            const analysisResponse = await fetch('/api/compliance/analyze', {
                method: 'POST',
                body: analysisFormData,
                credentials: 'include'
            });
            console.log('📥 Analysis response status:', analysisResponse.status, analysisResponse.statusText);
            if (!analysisResponse.ok) {
                const defaultError = {
                    error: 'Analysis Error',
                    details: `Request failed with status ${analysisResponse.status}: ${analysisResponse.statusText}`
                };
                let errorData = {
                    ...defaultError
                };
                try {
                    const text = await analysisResponse.text();
                    if (text && text.trim()) {
                        try {
                            const parsed = JSON.parse(text);
                            if (parsed && (parsed.error || parsed.details || parsed.message)) {
                                errorData = {
                                    error: parsed.error || 'Server error',
                                    details: parsed.details || parsed.message || 'An error occurred'
                                };
                            } else {
                                errorData = {
                                    error: 'Server error',
                                    details: `Server returned: ${JSON.stringify(parsed)}`
                                };
                            }
                        } catch (jsonError) {
                            errorData = {
                                error: 'Invalid Response Format',
                                details: text.length > 500 ? text.substring(0, 500) + '...' : text
                            };
                        }
                    } else {
                        errorData = {
                            error: 'Empty Response',
                            details: `The server returned an error (HTTP ${analysisResponse.status}) but no response body.`
                        };
                    }
                } catch (readError) {
                    console.error('Failed to read error response:', readError);
                }
                const errorMsg = errorData.error && errorData.details ? `${errorData.error}: ${errorData.details}` : errorData.error || errorData.details || `Failed to analyze document (HTTP ${analysisResponse.status})`;
                throw new Error(errorMsg);
            }
            const data = await analysisResponse.json();
            console.log('✅ Analysis complete! Response data:', data);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Conversion and analysis complete!');
            onUploadSuccess(data);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to convert PDF to Word.';
            console.error('❌ Conversion error:', errorMessage);
            setError(errorMessage);
            onError(errorMessage);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Conversion failed', {
                description: errorMessage
            });
        } finally{
            setIsConverting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    className: "text-gray-900 dark:text-gray-50 flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/components/compliance/DocumentUpload.tsx",
                            lineNumber: 369,
                            columnNumber: 11
                        }, this),
                        "Upload Document for Compliance Review"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/compliance/DocumentUpload.tsx",
                    lineNumber: 368,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/compliance/DocumentUpload.tsx",
                lineNumber: 367,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "space-y-4",
                children: [
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                        variant: "destructive",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                                children: "Error"
                            }, void 0, false, {
                                fileName: "[project]/components/compliance/DocumentUpload.tsx",
                                lineNumber: 376,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/components/compliance/DocumentUpload.tsx",
                                lineNumber: 377,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/compliance/DocumentUpload.tsx",
                        lineNumber: 375,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "file-upload",
                                className: "text-gray-700 dark:text-gray-300",
                                children: "Select Document (PDF or DOCX)"
                            }, void 0, false, {
                                fileName: "[project]/components/compliance/DocumentUpload.tsx",
                                lineNumber: 382,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "file-upload",
                                        type: "file",
                                        accept: ".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                                        onChange: handleFileChange,
                                        disabled: isUploading,
                                        className: "flex-1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/compliance/DocumentUpload.tsx",
                                        lineNumber: 386,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: handleUpload,
                                        disabled: !file || isUploading,
                                        className: "whitespace-nowrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                className: "h-4 w-4 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/components/compliance/DocumentUpload.tsx",
                                                lineNumber: 399,
                                                columnNumber: 15
                                            }, this),
                                            isUploading ? 'Analyzing...' : 'Analyze'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/compliance/DocumentUpload.tsx",
                                        lineNumber: 394,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/compliance/DocumentUpload.tsx",
                                lineNumber: 385,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 dark:text-gray-400",
                                children: "Supported formats: PDF, DOCX (up to 10MB). Analysis checks for FINRA, SEC, and grammar compliance."
                            }, void 0, false, {
                                fileName: "[project]/components/compliance/DocumentUpload.tsx",
                                lineNumber: 403,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/compliance/DocumentUpload.tsx",
                        lineNumber: 381,
                        columnNumber: 9
                    }, this),
                    file && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-blue-700 dark:text-blue-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: "Selected:"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/compliance/DocumentUpload.tsx",
                                                    lineNumber: 413,
                                                    columnNumber: 19
                                                }, this),
                                                " ",
                                                file.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/compliance/DocumentUpload.tsx",
                                            lineNumber: 412,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-blue-600 dark:text-blue-400 mt-1",
                                            children: [
                                                "Size: ",
                                                (file.size / 1024 / 1024).toFixed(2),
                                                " MB"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/compliance/DocumentUpload.tsx",
                                            lineNumber: 415,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/compliance/DocumentUpload.tsx",
                                    lineNumber: 411,
                                    columnNumber: 15
                                }, this),
                                file.name.toLowerCase().endsWith('.pdf') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipProvider"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    size: "sm",
                                                    onClick: handleConvertToWord,
                                                    disabled: isConverting || isUploading,
                                                    className: "ml-2 h-8 w-8 p-0",
                                                    children: isConverting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        className: "h-4 w-4 animate-spin text-blue-600 dark:text-blue-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/compliance/DocumentUpload.tsx",
                                                        lineNumber: 433,
                                                        columnNumber: 27
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$type$2d$corner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileType2$3e$__["FileType2"], {
                                                        className: "h-4 w-4 text-blue-600 dark:text-blue-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/compliance/DocumentUpload.tsx",
                                                        lineNumber: 435,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/compliance/DocumentUpload.tsx",
                                                    lineNumber: 425,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/compliance/DocumentUpload.tsx",
                                                lineNumber: 424,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Convert PDF to Word for editing"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/compliance/DocumentUpload.tsx",
                                                    lineNumber: 440,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/compliance/DocumentUpload.tsx",
                                                lineNumber: 439,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/compliance/DocumentUpload.tsx",
                                        lineNumber: 423,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/compliance/DocumentUpload.tsx",
                                    lineNumber: 422,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/compliance/DocumentUpload.tsx",
                            lineNumber: 410,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/compliance/DocumentUpload.tsx",
                        lineNumber: 409,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/compliance/DocumentUpload.tsx",
                lineNumber: 373,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/compliance/DocumentUpload.tsx",
        lineNumber: 366,
        columnNumber: 5
    }, this);
}
_s(DocumentUpload, "+5NbgLzqWz8ID6jGO7NxhePUnb4=");
_c = DocumentUpload;
var _c;
__turbopack_context__.k.register(_c, "DocumentUpload");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/services/pdfWordConverter.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applySuggestionsToWordContent",
    ()=>applySuggestionsToWordContent,
    "convertHtmlToPdf",
    ()=>convertHtmlToPdf,
    "convertPdfToHtml",
    ()=>convertPdfToHtml,
    "convertWordToPdf",
    ()=>convertWordToPdf,
    "htmlToWordBlob",
    ()=>htmlToWordBlob,
    "wordBlobToHtml",
    ()=>wordBlobToHtml
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mammoth$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mammoth/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/docx/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/pdf-lib/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-lib/es/api/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-lib/es/api/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$StandardFonts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-lib/es/api/StandardFonts.js [app-client] (ecmascript)");
;
;
;
// Helper function to load pdfjs dynamically
async function loadPdfJs() {
    const pdfjs = await __turbopack_context__.A("[project]/node_modules/pdfjs-dist/build/pdf.mjs [app-client] (ecmascript, async loader)");
    if (("TURBOPACK compile-time value", "object") !== 'undefined' && !pdfjs.GlobalWorkerOptions.workerSrc) {
        pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
    }
    return pdfjs;
}
/**
 * Sanitize text to replace Unicode characters that can't be encoded in WinAnsi
 * with ASCII equivalents
 */ function sanitizeTextForPdf(text) {
    // Map of common Unicode characters to ASCII equivalents
    const unicodeMap = {
        '→': '->',
        '←': '<-',
        '↑': '^',
        '↓': 'v',
        '⇒': '=>',
        '⇐': '<=',
        '•': '*',
        '–': '-',
        '—': '--',
        '…': '...',
        '\u201C': '"',
        '\u201D': '"',
        '\u2018': "'",
        '\u2019': "'",
        '©': '(c)',
        '®': '(R)',
        '™': '(TM)',
        '€': 'EUR',
        '£': 'GBP',
        '¥': 'JPY'
    };
    let sanitized = text;
    // Replace known Unicode characters
    Object.entries(unicodeMap).forEach(([unicode, ascii])=>{
        sanitized = sanitized.replace(new RegExp(unicode, 'g'), ascii);
    });
    // Remove any remaining non-ASCII characters that can't be encoded
    // This regex keeps ASCII printable characters (32-126) and common whitespace (excluding newlines as they're handled separately)
    sanitized = sanitized.replace(/[^\x20-\x7E\n\r\t]/g, '?');
    return sanitized;
}
async function convertPdfToHtml(pdfUrl) {
    try {
        // Dynamically load pdfjs
        const pdfjs = await loadPdfJs();
        // Load PDF bytes
        let pdfBytes;
        if (pdfUrl.startsWith('data:')) {
            const base64Data = pdfUrl.split(',')[1];
            const binaryString = atob(base64Data);
            const bytes = new Uint8Array(binaryString.length);
            for(let i = 0; i < binaryString.length; i++){
                bytes[i] = binaryString.charCodeAt(i);
            }
            pdfBytes = bytes.buffer;
        } else {
            const response = await fetch(pdfUrl);
            pdfBytes = await response.arrayBuffer();
        }
        const pdf = await pdfjs.getDocument({
            data: pdfBytes
        }).promise;
        const htmlParts = [];
        for(let pageNum = 1; pageNum <= pdf.numPages; pageNum++){
            try {
                const page = await pdf.getPage(pageNum);
                const textContent = await page.getTextContent();
                // Group text items into paragraphs based on vertical position
                const lines = [];
                let currentLine = null;
                textContent.items.forEach((item)=>{
                    const y = item.transform[5];
                    if (!currentLine || Math.abs(currentLine.y - y) > 5) {
                        currentLine = {
                            y,
                            items: [
                                item
                            ]
                        };
                        lines.push(currentLine);
                    } else {
                        currentLine.items.push(item);
                    }
                });
                // Convert lines to HTML paragraphs
                lines.forEach((line)=>{
                    const text = line.items.map((item)=>item.str).join(' ').trim();
                    if (text) {
                        // Detect if it might be a heading (simple heuristic: short lines with larger font)
                        const avgFontSize = line.items.reduce((sum, item)=>sum + (item.height || 12), 0) / line.items.length;
                        if (avgFontSize > 16 && text.length < 100) {
                            htmlParts.push(`<h2>${text}</h2>`);
                        } else {
                            htmlParts.push(`<p>${text}</p>`);
                        }
                    }
                });
            } catch (err) {
                // Silently ignore abort/cancellation errors
                if (err?.name === 'AbortError' || err?.name === 'AbortException' || err?.message?.includes('cancelled') || err?.message?.includes('abort')) {
                    continue;
                }
                throw err;
            }
        }
        return htmlParts.join('\n');
    } catch (error) {
        console.error('Error converting PDF to HTML:', error);
        throw new Error('Failed to convert PDF to HTML');
    }
}
/**
 * Draw HTML table in PDF
 */ async function drawTableInPdf(tableElement, pdfDoc, currentPage, yPosition, font, boldFont, margin) {
    const cellPadding = 5;
    const cellHeight = 25;
    const pageWidth = 612;
    const maxWidth = pageWidth - margin * 2;
    // Get all rows
    const allRows = Array.from(tableElement.querySelectorAll('tr'));
    const numCols = Math.max(...allRows.map((row)=>row.querySelectorAll('td, th').length));
    const colWidth = maxWidth / numCols;
    let page = currentPage;
    let y = yPosition;
    for (const row of allRows){
        // Check if we need a new page
        if (y < 50) {
            page = pdfDoc.addPage([
                612,
                792
            ]);
            y = 750;
        }
        const cells = Array.from(row.querySelectorAll('td, th'));
        const isHeader = cells[0]?.tagName === 'TH';
        // Draw cell backgrounds for headers
        if (isHeader) {
            page.drawRectangle({
                x: margin,
                y: y - cellHeight,
                width: maxWidth,
                height: cellHeight,
                color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(0.9, 0.9, 0.9)
            });
        }
        // Draw cell borders and content
        cells.forEach((cell, colIndex)=>{
            const x = margin + colIndex * colWidth;
            // Draw cell border
            page.drawRectangle({
                x,
                y: y - cellHeight,
                width: colWidth,
                height: cellHeight,
                borderColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(0, 0, 0),
                borderWidth: 1
            });
            // Draw cell text
            let text = cell.textContent?.trim() || '';
            text = sanitizeTextForPdf(text);
            // Truncate text if too long
            const maxTextWidth = colWidth - cellPadding * 2;
            const currentFont = isHeader ? boldFont : font;
            const fontSize = 10;
            while(currentFont.widthOfTextAtSize(text, fontSize) > maxTextWidth && text.length > 0){
                text = text.slice(0, -4) + '...';
            }
            page.drawText(text, {
                x: x + cellPadding,
                y: y - cellHeight + cellPadding + 5,
                size: fontSize,
                font: currentFont,
                color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(0, 0, 0)
            });
        });
        y -= cellHeight;
    }
    return {
        page,
        yPosition: y - 10
    }; // Add extra spacing after table
}
/**
 * Embed image in PDF
 */ async function embedImageInPdf(imgElement, pdfDoc, currentPage, yPosition, margin) {
    try {
        let src = imgElement.src;
        if (!src.startsWith('data:') && !src.startsWith('http')) {
            console.warn('Cannot embed relative URL images in PDF:', src);
            return {
                page: currentPage,
                yPosition
            };
        }
        // Fetch image data
        let imageBytes;
        let imageType;
        if (src.startsWith('data:')) {
            const base64Data = src.split(',')[1];
            const mimeType = src.split(';')[0].split(':')[1];
            imageType = mimeType.includes('png') ? 'png' : 'jpg';
            const binaryString = atob(base64Data);
            imageBytes = new Uint8Array(binaryString.length);
            for(let i = 0; i < binaryString.length; i++){
                imageBytes[i] = binaryString.charCodeAt(i);
            }
        } else {
            const response = await fetch(src);
            const arrayBuffer = await response.arrayBuffer();
            imageBytes = new Uint8Array(arrayBuffer);
            imageType = src.toLowerCase().endsWith('.png') ? 'png' : 'jpg';
        }
        // Embed image
        const image = imageType === 'png' ? await pdfDoc.embedPng(imageBytes) : await pdfDoc.embedJpg(imageBytes);
        const imgDims = image.scale(0.5); // Scale down by 50%
        const maxWidth = 512;
        const maxHeight = 400;
        let width = imgDims.width;
        let height = imgDims.height;
        // Scale to fit within max dimensions
        if (width > maxWidth) {
            height = height * maxWidth / width;
            width = maxWidth;
        }
        if (height > maxHeight) {
            width = width * maxHeight / height;
            height = maxHeight;
        }
        // Check if we need a new page
        let page = currentPage;
        let y = yPosition;
        if (y - height < 50) {
            page = pdfDoc.addPage([
                612,
                792
            ]);
            y = 750;
        }
        // Draw image
        page.drawImage(image, {
            x: margin,
            y: y - height,
            width,
            height
        });
        return {
            page,
            yPosition: y - height - 10
        };
    } catch (error) {
        console.error('Error embedding image in PDF:', error);
        return {
            page: currentPage,
            yPosition
        };
    }
}
async function convertHtmlToPdf(html) {
    try {
        const pdfDoc = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDFDocument"].create();
        const font = await pdfDoc.embedFont(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$StandardFonts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardFonts"].Helvetica);
        const boldFont = await pdfDoc.embedFont(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$StandardFonts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardFonts"].HelveticaBold);
        let currentPage = pdfDoc.addPage([
            612,
            792
        ]); // US Letter size
        let yPosition = 750;
        const lineHeight = 18;
        const margin = 50;
        const maxWidth = 512;
        // Parse HTML into structured content
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const elements = doc.body.children;
        for(let i = 0; i < elements.length; i++){
            const element = elements[i];
            const tagName = element.tagName.toLowerCase();
            // Handle tables
            if (tagName === 'table') {
                const result = await drawTableInPdf(element, pdfDoc, currentPage, yPosition, font, boldFont, margin);
                currentPage = result.page;
                yPosition = result.yPosition;
                continue;
            }
            // Handle images
            if (tagName === 'img') {
                const result = await embedImageInPdf(element, pdfDoc, currentPage, yPosition, margin);
                currentPage = result.page;
                yPosition = result.yPosition;
                continue;
            }
            // Handle lists
            if (tagName === 'ul' || tagName === 'ol') {
                const listItems = Array.from(element.querySelectorAll('li'));
                listItems.forEach((li, index)=>{
                    const bulletText = tagName === 'ul' ? '• ' : `${index + 1}. `;
                    let text = li.textContent?.trim() || '';
                    text = sanitizeTextForPdf(bulletText + text);
                    // Wrap text
                    const words = text.split(' ');
                    let currentLine = '';
                    for (const word of words){
                        const testLine = currentLine ? `${currentLine} ${word}` : word;
                        const textWidth = font.widthOfTextAtSize(testLine, 12);
                        if (textWidth > maxWidth && currentLine) {
                            if (yPosition < 50) {
                                currentPage = pdfDoc.addPage([
                                    612,
                                    792
                                ]);
                                yPosition = 750;
                            }
                            currentPage.drawText(currentLine, {
                                x: margin + 20,
                                y: yPosition,
                                size: 12,
                                font: font,
                                color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(0, 0, 0)
                            });
                            yPosition -= lineHeight;
                            currentLine = word;
                        } else {
                            currentLine = testLine;
                        }
                    }
                    if (currentLine) {
                        if (yPosition < 50) {
                            currentPage = pdfDoc.addPage([
                                612,
                                792
                            ]);
                            yPosition = 750;
                        }
                        currentPage.drawText(currentLine, {
                            x: margin + 20,
                            y: yPosition,
                            size: 12,
                            font: font,
                            color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(0, 0, 0)
                        });
                        yPosition -= lineHeight;
                    }
                });
                continue;
            }
            // Handle regular text elements
            let text = element.textContent?.trim() || '';
            if (!text) continue;
            // Sanitize text for PDF encoding
            text = sanitizeTextForPdf(text);
            // Determine font size and style based on element type
            let fontSize = 12;
            let currentFont = font;
            let spacing = lineHeight;
            if (tagName.startsWith('h')) {
                const level = parseInt(tagName[1]);
                fontSize = 24 - level * 2;
                currentFont = boldFont;
                spacing = lineHeight * 1.5;
            } else if (tagName === 'strong' || tagName === 'b') {
                currentFont = boldFont;
            }
            // Split text by newlines first to handle line breaks properly
            const lines = text.split(/\r?\n/);
            for (const line of lines){
                // Wrap text to fit within page width
                const words = line.split(' ');
                let currentLine = '';
                for (const word of words){
                    const testLine = currentLine ? `${currentLine} ${word}` : word;
                    const textWidth = currentFont.widthOfTextAtSize(testLine, fontSize);
                    if (textWidth > maxWidth && currentLine) {
                        // Draw current line
                        if (yPosition < 50) {
                            currentPage = pdfDoc.addPage([
                                612,
                                792
                            ]);
                            yPosition = 750;
                        }
                        currentPage.drawText(currentLine, {
                            x: margin,
                            y: yPosition,
                            size: fontSize,
                            font: currentFont,
                            color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(0, 0, 0)
                        });
                        yPosition -= spacing;
                        currentLine = word;
                    } else {
                        currentLine = testLine;
                    }
                }
                // Draw remaining text
                if (currentLine) {
                    if (yPosition < 50) {
                        currentPage = pdfDoc.addPage([
                            612,
                            792
                        ]);
                        yPosition = 750;
                    }
                    currentPage.drawText(currentLine, {
                        x: margin,
                        y: yPosition,
                        size: fontSize,
                        font: currentFont,
                        color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(0, 0, 0)
                    });
                    yPosition -= spacing;
                } else if (line === '') {
                    // Handle empty lines (preserve blank lines)
                    yPosition -= spacing;
                }
            }
            // Add extra spacing after headings
            if (tagName.startsWith('h')) {
                yPosition -= lineHeight * 0.5;
            }
        }
        const pdfBytes = await pdfDoc.save();
        const base64 = btoa(String.fromCharCode(...pdfBytes));
        return `data:application/pdf;base64,${base64}`;
    } catch (error) {
        console.error('Error converting HTML to PDF:', error);
        throw new Error('Failed to convert HTML to PDF');
    }
}
async function convertWordToPdf(wordBlob) {
    try {
        const html = await wordBlobToHtml(wordBlob);
        return await convertHtmlToPdf(html);
    } catch (error) {
        console.error('Error converting Word to PDF:', error);
        throw new Error('Failed to convert Word document to PDF');
    }
}
function applySuggestionsToWordContent(wordContent, suggestions) {
    let modifiedContent = wordContent;
    suggestions.forEach((suggestion)=>{
        // Replace original text with suggestion
        const originalText = suggestion.original || suggestion.text;
        const regex = new RegExp(originalText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
        modifiedContent = modifiedContent.replace(regex, suggestion.suggestion);
    });
    return modifiedContent;
}
async function wordBlobToHtml(wordBlob) {
    try {
        const arrayBuffer = await wordBlob.arrayBuffer();
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mammoth$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].convertToHtml({
            arrayBuffer
        });
        return result.value;
    } catch (error) {
        console.error('Error converting Word to HTML:', error);
        throw new Error('Failed to convert Word document to HTML');
    }
}
/**
 * Parse inline styles and return text run options
 */ function parseTextRunStyles(element) {
    const style = element.getAttribute('style') || '';
    const computedStyle = window.getComputedStyle(element);
    const options = {};
    // Bold
    if (element.tagName === 'STRONG' || element.tagName === 'B' || computedStyle.fontWeight === 'bold' || parseInt(computedStyle.fontWeight) >= 700) {
        options.bold = true;
    }
    // Italic
    if (element.tagName === 'EM' || element.tagName === 'I' || computedStyle.fontStyle === 'italic') {
        options.italics = true;
    }
    // Underline
    if (element.tagName === 'U' || computedStyle.textDecoration.includes('underline')) {
        options.underline = {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnderlineType"].SINGLE
        };
    }
    // Font size (convert from px to points - 12pt = 16px)
    const fontSize = parseInt(computedStyle.fontSize);
    if (fontSize && fontSize > 0) {
        options.size = Math.round(fontSize * 72 / 96); // Convert pixels to points
    }
    return options;
}
/**
 * Process text node with inline formatting
 */ function processTextNode(node, parentElement) {
    const runs = [];
    if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent || '';
        if (text.trim()) {
            const styles = parseTextRunStyles(parentElement);
            runs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextRun"]({
                text,
                ...styles
            }));
        }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node;
        const styles = parseTextRunStyles(element);
        // Process child nodes recursively
        Array.from(element.childNodes).forEach((child)=>{
            if (child.nodeType === Node.TEXT_NODE) {
                const text = child.textContent || '';
                if (text.trim()) {
                    runs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextRun"]({
                        text,
                        ...styles
                    }));
                }
            } else {
                runs.push(...processTextNode(child, element));
            }
        });
    }
    return runs;
}
/**
 * Convert HTML table to Word Table
 */ async function htmlTableToWordTable(tableElement) {
    const rows = [];
    // Process all rows (including thead and tbody)
    const allRows = Array.from(tableElement.querySelectorAll('tr'));
    for (const row of allRows){
        const cells = [];
        const cellElements = Array.from(row.querySelectorAll('td, th'));
        for (const cell of cellElements){
            const isHeader = cell.tagName === 'TH';
            const textRuns = [];
            // Get cell text with formatting
            Array.from(cell.childNodes).forEach((node)=>{
                const runs = processTextNode(node, cell);
                textRuns.push(...runs);
            });
            // If no formatted text, just get plain text
            if (textRuns.length === 0) {
                const text = cell.textContent?.trim() || '';
                textRuns.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextRun"]({
                    text,
                    bold: isHeader
                }));
            }
            cells.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"]({
                children: [
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paragraph"]({
                        children: textRuns
                    })
                ],
                shading: isHeader ? {
                    fill: 'E7E7E7'
                } : undefined
            }));
        }
        rows.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"]({
            children: cells
        }));
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"]({
        rows,
        width: {
            size: 100,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WidthType"].PERCENTAGE
        },
        borders: {
            top: {
                style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BorderStyle"].SINGLE,
                size: 1
            },
            bottom: {
                style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BorderStyle"].SINGLE,
                size: 1
            },
            left: {
                style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BorderStyle"].SINGLE,
                size: 1
            },
            right: {
                style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BorderStyle"].SINGLE,
                size: 1
            },
            insideHorizontal: {
                style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BorderStyle"].SINGLE,
                size: 1
            },
            insideVertical: {
                style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BorderStyle"].SINGLE,
                size: 1
            }
        }
    });
}
/**
 * Convert image to base64 and create ImageRun
 */ async function htmlImageToWordImage(imgElement) {
    try {
        // Get image source
        let src = imgElement.src;
        // If it's a relative URL, we can't load it in the browser context
        if (!src.startsWith('data:') && !src.startsWith('http')) {
            console.warn('Cannot embed relative URL images:', src);
            return null;
        }
        // Fetch image as blob
        let imageBytes;
        if (src.startsWith('data:')) {
            // Extract base64 data
            const base64Data = src.split(',')[1];
            const binaryString = atob(base64Data);
            imageBytes = new Uint8Array(binaryString.length);
            for(let i = 0; i < binaryString.length; i++){
                imageBytes[i] = binaryString.charCodeAt(i);
            }
        } else {
            // Fetch from URL
            const response = await fetch(src);
            const arrayBuffer = await response.arrayBuffer();
            imageBytes = new Uint8Array(arrayBuffer);
        }
        // Get image dimensions
        const width = imgElement.width || 400;
        const height = imgElement.height || 300;
        // Determine image type from src
        const imageType = src.toLowerCase().includes('png') ? 'png' : 'jpg';
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageRun"]({
            data: imageBytes,
            type: imageType,
            transformation: {
                width: Math.min(width, 600),
                height: Math.min(height, 450)
            }
        });
    } catch (error) {
        console.error('Error embedding image:', error);
        return null;
    }
}
/**
 * Process HTML element and convert to Word elements
 */ async function processHtmlElement(element) {
    const wordElements = [];
    const tagName = element.tagName.toLowerCase();
    // Handle tables
    if (tagName === 'table') {
        const table = await htmlTableToWordTable(element);
        wordElements.push(table);
        return wordElements;
    }
    // Handle images
    if (tagName === 'img') {
        const imageRun = await htmlImageToWordImage(element);
        if (imageRun) {
            wordElements.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paragraph"]({
                children: [
                    imageRun
                ]
            }));
        }
        return wordElements;
    }
    // Handle lists
    if (tagName === 'ul' || tagName === 'ol') {
        const listItems = Array.from(element.querySelectorAll('li'));
        listItems.forEach((li, index)=>{
            const textRuns = [];
            Array.from(li.childNodes).forEach((node)=>{
                const runs = processTextNode(node, li);
                textRuns.push(...runs);
            });
            if (textRuns.length === 0) {
                const text = li.textContent?.trim() || '';
                textRuns.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextRun"]({
                    text
                }));
            }
            const bulletText = tagName === 'ul' ? '• ' : `${index + 1}. `;
            textRuns.unshift(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextRun"]({
                text: bulletText
            }));
            wordElements.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paragraph"]({
                children: textRuns
            }));
        });
        return wordElements;
    }
    // Handle regular paragraphs and headings
    const text = element.textContent?.trim() || '';
    if (!text && tagName !== 'br') return wordElements;
    // Create paragraph options
    const paragraphOptions = {
        children: []
    };
    // Handle headings
    if (tagName === 'h1') {
        paragraphOptions.heading = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_1;
    } else if (tagName === 'h2') {
        paragraphOptions.heading = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_2;
    } else if (tagName === 'h3') {
        paragraphOptions.heading = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_3;
    } else if (tagName === 'h4') {
        paragraphOptions.heading = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_4;
    }
    // Handle text alignment
    const style = element.getAttribute('style') || '';
    const computedStyle = window.getComputedStyle(element);
    const textAlign = computedStyle.textAlign;
    if (textAlign === 'center' || style.includes('text-align: center')) {
        paragraphOptions.alignment = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlignmentType"].CENTER;
    } else if (textAlign === 'right' || style.includes('text-align: right')) {
        paragraphOptions.alignment = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlignmentType"].RIGHT;
    } else if (textAlign === 'justify' || style.includes('text-align: justify')) {
        paragraphOptions.alignment = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlignmentType"].JUSTIFIED;
    }
    // Process text with inline formatting
    const textRuns = [];
    Array.from(element.childNodes).forEach((node)=>{
        const runs = processTextNode(node, element);
        textRuns.push(...runs);
    });
    // If no formatted text, just use plain text
    if (textRuns.length === 0 && text) {
        textRuns.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextRun"]({
            text
        }));
    }
    if (textRuns.length > 0) {
        paragraphOptions.children = textRuns;
        wordElements.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paragraph"](paragraphOptions));
    }
    return wordElements;
}
async function htmlToWordBlob(htmlContent) {
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, 'text/html');
        const wordElements = [];
        // Process each top-level element in the HTML body
        const elements = Array.from(doc.body.children);
        for (const element of elements){
            const processed = await processHtmlElement(element);
            wordElements.push(...processed);
        }
        // Create Word document with processed elements
        const wordDoc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Document"]({
            sections: [
                {
                    properties: {
                        page: {
                            margin: {
                                top: 1440,
                                right: 1440,
                                bottom: 1440,
                                left: 1440
                            }
                        }
                    },
                    children: wordElements.length > 0 ? wordElements : [
                        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paragraph"]({
                            children: [
                                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextRun"]({
                                    text: ''
                                })
                            ]
                        })
                    ]
                }
            ]
        });
        return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Packer"].toBlob(wordDoc);
    } catch (error) {
        console.error('Error converting HTML to Word:', error);
        throw new Error('Failed to convert HTML to Word document');
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/compliance-editor/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ComplianceEditorPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$type$2d$corner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileType2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-type-corner.js [app-client] (ecmascript) <export default as FileType2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
// Components
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$editor$2f$TinyMCEEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/editor/TinyMCEEditor.tsx [app-client] (ecmascript)");
// Compliance Components
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compliance$2f$SuggestionCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/compliance/SuggestionCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compliance$2f$DocumentUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/compliance/DocumentUpload.tsx [app-client] (ecmascript)");
// Services
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$pdfWordConverter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/pdfWordConverter.ts [app-client] (ecmascript)");
// Dynamic import for PDF viewer (uses pdfjs which requires browser APIs)
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const PdfViewerWithHighlight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/compliance/PdfViewerWithHighlight.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/components/compliance/PdfViewerWithHighlight.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-full bg-zinc-100 dark:bg-zinc-950",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "h-8 w-8 animate-spin text-zinc-600 dark:text-zinc-400"
                    }, void 0, false, {
                        fileName: "[project]/app/compliance-editor/page.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-zinc-600 dark:text-zinc-400",
                        children: "Loading PDF viewer..."
                    }, void 0, false, {
                        fileName: "[project]/app/compliance-editor/page.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/compliance-editor/page.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/compliance-editor/page.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
});
_c = PdfViewerWithHighlight;
function ComplianceEditorPage() {
    _s();
    // State
    const [documentId, setDocumentId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [documentName, setDocumentName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [fileType, setFileType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pdfUrl, setPdfUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editorContent, setEditorContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedSuggestionIndex, setSelectedSuggestionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isApplying, setIsApplying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isConverting, setIsConverting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showUpload, setShowUpload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [highlightInfo, setHighlightInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const editorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Convert ComplianceSuggestion to Suggestion type for TinyMCE
    const editorSuggestions = suggestions.map((s)=>({
            issue: s.explanation,
            page: s.page || 1,
            text: s.originalText,
            suggestion: s.suggestedText,
            original: s.originalText,
            explanation: s.explanation,
            category: s.category.toLowerCase(),
            severity: s.severity
        }));
    // Handle successful document upload
    const handleUploadSuccess = (data)=>{
        console.log('📄 Upload success! Document data:', {
            documentId: data.documentId,
            fileType: data.fileType,
            hasHtmlContent: !!data.htmlContent,
            htmlContentLength: data.htmlContent?.length || 0,
            extractedTextLength: data.extractedText?.length || 0,
            suggestionsCount: data.suggestions?.length || 0,
            hasPdfUrl: !!data.pdfUrl,
            fileName: data.fileName
        });
        if (data.suggestions && data.suggestions.length > 0) {
            console.log('Sample suggestion:', data.suggestions[0]);
        } else {
            console.log('⚠️ No suggestions received from API');
            console.log('Extracted text preview:', data.extractedText?.substring(0, 200));
        }
        setDocumentId(data.documentId);
        setDocumentName(data.fileName || 'document');
        setFileType(data.fileType);
        setEditorContent(data.htmlContent);
        setPdfUrl(data.pdfUrl || null);
        setSuggestions(data.suggestions.map((s, idx)=>({
                ...s,
                id: `sugg-${idx}`
            })));
        setShowUpload(false);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Document analyzed! Found ${data.suggestions.length} suggestions.`);
    };
    // Handle upload error
    const handleUploadError = (error)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Upload failed', {
            description: error
        });
    };
    // Handle suggestion selection
    const handleSelectSuggestion = (index)=>{
        setSelectedSuggestionIndex(index);
        const suggestion = suggestions[index];
        if (suggestion) {
            if (fileType === 'pdf' && pdfUrl) {
                // For PDF: Create highlight info
                // In a real implementation, you would calculate the bounding box from the PDF
                setHighlightInfo({
                    pageNumber: suggestion.page || 1,
                    text: suggestion.originalText,
                    boundingBox: undefined
                });
            } else if (editorRef.current) {
                // For DOCX: Highlight text in editor
                editorRef.current.highlightText(suggestion.originalText);
            }
        }
    };
    // Handle applying suggestion
    const handleApplySuggestion = async (index)=>{
        const suggestion = suggestions[index];
        if (!suggestion || !documentId) return;
        // For PDF files that haven't been converted, show conversion prompt
        if (fileType === 'pdf') {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info('Convert to edit', {
                description: 'Click "Convert to Word" to enable editing and apply suggestions.'
            });
            // Mark as acknowledged
            setSuggestions((prev)=>prev.map((s, i)=>i === index ? {
                        ...s,
                        isApplied: true
                    } : s));
            return;
        }
        // For documents in the editor (DOCX or converted PDF)
        if (!editorRef.current) return;
        setIsApplying(index);
        try {
            // Call API to apply change
            const response = await fetch('/api/compliance/apply-change', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    documentId,
                    originalText: suggestion.originalText,
                    suggestedText: suggestion.suggestedText,
                    suggestionId: suggestion.id,
                    fileType,
                    documentData: pdfUrl || undefined
                })
            });
            if (!response.ok) {
                throw new Error('Failed to apply change');
            }
            const data = await response.json();
            // Replace text in editor
            editorRef.current.replaceText(suggestion.originalText, suggestion.suggestedText);
            // Update editor content
            const newContent = editorRef.current.getContent();
            setEditorContent(newContent);
            // Mark suggestion as applied
            setSuggestions((prev)=>prev.map((s, i)=>i === index ? {
                        ...s,
                        isApplied: true
                    } : s));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Change applied successfully');
            // Clear selection
            if (selectedSuggestionIndex === index) {
                setSelectedSuggestionIndex(null);
            }
        } catch (error) {
            console.error('Error applying suggestion:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to apply change');
        } finally{
            setIsApplying(null);
        }
    };
    // Analyze current editor content for compliance
    const handleAnalyzeContent = async ()=>{
        if (!editorRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('No content to analyze');
            return;
        }
        const loadingToast = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading('Analyzing content for compliance...');
        try {
            // Get current editor content
            const currentContent = editorRef.current.getContent();
            // Extract plain text from HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = currentContent;
            const plainText = tempDiv.textContent || tempDiv.innerText || '';
            console.log('📝 Analyzing editor content...', {
                htmlLength: currentContent.length,
                textLength: plainText.length,
                textPreview: plainText.substring(0, 200)
            });
            // Create a temporary file from the content to send to the API
            const blob = new Blob([
                plainText
            ], {
                type: 'text/plain'
            });
            const file = new File([
                blob
            ], 'editor-content.txt', {
                type: 'text/plain'
            });
            const formData = new FormData();
            formData.append('file', file);
            formData.append('isPlainText', 'true'); // Flag to indicate plain text analysis
            const response = await fetch('/api/compliance/analyze', {
                method: 'POST',
                body: formData
            });
            if (!response.ok) {
                throw new Error('Failed to analyze content');
            }
            const data = await response.json();
            console.log('✅ Analysis complete:', {
                suggestionsCount: data.suggestions?.length || 0
            });
            // Update suggestions
            setSuggestions(data.suggestions.map((s, idx)=>({
                    ...s,
                    id: `sugg-${idx}`
                })));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Analysis complete! Found ${data.suggestions.length} suggestions.`, {
                id: loadingToast
            });
        } catch (err) {
            console.error('Analysis error:', err);
            const errorMessage = err instanceof Error ? err.message : 'Unknown error';
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to analyze content', {
                description: errorMessage,
                id: loadingToast
            });
        }
    };
    // Convert PDF to Word and display in editor
    const handleConvertToWord = async ()=>{
        if (fileType !== 'pdf' || !pdfUrl) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('PDF not available for conversion');
            return;
        }
        setIsConverting(true);
        const loadingToast = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading('Converting PDF to Word format...');
        try {
            console.log('📥 Converting PDF to editable format...');
            // Convert data URL to blob
            const response = await fetch(pdfUrl);
            const pdfBlob = await response.blob();
            // Create form data with the PDF file
            const formData = new FormData();
            formData.append('file', pdfBlob, documentName || 'document.pdf');
            // Call the PDF to DOCX conversion API with the actual file
            const convertResponse = await fetch('/api/convert/pdf-to-docx', {
                method: 'POST',
                body: formData
            });
            if (!convertResponse.ok) {
                const responseText = await convertResponse.text();
                console.error('❌ Conversion API error:', responseText);
                let errorMessage = 'Conversion failed';
                let errorDetails = '';
                try {
                    const errorData = JSON.parse(responseText);
                    errorMessage = errorData.message || errorData.error || errorMessage;
                    errorDetails = errorData.details || '';
                    // Show a more helpful message to the user
                    if (errorDetails.includes('Network error') || errorDetails.includes('timeout')) {
                        errorMessage = 'Network timeout - conversion taking too long';
                        errorDetails = 'The PDF conversion service is temporarily slow. Please try again, or try with a smaller PDF file.';
                    } else if (errorDetails.includes('credentials')) {
                        errorMessage = 'Configuration error';
                        errorDetails = 'Please contact support - PDF conversion service needs configuration.';
                    } else if (errorData.fallbackError) {
                        // Both Adobe and fallback failed
                        errorMessage = 'Unable to convert this PDF';
                        errorDetails = 'This PDF may be encrypted, corrupted, or in an unsupported format. Please try a different PDF file.';
                    }
                } catch (e) {
                    errorMessage = 'Conversion failed';
                    errorDetails = responseText.substring(0, 200);
                }
                // Show detailed toast with retry suggestion
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(errorMessage, {
                    description: errorDetails,
                    duration: 7000,
                    id: loadingToast
                });
                throw new Error(errorMessage);
            }
            console.log('✅ Conversion successful, loading into editor...');
            // Get the DOCX blob
            const docxBlob = await convertResponse.blob();
            // Convert DOCX to HTML for the editor with enhanced formatting options
            const mammoth = await __turbopack_context__.A("[project]/node_modules/mammoth/lib/index.js [app-client] (ecmascript, async loader)");
            const arrayBuffer = await docxBlob.arrayBuffer();
            // Configure mammoth to preserve formatting and styles
            const result = await mammoth.convertToHtml({
                arrayBuffer
            }, {
                styleMap: [
                    "p[style-name='Heading 1'] => h1:fresh",
                    "p[style-name='Heading 2'] => h2:fresh",
                    "p[style-name='Heading 3'] => h3:fresh",
                    "p[style-name='Heading 4'] => h4:fresh",
                    "p[style-name='Title'] => h1.title:fresh",
                    "r[style-name='Strong'] => strong",
                    "r[style-name='Emphasis'] => em",
                    "p[style-name='List Paragraph'] => p.list-paragraph:fresh"
                ],
                includeDefaultStyleMap: true,
                includeEmbeddedStyleMap: true,
                convertImage: mammoth.images.imgElement((image)=>{
                    return image.read("base64").then((imageBuffer)=>{
                        return {
                            src: `data:${image.contentType};base64,${imageBuffer}`,
                            style: "max-width: 100%; height: auto; display: block; margin: 1rem auto;"
                        };
                    });
                })
            });
            let htmlContent = result.value;
            // Post-process HTML to improve table and image formatting
            htmlContent = htmlContent// Add styling to tables (handle both with and without existing attributes)
            .replace(/<table([^>]*)>/gi, (match, attrs)=>{
                // Check if style already exists
                if (attrs.includes('style=')) {
                    return match; // Keep existing style
                }
                return `<table${attrs} style="border-collapse: collapse; width: 100%; margin: 1.5rem 0; border: 1px solid #3f3f46; background-color: #27272a;">`;
            }).replace(/<td([^>]*)>/gi, (match, attrs)=>{
                if (attrs.includes('style=')) {
                    return match;
                }
                return `<td${attrs} style="border: 1px solid #3f3f46; padding: 10px 16px; vertical-align: top; color: #e4e4e7;">`;
            }).replace(/<th([^>]*)>/gi, (match, attrs)=>{
                if (attrs.includes('style=')) {
                    return match;
                }
                return `<th${attrs} style="border: 1px solid #52525b; padding: 12px 16px; background-color: #3f3f46; font-weight: 600; text-align: left; color: #f8fafc;">`;
            })// Ensure images are properly contained
            .replace(/<img([^>]*?)>/gi, (match, attrs)=>{
                // Preserve existing attributes but ensure proper styling
                if (!attrs.includes('style=')) {
                    return `<img${attrs} style="max-width: 100%; height: auto; display: block; margin: 1.5rem auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);">`;
                }
                return match;
            })// Add spacing to paragraphs if no style exists
            .replace(/<p([^>]*)>/gi, (match, attrs)=>{
                if (attrs.includes('style=')) {
                    return match;
                }
                return `<p${attrs} style="margin: 0.5rem 0; line-height: 1.6;">`;
            })// Handle lists better
            .replace(/<ul([^>]*)>/gi, (match, attrs)=>{
                if (attrs.includes('style=')) {
                    return match;
                }
                return `<ul${attrs} style="margin: 1rem 0; padding-left: 2rem;">`;
            }).replace(/<ol([^>]*)>/gi, (match, attrs)=>{
                if (attrs.includes('style=')) {
                    return match;
                }
                return `<ol${attrs} style="margin: 1rem 0; padding-left: 2rem;">`;
            }).replace(/<li([^>]*)>/gi, (match, attrs)=>{
                if (attrs.includes('style=')) {
                    return match;
                }
                return `<li${attrs} style="margin: 0.5rem 0; line-height: 1.6;">`;
            });
            // Log any conversion messages (warnings about unsupported features)
            if (result.messages.length > 0) {
                console.log('Conversion messages:', result.messages);
            }
            // Switch to editor mode
            setEditorContent(htmlContent);
            setFileType('docx');
            setPdfUrl(null); // Clear PDF URL to switch to editor view
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Document converted successfully!', {
                id: loadingToast,
                description: 'Your document is now ready for editing.',
                duration: 4000
            });
        } catch (err) {
            console.error('Conversion error:', err);
            const errorMessage = err instanceof Error ? err.message : 'Unknown error';
            // Only show toast if we haven't shown one already (check if loadingToast still exists)
            // The error handling above already shows a detailed toast
            if (errorMessage === 'Unknown error') {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to convert PDF', {
                    description: 'An unexpected error occurred. Please try again.',
                    id: loadingToast
                });
            }
        } finally{
            setIsConverting(false);
        }
    };
    // Download as Word file
    const handleDownloadWord = async ()=>{
        const loadingToast = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading('Preparing download...');
        try {
            if (fileType === 'pdf' && pdfUrl) {
                // For PDF files, convert and download
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading('Converting PDF to Word...', {
                    id: loadingToast
                });
                // Convert data URL to blob
                const response = await fetch(pdfUrl);
                const pdfBlob = await response.blob();
                // Create form data with the PDF file
                const formData = new FormData();
                formData.append('file', pdfBlob, documentName || 'document.pdf');
                const convertResponse = await fetch('/api/convert/pdf-to-docx', {
                    method: 'POST',
                    body: formData
                });
                if (!convertResponse.ok) {
                    const responseText = await convertResponse.text();
                    console.error('❌ Download conversion error:', responseText);
                    let errorMessage = 'Failed to convert PDF to Word';
                    try {
                        const errorData = JSON.parse(responseText);
                        if (errorData.details && errorData.details.includes('timeout')) {
                            errorMessage = 'Conversion timeout - please try again or use a smaller file';
                        } else if (errorData.fallbackError) {
                            errorMessage = 'Unable to convert this PDF - it may be encrypted or corrupted';
                        }
                    } catch (e) {
                    // Use default error message
                    }
                    throw new Error(errorMessage);
                }
                const docxBlob = await convertResponse.blob();
                const url = URL.createObjectURL(docxBlob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `${documentName || 'document'}_converted.docx`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Word document downloaded', {
                    id: loadingToast
                });
            } else if (editorRef.current) {
                // For documents in editor
                const content = editorRef.current.getContent();
                const blob = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$pdfWordConverter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlToWordBlob"])(content);
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `${documentName || 'document'}_edited.docx`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Word document downloaded', {
                    id: loadingToast
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('No content to download', {
                    id: loadingToast
                });
            }
        } catch (err) {
            console.error('Download error:', err);
            const errorMessage = err instanceof Error ? err.message : 'Failed to download Word document';
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Download failed', {
                description: errorMessage,
                id: loadingToast
            });
        }
    };
    // Download as PDF
    const handleDownloadPdf = async ()=>{
        try {
            if (fileType === 'pdf' && pdfUrl) {
                // For PDF files, download the original
                const a = document.createElement('a');
                a.href = pdfUrl;
                a.download = `${documentName || 'document'}.pdf`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('PDF downloaded');
            } else if (editorRef.current) {
                // For DOCX files in editor, convert to PDF
                const content = editorRef.current.getContent();
                const pdfDataUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$pdfWordConverter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertHtmlToPdf"])(content);
                const a = document.createElement('a');
                a.href = pdfDataUrl;
                a.download = `${documentName || 'document'}_edited.pdf`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Document downloaded as PDF');
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('No content to download');
            }
        } catch (err) {
            console.error('Download error:', err);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to download PDF');
        }
    };
    // Reset to upload new document
    const handleNewDocument = ()=>{
        setDocumentId(null);
        setDocumentName('');
        setFileType(null);
        setPdfUrl(null);
        setEditorContent('');
        setSuggestions([]);
        setSelectedSuggestionIndex(null);
        setHighlightInfo(null);
        setShowUpload(true);
    };
    // Handle save draft
    const handleSaveDraft = async ()=>{
        if (!documentId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('No document to save');
            return;
        }
        const loadingToast = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading('Saving draft...');
        try {
            // Update document in database to mark it as saved/updated
            const response = await fetch(`/api/documents/${documentId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    originalName: documentName || 'Untitled Document',
                    fileType: fileType || 'pdf'
                })
            });
            if (!response.ok) {
                const errorData = await response.json().catch(()=>({}));
                throw new Error(errorData.error || 'Failed to save draft');
            }
            const result = await response.json();
            // Also save to localStorage for backward compatibility
            if ("TURBOPACK compile-time truthy", 1) {
                const content = editorRef.current?.getContent() || editorContent;
                const draftData = {
                    documentId,
                    documentName,
                    fileType,
                    content,
                    suggestions: suggestions.filter((s)=>!s.isApplied),
                    timestamp: new Date().toISOString()
                };
                const drafts = JSON.parse(localStorage.getItem('documentDrafts') || '[]');
                const existingIndex = drafts.findIndex((d)=>d.documentId === documentId);
                if (existingIndex >= 0) {
                    drafts[existingIndex] = draftData;
                } else {
                    drafts.push(draftData);
                }
                localStorage.setItem('documentDrafts', JSON.stringify(drafts));
                // Dispatch event to notify dashboard to refresh
                window.dispatchEvent(new Event('documentsUpdated'));
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Draft saved successfully', {
                id: loadingToast
            });
        } catch (err) {
            console.error('Error saving draft:', err);
            const errorMessage = err instanceof Error ? err.message : 'Failed to save draft';
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(errorMessage, {
                id: loadingToast
            });
        }
    };
    // Handle share document
    const handleShareDocument = async ()=>{
        if (!documentId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('No document to share');
            return;
        }
        try {
            // Create a shareable link
            const shareUrl = `${window.location.origin}/compliance-editor?documentId=${documentId}`;
            // Try to use Web Share API if available
            if (navigator.share) {
                await navigator.share({
                    title: documentName || 'Document',
                    text: 'Check out this compliance document',
                    url: shareUrl
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Document shared');
            } else {
                // Fallback: copy to clipboard
                await navigator.clipboard.writeText(shareUrl);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Link copied to clipboard');
            }
        } catch (err) {
            // User cancelled or error occurred
            if (err instanceof Error && err.name !== 'AbortError') {
                console.error('Error sharing document:', err);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to share document');
            }
        }
    };
    // Group suggestions by category
    const groupedSuggestions = suggestions.reduce((acc, suggestion, index)=>{
        const category = suggestion.category || 'Other';
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push({
            ...suggestion,
            index
        });
        return acc;
    }, {});
    // Calculate statistics
    const totalSuggestions = suggestions.length;
    const appliedSuggestions = suggestions.filter((s)=>s.isApplied).length;
    const criticalIssues = suggestions.filter((s)=>s.severity === 'critical' && !s.isApplied).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.5
        },
        className: "min-h-screen bg-zinc-50 dark:bg-zinc-950 p-4 sm:p-6 lg:p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1800px] mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold text-gray-900 dark:text-gray-50 mb-2",
                            children: "Financial Compliance Editor"
                        }, void 0, false, {
                            fileName: "[project]/app/compliance-editor/page.tsx",
                            lineNumber: 711,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 dark:text-gray-400",
                            children: "Upload documents for FINRA/SEC compliance review and real-time editing"
                        }, void 0, false, {
                            fileName: "[project]/app/compliance-editor/page.tsx",
                            lineNumber: 714,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/compliance-editor/page.tsx",
                    lineNumber: 710,
                    columnNumber: 9
                }, this),
                showUpload && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compliance$2f$DocumentUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onUploadSuccess: handleUploadSuccess,
                        onError: handleUploadError
                    }, void 0, false, {
                        fileName: "[project]/app/compliance-editor/page.tsx",
                        lineNumber: 722,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/compliance-editor/page.tsx",
                    lineNumber: 721,
                    columnNumber: 11
                }, this),
                !showUpload && documentId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 flex flex-wrap items-center justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "outline",
                                            className: "text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                    className: "h-3 w-3 mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/compliance-editor/page.tsx",
                                                    lineNumber: 736,
                                                    columnNumber: 19
                                                }, this),
                                                "Document #",
                                                documentId
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                            lineNumber: 735,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "secondary",
                                            className: "text-sm",
                                            children: [
                                                totalSuggestions,
                                                " Total Suggestions"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                            lineNumber: 739,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "default",
                                            className: "text-sm bg-green-600",
                                            children: [
                                                appliedSuggestions,
                                                " Applied"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                            lineNumber: 742,
                                            columnNumber: 17
                                        }, this),
                                        criticalIssues > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "destructive",
                                            className: "text-sm",
                                            children: [
                                                criticalIssues,
                                                " Critical Issues"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                            lineNumber: 746,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/compliance-editor/page.tsx",
                                    lineNumber: 734,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        fileType === 'pdf' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: handleConvertToWord,
                                            disabled: isConverting,
                                            className: "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/40 disabled:opacity-50 disabled:cursor-not-allowed",
                                            children: isConverting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        className: "h-4 w-4 mr-2 animate-spin text-blue-600 dark:text-blue-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/compliance-editor/page.tsx",
                                                        lineNumber: 762,
                                                        columnNumber: 25
                                                    }, this),
                                                    "Converting…"
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$type$2d$corner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileType2$3e$__["FileType2"], {
                                                        className: "h-4 w-4 mr-2 text-blue-600 dark:text-blue-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/compliance-editor/page.tsx",
                                                        lineNumber: 767,
                                                        columnNumber: 25
                                                    }, this),
                                                    "Convert to Word"
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                            lineNumber: 753,
                                            columnNumber: 19
                                        }, this),
                                        fileType === 'docx' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: handleAnalyzeContent,
                                            disabled: isConverting,
                                            className: "bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/40 disabled:opacity-50 disabled:cursor-not-allowed",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                    className: "h-4 w-4 mr-2 text-purple-600 dark:text-purple-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/compliance-editor/page.tsx",
                                                    lineNumber: 781,
                                                    columnNumber: 21
                                                }, this),
                                                "Analyze Content"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                            lineNumber: 774,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: handleDownloadWord,
                                            disabled: isConverting,
                                            className: "disabled:opacity-50 disabled:cursor-not-allowed",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                    className: "h-4 w-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/compliance-editor/page.tsx",
                                                    lineNumber: 792,
                                                    columnNumber: 19
                                                }, this),
                                                "Download as Word"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                            lineNumber: 785,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: handleDownloadPdf,
                                            disabled: isConverting,
                                            className: "disabled:opacity-50 disabled:cursor-not-allowed",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                    className: "h-4 w-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/compliance-editor/page.tsx",
                                                    lineNumber: 802,
                                                    columnNumber: 19
                                                }, this),
                                                "Download PDF"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                            lineNumber: 795,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "default",
                                            size: "sm",
                                            onClick: handleNewDocument,
                                            disabled: isConverting,
                                            className: "disabled:opacity-50 disabled:cursor-not-allowed",
                                            children: "New Document"
                                        }, void 0, false, {
                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                            lineNumber: 805,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/compliance-editor/page.tsx",
                                    lineNumber: 751,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/compliance-editor/page.tsx",
                            lineNumber: 733,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    className: "pb-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: "text-gray-900 dark:text-gray-50 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                className: "h-5 w-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/compliance-editor/page.tsx",
                                                                lineNumber: 824,
                                                                columnNumber: 23
                                                            }, this),
                                                            fileType === 'pdf' ? 'PDF Viewer' : 'Document Editor',
                                                            fileType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                variant: "secondary",
                                                                className: "ml-2 text-xs",
                                                                children: fileType.toUpperCase()
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/compliance-editor/page.tsx",
                                                                lineNumber: 827,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/compliance-editor/page.tsx",
                                                        lineNumber: 823,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/compliance-editor/page.tsx",
                                                    lineNumber: 822,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    className: "p-0",
                                                    children: fileType === 'pdf' && pdfUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-[calc(100vh-300px)]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PdfViewerWithHighlight, {
                                                            pdfUrl: pdfUrl,
                                                            fileName: documentName,
                                                            highlightInfo: highlightInfo,
                                                            onPageChange: (page)=>console.log('Page changed:', page),
                                                            className: "h-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                                            lineNumber: 836,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/compliance-editor/page.tsx",
                                                        lineNumber: 835,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$editor$2f$TinyMCEEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        ref: editorRef,
                                                        content: editorContent,
                                                        onContentChange: setEditorContent,
                                                        suggestions: editorSuggestions,
                                                        selectedSuggestionIndex: selectedSuggestionIndex
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/compliance-editor/page.tsx",
                                                        lineNumber: 845,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/compliance-editor/page.tsx",
                                                    lineNumber: 833,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                            lineNumber: 821,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 flex gap-3 justify-end",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    onClick: handleSaveDraft,
                                                    disabled: !documentId,
                                                    className: "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/40",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                            className: "h-4 w-4 mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                                            lineNumber: 865,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Save Draft"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/compliance-editor/page.tsx",
                                                    lineNumber: 858,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    onClick: handleShareDocument,
                                                    disabled: !documentId,
                                                    className: "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/40",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                                            className: "h-4 w-4 mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                                            lineNumber: 875,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Share Document"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/compliance-editor/page.tsx",
                                                    lineNumber: 868,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                            lineNumber: 857,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/compliance-editor/page.tsx",
                                    lineNumber: 820,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 sticky top-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "text-gray-900 dark:text-gray-50 flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Compliance Suggestions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                                            lineNumber: 886,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "secondary",
                                                            children: suggestions.filter((s)=>!s.isApplied).length
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                                            lineNumber: 887,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/compliance-editor/page.tsx",
                                                    lineNumber: 885,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/compliance-editor/page.tsx",
                                                lineNumber: 884,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                className: "max-h-[calc(100vh-200px)] overflow-y-auto space-y-4",
                                                children: totalSuggestions === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center py-8 text-gray-500 dark:text-gray-400",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-lg font-medium",
                                                            children: "No suggestions found"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                                            lineNumber: 895,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm mt-2",
                                                            children: "Your document looks compliant!"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                                            lineNumber: 896,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/compliance-editor/page.tsx",
                                                    lineNumber: 894,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: Object.entries(groupedSuggestions).map(([category, items])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 mb-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                            variant: "outline",
                                                                            className: `text-xs font-semibold ${category === 'FINRA' ? 'border-purple-500 text-purple-700 dark:text-purple-300' : category === 'SEC' ? 'border-blue-500 text-blue-700 dark:text-blue-300' : category === 'Grammar' ? 'border-green-500 text-green-700 dark:text-green-300' : ''}`,
                                                                            children: category
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                                                            lineNumber: 903,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                                                                            className: "flex-1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                                                            lineNumber: 914,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: [
                                                                                items.filter((s)=>!s.isApplied).length,
                                                                                " pending"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                                                            lineNumber: 915,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/compliance-editor/page.tsx",
                                                                    lineNumber: 902,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-3",
                                                                    children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compliance$2f$SuggestionCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            suggestion: item,
                                                                            index: item.index,
                                                                            isSelected: selectedSuggestionIndex === item.index,
                                                                            onSelect: ()=>handleSelectSuggestion(item.index),
                                                                            onApply: ()=>handleApplySuggestion(item.index),
                                                                            isApplying: isApplying === item.index
                                                                        }, item.index, false, {
                                                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                                                            lineNumber: 922,
                                                                            columnNumber: 33
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/compliance-editor/page.tsx",
                                                                    lineNumber: 920,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, category, true, {
                                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                                            lineNumber: 901,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false)
                                            }, void 0, false, {
                                                fileName: "[project]/app/compliance-editor/page.tsx",
                                                lineNumber: 892,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/compliance-editor/page.tsx",
                                        lineNumber: 883,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/compliance-editor/page.tsx",
                                    lineNumber: 882,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/compliance-editor/page.tsx",
                            lineNumber: 818,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/app/compliance-editor/page.tsx",
            lineNumber: 708,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/compliance-editor/page.tsx",
        lineNumber: 702,
        columnNumber: 5
    }, this);
}
_s(ComplianceEditorPage, "s3nX52L/UFjCHN4BOSGVMA+F4qg=");
_c1 = ComplianceEditorPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "PdfViewerWithHighlight");
__turbopack_context__.k.register(_c1, "ComplianceEditorPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_ade13eec._.js.map