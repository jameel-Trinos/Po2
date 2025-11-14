# PDF to DOCX Conversion 400 Error - Debugging Guide

## 🔍 Problem Summary

The PDF to DOCX conversion feature is returning a **400 Bad Request** error when attempting to convert PDF files to Word documents.

**Error Location:** `app/compliance-editor/page.tsx:240` in the `handleDownloadWord` function

## ✅ Changes Made

### 1. Enhanced Client-Side Logging (`app/compliance-editor/page.tsx`)

Added detailed logging to track the entire conversion process:

- **PDF URL validation**: Converts relative URLs to absolute URLs
- **Blob size checking**: Validates that the downloaded PDF is not empty
- **MIME type verification**: Ensures the blob has the correct `application/pdf` type
- **FormData inspection**: Logs file name, size, and type before sending

**Key improvements:**
```typescript
// Added URL normalization
const absolutePdfUrl = pdfUrl.startsWith('http') 
  ? pdfUrl 
  : `${window.location.origin}${pdfUrl.startsWith('/') ? '' : '/'}${pdfUrl}`;

// Added empty file check
if (pdfBlob.size === 0) {
  throw new Error('Downloaded PDF file is empty (0 bytes)');
}

// Added detailed FormData logging
console.log('📋 FormData details:');
console.log('  - File name:', fileName);
console.log('  - File size:', pdfBlobWithCorrectType.size);
console.log('  - File type:', pdfBlobWithCorrectType.type);
```

### 2. Enhanced Server-Side Logging (`app/api/pdf-to-docx/route.ts`)

Added comprehensive logging to identify validation failures:

- **Content-Type inspection**: Logs the incoming request's content type
- **FormData debugging**: Lists all form data entries received
- **File validation details**: Separately checks file extension and MIME type
- **Better error messages**: Includes specific details about what went wrong

**Key improvements:**
```typescript
// Log all form data entries
for (const [key, value] of formData.entries()) {
  if (value instanceof File) {
    console.log(`  - ${key}: File(name="${value.name}", type="${value.type}", size=${value.size})`);
  } else {
    console.log(`  - ${key}:`, value);
  }
}

// Detailed file validation
const hasValidExtension = file.name.toLowerCase().endsWith('.pdf');
const hasValidMimeType = file.type === 'application/pdf';
console.log('🔍 File validation:');
console.log('  - Has .pdf extension:', hasValidExtension);
console.log('  - Has PDF MIME type:', hasValidMimeType);
```

## 🐛 How to Debug

### Step 1: Check Browser Console

Open the browser console (F12) and look for the following log messages when clicking "Convert to Word":

1. **PDF Fetching:**
   ```
   📥 Fetching PDF from URL: [url]
   📥 Absolute URL: [absolute-url]
   ```
   - Verify the URL is valid and accessible
   - Check if the absolute URL is correctly formed

2. **PDF Download:**
   ```
   📄 PDF fetched, size: X bytes, type: [mime-type]
   ```
   - **If size is 0**: The PDF URL is not returning valid content
   - **If type is not 'application/pdf'**: The server is not returning a PDF

3. **FormData Preparation:**
   ```
   📋 FormData details:
     - File name: document.pdf
     - File size: X bytes
     - File type: application/pdf
   ```
   - Verify all three values are correct

4. **API Error Response:**
   ```
   ❌ Conversion API returned error: 400 "Bad Request"
   📋 Raw API Response: [error details]
   ```
   - This will show the exact error message from the server

### Step 2: Check Server Logs

Check your Next.js server console for these messages:

1. **Request Reception:**
   ```
   📥 Incoming request content-type: [content-type]
   ```
   - Should contain 'multipart/form-data'

2. **Form Data Parsing:**
   ```
   📋 Form data entries:
     - file: File(name="...", type="...", size=...)
   ```
   - **If empty**: The file is not being sent correctly
   - **If 'file' key is missing**: FormData key mismatch

3. **File Validation:**
   ```
   🔍 File validation:
     - Has .pdf extension: true/false
     - Has PDF MIME type: true/false
     - File type: [mime-type]
   ```
   - At least one must be true for validation to pass

4. **Error Messages:**
   ```
   ❌ No file provided in form data
   ❌ Invalid file type: [type]
   ❌ Empty file provided
   ❌ Failed to read PDF file
   ❌ Failed to parse PDF
   ```
   - Each error includes specific details about what failed

## 🔧 Common Issues and Solutions

### Issue 1: "No file provided"
**Symptoms:** Server logs show no 'file' key in FormData

**Possible Causes:**
- FormData key mismatch (client using different key than 'file')
- Blob not being appended correctly
- Network issue truncating the request

**Solution:**
```typescript
// Ensure the FormData key is 'file'
formData.append('file', pdfBlobWithCorrectType, fileName);
```

