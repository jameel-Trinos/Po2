# Compliance Editor - Testing Guide

## Quick Test Steps

### Test 1: Upload and Navigate to Compliance Editor
1. Start your development server: `npm run dev`
2. Navigate to: `http://localhost:3000/upload`
3. Upload a PDF document
4. After upload completes, you'll be redirected to the editor
5. Note the `documentId` in the URL (e.g., `?documentId=doc-1234567890`)
6. Change the URL from `/editor?documentId=...` to `/compliance-editor?documentId=...`
7. Press Enter
8. **Expected Result:** Your uploaded document should load and display in the compliance editor with AI suggestions

### Test 2: Direct Access via Sidebar
1. Navigate to: `http://localhost:3000/dashboard`
2. Click "Compliance Editor" in the left sidebar
3. **Expected Result:** You should see the compliance editor upload page

### Test 3: Upload Directly in Compliance Editor
1. From the compliance editor page (no documentId)
2. Click "Select PDF or Word Document"
3. Choose a PDF or DOCX file
4. Click "Analyze"
5. **Expected Result:** 
   - Progress bar shows loading stages
   - Document displays in viewer
   - AI suggestions appear in right panel
   - You can click suggestions to highlight them in the document

### Test 4: Convert PDF to Editable
1. After loading a PDF in compliance editor
2. Click "Convert to Editable" button
3. **Expected Result:**
   - Document converts to rich text editor
   - You can edit the text
   - You can apply suggestions with "Apply Change" buttons
   - You can save as Word or PDF

## Expected Console Logs

When loading a document via documentId, you should see:
```
[ComplianceEditor] Loading document: doc-1234567890
[ComplianceEditor] Document loaded: Your Document Title
[ComplianceEditor] PDF URL loaded
[ComplianceEditor] Content loaded, analyzing...
```

## Common Issues and Solutions

### Issue: "Document content not found"
**Cause:** DocumentId in URL doesn't exist in AppContext
**Solution:** 
- Upload a new document from `/upload` first
- Make sure you're using the correct documentId from the upload

### Issue: Blank page after clicking "Compliance Editor"
**Cause:** Expected behavior - shows upload form when no documentId
**Solution:** Either upload a file or add `?documentId=...` to URL

### Issue: PDF not displaying
**Cause:** PDF worker not loading properly
**Solution:** 
- Check that `/pdf.worker.mjs` exists in the public folder
- Check browser console for errors
- Try refreshing the page

## Success Criteria

✅ Document loads from URL parameter
✅ PDF displays in viewer
✅ Suggestions panel shows on the right
✅ Clicking suggestions highlights text (if in editor mode)
✅ Progress bar animates during loading
✅ Error messages are clear and helpful
✅ Can upload new documents directly
✅ Can convert PDFs to editable format
✅ Can save edited documents as Word or PDF

## Quick URLs for Testing

- Dashboard: `http://localhost:3000/dashboard`
- Upload: `http://localhost:3000/upload`
- Compliance Editor (empty): `http://localhost:3000/compliance-editor`
- Compliance Editor (with doc): `http://localhost:3000/compliance-editor?documentId=YOUR_DOC_ID`

## Debugging Tips

1. **Open Browser DevTools** (F12)
2. **Check Console** for any errors or warnings
3. **Look for log messages** starting with `[ComplianceEditor]`
4. **Check Network tab** to ensure PDF files are loading
5. **Check Application > Local Storage** to see stored documents
   - Look for keys: `documentContentMap`, `documentPdfUrlMap`, `documentsMap`

## Next Steps

After testing, consider:
1. Adding a "Open in Compliance Editor" button in the regular editor
2. Adding a dropdown in upload page to choose which editor to use
3. Adding breadcrumbs or back navigation in compliance editor
4. Adding document switching within compliance editor

