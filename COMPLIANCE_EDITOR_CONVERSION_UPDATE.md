# Compliance Editor - PDF to Word Conversion Update

## Overview
Updated the compliance editor to convert PDFs to editable Word format and display them in the Document Editor instead of downloading immediately. Users can now apply suggestions directly to converted documents.

## Changes Made

### 1. New Conversion Function: `handleConvertToWord()`
**Location:** `Po2/app/compliance-editor/page.tsx` (Line 205-267)

**Purpose:** Converts PDF to Word format and displays it in the editor (instead of downloading)

**Key Features:**
- Calls `/api/convert-pdf-to-docx` API to convert PDF on server
- Uses mammoth library to convert DOCX to HTML for TinyMCE editor
- Preserves formatting with enhanced style mappings:
  - Heading styles (H1, H2, H3)
  - Text formatting (bold, italic, emphasis)
  - Inline images (converted to base64)
- Switches view from PDF viewer to Document Editor
- Changes `fileType` from 'pdf' to 'docx'
- Clears `pdfUrl` to trigger editor display

**Enhanced Formatting Options:**
```javascript
styleMap: [
  "p[style-name='Heading 1'] => h1:fresh",
  "p[style-name='Heading 2'] => h2:fresh",
  "p[style-name='Heading 3'] => h3:fresh",
  "p[style-name='Title'] => h1.title:fresh",
  "r[style-name='Strong'] => strong",
  "r[style-name='Emphasis'] => em",
],
includeDefaultStyleMap: true,
convertImage: mammoth.images.imgElement(...)
```

### 2. Download Function: `handleDownloadWord()`
**Location:** `Po2/app/compliance-editor/page.tsx` (Line 270-322)

**Purpose:** Downloads the document as a Word file (without displaying in editor)

**Behavior:**
- For PDF files: Converts and downloads as `.docx`
- For documents in editor: Exports current content as `.docx`

### 3. Updated Button Layout
**Location:** `Po2/app/compliance-editor/page.tsx` (Line 436-459)

**Changes:**
- "Convert to Word" button (shown only for PDFs): Calls `handleConvertToWord()` - opens in editor
- "Download as Word" button (shown for all): Calls `handleDownloadWord()` - downloads file
- Both buttons available separately for better UX

**Button Configuration:**
```tsx
{/* Convert to Word - Only for PDFs */}
{fileType === 'pdf' && (
  <Button onClick={handleConvertToWord}>
    Convert to Word
  </Button>
)}

{/* Download as Word - Always available */}
<Button onClick={handleDownloadWord}>
  Download as Word
</Button>
```

### 4. Enhanced Suggestion Handling
**Location:** `Po2/app/compliance-editor/page.tsx` (Line 134-202)

**Updates:**
- Changed message for PDF files from "PDF editing coming soon" to "Convert to edit"
- Users are prompted to click "Convert to Word" to enable editing
- After conversion, suggestions work automatically in the editor
- TinyMCE editor supports:
  - Text highlighting for suggestions
  - Text replacement for applying changes
  - Visual feedback with yellow highlights

## User Workflow

### Before Conversion (PDF View)
1. Upload PDF document
2. View PDF in PDF Viewer (left panel)
3. See compliance suggestions (right panel)
4. Click on suggestions to view them (but cannot apply)
5. Click **"Convert to Word"** button

### After Conversion (Editor View)
1. PDF converts to editable Word format
2. Document Editor replaces PDF Viewer
3. Content displayed with preserved formatting
4. All compliance suggestions remain active
5. Click suggestion → Text highlights in editor
6. Click "Apply" → Text automatically replaced
7. Edit document freely in rich text editor

### Download Options
- **Download as Word:** Export current content as `.docx` file
- **Download PDF:** Export as PDF file

## Technical Implementation

### Formatting Preservation
The conversion uses mammoth.js with enhanced options to preserve:
- **Text Styles:** Bold, italic, underline, strikethrough
- **Headings:** H1, H2, H3, H4, H5, H6
- **Paragraphs:** Proper spacing and alignment
- **Lists:** Bullet points and numbered lists
- **Images:** Embedded as base64 (preserved in editor)
- **Tables:** Structure and content (TinyMCE table plugin)

### Suggestion Compatibility
After conversion, suggestions work seamlessly:
- **Text Matching:** Mammoth extracts clean text that matches original suggestions
- **Highlighting:** TinyMCE highlights the original text from suggestions
- **Replacement:** Applies suggested text with one click
- **Tracking:** Marks suggestions as applied/acknowledged

### State Management
```javascript
// Conversion flow
setEditorContent(htmlContent);  // Load converted HTML
setFileType('docx');             // Switch to editor mode
setPdfUrl(null);                 // Clear PDF URL
```

### Editor Configuration
TinyMCE Editor (`Po2/components/editor/TinyMCEEditor.tsx`) includes:
- Rich text formatting toolbar
- Table support
- Image embedding
- Code highlighting
- Find & replace
- Custom text highlighting for suggestions
- Custom text replacement for applying changes

## Benefits

### For Users
✅ **No Downloads Required:** Edit directly in browser
✅ **Instant Conversion:** Quick PDF to editable format
✅ **Apply Suggestions:** One-click suggestion application
✅ **Rich Editing:** Full-featured text editor
✅ **Format Preservation:** Maintains document structure
✅ **Flexible Export:** Download as Word or PDF anytime

### For Workflow
✅ **Streamlined Process:** View → Convert → Edit → Apply → Download
✅ **Real-time Editing:** Make changes instantly
✅ **Suggestion Integration:** Compliance suggestions work with editor
✅ **Version Control:** Edit and export multiple versions

## Dependencies
- **mammoth:** ^1.11.0 (DOCX to HTML conversion)
- **TinyMCE:** Rich text editor with full formatting support
- **Server API:** `/api/convert-pdf-to-docx` (LibreOffice conversion)

## Files Modified
1. `Po2/app/compliance-editor/page.tsx` - Main component with conversion logic
2. No changes needed to `Po2/components/editor/TinyMCEEditor.tsx` (already supports formatting)

## Testing Checklist
- [ ] Upload PDF document
- [ ] View PDF in viewer
- [ ] Click "Convert to Word" button
- [ ] Verify editor displays with proper formatting
- [ ] Check headings, paragraphs, and lists are preserved
- [ ] Test clicking on suggestion
- [ ] Verify text highlights in editor
- [ ] Apply suggestion and verify text replacement
- [ ] Edit document content
- [ ] Download as Word and verify output
- [ ] Download as PDF and verify output

## Future Enhancements
- [ ] Add "Revert to PDF" button to switch back to PDF view
- [ ] Save converted document to server
- [ ] Track edit history
- [ ] Add collaborative editing
- [ ] Support real-time suggestion updates after editing
- [ ] Add undo/redo for suggestion applications

## Notes
- Conversion quality depends on PDF structure
- Complex PDFs may have formatting variations
- Images are converted to base64 (may increase size)
- Server-side conversion uses LibreOffice for best results
- TinyMCE provides professional-grade editing experience

