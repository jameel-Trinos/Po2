# Quick Test Guide: PDF to Word Conversion

## 🚀 Testing the New Feature

### Prerequisites
- Next.js dev server running: `npm run dev`
- Browser open at: `http://localhost:3000`

---

## ✅ Test Scenario 1: Basic PDF Conversion

### Steps:
1. Navigate to `/compliance-editor`
2. Click "Select Document (PDF or DOCX)"
3. Choose any PDF file (preferably a simple text-based PDF)
4. **Expected:** File appears with name and size shown
5. **Expected:** Blue FileType2 icon appears to the right of the filename
6. Hover over the icon
   - **Expected:** Tooltip shows "Convert PDF to Word for editing"
7. Click the icon
   - **Expected:** Icon changes to spinning loader
   - **Expected:** Toast: "Converting PDF to Word..."
   - **Expected:** Toast: "PDF converted to Word!"
   - **Expected:** Toast: "Now analyzing the document for compliance..."
   - **Expected:** Toast: "Conversion and analysis complete!"
8. **Expected:** Document opens in TinyMCE editor (not PDF viewer)
9. **Expected:** Compliance suggestions appear in right panel
10. **Expected:** You can edit the text in the editor
11. **Expected:** You can apply suggestions

### ✅ Success Criteria:
- Icon appears only for PDFs
- Conversion completes without errors
- Document is editable in Word format
- All suggestions work properly

---

## ✅ Test Scenario 2: DOCX Upload (No Conversion)

### Steps:
1. Navigate to `/compliance-editor`
2. Click "Select Document (PDF or DOCX)"
3. Choose a DOCX file
4. **Expected:** File appears with name and size
5. **Expected:** NO convert icon appears (because it's already DOCX)
6. Click "Analyze" button
7. **Expected:** Document opens in editor normally

### ✅ Success Criteria:
- No convert icon for DOCX files
- Normal upload flow works

---

## ✅ Test Scenario 3: Error Handling

### Steps:
1. Navigate to `/compliance-editor`
2. Choose a corrupted or invalid PDF
3. Click the convert icon
4. **Expected:** Error toast appears with descriptive message
5. **Expected:** File selection remains in upload state

### ✅ Success Criteria:
- Graceful error handling
- User-friendly error messages
- No crashes

---

## ✅ Test Scenario 4: Multiple File Types

### Steps:
1. Upload a PDF → Click convert → Verify it opens in editor
2. Click "New Document"
3. Upload a DOCX → Click analyze → Verify it opens in editor
4. Click "New Document"
5. Upload another PDF → This time click "Analyze" (not convert) → Verify it opens in PDF viewer

### ✅ Success Criteria:
- PDF + Convert = Editor view
- DOCX + Analyze = Editor view
- PDF + Analyze = PDF viewer

---

## 🎯 Visual Verification

### What to Look For:

#### Upload State (PDF selected):
```
┌─────────────────────────────────────────────┐
│ Selected: sample-document.pdf          [⚡] │ ← Icon here
│ Size: 0.85 MB                              │
└─────────────────────────────────────────────┘
```

#### During Conversion:
```
┌─────────────────────────────────────────────┐
│ Selected: sample-document.pdf          [⏳] │ ← Spinner
│ Size: 0.85 MB                              │
└─────────────────────────────────────────────┘
```

#### Editor View (after conversion):
```
┌────────────────────┬────────────────────────┐
│                    │  Compliance            │
│  Document Editor   │  Suggestions           │
│  (TinyMCE)         │                        │
│                    │  ● FINRA (3)           │
│  [editable text]   │  ● SEC (2)             │
│                    │  ● Grammar (1)         │
└────────────────────┴────────────────────────┘
```

---

## 📊 Browser Console Checks

### Expected Console Output:
```
📤 Converting PDF to DOCX via /api/pdf-to-docx...
📥 Conversion response status: 200 OK
✅ PDF converted to DOCX, blob size: 12345
📤 Uploading converted DOCX to /api/compliance/analyze...
📥 Analysis response status: 200 OK
✅ Analysis complete! Response data: {...}
📄 Upload success! Document data: {...}
```

### No errors should appear like:
- ❌ "Failed to convert PDF to Word"
- ❌ "Network error"
- ❌ "Blob is undefined"

---

## 🔍 Feature Checklist

- [ ] Icon appears for PDF files only
- [ ] Tooltip shows on hover
- [ ] Click triggers conversion
- [ ] Loading spinner shows during conversion
- [ ] Toast notifications appear in sequence
- [ ] Converted document opens in editor
- [ ] Compliance suggestions appear
- [ ] Text is editable
- [ ] Suggestions can be applied
- [ ] Download Word button works
- [ ] Download PDF button works
- [ ] Error handling works
- [ ] No console errors
- [ ] Dark mode works properly

---

## 🐛 Common Issues & Solutions

### Issue: Icon doesn't appear
**Cause:** File is not a PDF or component not rendered  
**Solution:** Verify file extension is `.pdf`

### Issue: Conversion fails
**Cause:** API error or invalid PDF  
**Solution:** Check server logs, try different PDF

### Issue: Editor doesn't open
**Cause:** Analysis API failed  
**Solution:** Check browser console and network tab

### Issue: Tooltip doesn't show
**Cause:** Tooltip component not installed  
**Solution:** Run `npx shadcn@latest add tooltip`

---

## 🎉 Acceptance Criteria

✅ **Feature is complete when:**
1. Convert icon appears for all PDF uploads
2. Clicking icon converts PDF to DOCX
3. Converted document opens in editable editor
4. All compliance features work with converted files
5. Error handling is robust
6. User experience is smooth with proper feedback

---

## 📱 Device Testing

### Desktop (Recommended)
- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅

### Tablet
- iPad Safari ✅
- Android Chrome ✅

### Mobile
- Icon should still be visible and clickable
- Tooltip should work on tap

---

## 🚨 Known Edge Cases

1. **Very large PDFs (>10MB)**
   - Upload will fail (size limit)
   - Error message should be clear

2. **Scanned PDFs (images)**
   - Text extraction may fail
   - Conversion might produce empty document

3. **Password-protected PDFs**
   - Conversion will fail
   - Error should indicate protection issue

4. **Multi-column PDFs**
   - Text order may be incorrect
   - Manual editing required

---

## 📝 Test Results Template

```
Date: ___________
Tester: ___________

[ ] Test Scenario 1: PASS / FAIL
    Notes: _______________________

[ ] Test Scenario 2: PASS / FAIL
    Notes: _______________________

[ ] Test Scenario 3: PASS / FAIL
    Notes: _______________________

[ ] Test Scenario 4: PASS / FAIL
    Notes: _______________________

Overall Status: ✅ READY / 🔧 NEEDS WORK

Issues Found:
_________________________________
_________________________________
```

---

**Happy Testing! 🎉**

