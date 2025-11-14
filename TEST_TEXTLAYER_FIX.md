# Quick Test Guide - TextLayer Abort Fix

## Overview
This guide will help you verify that the TextLayer abort warning fix is working correctly in your Next.js 16.0.1 application.

---

## Prerequisites
1. Development server running (`npm run dev`)
2. Browser DevTools open (F12 or Cmd+Option+I)
3. Console tab visible

---

## Test 1: Verify Filter Is Active (30 seconds)

### Steps:
1. Start your development server:
   ```bash
   cd /Volumes/Trinos/Learning/PointofTwo/Po2
   npm run dev
   ```

2. Open browser to `http://localhost:3000`

3. Open DevTools Console

4. Look for initialization message:
   ```
   [PDF Config] TextLayer abort warning filter initialized
   ```
   ✅ If you see this, the filter is active!

5. Test the filter manually in console:
   ```javascript
   console.warn('Regular warning');  // Should appear ✅
   console.warn('TextLayer task cancelled');  // Should NOT appear ❌
   console.warn('AbortException: TextLayer task cancelled');  // Should NOT appear ❌
   ```

---

## Test 2: Compliance Editor (2 minutes)

### Steps:
1. Navigate to: `http://localhost:3000/compliance-editor`

2. Upload a PDF file

3. While the PDF is loading, watch the console

4. Once loaded, perform these actions:
   - Click "Zoom In" button (3-4 times)
   - Click "Zoom Out" button (3-4 times)
   - Navigate to next page
   - Navigate to previous page
   - Do these rapidly

5. **Expected Result:**
   - ✅ No "TextLayer task cancelled" warnings
   - ✅ No "AbortException" warnings
   - ✅ Console remains clean

6. Navigate away from the page

7. **Expected Result:**
   - ✅ No warnings on unmount

---

## Test 3: Editor Page (2 minutes)

### Steps:
1. Navigate to: `http://localhost:3000/editor`

2. Load a document

3. If PDF viewer is present:
   - Zoom in/out
   - Scroll through pages
   - Change document view

4. **Expected Result:**
   - ✅ Console remains clean
   - ✅ No TextLayer warnings

---

## Test 4: Upload Page (2 minutes)

### Steps:
1. Navigate to: `http://localhost:3000/upload`

2. Upload a PDF file

3. View the preview

4. Interact with the PDF (if preview available):
   - Zoom
   - Navigate pages

5. **Expected Result:**
   - ✅ No TextLayer warnings during upload
   - ✅ No warnings during preview

---

## Test 5: Proofread Page (2 minutes)

### Steps:
1. Navigate to: `http://localhost:3000/proofread`

2. Load a document

3. Interact with the PDF viewer:
   - Zoom controls
   - Page navigation
   - Highlighting features

4. **Expected Result:**
   - ✅ No TextLayer abort warnings
   - ✅ All features work normally

---

## Test 6: Hot Reload (1 minute)

### Steps:
1. Open a page with a PDF viewer (e.g., compliance-editor)

2. Load a PDF document

3. Open any source file in your editor:
   ```
   Po2/app/providers.tsx
   ```

4. Make a small change (add a space or comment):
   ```typescript
   // Test comment
   ```

5. Save the file

6. Wait for Next.js Turbopack to hot reload

7. **Expected Result:**
   - ✅ No TextLayer warnings during reload
   - ✅ PDF viewer still works
   - ✅ Console remains clean

---

## Test 7: Multiple PDFs (2 minutes)

### Steps:
1. Open compliance editor in one tab

2. Load a PDF

3. Open another tab with editor page

4. Load another PDF

5. Switch between tabs rapidly

6. Zoom and navigate in both tabs

7. **Expected Result:**
   - ✅ No TextLayer warnings in either tab
   - ✅ Both viewers work independently

---

## Common Issues & Solutions

### Issue: Still seeing TextLayer warnings

**Solution 1: Clear cache**
```bash
# Stop dev server (Ctrl+C)
rm -rf .next
npm run dev
```

**Solution 2: Hard reload browser**
- Chrome/Edge: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Firefox: Cmd+Shift+R (Mac) or Ctrl+F5 (Windows)
- Safari: Cmd+Option+R

