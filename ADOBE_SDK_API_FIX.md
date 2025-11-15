# Adobe PDF Services SDK API Fix

## 🐛 Issues Found and Fixed

### Error 1: ClientConfig API Incorrect
**Error**: `ClientConfig.clientConfigBuilder is not a function`

**Problem**: I initially used a builder pattern that doesn't exist in SDK v4.1.0:
```typescript
// ❌ WRONG - This doesn't exist
const clientConfig = ClientConfig.clientConfigBuilder()
  .withConnectTimeout(60000)
  .withReadTimeout(60000)
  .build();
```

**Solution**: Use direct constructor with options object:
```typescript
// ✅ CORRECT - SDK v4.1.0 API
const clientConfig = new ClientConfig({
  timeout: 60000  // 60 seconds timeout
});
```

---

### Error 2: PDF.js Worker Configuration
**Error**: `Invalid 'workerSrc' type`

**Problem**: Tried to set `workerSrc` to `false` which is not valid:
```typescript
// ❌ WRONG
(pdfjsLib as any).GlobalWorkerOptions.workerSrc = false;
```

**Solution**: Configure PDF.js properly for Node.js environment:
```typescript
// ✅ CORRECT - Disable worker for Node.js
const loadingTask = pdfjsLib.getDocument({
  data: pdfBuffer,
  useWorkerFetch: false,
  isEvalSupported: false,
  useSystemFonts: true
});
```

---

### Error 3: ExportPDFJob Parameters
**Problem**: Missing proper export parameters and result type.

**Solution**: Use correct SDK v4.1.0 API:
```typescript
// Import correct types
const { 
  ExportPDFJob, 
  ExportPDFResult,
  ExportPDFParams,
  ExportPDFTargetFormat
} = await import('@adobe/pdfservices-node-sdk');

// Create params with target format
const params = new ExportPDFParams({
  targetFormat: ExportPDFTargetFormat.DOCX
});

// Create job
const job = new ExportPDFJob({ inputAsset, params });

// Get result with correct type
const pdfServicesResponse = await pdfServices.getJobResult({
  pollingURL,
  resultType: ExportPDFResult  // ✅ Correct result type
});

// Access asset
const resultAsset = pdfServicesResponse.result.asset;
```

---

## ✅ What Was Fixed

### 1. **Correct ClientConfig Usage**
- Changed from non-existent builder pattern to constructor
- Timeout now properly set to 60 seconds
- Adobe SDK will now wait up to 60 seconds for operations

### 2. **Proper PDF.js Configuration**
- Removed incorrect `GlobalWorkerOptions.workerSrc` setting
- Added proper PDF.js options for Node.js environment
- Fallback conversion will now work correctly

### 3. **Complete ExportPDFJob Implementation**
- Added `ExportPDFResult` type
- Added `ExportPDFParams` with `targetFormat`
- Properly configured for DOCX conversion
- Result handling now type-safe

---

## 📊 SDK Version Compatibility

**Current SDK**: `@adobe/pdfservices-node-sdk@^4.1.0`

**API Differences from Documentation**:
- ✅ `ClientConfig` uses constructor, not builder
- ✅ `ExportPDFResult` is separate from job
- ✅ Target format specified via `ExportPDFParams`

---

## 🧪 Testing

The fix has been verified with:
1. ✅ No TypeScript linter errors
2. ✅ Correct SDK API usage confirmed via Node.js REPL
3. ✅ All imports validated

**Next Step**: Test with actual PDF conversion to ensure runtime behavior is correct.

---

## 🔍 How to Verify

1. Start the development server
2. Navigate to `/compliance-editor`
3. Upload a PDF file
4. Click "Convert to Word"
5. Check server logs for:
   ```
   ✅ Adobe SDK loaded
   ✅ Credentials created
   ✅ Client config created with 60s timeout
   ✅ PDF Services initialized with extended timeout
   🔄 Conversion attempt 1/3...
   ✅ PDF uploaded as asset
   ✅ Export job created for DOCX conversion
   ✅ Job submitted, polling for result...
   ✅ Job completed
   ✅ Conversion successful
   ```

---

## 📚 Reference

**Adobe PDF Services Node.js SDK v4.1.0 Exports**:
- `ServicePrincipalCredentials` - Authentication
- `PDFServices` - Main service client
- `ClientConfig` - Client configuration (timeout, proxy, etc.)
- `ExportPDFJob` - Job class for PDF export
- `ExportPDFResult` - Result type for export jobs
- `ExportPDFParams` - Parameters for export (target format, etc.)
- `ExportPDFTargetFormat` - Enum: DOC, DOCX, PPTX, RTF, XLSX
- `MimeType` - File MIME types

**Key Methods**:
- `new ClientConfig({ timeout: number })` - Configure timeout
- `new PDFServices({ credentials, clientConfig })` - Initialize service
- `pdfServices.upload({ readStream, mimeType })` - Upload file
- `pdfServices.submit({ job })` - Submit job for processing
- `pdfServices.getJobResult({ pollingURL, resultType })` - Get result
- `pdfServices.getContent({ asset })` - Download result

---

**Fix Version**: 2.0  
**Date**: November 14, 2025  
**Status**: ✅ Fixed - Ready for Testing

