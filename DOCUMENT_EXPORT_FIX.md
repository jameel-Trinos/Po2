# Document Export Formatting Fix

## Problem
The document export functionality was losing formatting when downloading to Word (DOCX) or PDF formats:
- Tables were being converted to plain text
- Images were not being embedded
- Text alignment was lost
- Lists were not preserved
- Complex formatting (bold, italic, underline) was flattened

## Solution
Enhanced the `pdfWordConverter.ts` service to properly handle all HTML elements and preserve formatting.

## What Was Fixed

### 1. **Word (DOCX) Export** (`htmlToWordBlob`)
Now properly handles:
- ✅ **Tables**: Converts HTML tables to Word tables with borders and header styling
- ✅ **Images**: Embeds images (data URLs and HTTP URLs) into the Word document
- ✅ **Lists**: Preserves ordered (`<ol>`) and unordered (`<ul>`) lists with proper bullets
- ✅ **Text Formatting**: 
  - Bold, italic, underline
  - Font sizes
  - Text alignment (left, center, right, justify)
- ✅ **Headings**: H1-H4 with proper Word heading styles
- ✅ **Nested Formatting**: Handles complex nested elements properly

### 2. **PDF Export** (`convertHtmlToPdf`)
Now properly handles:
- ✅ **Tables**: Draws tables with borders, cell padding, and header backgrounds
- ✅ **Images**: Embeds PNG and JPEG images with automatic scaling
- ✅ **Lists**: Preserves bullet points and numbering with proper indentation
- ✅ **Text Formatting**: Bold headings and proper font sizing
- ✅ **Page Breaks**: Automatically creates new pages when content overflows
- ✅ **Text Wrapping**: Properly wraps long text to fit within margins

## Technical Details

### New Functions Added

#### For Word Export:
1. **`parseTextRunStyles(element)`**: Extracts formatting (bold, italic, underline, font size) from HTML elements
2. **`processTextNode(node, parentElement)`**: Recursively processes text nodes with inline formatting
3. **`htmlTableToWordTable(tableElement)`**: Converts HTML tables to Word `Table` objects
4. **`htmlImageToWordImage(imgElement)`**: Converts images to Word `ImageRun` objects
5. **`processHtmlElement(element)`**: Main processor that routes elements to appropriate handlers

#### For PDF Export:
1. **`drawTableInPdf(...)`**: Draws HTML tables in PDF with borders and styling
2. **`embedImageInPdf(...)`**: Embeds images into PDF with automatic resizing

### New Dependencies Used
The following docx library classes are now utilized:
- `Table`, `TableRow`, `TableCell` - For table creation
- `WidthType`, `BorderStyle` - For table styling
- `ImageRun` - For image embedding
- `UnderlineType` - For text underlining

## Usage

### From Compliance Editor Page
The download functions work automatically with the enhanced converter:

```typescript
// Download as Word
const handleDownloadWord = async () => {
  const content = editorRef.current.getContent(); // Gets HTML from TinyMCE
  const blob = await htmlToWordBlob(content); // Now preserves all formatting!
  // ... download logic
};

// Download as PDF
const handleDownloadPdf = async () => {
  const content = editorRef.current.getContent();
  const pdfDataUrl = await convertHtmlToPdf(content); // Now includes tables & images!
  // ... download logic
};
```

### Supported HTML Elements

#### Word Export:
- `<h1>` - `<h4>`: Headings with proper styles
- `<p>`: Paragraphs
- `<table>`, `<tr>`, `<th>`, `<td>`: Tables
- `<img>`: Images (data URLs, HTTP URLs)
- `<ul>`, `<ol>`, `<li>`: Lists
- `<strong>`, `<b>`: Bold text
- `<em>`, `<i>`: Italic text
- `<u>`: Underlined text
- `style="text-align: ..."`: Text alignment

#### PDF Export:
- All heading levels
- Tables with borders
- Images (PNG/JPEG)
- Ordered and unordered lists
- Bold text (via headings)
- Multi-page documents (automatic page breaks)

## Known Limitations

### Images:
- Only data URLs (base64) and absolute HTTP URLs are supported
- Relative URLs cannot be embedded (logged as warnings)
- Images are automatically scaled to fit within max dimensions (600x450px for Word, 512x400px for PDF)

### Tables:
- PDF tables have fixed cell heights (25px)
- Very long cell content is truncated with "..." in PDFs
- Complex table features (merged cells, nested tables) are not yet supported

### Lists:
- Lists are rendered as regular paragraphs with bullet/number prefixes
- Nested lists are flattened to single level

### Text Alignment:
- PDF only supports left alignment for most text
- Tables and images are left-aligned in PDFs

## Testing

To test the fixes:

1. **Create a document in the Compliance Editor** with:
   - A heading
   - A paragraph with **bold** and *italic* text
   - A table (2x2 or larger)
   - An image (if available)
   - A bulleted or numbered list

2. **Download as Word**:
   - Click "Download Word" button
   - Open the downloaded `.docx` file
   - Verify: tables, images, lists, and formatting are preserved

3. **Download as PDF**:
   - Click "Download PDF" button
   - Open the downloaded `.pdf` file
   - Verify: tables, images, lists appear correctly

## Future Improvements

Potential enhancements for the future:
- [ ] Support for nested lists
- [ ] Table cell merging (colspan/rowspan)
- [ ] More text formatting options (colors, highlights)
- [ ] Better font support in PDFs
- [ ] Hyperlinks preservation
- [ ] Page headers and footers
- [ ] Table of contents generation
- [ ] Better image scaling algorithms
- [ ] Support for SVG images

## Troubleshooting

### Tables not appearing correctly
- Ensure your HTML uses proper table structure: `<table><tr><td>...</td></tr></table>`
- Check that table elements are direct children of `<table>` (no wrapper divs)

### Images not showing
- Verify the image source is a data URL or absolute HTTP URL
- Check browser console for image loading errors
- Ensure images are PNG or JPEG format

### Formatting lost
- Confirm the HTML editor (TinyMCE) is outputting proper HTML tags
- Check that inline styles are being applied (use browser DevTools)

### Download fails
- Check browser console for error messages
- Ensure you have enough memory for large documents
- Try with a smaller/simpler document to isolate the issue

## Files Modified

1. **`/Po2/lib/services/pdfWordConverter.ts`** - Main converter service with enhanced functions
2. **`/Po2/DOCUMENT_EXPORT_FIX.md`** - This documentation file

## Related Files (No changes needed)

- `/Po2/app/compliance-editor/page.tsx` - Already uses the converter functions correctly
- `/Po2/app/api/export/docx/route.ts` - API route for Word export
- `/Po2/app/api/pdf-to-docx/route.ts` - PDF to Word conversion (separate from HTML export)

