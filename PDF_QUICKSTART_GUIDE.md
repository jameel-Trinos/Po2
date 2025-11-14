# PDF Support Quick Start Guide

## 🚀 Getting Started with PDF Compliance Analysis

This guide will help you quickly start using the new PDF support features in the Compliance Editor.

---

## 📋 Prerequisites

Make sure you have all dependencies installed:

```bash
cd /Volumes/Trinos/Learning/PointofTwo/Po2
npm install
```

New dependencies that were added:
- `react-pdf` - PDF rendering in React
- `pdf-parse` - Server-side PDF text extraction
- Already installed: `pdf-lib`, `pdfjs-dist`, `docx`

---

## 🎯 Quick Usage

### 1. Start the Development Server

```bash
npm run dev
```

Navigate to: `http://localhost:3000/compliance-editor`

### 2. Upload a PDF Document

1. Click **"Select Document (PDF or DOCX)"**
2. Choose a PDF or DOCX file (up to 10MB)
3. Click **"Analyze"**
4. Wait for AI analysis to complete

### 3. Review Compliance Suggestions

The system will analyze your document for:
- **FINRA violations** (guaranteed returns, risk-free claims)
- **SEC violations** (insider information, market manipulation)
- **Grammar errors** (their/there, could of/could have)

### 4. Navigate PDF with Suggestions

**For PDF Files:**
- Click any suggestion in the right panel
- PDF automatically scrolls to the relevant page
- Text is highlighted in yellow
- Use page navigation and zoom controls

**For DOCX Files:**
- Click any suggestion in the right panel
- Text is highlighted in the editor
- Click "Apply" to accept the suggestion
- Text is automatically replaced

### 5. Export Your Document

Click the download buttons to export:
- **Download Word** - Exports as DOCX (converts PDF if needed)
- **Download PDF** - Exports as PDF (converts DOCX if needed)

---

## 🧪 Test with Sample Documents

### Create a Test PDF with Compliance Issues:

Use this sample text to create a test PDF:

```
Investment Opportunity Disclosure

We guarantee returns of 15% annually with no risk. This is a risk-free 
investment opportunity that promises high returns for all investors.

Their are no fees associated with this investment, and you could of 
started investing months ago. This is the best investment opportunity 
available today.

Contact us for more confidential deal information and insider tips.
```

**Expected Suggestions:**
- "guarantee returns" → "potential returns" (FINRA)
- "no risk" → "minimal risk" (FINRA)
- "risk-free investment" → "lower-risk investment" (FINRA)
- "promises high returns" → "targets high returns" (FINRA)
- "Their are" → "There are" (Grammar)
- "could of" → "could have" (Grammar)
- "best investment" → "leading investment" (FINRA)
- "confidential deal" → "publicly disclosed deal" (SEC)
- "insider tips" → "publicly available information" (SEC)

---

## 📁 Key Files to Know

### Frontend Components:
- `/app/compliance-editor/page.tsx` - Main editor page
- `/components/compliance/PdfViewerWithHighlight.tsx` - PDF viewer
- `/components/compliance/DocumentUpload.tsx` - File upload

### Backend API Routes:
- `/app/api/compliance/analyze/route.ts` - Document analysis
- `/app/api/compliance/apply-change/route.ts` - Apply suggestions
- `/app/api/pdf-to-docx/route.ts` - PDF to Word conversion

### Utility Libraries:
- `/lib/pdf-utils.ts` - PDF parsing and highlighting
- `/lib/services/pdfWordConverter.ts` - Document conversion

---

## 🎨 UI Features

### PDF Viewer Controls:
- **Page Navigation** - Previous/Next buttons
- **Zoom** - 50% to 300% zoom levels
- **File Info** - Shows current page and total pages
- **Highlight** - Yellow overlay on suggested changes

### Suggestion Panel:
- **Grouped by Category** - FINRA, SEC, Grammar
- **Severity Badges** - Critical, Warning, Info
- **Apply Button** - One-click to apply suggestion
- **Selection Highlight** - Selected suggestion is highlighted

---

## 💡 Pro Tips

1. **Large PDFs**: For PDFs over 20 pages, analysis may take 30-60 seconds
2. **PDF Editing**: For now, convert PDF to Word to apply changes directly
3. **Multiple Suggestions**: Review all critical issues before exporting
4. **File Names**: Original filename is preserved in downloads
5. **Balance**: Each analysis costs $0.10, each change costs $0.01 (mock)

