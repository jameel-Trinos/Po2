# Quick Test Guide: PDF to Word Conversion Feature

## 🚀 Quick Start Testing (5 minutes)

### Prerequisites
- Development server running (`npm run dev`)
- A sample PDF file ready for upload
- Browser with console open (for debugging if needed)

## ✅ Test Scenario 1: Download PDF as Word

**Expected Time**: 1 minute

1. **Upload a PDF**
   - Go to `/upload`
   - Fill in project details
   - Upload a PDF file
   - Wait for processing

2. **Navigate to Editor**
   - Should auto-redirect to `/editor?documentId=...`
   - PDF should display in viewer

3. **Test Download Conversion**
   - Click "Convert to Word" button (blue button)
   - Select "Download as Word"
   - **Expected**: 
     - ✅ Loading toast: "Converting PDF to Word..."
     - ✅ Success toast: "PDF converted to Word and downloaded"
     - ✅ .docx file downloads to your device
   
4. **Verify Downloaded File**
   - Open the downloaded .docx in Microsoft Word/Google Docs
   - **Expected**: 
     - ✅ Text content is present
     - ✅ Paragraphs are preserved
     - ✅ File opens without errors

---

## ✅ Test Scenario 2: Edit PDF as Word

**Expected Time**: 3 minutes

1. **Upload a PDF** (if not already done)
   - Same steps as Scenario 1

2. **Convert to Edit Mode**
   - Click "Convert to Word" button
   - Select "Edit as Word"
   - **Expected**: 
     - ✅ Loading toast: "Converting PDF to editable Word format..."
     - ✅ Loading toast: "Opening document in editor..."
     - ✅ Success toast: "Document ready for editing! You can now apply AI suggestions."
     - ✅ Editor view changes to editable content
     - ✅ Badge changes to: "Editing Mode - Apply suggestions and download as Word or PDF"

3. **View Document Content**
   - **Expected**: 
     - ✅ Document content is visible and readable
     - ✅ Content is in proper HTML format
     - ✅ Paragraphs are preserved

4. **Test AI Suggestions**
   - Look at the suggestions panel on the right
   - Click on any suggestion
   - **Expected**: 
     - ✅ Text highlights in the editor (yellow background)
     - ✅ Editor scrolls to the highlighted text
     - ✅ Suggestion is selected in the panel

5. **Apply a Suggestion**
   - With a suggestion selected, click "Apply"
   - **Expected**: 
     - ✅ Original text is replaced with suggested text
     - ✅ Suggestion is removed from the list
     - ✅ Toast: "Suggestion applied"

6. **Edit Content Manually**
   - Click in the editor and type some text
   - **Expected**: 
     - ✅ Cursor appears in the editor
     - ✅ Text can be typed and modified
     - ✅ Changes are reflected in real-time

7. **Download as Word**
   - Click "Download" dropdown (green button)
   - Select "Download as Word"
   - **Expected**: 
     - ✅ Loading toast: "Preparing Word document for download..."
     - ✅ Success toast: "Word document downloaded successfully"
     - ✅ .docx file downloads
   
8. **Verify Downloaded Edited File**
   - Open the downloaded .docx
   - **Expected**: 
     - ✅ Your edits are present
     - ✅ Applied suggestions are included
     - ✅ File opens correctly

9. **Download as PDF**
   - Click "Download" dropdown
   - Select "Download as PDF"
   - **Expected**: 
     - ✅ Loading toast: "Converting to PDF..."
     - ✅ Success toast: "PDF downloaded successfully"
     - ✅ .pdf file downloads

10. **Return to PDF View**
    - Click "Back to PDF" button
    - **Expected**: 
      - ✅ Returns to PDF viewer mode
      - ✅ Badge changes back to conversion instructions

---

## ✅ Test Scenario 3: Error Handling

**Expected Time**: 1 minute

1. **Test Without PDF**
   - Try clicking "Convert to Word" when no document is loaded
   - **Expected**: 
     - ✅ Button should be disabled

