# 🔍 Quick Debug Checklist - PDF Analysis Not Showing Suggestions

## ⚡ Quick Diagnosis

Run through this checklist when suggestions aren't appearing:

### 1. Check Server Console ✅

Look for these messages in your terminal running `npm run dev`:

```
✅ Should see:
- "Processing PDF file..."
- "✅ PDF text extracted successfully"
- "📄 PDF has X pages"
- "🔍 Analyzing text for compliance issues..."
- "✅ Found X compliance suggestions"

❌ Bad signs:
- "PDF parse error"
- "Extracted text length: 0"
- "Found 0 compliance suggestions"
```

**If you see 0 length or 0 suggestions:**
- Your PDF might be image-based (needs OCR)
- OR your document has no compliance issues
- **Try uploading a PDF created from `TEST_COMPLIANCE_SAMPLE.txt`**

---

### 2. Check Browser Console (DevTools) ✅

Press F12 or Cmd+Opt+I, look for:

```
✅ Should see:
- "📤 Uploading file to /api/compliance/analyze..."
- "📥 Response status: 200"
- "✅ Analysis complete! Response data: {success: true, ...}"
- "📄 Upload success! Document data: {suggestionsCount: 16, ...}"
- "Sample suggestion: {category: "FINRA", ...}"

❌ Bad signs:
- "❌ Error response"
- "suggestionsCount: 0"
- "⚠️ No suggestions received from API"
```

**If suggestionsCount is 0:**
- Check server console for pattern matching details
- Your document might not have compliance issues
- **Test with the sample document**

---

### 3. Check UI Display ✅

After upload, verify:

```
✅ Should see:
- PDF displays in left panel
- "Compliance Suggestions" panel on right
- Categories: FINRA, SEC, Grammar
- Each suggestion has:
  • Severity badge (red/yellow/blue)
  • Category badge
  • Original text (red box)
  • Suggested text (green box)
  • "Apply Change" button

❌ Bad signs:
- Right panel says "No suggestions found"
- PDF doesn't load
- Suggestion cards are empty
```

**If suggestions panel is empty but console shows suggestions:**
- Check React DevTools for state issues
- Verify `suggestions` state is being set
- Check for React render errors

---

## 🚀 Quick Test

### Create Test PDF in 2 Minutes

```bash
# 1. Open TEST_COMPLIANCE_SAMPLE.txt
# 2. Copy all content
# 3. Paste into Word/Google Docs
# 4. Save/Export as PDF → "test-compliance.pdf"
# 5. Upload to http://localhost:3000/compliance-editor
```

### Expected Results