---

## 🐛 Troubleshooting

### PDF Won't Load
- Check file size (must be under 10MB)
- Verify file is a valid PDF (should start with %PDF-)
- Try re-uploading the file

### Suggestions Not Appearing
- Ensure document contains text (not scanned images)
- Check console for API errors
- Verify Gemini API key is set (if using real AI)

### Highlighting Not Working
- Make sure you're viewing the correct page
- Try zooming out to see full highlight
- Refresh the page and try again

### Export Fails
- Check browser console for errors
- Try downloading as different format
- Verify document is fully loaded

---

## 🔧 Configuration

### Environment Variables (Optional):

```env
# .env.local
GEMINI_API_KEY=your_api_key_here  # For real AI analysis
```

### Adjust File Size Limit:

In `/components/compliance/DocumentUpload.tsx`:
```typescript
// Change max file size (in bytes)
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
```

### Customize Compliance Rules:

In `/app/api/compliance/analyze/route.ts`:
```typescript
const finraPatterns = [
  {
    pattern: /\byour_pattern\b/gi,
    category: 'FINRA',
    severity: 'critical',
    explanation: 'Your explanation',
    getReplacement: (match) => 'replacement text'
  }
];
```

---

## 📊 Example Workflows

### Workflow 1: PDF Compliance Review
```
1. Upload PDF
2. Review suggestions in right panel
3. Click each suggestion to see location
4. Note critical issues
5. Download original PDF
6. Manually apply changes in Adobe/other tool
```

### Workflow 2: PDF to Editable Word
```
1. Upload PDF
2. Review suggestions
3. Click "Download Word"
4. Open DOCX in Microsoft Word
5. Apply suggestions manually
6. Export back to PDF if needed
```

### Workflow 3: DOCX Direct Editing
```
1. Upload DOCX
2. Review suggestions
3. Click "Apply" on each suggestion
4. Changes applied automatically
5. Download as PDF or Word
```

---

## 🎓 Learning Resources

### PDF.js Examples:
- View page rendering: `/components/compliance/PdfViewerWithHighlight.tsx`
- Text extraction: `/lib/pdf-utils.ts`

### React-PDF Usage:
- Document component: `<Document file={pdfUrl} />`
- Page component: `<Page pageNumber={1} scale={1.0} />`

### PDF Modification:
- See: `/app/api/compliance/apply-change/route.ts`
- Workflow: PDF → Extract → Modify → Regenerate

---

## ✅ Checklist for First Use

- [ ] Install dependencies (`npm install`)
- [ ] Start dev server (`npm run dev`)
- [ ] Navigate to compliance editor
- [ ] Upload a test PDF file
- [ ] Verify suggestions appear
- [ ] Click suggestion to test highlighting
- [ ] Test page navigation
- [ ] Test zoom controls
- [ ] Download as Word
- [ ] Download as PDF
- [ ] Upload a DOCX file
- [ ] Apply suggestion in editor
- [ ] Export edited document

---

## 🎯 Next Steps

After mastering the basics:

1. **Customize Rules** - Add your own compliance patterns
2. **Integrate Real AI** - Connect to OpenAI or Gemini
3. **Add Database** - Store documents and analysis history
4. **User Authentication** - Add Clerk authentication
5. **Cloud Storage** - Integrate with AWS S3 or similar
6. **Batch Processing** - Analyze multiple documents

---

## 📞 Need Help?

- Check `/PDF_COMPLIANCE_ENHANCEMENT.md` for detailed documentation
- Review code comments in source files
- Check browser console for error messages
- Verify all dependencies are installed

---

## 🚦 Status Indicators

**Working Correctly:**
- ✅ PDF uploads and displays
- ✅ Suggestions appear in right panel
- ✅ Clicking suggestion highlights text
- ✅ Page navigation works
- ✅ Zoom controls work
- ✅ Download buttons work

**If You See:**
- ❌ "Failed to load PDF" → Check file validity
- ❌ "No suggestions found" → Check text extraction
- ❌ "Conversion failed" → Check API route
- ⚠️ "PDF editing coming soon" → Expected for direct PDF edits

---

**Happy Compliance Checking! 🎉**

For detailed technical documentation, see `/PDF_COMPLIANCE_ENHANCEMENT.md`

