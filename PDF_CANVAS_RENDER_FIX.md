# PDF Canvas Rendering Error Fix

## Problem
The application was encountering a PDF.js error:
```
Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.
```

This error occurred when:
- Zoom level was changed rapidly
- Pages were switched quickly
- Multiple pages tried to render simultaneously
- Previous render operations hadn't completed before new ones started

## Root Causes

### 1. Race Conditions in Render Operations
Multiple render operations could be queued on the same canvas without proper synchronization:
- When zoom changed, all pages would attempt to re-render simultaneously
- Page navigation could trigger renders before previous ones completed
- The 50ms wait after cancellation was insufficient for render operations to fully clean up

### 2. Lack of Render State Tracking
The components tracked render tasks but not whether a page was actively being rendered, allowing multiple render attempts on the same canvas.

### 3. Simultaneous Page Rendering
Both components tried to render multiple pages at once without proper queuing:
- `PdfViewerPdfJs`: Rendered current page + adjacent pages simultaneously
- `ProofreadPdfViewer`: Attempted to render ALL pages at once on load

## Solution

### Key Changes

#### 1. Added Render Progress Tracking
```typescript
const renderingInProgressRef = useRef<Map<number, boolean>>(new Map());
```
- Tracks whether each page is currently being rendered
- Prevents multiple simultaneous render operations on the same canvas
- Checked at the start of every render operation

#### 2. Improved Cancellation Handling
```typescript
// Cancel existing render task
if (existingTask) {
  console.log(`Cancelling existing render for page ${pageNum}`);
  await existingTask.cancel();
  renderTasksRef.current.delete(pageNum);
  // Increased wait time for cancellation to fully complete
  await new Promise(resolve => setTimeout(resolve, 100));
}
```
- Increased cancellation wait time from 50ms to 100ms
- Made cancellation awaitable for better synchronization
- Added logging for debugging

#### 3. Sequential Page Rendering
```typescript
// Render pages sequentially to avoid canvas conflicts
const renderSequentially = async () => {
  for (const pageNum of pagesToRender) {
    if (!renderedPages.has(pageNum) && !renderingInProgressRef.current.get(pageNum)) {
      await renderPage(pageNum);
      // Small delay between renders to ensure clean separation
      await new Promise(resolve => setTimeout(resolve, 50));
    }
  }
};
```
- Pages now render one at a time in sequence
- Added delays between renders to ensure clean separation
- Prevents canvas conflicts from simultaneous renders

#### 4. Proper Cleanup on Zoom Changes
```typescript
useEffect(() => {
  const cancelAllTasks = async () => {
    const cancelPromises: Promise<void>[] = [];
    renderTasksRef.current.forEach((task) => {
      cancelPromises.push(
        (async () => {
          try {
            await task.cancel();
          } catch (e) {
            // Ignore errors during cancellation
          }
        })()
      );
    });
    await Promise.all(cancelPromises);
    renderTasksRef.current.clear();
    renderingInProgressRef.current.clear();
    setRenderedPages(new Set());
  };
  
  cancelAllTasks();
}, [zoom]);
```
- All render tasks are properly cancelled when zoom changes
- Rendering progress flags are cleared
- Rendered pages set is reset to trigger re-renders

#### 5. Try-Finally Pattern for Cleanup
```typescript
try {
  // ... render logic ...
} catch (err: any) {
  // ... error handling ...
} finally {
  // Always mark as no longer rendering
  renderingInProgressRef.current.set(pageNum, false);
}
```
- Ensures render progress flag is always cleared
- Prevents stuck "rendering" state even on errors

## Files Modified

1. **`components/editor/PdfViewerPdfJs.tsx`**
   - Added `renderingInProgressRef` for progress tracking
   - Improved `renderPage()` with better cancellation and state management
   - Updated render visible pages effect to render sequentially
   - Enhanced cleanup on zoom changes and unmount

2. **`components/proofreader/ProofreadPdfViewer.tsx`**
   - Added `renderingInProgressRef` for progress tracking
   - Improved `renderPage()` with better cancellation and state management
   - Changed from rendering all pages simultaneously to sequential rendering
   - Added zoom change cleanup effect
   - Enhanced cleanup on unmount

## Testing Recommendations

1. **Zoom Operations**
   - Rapidly change zoom levels multiple times
   - Verify no canvas errors appear in console
   - Check that pages re-render correctly at new zoom levels

2. **Page Navigation**
   - Quickly navigate between pages
   - Scroll rapidly through the document
   - Verify smooth rendering without errors

3. **Initial Load**
   - Load large PDF documents (10+ pages)
   - Verify all pages render without errors
   - Check console for proper sequential rendering logs

4. **Concurrent Operations**
   - Change zoom while scrolling
   - Navigate pages while text layer is loading
   - Verify no race conditions or canvas errors

## Performance Considerations

### Potential Impact
- Sequential rendering may be slightly slower than parallel rendering
- 50-100ms delays between operations add cumulative time
- Large documents may take longer to fully render

### Mitigations
- Only render visible pages + adjacent pages in `PdfViewerPdfJs`
- Keep delay times minimal (50ms between pages, 100ms for cancellation)
- Use timeout to defer initial render, allowing UI to remain responsive

### Future Improvements
- Implement render queue with priority (current page first)
- Add progressive rendering (render visible viewport first, then full page)
- Consider using Web Workers for off-main-thread rendering
- Implement virtual scrolling for very large documents

## Prevention Guidelines

When working with PDF.js canvases in the future:

1. **Always track render state** - Know if a canvas is currently being rendered to
2. **Cancel before rendering** - Always cancel existing render tasks before starting new ones
3. **Wait for cancellation** - Give adequate time for cancellation to complete
4. **Render sequentially** - Avoid rendering multiple pages to different canvases simultaneously
5. **Clean up properly** - Use try-finally to ensure cleanup always happens
6. **Test with rapid operations** - Always test with rapid zoom changes and page navigation

## Related Issues

- Original error manifested in Next.js console during development
- Similar issues may occur in any PDF.js implementation without proper render management
- Pattern applicable to other canvas-based rendering libraries

## References

- [PDF.js Documentation](https://mozilla.github.io/pdf.js/)
- [PDF.js Render Task API](https://mozilla.github.io/pdf.js/api/draft/RenderTask.html)
- Previous documentation: `PDF_CANVAS_FIX.md`, `PDF_VIEWER_SETUP.md`