### Issue 2: "Empty file provided (0 bytes)"
**Symptoms:** File size is 0 bytes

**Possible Causes:**
- `pdfUrl` is returning empty content
- PDF fetch failed but didn't throw an error
- Blob creation failed

**Solution:**
- Verify the `pdfUrl` is valid and accessible
- Check if the PDF URL requires authentication
- Ensure the PDF exists in the upload location

### Issue 3: "File must be a PDF"
**Symptoms:** File type is not recognized as PDF

**Possible Causes:**
- Blob MIME type is not set correctly
- File name doesn't end with .pdf
- Server is returning HTML error page instead of PDF

**Solution:**
```typescript
// Ensure both MIME type and filename are correct
const pdfBlobWithCorrectType = new Blob([pdfBlob], { type: 'application/pdf' });
formData.append('file', pdfBlobWithCorrectType, `${name}.pdf`);
```

### Issue 4: "No text found in PDF"
**Symptoms:** PDF parses successfully but contains no text

**Possible Causes:**
- PDF contains only images (scanned document)
- PDF is encrypted or protected
- PDF text extraction failed

**Solution:**
- Use PDFs with selectable text
- For scanned documents, use OCR before conversion
- Check PDF permissions

### Issue 5: Invalid PDF URL
**Symptoms:** Fetch fails or returns non-PDF content

**Possible Causes:**
- Relative URL not resolved correctly
- CORS issues
- PDF not uploaded properly

**Solution:**
- Check the `pdfUrl` value in the upload response
- Ensure the upload API returns a valid, accessible URL
- Verify CORS headers allow fetching the PDF

## 📊 Validation Checklist

Before the API returns 400, it checks:

1. ✅ **FormData contains 'file' key**
   - Check: `formData.get('file')` is not null

2. ✅ **File has .pdf extension OR application/pdf MIME type**
   - Check: `file.name.endsWith('.pdf')` OR `file.type === 'application/pdf'`

3. ✅ **File size is greater than 0**
   - Check: `file.size > 0`

4. ✅ **File can be read as ArrayBuffer**
   - Check: `await file.arrayBuffer()` succeeds

5. ✅ **PDF can be parsed by pdfjs**
   - Check: `pdfjs.getDocument({ data: arrayBuffer }).promise` succeeds

6. ✅ **PDF contains extractable text**
   - Check: Extracted text length > 0

## 🎯 Next Steps

1. **Run the application** and attempt to convert a PDF to Word
2. **Check browser console** for the detailed logs
3. **Check server console** for the detailed logs
4. **Identify which validation check is failing** based on the error messages
5. **Apply the appropriate solution** from the "Common Issues" section above

## 📝 Testing Procedure

To properly test the fix:

```bash
# 1. Start the development server
npm run dev

# 2. Open browser console (F12)

# 3. Upload a PDF document

# 4. Click "Convert to Word" button

# 5. Observe the console logs:
#    - Browser console: Client-side logs (📥, 📄, 📋, ✅)
#    - Server console: Server-side logs (📥, 📋, 🔍, ✅)

# 6. If error occurs, note the last successful log message
#    and the first error message

# 7. Match the error to the Common Issues section above
```

## 🚀 Expected Successful Flow

When working correctly, you should see:

**Browser Console:**
```
📥 Fetching PDF from URL: /api/upload/document.pdf
📥 Absolute URL: http://localhost:3000/api/upload/document.pdf
📄 PDF fetched, size: 125432 bytes, type: application/pdf
✅ PDF blob type corrected to: application/pdf
✅ PDF blob size: 125432 bytes
📤 Sending PDF to conversion API...
📋 FormData details:
  - File name: document.pdf
  - File size: 125432
  - File type: application/pdf
✅ Conversion successful, downloading...
```

**Server Console:**
```
📥 Incoming request content-type: multipart/form-data; boundary=----...
📋 Parsing form data...
📋 Form data entries:
  - file: File(name="document.pdf", type="application/pdf", size=125432)
✅ Received file: { name: 'document.pdf', type: 'application/pdf', size: 125432 }
🔍 File validation:
  - Has .pdf extension: true
  - Has PDF MIME type: true
  - File type: application/pdf
✅ File validation passed
Loading pdfjs...
Parsing PDF with pdfjs...
PDF loaded, pages: 5
Extracted text from page 1/5
...
Total text extracted: 45678 characters
✅ DOCX document created successfully
✅ DOCX buffer generated, size: 87654 bytes
```

## 📞 Need More Help?

If the issue persists after following this guide:

1. **Copy all console logs** (both browser and server)
2. **Note the exact error message** shown in the toast notification
3. **Check the network tab** (F12 > Network) for the `/api/pdf-to-docx` request
4. **Inspect the request payload** to see what's being sent
5. **Check the response** to see the exact error returned

The enhanced logging should provide enough information to identify the root cause of the 400 error.

