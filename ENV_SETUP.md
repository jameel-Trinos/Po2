# Environment Variables Setup

## Required Environment Variables

Create a `.env.local` file in the `Po2` directory (same level as `package.json`) with the following contents:

```env
# ============================================
# Adobe PDF Services API (Server-side Only)
# ============================================
# These credentials are used for server-side PDF operations like:
# - Text extraction with positioning
# - PDF to Word/Excel/PowerPoint conversion
# - OCR (Optical Character Recognition)
# - PDF manipulation (merge, split, rotate, watermark, protect)

ADOBE_PDFSERVICES_CLIENT_ID=0fa25d71a6b44bf3ad7b312a19e045ad
ADOBE_PDFSERVICES_CLIENT_SECRET=p8e-X226nBBVdbuogBGmLSAlbVIAu7AXtev-

# Technical Account Information (optional - for reference)
ADOBE_TECHNICAL_ACCOUNT_ID=DFF522F769138E810A495C68@techacct.adobe.com
ADOBE_TECHNICAL_ACCOUNT_EMAIL=6b20ef70-40b7-410b-a4f4-e7ce13094ee3@techacct.adobe.com
ADOBE_IMS_ORG_ID=D0FF22F869132F570A495F8F@AdobeOrg

# Project Information (optional - for reference)
ADOBE_PROJECT_ID=4566206088345535757
ADOBE_WORKSPACE_ID=4566206088345565232

# ============================================
# Google Gemini API (AI Proofreading)
# ============================================
# Used for AI-powered document analysis and suggestions
# Get your API key from: https://makersuite.google.com/app/apikey

GEMINI_API_KEY=your_gemini_api_key_here

# ============================================
# TinyMCE Editor API (Rich Text Editor)
# ============================================
# Used for the compliance editor and document editing features
# Get your free API key from: https://www.tiny.cloud/auth/signup/
# Free tier includes: 1,000 loads/month

NEXT_PUBLIC_TINYMCE_API_KEY=your_tinymce_api_key_here

# ============================================
# Database Configuration
# ============================================
# PostgreSQL or compatible database URL
# Format: postgresql://user:password@host:port/database

DATABASE_URL=your_database_url_here

# ============================================
# Clerk Authentication (if using Clerk)
# ============================================
# Get these from: https://dashboard.clerk.com/
# Navigate to: Your App → API Keys

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
CLERK_SECRET_KEY=your_clerk_secret_key_here
```

## Important Notes

### ⚠️ What's Changed (Migration)

**Removed (No Longer Needed):**
- ~~`NEXT_PUBLIC_ADOBE_CLIENT_ID`~~ - Was used for Adobe Embed API (now replaced with pdf.js)

**PDF Viewing:**
- ✅ Now uses **pdf.js** (open-source, built-in)
- ✅ **No API key needed** for viewing PDFs
- ✅ Works offline

**PDF Processing:**
- ✅ Uses **Adobe PDF Services API** (server-side only)
- ✅ Credentials are **not exposed** to the client
- ✅ More secure and cost-effective

### 🔒 Security

1. **Never commit `.env.local` to git** (it's already in `.gitignore`)
2. **Server-side only credentials:**
   - `ADOBE_PDFSERVICES_CLIENT_ID`
   - `ADOBE_PDFSERVICES_CLIENT_SECRET`
   - `GEMINI_API_KEY`
   - `CLERK_SECRET_KEY`
   - `DATABASE_URL`

3. **Client-side safe (public) credentials:**
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` (only public keys should have `NEXT_PUBLIC_` prefix)
   - `NEXT_PUBLIC_TINYMCE_API_KEY` (public API key for TinyMCE editor)

### 📝 How to Use

1. **Copy the template above** to a new file named `.env.local`
2. **Replace placeholder values** with your actual credentials
3. **Save the file** in the `Po2` directory
4. **Restart your development server:**
   ```bash
   npm run dev
   ```

### ✅ Verify Setup

After starting the server, check the terminal for:

```
✓ Ready in X.Xs
  - Local:        http://localhost:3000
  - Environments: .env.local
```

And in the browser console (F12), you should see:

```
[PdfViewerPdfJs] PDF loaded successfully: X pages
```

### 🐛 Common Issues

**Issue:** "Adobe PDF Services credentials are not configured"
- **Solution:** Make sure `.env.local` exists and has the correct credentials

**Issue:** Environment variables not loading
- **Solution:** 
  1. Verify the file is named exactly `.env.local` (not `.env` or `env.local`)
  2. Check it's in the `Po2` folder (same level as `package.json`)
  3. Restart the dev server after creating/editing the file

**Issue:** PDF viewer not working
- **Solution:** PDF viewing doesn't require environment variables anymore! Check browser console for other errors.

**Issue:** "All created TinyMCE editors are configured to be read-only"
- **Solution:** 
  1. Sign up for a free TinyMCE API key at https://www.tiny.cloud/auth/signup/
  2. Add `NEXT_PUBLIC_TINYMCE_API_KEY=your_key_here` to `.env.local`
  3. Restart the development server

### 📚 Additional Resources

- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
- [Adobe PDF Services API](https://developer.adobe.com/document-services/apis/pdf-services/)
- [Clerk Documentation](https://clerk.com/docs)

## Quick Start Checklist

- [ ] Create `.env.local` file in `Po2` directory
- [ ] Add Adobe PDF Services API credentials
- [ ] Add other API keys (Gemini, Clerk, Database)
- [ ] Restart development server
- [ ] Test PDF viewing (should work without API keys)
- [ ] Test PDF processing (needs Adobe credentials)
- [ ] Verify no errors in console

---

**Need help?** See `PDF_VIEWER_SETUP.md` or `QUICK_FIX.md` for more details.