2. **Test Invalid Conversion**
   - If possible, test with a corrupted PDF
   - **Expected**: 
     - ✅ Error toast with clear message
     - ✅ App remains functional

---

## 🎯 Visual Checklist

### PDF Mode
- [ ] "Convert to Word" button is blue (bg-blue-50 dark:bg-blue-950/30)
- [ ] Button has dropdown arrow (ChevronDown icon)
- [ ] Dropdown shows two options with descriptions
- [ ] "Download PDF" button is visible
- [ ] Badge says: "Click 'Convert to Word' → 'Edit as Word' to apply AI suggestions"

### Word Edit Mode
- [ ] "Back to PDF" button is visible
- [ ] "Download" button is green (bg-green-50 dark:bg-green-950/30)
- [ ] Download dropdown has two options
- [ ] Editor content is editable
- [ ] Suggestions panel shows AI suggestions
- [ ] Badge says: "Editing Mode - Apply suggestions and download as Word or PDF"

### Dropdown Menus
- [ ] "Edit as Word" option has FileText icon
- [ ] "Download as Word" option has Download icon
- [ ] Both options have descriptive subtext
- [ ] Hover effects work correctly

### Toasts/Notifications
- [ ] Loading toasts appear during operations
- [ ] Success toasts show appropriate messages
- [ ] Error toasts display clear error messages
- [ ] Toasts auto-dismiss after a few seconds

---

## 🐛 Known Issues to Watch For

### Common Problems
1. **Mammoth not found**: Ensure `mammoth` is installed: `npm install mammoth`
2. **CORS issues**: Should not occur with same-origin requests
3. **Large files**: May take longer to convert (expected behavior)
4. **Scanned PDFs**: Text won't extract (limitation, not a bug)

### Debug Tips
- Open browser console before testing
- Look for errors in console during conversion
- Check Network tab for API request/response
- Verify file size is reasonable (< 10MB recommended)

---

## 📊 Expected Performance

| Operation | Expected Time |
|-----------|---------------|
| PDF to DOCX (Download) | 2-5 seconds |
| PDF to DOCX (Edit Mode) | 3-7 seconds |
| Apply Suggestion | < 1 second |
| Download as Word | 1-3 seconds |
| Download as PDF | 3-5 seconds |
| Back to PDF | < 1 second |

---

## ✨ Success Criteria

All tests pass if:
- ✅ No console errors appear
- ✅ All toasts display correctly
- ✅ Files download successfully
- ✅ Downloaded files open correctly
- ✅ Edits are preserved
- ✅ UI updates smoothly
- ✅ Navigation works as expected

---

## 📝 Test Report Template

```
# PDF to Word Feature Test Report

**Date**: [Date]
**Tester**: [Name]
**Browser**: [Chrome/Firefox/Safari]
**Version**: [Browser Version]

## Scenario 1: Download PDF as Word
- [ ] PASS / [ ] FAIL
- Notes: _______________

## Scenario 2: Edit PDF as Word
- [ ] PASS / [ ] FAIL
- Notes: _______________

## Scenario 3: Error Handling
- [ ] PASS / [ ] FAIL
- Notes: _______________

## Visual Checklist
- PDF Mode UI: [ ] PASS / [ ] FAIL
- Word Edit Mode UI: [ ] PASS / [ ] FAIL
- Dropdown Menus: [ ] PASS / [ ] FAIL
- Notifications: [ ] PASS / [ ] FAIL

## Issues Found
1. _______________
2. _______________

## Overall Result
[ ] All Tests Passed
[ ] Some Tests Failed (see notes)

## Recommendation
[ ] Ready for Production
[ ] Needs Fixes
```

---

## 🎉 Happy Testing!

If you encounter any issues, refer to the main documentation:
- [PDF_TO_WORD_FEATURE_GUIDE.md](./PDF_TO_WORD_FEATURE_GUIDE.md)

**Pro Tip**: Test with different PDF types:
- Text-only PDFs (easiest)
- PDFs with formatting (tables, lists)
- Scanned PDFs (will show limitations)
- Large PDFs (performance testing)