- **Suggestions Found**: 14-18 violations
- **Categories**:
  - FINRA: 8-10 (guaranteed returns, promises, risk-free)
  - SEC: 3-4 (insider info, confidential)
  - Grammar: 3-4 (their/there, its/it's, could of)

---

## 🐛 Common Issues & Fixes

### Issue: "No suggestions found" but document has violations

**Diagnosis:**
```bash
# Check server logs for:
"Extracted text preview: ..."
"Pattern ... found 0 matches"
```

**Fix:**
- PDF might have unusual encoding
- Text might not match patterns exactly
- Try copying text from PDF and checking if patterns match

---

### Issue: PDF doesn't display

**Diagnosis:**
```javascript
// Browser console should show:
hasPdfUrl: true
```

**Fix:**
- Check Network tab for PDF data
- Verify react-pdf is loaded
- Check for pdf.worker.mjs errors
- Ensure pdfjs worker is configured

---

### Issue: Suggestions in console but not in UI

**Diagnosis:**
```javascript
// Check if suggestions made it to state:
console.log('suggestionsCount:', data.suggestions?.length)
// Should match what's in the API response
```

**Fix:**
- Check React errors in console
- Verify state is being set: `setSuggestions(...)`
- Check SuggestionCard component is rendering
- Look for key prop warnings

---

### Issue: Pattern matching but no display

**Diagnosis:**
```bash
# Server shows:
Found 16 compliance suggestions
✅ Analysis complete!

# But browser shows:
suggestionsCount: 0
```

**Fix:**
- Check API response structure
- Verify suggestions array is in response
- Check for JSON parsing errors
- Inspect Network tab → Response

---

## 📊 Debug Log Reference

### Perfect Workflow (What You Want to See)

```
SERVER (Terminal):
─────────────────────────────────────────────
Starting document analysis...
File received: test.pdf Size: 45678
Processing PDF file...
✅ PDF text extracted successfully
📄 First 200 chars: SAMPLE FINANCIAL DOCUMENT...
📄 PDF has 1 pages
  Page 1: 856 chars
Extracted text length: 856
🔍 Analyzing text for compliance issues...
  Pattern "guaranteed returns" found 3 matches
    Match: "guaranteed returns" → "potential returns"
    Context: ...Our fund offers guaranteed returns...
  [... more patterns ...]
✅ Found 16 compliance suggestions
Sample suggestion: {
  category: "FINRA",
  severity: "critical",
  originalText: "guaranteed returns",
  ...
}

BROWSER (DevTools Console):
─────────────────────────────────────────────
📤 Uploading file to /api/compliance/analyze...
📥 Response status: 200
✅ Analysis complete! Response data: {
  success: true,
  suggestions: Array(16),
  fileType: "pdf",
  pdfUrl: "data:application/pdf;base64,..."
}
📄 Upload success! Document data: {
  documentId: "1699...",
  fileType: "pdf",
  hasHtmlContent: true,
  htmlContentLength: 1245,
  extractedTextLength: 856,
  suggestionsCount: 16,
  hasPdfUrl: true
}
Sample suggestion: {
  category: "FINRA",
  severity: "critical",
  originalText: "guaranteed returns",
  suggestedText: "potential returns",
  explanation: "FINRA Rule 2210 prohibits...",
  page: 1,
  id: "sugg-0"
}

UI (Visual):
─────────────────────────────────────────────
✅ PDF rendering in viewer
✅ Suggestion panel shows "16" badge
✅ Categories collapsed:
   FINRA (10 pending)
   SEC (4 pending)
   Grammar (3 pending)
✅ Cards show severity + text + buttons
```

---

## 💡 Pro Tips

### 1. Use Browser Network Tab
- See exact API request/response
- Verify suggestions array structure
- Check response size and timing

### 2. Test with Known Document
- Don't debug with unknown PDFs first
- Use `TEST_COMPLIANCE_SAMPLE.txt`
- Should give predictable results (16+ suggestions)

### 3. Check One Layer at a Time
```
File Upload → Extract → Analyze → Return → Display
    ↓          ↓         ↓         ↓        ↓
  Console    Server    Server    Browser   UI
```

### 4. Compare Counts
```
Server says: "Found 16 suggestions"
Browser says: "suggestionsCount: 16"
UI shows: 16 cards in panel
✅ All match = Working correctly
```

---

## 🎯 Success Criteria

When everything is working, you'll see:

```
✅ Server logs text extraction
✅ Server logs pattern matches (with details)
✅ Server logs suggestion count
✅ Browser receives 200 response
✅ Browser logs suggestion count
✅ UI displays all suggestions
✅ Can click and select suggestions
✅ Can apply suggestions (shows toast)
✅ Applied suggestions show green checkmark
```

---

## 📞 Still Having Issues?

### Capture This Info:

1. **Server Console Output** (full log from upload to response)
2. **Browser Console Output** (full log)
3. **Network Tab** (compliance/analyze request/response)
4. **PDF Info** (name, size, how it was created)
5. **Expected vs Actual** (what you expected to see vs what you see)

### Common Root Causes:

| Symptom | Likely Cause | Check |
|---------|--------------|-------|
| 0 suggestions | PDF is image-based | Server: "Extracted text length: 0" |
| 0 suggestions | No violations in doc | Try TEST_COMPLIANCE_SAMPLE.txt |
| Suggestions logged but not shown | React state issue | Browser: suggestionsCount vs UI count |
| PDF not showing | Worker not loaded | Console: pdfjs errors |
| API error | File format issue | Server: parse errors |

---

## 📚 Related Files

- **Test Sample**: `TEST_COMPLIANCE_SAMPLE.txt`
- **Full Testing Guide**: `TEST_PDF_WORKFLOW.md`
- **Fix Summary**: `PDF_ANALYSIS_FIX_SUMMARY.md`
- **API Route**: `app/api/compliance/analyze/route.ts`
- **Main Page**: `app/compliance-editor/page.tsx`

---

**Last Updated**: November 13, 2025  
**Status**: ✅ All debugging tools in place

