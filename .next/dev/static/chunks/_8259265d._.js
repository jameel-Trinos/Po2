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
"[project]/components/ui/progress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Progress",
    ()=>Progress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-progress/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Progress({ className, value, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "progress",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "progress-indicator",
            className: "bg-primary h-full w-full flex-1 transition-all",
            style: {
                transform: `translateX(-${100 - (value || 0)}%)`
            }
        }, void 0, false, {
            fileName: "[project]/components/ui/progress.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/progress.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = Progress;
;
var _c;
__turbopack_context__.k.register(_c, "Progress");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: `border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 ${className || ''}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "p-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tinymce$2f$tinymce$2d$react$2f$lib$2f$es2015$2f$main$2f$ts$2f$components$2f$Editor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"], {
                onInit: handleEditorInit,
                value: content,
                onEditorChange: handleEditorChange,
                init: {
                    height: '70vh',
                    menubar: false,
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
                        'textcolor',
                        'colorpicker',
                        'textpattern',
                        'nonbreaking',
                        'paste'
                    ],
                    toolbar: 'undo redo | blocks | ' + 'bold italic underline strikethrough | forecolor backcolor | ' + 'alignleft aligncenter alignright alignjustify | ' + 'bullist numlist outdent indent | ' + 'removeformat | help',
                    content_style: 'body { font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif; font-size: 14px; padding: 20px; line-height: 1.6; }',
                    skin: ("TURBOPACK compile-time value", "object") !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'oxide-dark' : 'oxide',
                    content_css: ("TURBOPACK compile-time value", "object") !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default',
                    branding: false,
                    promotion: false,
                    resize: true,
                    statusbar: false,
                    menubar: false,
                    paste_as_text: false,
                    paste_auto_cleanup_on_paste: true,
                    convert_urls: false,
                    setup: (editor)=>{
                        // Add custom command to highlight text
                        editor.addCommand('highlightText', (text)=>{
                            highlightTextInEditor(editor, text);
                        });
                        // Add custom command to replace text
                        editor.addCommand('replaceText', (original, replacement)=>{
                            replaceTextInEditor(editor, original, replacement);
                        });
                    }
                }
            }, void 0, false, {
                fileName: "[project]/components/editor/TinyMCEEditor.tsx",
                lineNumber: 71,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/editor/TinyMCEEditor.tsx",
            lineNumber: 70,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/editor/TinyMCEEditor.tsx",
        lineNumber: 69,
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
"[project]/components/proofreader/ProofreadPdfViewer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zoom-in.js [app-client] (ecmascript) <export default as ZoomIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zoom-out.js [app-client] (ecmascript) <export default as ZoomOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// Helper function to load pdfjs dynamically
async function loadPdfJs() {
    const pdfjs = await __turbopack_context__.A("[project]/node_modules/pdfjs-dist/build/pdf.mjs [app-client] (ecmascript, async loader)");
    if (("TURBOPACK compile-time value", "object") !== 'undefined' && !pdfjs.GlobalWorkerOptions.workerSrc) {
        pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs';
    }
    return pdfjs;
}
const ProofreadPdfViewer = ({ pdfUrl, suggestions, selectedSuggestion, onSuggestionClick, onApplyEdit })=>{
    _s();
    const [pdfDoc, setPdfDoc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [totalPages, setTotalPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [zoom, setZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1.2);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [renderedPages, setRenderedPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [textLayerLoaded, setTextLayerLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const canvasRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const textLayerRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const renderTasksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const renderingInProgressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pageRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    // Load PDF document
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProofreadPdfViewer.useEffect": ()=>{
            const loadPdf = {
                "ProofreadPdfViewer.useEffect.loadPdf": async ()=>{
                    setIsLoading(true);
                    setError(null);
                    try {
                        // Dynamically load pdfjs
                        const pdfjs = await loadPdfJs();
                        const loadingTask = pdfjs.getDocument(pdfUrl);
                        const pdf = await loadingTask.promise;
                        setPdfDoc(pdf);
                        setTotalPages(pdf.numPages);
                        setIsLoading(false);
                        console.log(`[ProofreadPdfViewer] PDF loaded with ${pdf.numPages} pages`);
                    } catch (err) {
                        console.error('[ProofreadPdfViewer] Error loading PDF:', err);
                        setError('Failed to load PDF document');
                        setIsLoading(false);
                    }
                }
            }["ProofreadPdfViewer.useEffect.loadPdf"];
            if (pdfUrl) {
                loadPdf();
            }
            return ({
                "ProofreadPdfViewer.useEffect": ()=>{
                    // Cleanup render tasks
                    renderTasksRef.current.forEach({
                        "ProofreadPdfViewer.useEffect": (task)=>{
                            try {
                                task.cancel();
                            } catch (e) {
                            // Ignore
                            }
                        }
                    }["ProofreadPdfViewer.useEffect"]);
                    renderTasksRef.current.clear();
                    renderingInProgressRef.current.clear();
                }
            })["ProofreadPdfViewer.useEffect"];
        }
    }["ProofreadPdfViewer.useEffect"], [
        pdfUrl
    ]);
    // Cleanup render tasks when zoom changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProofreadPdfViewer.useEffect": ()=>{
            const cancelAllTasks = {
                "ProofreadPdfViewer.useEffect.cancelAllTasks": async ()=>{
                    const cancelPromises = [];
                    renderTasksRef.current.forEach({
                        "ProofreadPdfViewer.useEffect.cancelAllTasks": (task)=>{
                            cancelPromises.push(({
                                "ProofreadPdfViewer.useEffect.cancelAllTasks": async ()=>{
                                    try {
                                        await task.cancel();
                                    } catch (e) {
                                    // Ignore errors during cancellation
                                    }
                                }
                            })["ProofreadPdfViewer.useEffect.cancelAllTasks"]());
                        }
                    }["ProofreadPdfViewer.useEffect.cancelAllTasks"]);
                    await Promise.all(cancelPromises);
                    renderTasksRef.current.clear();
                    renderingInProgressRef.current.clear();
                    setRenderedPages(new Set());
                    setTextLayerLoaded(new Set());
                }
            }["ProofreadPdfViewer.useEffect.cancelAllTasks"];
            cancelAllTasks();
        }
    }["ProofreadPdfViewer.useEffect"], [
        zoom
    ]);
    // Render a page
    const renderPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProofreadPdfViewer.useCallback[renderPage]": async (pageNum)=>{
            if (!pdfDoc) return;
            // Check if already rendering this page
            if (renderingInProgressRef.current.get(pageNum)) {
                console.log(`[ProofreadPdfViewer] Page ${pageNum} is already rendering, skipping`);
                return;
            }
            const canvas = canvasRefs.current.get(pageNum);
            if (!canvas) {
                console.log(`[ProofreadPdfViewer] Canvas not ready for page ${pageNum}`);
                return;
            }
            // Mark as rendering in progress
            renderingInProgressRef.current.set(pageNum, true);
            // Cancel existing render task
            const existingTask = renderTasksRef.current.get(pageNum);
            if (existingTask) {
                try {
                    console.log(`[ProofreadPdfViewer] Cancelling existing render for page ${pageNum}`);
                    await existingTask.cancel();
                    renderTasksRef.current.delete(pageNum);
                    // Wait for cancellation to fully complete
                    await new Promise({
                        "ProofreadPdfViewer.useCallback[renderPage]": (resolve)=>setTimeout(resolve, 100)
                    }["ProofreadPdfViewer.useCallback[renderPage]"]);
                } catch (e) {
                    // Ignore
                    console.log(`[ProofreadPdfViewer] Cancellation error for page ${pageNum}:`, e);
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
                // Clear canvas
                context.clearRect(0, 0, currentCanvas.width, currentCanvas.height);
                currentCanvas.width = viewport.width;
                currentCanvas.height = viewport.height;
                const renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };
                const renderTask = page.render(renderContext);
                renderTasksRef.current.set(pageNum, renderTask);
                await renderTask.promise;
                renderTasksRef.current.delete(pageNum);
                setRenderedPages({
                    "ProofreadPdfViewer.useCallback[renderPage]": (prev)=>new Set([
                            ...prev,
                            pageNum
                        ])
                }["ProofreadPdfViewer.useCallback[renderPage]"]);
                // Render text layer for highlighting
                await renderTextLayer(page, pageNum, viewport);
                console.log(`[ProofreadPdfViewer] Rendered page ${pageNum}`);
            } catch (err) {
                renderTasksRef.current.delete(pageNum);
                if (err?.name !== 'RenderingCancelledException') {
                    console.error(`[ProofreadPdfViewer] Error rendering page ${pageNum}:`, err);
                }
            } finally{
                // Always mark as no longer rendering
                renderingInProgressRef.current.set(pageNum, false);
            }
        }
    }["ProofreadPdfViewer.useCallback[renderPage]"], [
        pdfDoc,
        zoom
    ]);
    // Render text layer for text selection and highlighting
    const renderTextLayer = async (page, pageNum, viewport)=>{
        const textLayerDiv = textLayerRefs.current.get(pageNum);
        if (!textLayerDiv) return;
        try {
            const textContent = await page.getTextContent();
            // Dynamically load pdfjs for Util
            const pdfjs = await loadPdfJs();
            // Clear existing text layer
            textLayerDiv.innerHTML = '';
            textLayerDiv.style.width = `${viewport.width}px`;
            textLayerDiv.style.height = `${viewport.height}px`;
            // Render text items
            textContent.items.forEach((item)=>{
                const textDiv = document.createElement('div');
                const tx = pdfjs.Util.transform(pdfjs.Util.transform(viewport.transform, item.transform), [
                    1,
                    0,
                    0,
                    -1,
                    0,
                    0
                ]);
                const style = textContent.styles[item.fontName];
                textDiv.style.position = 'absolute';
                textDiv.style.left = `${tx[4]}px`;
                textDiv.style.top = `${tx[5]}px`;
                textDiv.style.fontSize = `${Math.abs(tx[3])}px`;
                textDiv.style.fontFamily = style?.fontFamily || 'sans-serif';
                textDiv.textContent = item.str;
                textDiv.className = 'pdf-text-item';
                textLayerDiv.appendChild(textDiv);
            });
            setTextLayerLoaded((prev)=>new Set([
                    ...prev,
                    pageNum
                ]));
        } catch (err) {
            console.error(`[ProofreadPdfViewer] Error rendering text layer for page ${pageNum}:`, err);
        }
    };
    // Render visible pages
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProofreadPdfViewer.useEffect": ()=>{
            if (!pdfDoc || totalPages === 0) return;
            // Render all pages sequentially to avoid canvas conflicts
            const renderAllPages = {
                "ProofreadPdfViewer.useEffect.renderAllPages": async ()=>{
                    for(let i = 1; i <= totalPages; i++){
                        if (!renderingInProgressRef.current.get(i)) {
                            await renderPage(i);
                            // Small delay between renders to ensure clean separation
                            await new Promise({
                                "ProofreadPdfViewer.useEffect.renderAllPages": (resolve)=>setTimeout(resolve, 50)
                            }["ProofreadPdfViewer.useEffect.renderAllPages"]);
                        }
                    }
                }
            }["ProofreadPdfViewer.useEffect.renderAllPages"];
            // Use a small delay to ensure canvases are mounted and ready
            const timeoutId = setTimeout({
                "ProofreadPdfViewer.useEffect.timeoutId": ()=>{
                    renderAllPages();
                }
            }["ProofreadPdfViewer.useEffect.timeoutId"], 100);
            return ({
                "ProofreadPdfViewer.useEffect": ()=>clearTimeout(timeoutId)
            })["ProofreadPdfViewer.useEffect"];
        }
    }["ProofreadPdfViewer.useEffect"], [
        pdfDoc,
        totalPages,
        zoom,
        renderPage
    ]);
    // Scroll to selected suggestion
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProofreadPdfViewer.useEffect": ()=>{
            if (selectedSuggestion && selectedSuggestion.page) {
                const pageDiv = pageRefs.current.get(selectedSuggestion.page);
                if (pageDiv) {
                    pageDiv.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                    // Highlight the text
                    const textLayerDiv = textLayerRefs.current.get(selectedSuggestion.page);
                    if (textLayerDiv) {
                        highlightTextInLayer(textLayerDiv, selectedSuggestion.original);
                    }
                }
            } else {
                // Clear all highlights
                textLayerRefs.current.forEach({
                    "ProofreadPdfViewer.useEffect": (textLayerDiv)=>{
                        const highlighted = textLayerDiv.querySelectorAll('.highlighted-text');
                        highlighted.forEach({
                            "ProofreadPdfViewer.useEffect": (el)=>{
                                el.classList.remove('highlighted-text');
                            }
                        }["ProofreadPdfViewer.useEffect"]);
                    }
                }["ProofreadPdfViewer.useEffect"]);
            }
        }
    }["ProofreadPdfViewer.useEffect"], [
        selectedSuggestion
    ]);
    // Highlight text in text layer
    const highlightTextInLayer = (textLayerDiv, text)=>{
        // Clear previous highlights
        const previousHighlights = textLayerDiv.querySelectorAll('.highlighted-text');
        previousHighlights.forEach((el)=>el.classList.remove('highlighted-text'));
        // Find and highlight matching text
        const textItems = textLayerDiv.querySelectorAll('.pdf-text-item');
        let fullText = '';
        const itemMap = [];
        textItems.forEach((item)=>{
            const start = fullText.length;
            const content = item.textContent || '';
            fullText += content;
            const end = fullText.length;
            itemMap.push({
                start,
                end,
                element: item
            });
        });
        // Find text position
        const searchText = text.toLowerCase().trim();
        const fullTextLower = fullText.toLowerCase();
        const index = fullTextLower.indexOf(searchText);
        if (index !== -1) {
            const matchStart = index;
            const matchEnd = index + searchText.length;
            // Highlight matching elements
            itemMap.forEach(({ start, end, element })=>{
                if (start >= matchStart && start < matchEnd || end > matchStart && end <= matchEnd || start <= matchStart && end >= matchEnd) {
                    element.classList.add('highlighted-text');
                }
            });
        }
    };
    // Navigation handlers
    const handlePrevPage = ()=>{
        if (currentPage > 1) {
            const pageDiv = pageRefs.current.get(currentPage - 1);
            if (pageDiv) {
                pageDiv.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            setCurrentPage(currentPage - 1);
        }
    };
    const handleNextPage = ()=>{
        if (currentPage < totalPages) {
            const pageDiv = pageRefs.current.get(currentPage + 1);
            if (pageDiv) {
                pageDiv.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            setCurrentPage(currentPage + 1);
        }
    };
    const handleZoomIn = ()=>{
        setZoom((prev)=>Math.min(prev + 0.2, 3));
        setRenderedPages(new Set());
    };
    const handleZoomOut = ()=>{
        setZoom((prev)=>Math.max(prev - 0.2, 0.5));
        setRenderedPages(new Set());
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "text-gray-900 dark:text-gray-50",
                        children: "Loading PDF..."
                    }, void 0, false, {
                        fileName: "[project]/components/proofreader/ProofreadPdfViewer.tsx",
                        lineNumber: 360,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/proofreader/ProofreadPdfViewer.tsx",
                    lineNumber: 359,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center h-96",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin rounded-full h-12 w-12 border-b-2 border-zinc-900 dark:border-zinc-100"
                        }, void 0, false, {
                            fileName: "[project]/components/proofreader/ProofreadPdfViewer.tsx",
                            lineNumber: 364,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/proofreader/ProofreadPdfViewer.tsx",
                        lineNumber: 363,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/proofreader/ProofreadPdfViewer.tsx",
                    lineNumber: 362,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/proofreader/ProofreadPdfViewer.tsx",
            lineNumber: 358,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "text-red-600 dark:text-red-400",
                        children: "Error"
                    }, void 0, false, {
                        fileName: "[project]/components/proofreader/ProofreadPdfViewer.tsx",
                        lineNumber: 375,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/proofreader/ProofreadPdfViewer.tsx",
                    lineNumber: 374,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700 dark:text-gray-300",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/components/proofreader/ProofreadPdfViewer.tsx",
                        lineNumber: 378,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/proofreader/ProofreadPdfViewer.tsx",
                    lineNumber: 377,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/proofreader/ProofreadPdfViewer.tsx",
            lineNumber: 373,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "pb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                className: "text-gray-900 dark:text-gray-50",
                                children: "Document Viewer"
                            }, void 0, false, {
                                fileName: "[project]/components/proofreader/ProofreadPdfViewer.tsx",
                                lineNumber: 388,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "secondary",
                                    children: [
                                        "Page ",
                                        currentPage,
                                        " of ",
                                        totalPages
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/proofreader/ProofreadPdfViewer.tsx",
                                    lineNumber: 390,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/proofreader/ProofreadPdfViewer.tsx",
                                lineNumber: 389,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/proofreader/ProofreadPdfViewer.tsx",
                        lineNumber: 387,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                onClick: handlePrevPage,
                                disabled: currentPage === 1,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/proofreader/ProofreadPdfViewer.tsx",
                                    lineNumber: 397,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/proofreader/ProofreadPdfViewer.tsx",
                                lineNumber: 396,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                onClick: handleNextPage,
                                disabled: currentPage === totalPages,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/proofreader/ProofreadPdfViewer.tsx",
                                    lineNumber: 400,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/proofreader/ProofreadPdfViewer.tsx",
                                lineNumber: 399,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1"
                            }, void 0, false, {
                                fileName: "[project]/components/proofreader/ProofreadPdfViewer.tsx",
                                lineNumber: 402,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                onClick: handleZoomOut,
                                disabled: zoom <= 0.5,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomOut$3e$__["ZoomOut"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/proofreader/ProofreadPdfViewer.tsx",
                                    lineNumber: 404,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/proofreader/ProofreadPdfViewer.tsx",
                                lineNumber: 403,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-600 dark:text-gray-400",
                                children: [
                                    Math.round(zoom * 100),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/proofreader/ProofreadPdfViewer.tsx",
                                lineNumber: 406,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                onClick: handleZoomIn,
                                disabled: zoom >= 3,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__["ZoomIn"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/proofreader/ProofreadPdfViewer.tsx",
                                    lineNumber: 408,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/proofreader/ProofreadPdfViewer.tsx",
                                lineNumber: 407,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/proofreader/ProofreadPdfViewer.tsx",
                        lineNumber: 395,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/proofreader/ProofreadPdfViewer.tsx",
                lineNumber: 386,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: containerRef,
                    className: "relative overflow-auto bg-zinc-100 dark:bg-zinc-800 rounded-lg p-4",
                    style: {
                        maxHeight: '75vh'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-4",
                        children: Array.from({
                            length: totalPages
                        }, (_, i)=>i + 1).map((pageNum)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: (el)=>{
                                    if (el) pageRefs.current.set(pageNum, el);
                                },
                                className: "relative bg-white shadow-lg",
                                style: {
                                    marginBottom: '20px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                        ref: (el)=>{
                                            if (el) canvasRefs.current.set(pageNum, el);
                                        },
                                        className: "block w-full h-auto"
                                    }, void 0, false, {
                                        fileName: "[project]/components/proofreader/ProofreadPdfViewer.tsx",
                                        lineNumber: 428,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: (el)=>{
                                            if (el) textLayerRefs.current.set(pageNum, el);
                                        },
                                        className: "absolute top-0 left-0 pointer-events-none pdf-text-layer",
                                        style: {
                                            overflow: 'hidden'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/proofreader/ProofreadPdfViewer.tsx",
                                        lineNumber: 434,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-2 right-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "secondary",
                                            children: pageNum
                                        }, void 0, false, {
                                            fileName: "[project]/components/proofreader/ProofreadPdfViewer.tsx",
                                            lineNumber: 444,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/proofreader/ProofreadPdfViewer.tsx",
                                        lineNumber: 443,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, pageNum, true, {
                                fileName: "[project]/components/proofreader/ProofreadPdfViewer.tsx",
                                lineNumber: 420,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/components/proofreader/ProofreadPdfViewer.tsx",
                        lineNumber: 418,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/proofreader/ProofreadPdfViewer.tsx",
                    lineNumber: 413,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/proofreader/ProofreadPdfViewer.tsx",
                lineNumber: 412,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/proofreader/ProofreadPdfViewer.tsx",
        lineNumber: 385,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProofreadPdfViewer, "qbwNhl7UIR7sAONE2AfV7/6aQNQ=");
_c = ProofreadPdfViewer;
const __TURBOPACK__default__export__ = ProofreadPdfViewer;
var _c;
__turbopack_context__.k.register(_c, "ProofreadPdfViewer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/services/geminiService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "analyzePdfContent",
    ()=>analyzePdfContent
]);
async function analyzePdfContent(pdfTextByPage) {
    try {
        let response;
        try {
            response = await fetch('/api/analyze', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    pdfTextByPage
                })
            });
        } catch (fetchError) {
            // Handle network-level fetch failures (before getting a response)
            console.error("Network error during fetch:", fetchError);
            if (fetchError instanceof TypeError && fetchError.message.includes('fetch failed')) {
                throw new Error("Unable to connect to the server. Please check your internet connection and ensure the server is running.");
            }
            // Re-throw with a more user-friendly message
            throw new Error(`Network error: ${fetchError instanceof Error ? fetchError.message : 'Failed to send request'}. Please check your connection and try again.`);
        }
        if (!response.ok) {
            let errorMessage = `HTTP error! status: ${response.status}`;
            // Clone response to allow multiple reads if needed
            const responseClone = response.clone();
            // Try to read as JSON first (since our API returns JSON errors)
            let errorData = null;
            try {
                errorData = await response.json();
            } catch (jsonError) {
                // If JSON parsing fails, try reading the cloned response as text
                try {
                    const responseText = await responseClone.text();
                    errorMessage = responseText || errorMessage;
                } catch (textError) {
                    // If we can't read the response at all, use the default message
                    console.error("Could not read error response:", textError);
                }
            }
            // If we successfully parsed JSON, extract the error message
            if (errorData && typeof errorData === 'object' && errorData !== null) {
                // Handle nested error structure: { error: { message: "...", code: 503 } }
                // This is the format returned by our API route
                if (errorData.error !== undefined && errorData.error !== null) {
                    if (typeof errorData.error === 'string') {
                        errorMessage = errorData.error;
                    } else if (typeof errorData.error === 'object') {
                        // Extract message from nested error object
                        // Check for error.error.message (triple nested) first
                        if (errorData.error.error && typeof errorData.error.error === 'object' && typeof errorData.error.error.message === 'string') {
                            errorMessage = errorData.error.error.message;
                        } else if (typeof errorData.error.message === 'string' && errorData.error.message.length > 0) {
                            // This is the expected path: errorData.error.message
                            errorMessage = errorData.error.message;
                        } else if (errorData.error.error !== undefined) {
                            // Triple nested without message property
                            const innerError = errorData.error.error;
                            if (typeof innerError === 'string') {
                                errorMessage = innerError;
                            }
                        }
                    }
                } else if (typeof errorData.message === 'string' && errorData.message.length > 0) {
                    // Direct message property
                    errorMessage = errorData.message;
                }
            }
            // Final safety check: if errorMessage is still the default and we have errorData, try to stringify just the message part
            if (errorMessage === `HTTP error! status: ${response.status}` && errorData) {
                // Last resort: if we couldn't extract, at least try to get something meaningful
                if (errorData.error?.message) {
                    errorMessage = String(errorData.error.message);
                }
            }
            // Provide user-friendly messages for common error codes if we still have the default
            if (errorMessage === `HTTP error! status: ${response.status}`) {
                if (response.status === 503) {
                    errorMessage = "The AI service is temporarily unavailable. Please try again in a few moments.";
                } else if (response.status === 429) {
                    errorMessage = "Too many requests. Please wait a moment and try again.";
                } else if (response.status === 401 || response.status === 403) {
                    errorMessage = "Authentication failed. Please check your API key configuration.";
                } else if (response.status === 500) {
                    errorMessage = "An internal server error occurred. Please try again later.";
                }
            }
            // Ensure we have a string, not an object
            if (typeof errorMessage !== 'string') {
                errorMessage = String(errorMessage);
            }
            throw new Error(errorMessage);
        }
        const data = await response.json();
        return data.suggestions || [];
    } catch (error) {
        console.error("Error analyzing content with Gemini:", error);
        // Preserve the original error message if it's already an Error instance
        if (error instanceof Error) {
            throw error;
        }
        throw new Error("Failed to get suggestions from the AI. Please check the console for details.");
    }
}
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
        pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs';
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
    // This regex keeps ASCII printable characters (32-126) and common whitespace
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
            pdfBytes = new Uint8Array(binaryString.length);
            for(let i = 0; i < binaryString.length; i++){
                pdfBytes[i] = binaryString.charCodeAt(i);
            }
            pdfBytes = pdfBytes.buffer;
        } else {
            const response = await fetch(pdfUrl);
            pdfBytes = await response.arrayBuffer();
        }
        const pdf = await pdfjs.getDocument({
            data: pdfBytes
        }).promise;
        const htmlParts = [];
        for(let pageNum = 1; pageNum <= pdf.numPages; pageNum++){
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
        }
        return htmlParts.join('\n');
    } catch (error) {
        console.error('Error converting PDF to HTML:', error);
        throw new Error('Failed to convert PDF to HTML');
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
            // Wrap text to fit within page width
            const words = text.split(' ');
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
        const regex = new RegExp(suggestion.original.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
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
async function htmlToWordBlob(htmlContent) {
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, 'text/html');
        const paragraphs = [];
        // Process each element in the HTML
        const elements = doc.body.children;
        for(let i = 0; i < elements.length; i++){
            const element = elements[i];
            const tagName = element.tagName.toLowerCase();
            const text = element.textContent?.trim() || '';
            if (!text) continue;
            // Determine paragraph properties based on HTML element
            let paragraphOptions = {
                children: []
            };
            // Handle headings
            if (tagName === 'h1') {
                paragraphOptions.heading = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_1;
            } else if (tagName === 'h2') {
                paragraphOptions.heading = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_2;
            } else if (tagName === 'h3') {
                paragraphOptions.heading = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadingLevel"].HEADING_3;
            }
            // Handle text alignment (check for style attribute or classes)
            const style = element.getAttribute('style') || '';
            if (style.includes('text-align: center')) {
                paragraphOptions.alignment = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlignmentType"].CENTER;
            } else if (style.includes('text-align: right')) {
                paragraphOptions.alignment = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlignmentType"].RIGHT;
            } else if (style.includes('text-align: justify')) {
                paragraphOptions.alignment = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlignmentType"].JUSTIFIED;
            }
            // Create text run with formatting
            const textRunOptions = {
                text: text
            };
            // Check for bold, italic, underline in child elements
            if (element.querySelector('strong, b')) {
                textRunOptions.bold = true;
            }
            if (element.querySelector('em, i')) {
                textRunOptions.italics = true;
            }
            if (element.querySelector('u')) {
                textRunOptions.underline = {};
            }
            paragraphOptions.children.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextRun"](textRunOptions));
            paragraphs.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paragraph"](paragraphOptions));
        }
        const wordDoc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$docx$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Document"]({
            sections: [
                {
                    properties: {},
                    children: paragraphs.length > 0 ? paragraphs : [
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mammoth$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mammoth/lib/index.js [app-client] (ecmascript)");
// Components
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/alert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/progress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$editor$2f$TinyMCEEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/editor/TinyMCEEditor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$proofreader$2f$ProofreadPdfViewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/proofreader/ProofreadPdfViewer.tsx [app-client] (ecmascript)");
// Services and types
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$geminiService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/geminiService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$pdfWordConverter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/pdfWordConverter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$AppContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/AppContext.tsx [app-client] (ecmascript)");
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
;
;
;
;
;
// Helper function to load pdfjs dynamically
async function loadPdfJs() {
    const pdfjs = await __turbopack_context__.A("[project]/node_modules/pdfjs-dist/build/pdf.mjs [app-client] (ecmascript, async loader)");
    if (("TURBOPACK compile-time value", "object") !== 'undefined' && !pdfjs.GlobalWorkerOptions.workerSrc) {
        pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs';
    }
    return pdfjs;
}
function ComplianceEditorPage() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const documentId = searchParams.get('documentId');
    const { getDocumentPdfUrl, getDocumentContent, getDocument } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$AppContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppContext"])();
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editorContent, setEditorContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedSuggestionIndex, setSelectedSuggestionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isEditorMode, setIsEditorMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [originalFileName, setOriginalFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [fileType, setFileType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pdfUrl, setPdfUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedSuggestion, setSelectedSuggestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isConverting, setIsConverting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const editorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Cleanup PDF URL on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ComplianceEditorPage.useEffect": ()=>{
            return ({
                "ComplianceEditorPage.useEffect": ()=>{
                    if (pdfUrl) {
                        URL.revokeObjectURL(pdfUrl);
                    }
                }
            })["ComplianceEditorPage.useEffect"];
        }
    }["ComplianceEditorPage.useEffect"], [
        pdfUrl
    ]);
    // Load PDF URL from AppContext if documentId is provided
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ComplianceEditorPage.useEffect": ()=>{
            if (!documentId) {
                console.log('[ComplianceEditor] No documentId provided');
                return;
            }
            console.log('[ComplianceEditor] Loading document:', documentId);
            setIsLoading(true);
            setError(null);
            try {
                // Get document metadata
                const document1 = getDocument(documentId);
                if (document1) {
                    setOriginalFileName(document1.title || 'document');
                    console.log('[ComplianceEditor] Document loaded:', document1.title);
                }
                // Get PDF URL
                const url = getDocumentPdfUrl(documentId);
                console.log('[ComplianceEditor] PDF URL retrieved:', url ? 'exists' : 'null');
                if (url) {
                    setPdfUrl(url);
                    setFileType('pdf');
                    console.log('[ComplianceEditor] PDF URL set successfully');
                } else {
                    console.warn('[ComplianceEditor] No PDF URL found for document');
                    setError('No PDF URL found for this document');
                    setPdfUrl(null);
                }
            } catch (e) {
                console.error('[ComplianceEditor] Error loading PDF:', e);
                setError('Failed to load PDF');
                setPdfUrl(null);
            } finally{
                setIsLoading(false);
            }
        }
    }["ComplianceEditorPage.useEffect"], [
        documentId,
        getDocument,
        getDocumentPdfUrl
    ]);
    // Load extracted text and fetch AI suggestions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ComplianceEditorPage.useEffect": ()=>{
            if (!documentId) return;
            const content = getDocumentContent(documentId);
            if (content) {
                console.log('[ComplianceEditor] Content loaded, analyzing...');
                setProgress(10);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$geminiService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["analyzePdfContent"])(content).then({
                    "ComplianceEditorPage.useEffect": (aiSuggestions)=>{
                        setSuggestions(aiSuggestions);
                        setProgress(100);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Analysis complete! Found ${aiSuggestions.length} suggestions.`);
                    }
                }["ComplianceEditorPage.useEffect"]).catch({
                    "ComplianceEditorPage.useEffect": (err)=>{
                        console.error('[ComplianceEditor] Analysis error:', err);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to analyze document');
                    }
                }["ComplianceEditorPage.useEffect"]);
            }
        }
    }["ComplianceEditorPage.useEffect"], [
        documentId,
        getDocumentContent
    ]);
    const handleFileChange = (e)=>{
        const selectedFile = e.target.files?.[0] || null;
        setFile(selectedFile);
        setSuggestions([]);
        setError(null);
        setEditorContent('');
        setIsEditorMode(false);
        // Clean up previous PDF URL
        if (pdfUrl) {
            URL.revokeObjectURL(pdfUrl);
            setPdfUrl(null);
        }
        if (selectedFile) {
            setOriginalFileName(selectedFile.name.replace(/\.(pdf|docx)$/i, ''));
        }
    };
    const handleUpload = async ()=>{
        if (!file) {
            setError('Please select a document to upload.');
            return;
        }
        setIsLoading(true);
        setError(null);
        setSuggestions([]);
        setProgress(10);
        try {
            const fileName = file.name.toLowerCase();
            const isPdf = fileName.endsWith('.pdf') || file.type === 'application/pdf';
            const isDocx = fileName.endsWith('.docx') || file.type.includes('officedocument.wordprocessingml');
            if (isPdf) {
                setFileType('pdf');
                setProgress(20);
                // Convert PDF to DOCX via backend
                const formData = new FormData();
                formData.append('file', file);
                const convertResponse = await fetch('/api/pdf-to-docx', {
                    method: 'POST',
                    body: formData
                });
                if (!convertResponse.ok) {
                    throw new Error('Failed to convert PDF to DOCX');
                }
                const docxBlob = await convertResponse.blob();
                setProgress(40);
                // Convert DOCX to HTML for TinyMCE
                const arrayBuffer = await docxBlob.arrayBuffer();
                const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mammoth$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].convertToHtml({
                    arrayBuffer
                });
                const html = result.value || '';
                setEditorContent(html);
                setIsEditorMode(true);
                setProgress(60);
                // Extract text from PDF for analysis
                const pdfArrayBuffer = await file.arrayBuffer();
                const pdfjs = await loadPdfJs();
                const pdf = await pdfjs.getDocument({
                    data: pdfArrayBuffer
                }).promise;
                let fullText = '';
                for(let i = 1; i <= pdf.numPages; i++){
                    const page = await pdf.getPage(i);
                    const textContent = await page.getTextContent();
                    const pageText = textContent.items.map((item)=>item.str).join(' ');
                    fullText += `--- PAGE ${i} ---\n${pageText}\n`;
                    setProgress(60 + Math.round(i / pdf.numPages * 20));
                }
                setProgress(85);
                // Analyze with AI
                const aiSuggestions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$geminiService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["analyzePdfContent"])(fullText);
                setSuggestions(aiSuggestions);
                setProgress(100);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Document loaded! Found ${aiSuggestions.length} suggestions.`);
            } else if (isDocx) {
                setFileType('docx');
                setProgress(30);
                // Convert DOCX to HTML
                const arrayBuffer = await file.arrayBuffer();
                const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mammoth$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].convertToHtml({
                    arrayBuffer
                });
                const html = result.value || '';
                setEditorContent(html);
                setIsEditorMode(true);
                setProgress(60);
                // Extract text for analysis
                const tmp = document.createElement('div');
                tmp.innerHTML = html;
                const plainText = tmp.textContent || tmp.innerText || '';
                const textWithPages = `--- PAGE 1 ---\n${plainText}`;
                // Analyze with AI
                const aiSuggestions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$geminiService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["analyzePdfContent"])(textWithPages);
                setSuggestions(aiSuggestions);
                setProgress(100);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Document loaded! Found ${aiSuggestions.length} suggestions.`);
            } else {
                throw new Error('Unsupported file type. Please upload a PDF or DOCX file.');
            }
        } catch (err) {
            console.error('Failed to process file:', err);
            setError(err instanceof Error ? err.message : 'Failed to process the file.');
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to process document');
        } finally{
            setIsLoading(false);
        }
    };
    const handleGoToSuggestion = (index)=>{
        setSelectedSuggestionIndex(index);
        const suggestion = suggestions[index];
        if (!suggestion) return;
        if (isEditorMode && editorRef.current) {
            // Scroll to and highlight the text in editor (use text field, fallback to original for compatibility)
            const textToHighlight = suggestion.text || suggestion.original || '';
            if (textToHighlight) {
                editorRef.current.highlightText(textToHighlight);
            }
        } else if (pdfUrl && fileType === 'pdf') {
            // Navigate to PDF page and highlight
            setSelectedSuggestion(suggestion);
        }
    };
    const handleApplySuggestion = (index)=>{
        const suggestion = suggestions[index];
        if (!suggestion || !editorRef.current || !isEditorMode) return;
        // Replace text in editor (use text field, fallback to original for compatibility)
        const textToReplace = suggestion.text || suggestion.original || '';
        if (!textToReplace) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('No text to replace');
            return;
        }
        editorRef.current.replaceText(textToReplace, suggestion.suggestion);
        // Update editor content from editor
        const newContent = editorRef.current.getContent();
        setEditorContent(newContent);
        // Remove applied suggestion from list
        setSuggestions((prev)=>prev.filter((_, i)=>i !== index));
        // Adjust selected index if needed
        if (selectedSuggestionIndex !== null) {
            if (selectedSuggestionIndex === index) {
                setSelectedSuggestionIndex(null);
            } else if (selectedSuggestionIndex > index) {
                setSelectedSuggestionIndex(selectedSuggestionIndex - 1);
            }
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Suggestion applied');
    };
    const handleSaveAsWord = async ()=>{
        if (!editorRef.current || !isEditorMode) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('No content to save');
            return;
        }
        try {
            // Get current content from editor
            const content = editorRef.current.getContent();
            const blob = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$pdfWordConverter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["htmlToWordBlob"])(content);
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${originalFileName || 'document'}_edited.docx`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Document downloaded as Word');
        } catch (err) {
            console.error('Save error:', err);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to save as Word');
        }
    };
    const handleSaveAsPdf = async ()=>{
        if (!editorRef.current || !isEditorMode) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('No content to save');
            return;
        }
        try {
            // Get current content from editor
            const content = editorRef.current.getContent();
            const pdfDataUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$pdfWordConverter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertHtmlToPdf"])(content);
            const a = document.createElement('a');
            a.href = pdfDataUrl;
            a.download = `${originalFileName || 'document'}_edited.pdf`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Document downloaded as PDF');
        } catch (err) {
            console.error('Save error:', err);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to save as PDF');
        }
    };
    const handleConvertToEditor = async ()=>{
        if (!pdfUrl) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('PDF not available for conversion');
            return;
        }
        setIsConverting(true);
        setError(null);
        setProgress(10);
        try {
            // Convert PDF to DOCX via backend
            const response = await fetch(pdfUrl);
            const blob = await response.blob();
            const formData = new FormData();
            formData.append('file', blob, 'document.pdf');
            setProgress(30);
            const convertResponse = await fetch('/api/pdf-to-docx', {
                method: 'POST',
                body: formData
            });
            if (!convertResponse.ok) {
                throw new Error('Failed to convert PDF to DOCX');
            }
            const docxBlob = await convertResponse.blob();
            setProgress(60);
            // Convert DOCX to HTML for TinyMCE
            const arrayBuffer = await docxBlob.arrayBuffer();
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mammoth$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].convertToHtml({
                arrayBuffer
            });
            const html = result.value || '';
            setEditorContent(html);
            setIsEditorMode(true);
            setProgress(100);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Document converted to editor mode');
        } catch (err) {
            console.error('Conversion error:', err);
            setError(err instanceof Error ? err.message : 'Failed to convert PDF');
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to convert PDF to editor mode');
        } finally{
            setIsConverting(false);
        }
    };
    // Add debugging
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ComplianceEditorPage.useEffect": ()=>{
            console.log('[ComplianceEditor] State:', {
                file: file?.name,
                fileType,
                isEditorMode,
                pdfUrl: pdfUrl ? 'set' : 'not set',
                suggestionsCount: suggestions.length,
                isLoading
            });
        }
    }["ComplianceEditorPage.useEffect"], [
        file,
        fileType,
        isEditorMode,
        pdfUrl,
        suggestions.length,
        isLoading
    ]);
    // Group suggestions by category
    const groupedSuggestions = suggestions.reduce((acc, suggestion, index)=>{
        const category = suggestion.category || 'compliance';
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push({
            ...suggestion,
            index
        });
        return acc;
    }, {});
    const getSeverityColor = (severity)=>{
        switch(severity){
            case 'critical':
                return 'destructive';
            case 'warning':
                return 'default';
            default:
                return 'secondary';
        }
    };
    const getCategoryLabel = (category)=>{
        switch(category){
            case 'compliance':
                return 'Compliance';
            case 'grammar':
                return 'Grammar';
            case 'style':
                return 'Style';
            default:
                return category;
        }
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center h-screen bg-zinc-50 dark:bg-zinc-950 text-center gap-4 px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "w-full max-w-md border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-gray-900 dark:text-gray-50",
                            children: "Analyzing Document..."
                        }, void 0, false, {
                            fileName: "[project]/app/compliance-editor/page.tsx",
                            lineNumber: 455,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/compliance-editor/page.tsx",
                        lineNumber: 454,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                value: progress
                            }, void 0, false, {
                                fileName: "[project]/app/compliance-editor/page.tsx",
                                lineNumber: 458,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 dark:text-gray-400",
                                children: progress < 30 ? 'Loading document...' : progress < 70 ? 'Extracting text...' : 'Analyzing compliance...'
                            }, void 0, false, {
                                fileName: "[project]/app/compliance-editor/page.tsx",
                                lineNumber: 459,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/compliance-editor/page.tsx",
                        lineNumber: 457,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/compliance-editor/page.tsx",
                lineNumber: 453,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/compliance-editor/page.tsx",
            lineNumber: 452,
            columnNumber: 7
        }, this);
    }
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
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold text-gray-900 dark:text-gray-50 mb-2",
                            children: "Financial Compliance Editor"
                        }, void 0, false, {
                            fileName: "[project]/app/compliance-editor/page.tsx",
                            lineNumber: 479,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 dark:text-gray-400",
                            children: "Upload documents for FINRA/SEC compliance review and editing"
                        }, void 0, false, {
                            fileName: "[project]/app/compliance-editor/page.tsx",
                            lineNumber: 482,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/compliance-editor/page.tsx",
                    lineNumber: 478,
                    columnNumber: 9
                }, this),
                !isEditorMode && !file && !pdfUrl && !documentId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                className: "text-gray-900 dark:text-gray-50",
                                children: "Upload Document"
                            }, void 0, false, {
                                fileName: "[project]/app/compliance-editor/page.tsx",
                                lineNumber: 490,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/compliance-editor/page.tsx",
                            lineNumber: 489,
                            columnNumber: 13
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
                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                            lineNumber: 495,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                                            children: error
                                        }, void 0, false, {
                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                            lineNumber: 496,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/compliance-editor/page.tsx",
                                    lineNumber: 494,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "file-upload",
                                            children: "Select PDF or Word Document"
                                        }, void 0, false, {
                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                            lineNumber: 501,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    id: "file-upload",
                                                    type: "file",
                                                    accept: ".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                                                    onChange: handleFileChange
                                                }, void 0, false, {
                                                    fileName: "[project]/app/compliance-editor/page.tsx",
                                                    lineNumber: 503,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    onClick: handleUpload,
                                                    disabled: !file,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                            className: "h-4 w-4 mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                                            lineNumber: 510,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Analyze"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/compliance-editor/page.tsx",
                                                    lineNumber: 509,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                            lineNumber: 502,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 dark:text-gray-400",
                                            children: "Supported formats: PDF, DOCX (up to 10MB)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                            lineNumber: 514,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/compliance-editor/page.tsx",
                                    lineNumber: 500,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/compliance-editor/page.tsx",
                            lineNumber: 492,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/compliance-editor/page.tsx",
                    lineNumber: 488,
                    columnNumber: 11
                }, this),
                (isEditorMode || file || pdfUrl) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "outline",
                                            children: file?.name || originalFileName || 'Document'
                                        }, void 0, false, {
                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                            lineNumber: 526,
                                            columnNumber: 17
                                        }, this),
                                        suggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "secondary",
                                            children: [
                                                suggestions.length,
                                                " suggestions found"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                            lineNumber: 528,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/compliance-editor/page.tsx",
                                    lineNumber: 525,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        pdfUrl && fileType === 'pdf' && !isEditorMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "default",
                                            onClick: handleConvertToEditor,
                                            disabled: isConverting,
                                            children: isConverting ? 'Converting...' : 'Edit Document'
                                        }, void 0, false, {
                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                            lineNumber: 533,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            onClick: ()=>{
                                                setFile(null);
                                                setIsEditorMode(false);
                                                setSuggestions([]);
                                                setEditorContent('');
                                                setFileType(null);
                                                setPdfUrl(null);
                                                setSelectedSuggestion(null);
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                    className: "h-4 w-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/compliance-editor/page.tsx",
                                                    lineNumber: 553,
                                                    columnNumber: 19
                                                }, this),
                                                "New Document"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                            lineNumber: 541,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/compliance-editor/page.tsx",
                                    lineNumber: 531,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/compliance-editor/page.tsx",
                            lineNumber: 524,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:col-span-2",
                                    children: isEditorMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                className: "pb-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                            className: "text-gray-900 dark:text-gray-50",
                                                            children: "Document Editor"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                                            lineNumber: 565,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    variant: "outline",
                                                                    size: "sm",
                                                                    onClick: handleSaveAsWord,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                            className: "h-4 w-4 mr-2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                                                            lineNumber: 574,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        "Download as Word"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/compliance-editor/page.tsx",
                                                                    lineNumber: 569,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    variant: "outline",
                                                                    size: "sm",
                                                                    onClick: handleSaveAsPdf,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                            className: "h-4 w-4 mr-2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                                                            lineNumber: 582,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        "Download as PDF"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/compliance-editor/page.tsx",
                                                                    lineNumber: 577,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                                            lineNumber: 568,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/compliance-editor/page.tsx",
                                                    lineNumber: 564,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/compliance-editor/page.tsx",
                                                lineNumber: 563,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                className: "p-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$editor$2f$TinyMCEEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    ref: editorRef,
                                                    content: editorContent,
                                                    onContentChange: setEditorContent,
                                                    suggestions: suggestions,
                                                    selectedSuggestionIndex: selectedSuggestionIndex
                                                }, void 0, false, {
                                                    fileName: "[project]/app/compliance-editor/page.tsx",
                                                    lineNumber: 589,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/compliance-editor/page.tsx",
                                                lineNumber: 588,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/compliance-editor/page.tsx",
                                        lineNumber: 562,
                                        columnNumber: 19
                                    }, this) : pdfUrl && fileType === 'pdf' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$proofreader$2f$ProofreadPdfViewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        pdfUrl: pdfUrl,
                                        suggestions: suggestions,
                                        selectedSuggestion: selectedSuggestion,
                                        onSuggestionClick: setSelectedSuggestion,
                                        onApplyEdit: (pageNumber, originalText, newText)=>{
                                            // Handle edit application - for now just show a toast
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info('Convert to editor mode to apply changes');
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/compliance-editor/page.tsx",
                                        lineNumber: 599,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "p-6 text-center text-gray-600 dark:text-gray-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                    className: "h-12 w-12 mx-auto mb-4 opacity-50"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/compliance-editor/page.tsx",
                                                    lineNumber: 612,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Upload a document to get started"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/compliance-editor/page.tsx",
                                                    lineNumber: 613,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                            lineNumber: 611,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/compliance-editor/page.tsx",
                                        lineNumber: 610,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/compliance-editor/page.tsx",
                                    lineNumber: 560,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:col-span-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 sticky top-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "text-gray-900 dark:text-gray-50 flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Suggestions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                                            lineNumber: 624,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "secondary",
                                                            children: suggestions.length
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                                            lineNumber: 625,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/compliance-editor/page.tsx",
                                                    lineNumber: 623,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/compliance-editor/page.tsx",
                                                lineNumber: 622,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                className: "max-h-[calc(100vh-200px)] overflow-y-auto space-y-4",
                                                children: suggestions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center py-8 text-gray-500 dark:text-gray-400",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "No suggestions found"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                                            lineNumber: 631,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm mt-2",
                                                            children: "Your document looks good!"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                                            lineNumber: 632,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/compliance-editor/page.tsx",
                                                    lineNumber: 630,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: Object.entries(groupedSuggestions).map(([category, items])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 mb-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                            variant: "outline",
                                                                            className: "text-xs",
                                                                            children: getCategoryLabel(category)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                                                            lineNumber: 639,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                                                                            className: "flex-1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                                                            lineNumber: 642,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/compliance-editor/page.tsx",
                                                                    lineNumber: 638,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-3",
                                                                    children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                                            className: `border cursor-pointer transition-colors ${selectedSuggestionIndex === item.index ? 'border-emerald-500 dark:border-emerald-600 bg-emerald-50 dark:bg-emerald-950' : 'border-zinc-200 dark:border-zinc-700'}`,
                                                                            onClick: ()=>handleGoToSuggestion(item.index),
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                                                className: "p-3 space-y-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-start justify-between gap-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                                variant: getSeverityColor(item.severity || 'warning'),
                                                                                                className: "text-xs",
                                                                                                children: item.severity || 'warning'
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/compliance-editor/page.tsx",
                                                                                                lineNumber: 658,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-xs text-gray-500",
                                                                                                children: [
                                                                                                    "Page ",
                                                                                                    item.page
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/app/compliance-editor/page.tsx",
                                                                                                lineNumber: 661,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/compliance-editor/page.tsx",
                                                                                        lineNumber: 657,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-sm text-gray-700 dark:text-gray-300",
                                                                                        children: item.issue || item.explanation || 'Issue found'
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/compliance-editor/page.tsx",
                                                                                        lineNumber: 664,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-xs space-y-1",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-red-600 dark:text-red-400",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        className: "font-semibold",
                                                                                                        children: "Original:"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/app/compliance-editor/page.tsx",
                                                                                                        lineNumber: 670,
                                                                                                        columnNumber: 39
                                                                                                    }, this),
                                                                                                    " ",
                                                                                                    item.text || item.original || ''
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/app/compliance-editor/page.tsx",
                                                                                                lineNumber: 669,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-green-600 dark:text-green-400",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        className: "font-semibold",
                                                                                                        children: "Suggested:"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/app/compliance-editor/page.tsx",
                                                                                                        lineNumber: 673,
                                                                                                        columnNumber: 39
                                                                                                    }, this),
                                                                                                    " ",
                                                                                                    item.suggestion
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/app/compliance-editor/page.tsx",
                                                                                                lineNumber: 672,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/compliance-editor/page.tsx",
                                                                                        lineNumber: 668,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    isEditorMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                        variant: "default",
                                                                                        size: "sm",
                                                                                        className: "w-full mt-2",
                                                                                        onClick: (e)=>{
                                                                                            e.stopPropagation();
                                                                                            handleApplySuggestion(item.index);
                                                                                        },
                                                                                        children: "Apply Change"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/compliance-editor/page.tsx",
                                                                                        lineNumber: 678,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/compliance-editor/page.tsx",
                                                                                lineNumber: 656,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, item.index, false, {
                                                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                                                            lineNumber: 647,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/compliance-editor/page.tsx",
                                                                    lineNumber: 645,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, category, true, {
                                                            fileName: "[project]/app/compliance-editor/page.tsx",
                                                            lineNumber: 637,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false)
                                            }, void 0, false, {
                                                fileName: "[project]/app/compliance-editor/page.tsx",
                                                lineNumber: 628,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/compliance-editor/page.tsx",
                                        lineNumber: 621,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/compliance-editor/page.tsx",
                                    lineNumber: 620,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/compliance-editor/page.tsx",
                            lineNumber: 558,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/app/compliance-editor/page.tsx",
            lineNumber: 477,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/compliance-editor/page.tsx",
        lineNumber: 471,
        columnNumber: 5
    }, this);
}
_s(ComplianceEditorPage, "HO/11iGmhk74u/8iJkim3X9491E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$AppContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppContext"]
    ];
});
_c = ComplianceEditorPage;
var _c;
__turbopack_context__.k.register(_c, "ComplianceEditorPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_8259265d._.js.map