**Solution 3: Check configuration**
```bash
# Verify pdf-config.ts exists
ls -la Po2/lib/pdf-config.ts

# Verify providers.tsx imports it
grep "pdf-config" Po2/app/providers.tsx
```

### Issue: [PDF Config] message not appearing

**Check:**
1. Verify you're in development mode (`npm run dev`)
2. Check `process.env.NODE_ENV` in console:
   ```javascript
   console.log(process.env.NODE_ENV); // Should be 'development'
   ```

**Note:** The message only appears in development, but the filter works in production too.

### Issue: Other PDF.js warnings appearing

**This is OK!** The filter only suppresses:
- TextLayer task cancelled warnings
- AbortException warnings

Other PDF.js warnings (like file parsing errors) will still show - this is intentional!

---

## Success Criteria

✅ **Fix is working correctly if:**
1. No "TextLayer task cancelled" warnings in console
2. No "AbortException" warnings in console
3. PDF viewers load and display correctly
4. Zoom, navigation, and all features work normally
5. Other console warnings still appear (real errors)
6. Hot reload works without warnings

❌ **Fix may need adjustment if:**
1. Still seeing TextLayer warnings
2. PDF viewers not loading
3. Console errors about PDF.js
4. Performance issues

---

## Manual Console Tests

Run these in your browser console to verify the filter:

```javascript
// Test 1: Regular warning (should appear)
console.warn('This is a test warning');

// Test 2: TextLayer warning (should be filtered)
console.warn('TextLayer task cancelled');

// Test 3: AbortException (should be filtered)
console.warn({ name: 'AbortException', message: 'Task cancelled' });

// Test 4: AbortError (should be filtered)
console.warn({ name: 'AbortError', message: 'Aborted' });

// Test 5: Mixed (regular should appear, TextLayer should not)
console.warn('Regular message');
console.warn('TextLayer task cancelled');
console.warn('Another regular message');
```

**Expected Output:**
```
This is a test warning
Regular message
Another regular message
```

(TextLayer and Abort warnings should NOT appear)

---

## Verification Checklist

Complete this checklist to confirm the fix:

- [ ] Development server starts without errors
- [ ] See "[PDF Config] TextLayer abort warning filter initialized" in console
- [ ] Manual console tests work correctly
- [ ] Compliance editor loads PDFs without warnings
- [ ] Zoom in/out without warnings
- [ ] Page navigation without warnings
- [ ] Upload page works without warnings
- [ ] Hot reload works without warnings
- [ ] Multiple PDFs work without conflicts
- [ ] Other console warnings still appear (not all filtered)

---

## Performance Check

The fix should have **zero performance impact**. Verify:

1. **PDF Load Time:**
   - No slower than before
   - Typical: 1-3 seconds for average PDF

2. **Zoom Performance:**
   - Smooth zooming
   - No lag or freezing

3. **Navigation:**
   - Instant page changes
   - Smooth scrolling

4. **Memory Usage:**
   - No memory leaks
   - Check in DevTools > Memory tab

---

## Reporting Issues

If you encounter issues after testing:

1. **Capture Details:**
   - Browser and version
   - Screenshot of console
   - Steps to reproduce
   - Any error messages

2. **Check Files:**
   ```bash
   # Verify files are correct
   cat Po2/lib/pdf-config.ts | head -20
   cat Po2/app/providers.tsx | grep pdf-config
   ```

3. **Review Documentation:**
   - See: [TEXTLAYER_ABORT_FIX_COMPLETE.md](./TEXTLAYER_ABORT_FIX_COMPLETE.md)

---

## Success! 🎉

If all tests pass:
- ✅ TextLayer abort warnings are suppressed
- ✅ PDF viewers work correctly
- ✅ Console is clean and readable
- ✅ Development experience is improved

**The fix is working perfectly!**

---

## Next Steps

1. Test in production build:
   ```bash
   npm run build
   npm start
   ```

2. Deploy to staging/production

3. Monitor console in production (warnings won't appear there either)

---

**Testing Duration:** ~10-15 minutes for full test suite
**Difficulty:** Easy
**Risk Level:** Low (non-breaking change)

---

Last Updated: November 13, 2025


