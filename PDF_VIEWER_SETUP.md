# PDF Viewer Setup Guide

## 🎉 Migration Complete: Adobe Embed API → pdf.js + PDF Services API

This project has been migrated from Adobe PDF Embed API to a better solution:
- **Client-side PDF Viewing**: pdf.js (open-source, no API key needed)
- **Server-side PDF Operations**: Adobe PDF Services API

## Quick Setup

### 1. Client-Side PDF Viewing (pdf.js)

✅ **Already configured!** No action needed.

The PDF viewer now uses pdf.js, which is already included in your project. PDFs will display automatically without any external API keys.

**Features:**
- 📄 View PDFs directly in the browser
- 🔍 Zoom in/out controls
- 📑 Page navigation
- 🎨 Clean, modern interface
- 🔒 No external dependencies for viewing
- 🌐 Works offline

### 2. Server-Side PDF Operations (Adobe PDF Services API)

For server-side operations (text extraction, format conversion, OCR), configure Adobe PDF Services API:

#### Get Your Credentials

You already have your credentials! Use these values:

**Create `.env.local` in the `Po2` directory:**

```env
# Adobe PDF Services API - Server-side operations only
ADOBE_PDFSERVICES_CLIENT_ID=0fa25d71a6b44bf3ad7b312a19e045ad
ADOBE_PDFSERVICES_CLIENT_SECRET=p8e-X226nBBVdbuogBGmLSAlbVIAu7AXtev-

# Technical Account Information (optional - for reference)
ADOBE_TECHNICAL_ACCOUNT_ID=DFF522F769138E810A495C68@techacct.adobe.com
ADOBE_TECHNICAL_ACCOUNT_EMAIL=6b20ef70-40b7-410b-a4f4-e7ce13094ee3@techacct.adobe.com
ADOBE_IMS_ORG_ID=D0FF22F869132F570A495F8F@AdobeOrg
```

**Note:** These credentials are for **server-side operations only** (running in API routes). They are NOT exposed to the client.

#### Restart Development Server

```bash
# Stop the current server (Ctrl+C)
# Then restart it
npm run dev
```

## All Environment Variables

Here's a complete list of environment variables for your project:

```env
# Adobe PDF Services API (Server-side operations) - REQUIRED for PDF processing
ADOBE_PDFSERVICES_CLIENT_ID=0fa25d71a6b44bf3ad7b312a19e045ad
ADOBE_PDFSERVICES_CLIENT_SECRET=p8e-X226nBBVdbuogBGmLSAlbVIAu7AXtev-

# Google Gemini API (AI-powered proofreading)
GEMINI_API_KEY=your_gemini_api_key_here

# Database URL
DATABASE_URL=your_database_url_here

# Clerk Authentication (if using Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

**Removed:**
- ~~`NEXT_PUBLIC_ADOBE_CLIENT_ID`~~ - No longer needed (was for Adobe Embed API)

## What Changed?

### Before (Adobe Embed API)
- Required a client-side API key (`NEXT_PUBLIC_ADOBE_CLIENT_ID`)
- Loaded Adobe's viewer SDK from their CDN
- Limited customization options
- Dependent on Adobe's service availability

### After (pdf.js + PDF Services API)
- ✅ **No client-side API key needed** for viewing
- ✅ **Open-source pdf.js** for rendering
- ✅ **Full control** over the viewer
- ✅ **Better performance** and reliability
- ✅ **Adobe PDF Services API** for server-side operations only

## Features

### PDF Viewing (pdf.js) - Client Side
✅ View PDFs in browser  
✅ Zoom controls (50% - 300%)  
✅ Page navigation  
✅ Smooth scrolling  
✅ Responsive design  
✅ Dark mode support  
✅ No external API needed  

### PDF Operations (Adobe PDF Services) - Server Side
✅ Text extraction with positioning  
✅ Convert PDF to Word/Excel/PowerPoint  
✅ OCR (Optical Character Recognition)  
✅ PDF manipulation (merge, split, rotate)  
✅ Watermarking  
✅ Password protection/removal  

## Troubleshooting

### PDF Viewer Issues

**Problem: PDF not displaying**
1. Check browser console (F12) for errors
2. Verify the PDF URL is valid
3. Ensure `pdf.worker.mjs` exists in `/public` directory
4. Try a different PDF file

**Problem: Blank pages or rendering issues**
1. Check if the PDF is corrupted
2. Clear browser cache
3. Try in a different browser

### PDF Services API Issues

**Problem: Server-side operations failing**
1. Verify `.env.local` has the correct credentials
2. Check that `@adobe/pdfservices-node-sdk` is installed:
   ```bash
   npm install @adobe/pdfservices-node-sdk
   ```
3. Restart your development server
4. Check API routes console for error messages

**Problem: "Adobe PDF Services credentials are not configured"**
- Make sure you created `.env.local` (not `.env`)
- Verify the credentials are exactly as provided above
- Restart the development server

## Migration Notes

### Components Changed
- **Old:** `PdfViewerAcrobat.tsx` (Adobe Embed API)
- **New:** `PdfViewerPdfJs.tsx` (pdf.js)

### API Usage
- **Viewing PDFs:** Now uses pdf.js (client-side, no API needed)
- **Processing PDFs:** Uses Adobe PDF Services API (server-side only)

### Breaking Changes
- Removed `NEXT_PUBLIC_ADOBE_CLIENT_ID` environment variable
- Removed Adobe Embed API script loading
- Removed annotation features from Adobe Embed API (can be re-implemented with pdf.js if needed)

## Additional Resources

- [pdf.js Documentation](https://mozilla.github.io/pdf.js/)
- [Adobe PDF Services API Documentation](https://developer.adobe.com/document-services/apis/pdf-services/)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)

## Need Help?

1. Check browser console for client-side issues
2. Check terminal console for server-side issues
3. Verify all environment variables are set correctly
4. Ensure your Adobe project has "PDF Services API" enabled (not just Embed API)
