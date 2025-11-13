# TinyMCE Editor Setup Guide

## Issue
Console error: **"All created TinyMCE editors are configured to be read-only."**

## Root Cause
The TinyMCE cloud editor requires a valid API key. Without it, the editor defaults to read-only mode.

## Solution

### Step 1: Get a Free TinyMCE API Key

1. Visit https://www.tiny.cloud/auth/signup/
2. Sign up for a free account (no credit card required)
3. After signing up, you'll be redirected to your dashboard
4. Copy your API key from the dashboard

**Free Tier Benefits:**
- 1,000 editor loads per month
- All essential plugins included
- No credit card required

### Step 2: Add the API Key to Your Environment

1. Create a file named `.env.local` in the `Po2` directory (same level as `package.json`)
2. Add the following line:

```env
NEXT_PUBLIC_TINYMCE_API_KEY=your_actual_api_key_here
```

**Example:**
```env
NEXT_PUBLIC_TINYMCE_API_KEY=abc123def456ghi789jkl012mno345pqr678stu901vwx234yz
```

### Step 3: Restart Your Development Server

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

### Step 4: Verify the Fix

1. Navigate to the Compliance Editor: http://localhost:3000/compliance-editor
2. Upload a document
3. The editor should now be fully editable (no longer read-only)
4. Check the console - the warning should be gone

## What Was Changed

The TinyMCE Editor component (`components/editor/TinyMCEEditor.tsx`) was updated to include the API key:

```tsx
<Editor
  apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY || 'no-api-key'}
  // ... other props
/>
```

## Alternative: Self-Hosted TinyMCE

If you prefer not to use the cloud version, you can switch to a self-hosted version:

1. Install TinyMCE locally:
```bash
npm install tinymce
```

2. Update the import in `components/editor/TinyMCEEditor.tsx`:
```tsx
// Remove the apiKey prop
// Add tinymce to your public folder
```

**Note:** Self-hosting requires more setup and manual plugin management.

## Troubleshooting

### Issue: Still seeing read-only warning after adding API key

**Solutions:**
1. Verify the `.env.local` file is in the correct location (`Po2` directory)
2. Check that the environment variable name is exactly: `NEXT_PUBLIC_TINYMCE_API_KEY`
3. Make sure there are no spaces around the `=` sign
4. Restart the dev server completely (Ctrl+C, then `npm run dev`)
5. Clear your browser cache and reload the page

### Issue: API key not found/invalid

**Solutions:**
1. Double-check you copied the entire API key from TinyMCE dashboard
2. Ensure there are no quotes around the API key in `.env.local`
3. Verify your TinyMCE account is activated (check your email)

### Issue: Environment variable not loading

**Check:**
```bash
# In your terminal (after server starts), this should show your env vars:
# The NEXT_PUBLIC_ vars should be visible
echo $NEXT_PUBLIC_TINYMCE_API_KEY
```

## Security Notes

- ✅ `NEXT_PUBLIC_TINYMCE_API_KEY` is **safe to expose** on the client side
- ✅ The `NEXT_PUBLIC_` prefix makes it available to browser code
- ✅ Never commit `.env.local` to git (it's already in `.gitignore`)
- ✅ TinyMCE cloud restricts API key usage by domain (for production)

## Additional Resources

- [TinyMCE Cloud Documentation](https://www.tiny.cloud/docs/)
- [TinyMCE React Integration](https://www.tiny.cloud/docs/tinymce/6/react-pm-bundle/)
- [TinyMCE API Key Setup](https://www.tiny.cloud/my-account/api-keys/)

---

**Questions?** See `ENV_SETUP.md` for complete environment variable setup.

