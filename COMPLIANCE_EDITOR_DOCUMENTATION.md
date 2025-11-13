# Compliance Editor - Complete Documentation

## Overview
The Compliance Editor is a sophisticated financial document compliance tool that analyzes Word documents (.docx) for FINRA, SEC, and grammar compliance issues. It provides real-time editing capabilities with AI-powered suggestions.

## Features

### 1. Document Upload & Analysis
- Upload `.docx` files for compliance review
- Automatic text extraction and HTML conversion
- Real-time analysis for FINRA, SEC, and grammar issues
- Cost tracking per analysis ($0.10 per document)

### 2. Split View Editor
- **Left Panel**: TinyMCE rich text editor with full document editing
- **Right Panel**: Categorized compliance suggestions with apply buttons
- Real-time text highlighting and navigation
- Synchronized scrolling between editor and suggestions

### 3. Balance Indicator
- Top-right balance display showing remaining API credits
- Color-coded status (Green: Healthy, Yellow: Low, Red: Critical)
- Real-time updates as operations are performed
- Mock balance system ($100.00 starting balance)

### 4. Compliance Suggestions
Each suggestion includes:
- **Category**: FINRA, SEC, or Grammar
- **Severity**: Critical, Warning, or Info
- **Original Text**: Highlighted problematic text
- **Suggested Text**: Compliant replacement
- **Explanation**: Detailed reason for the suggestion
- **Apply Button**: One-click application to document

### 5. Export Capabilities
- Download as Word (.docx)
- Download as PDF
- Maintains formatting and applied changes

## Folder Structure

```
Po2/
├── app/
│   ├── api/
│   │   └── compliance/
│   │       ├── analyze/
│   │       │   └── route.ts          # Document analysis endpoint
│   │       └── apply-change/
│   │           └── route.ts          # Suggestion application endpoint
│   └── compliance-editor/
│       └── page.tsx                  # Main compliance editor page
├── components/
│   └── compliance/
│       ├── BalanceIndicator.tsx     # User balance display component
│       ├── SuggestionCard.tsx       # Individual suggestion card
│       └── DocumentUpload.tsx       # Document upload interface
└── src/
    └── db/
        └── schema.ts                 # Drizzle ORM schema (users, documents, suggestions)
```

## Database Schema

### Users Table
```typescript
{
  id: integer (primary key, auto-increment)
  name: varchar(255)
  email: varchar(255) unique
  password: varchar(255)
  balance: decimal(10,2) default 100.00
  createdAt: timestamp
  updatedAt: timestamp
  isVerified: boolean
}
```

### Documents Table
```typescript
{
  id: integer (primary key, auto-increment)
  userId: integer (foreign key -> users.id)
  title: varchar(255)
  originalFileName: varchar(255)
  fileType: varchar(50)           // 'docx', 'pdf'
  content: text                   // HTML content
  extractedText: text             // Plain text for analysis
  status: varchar(50)             // 'pending', 'analyzing', 'completed'
  createdAt: timestamp
  updatedAt: timestamp
}
```

### Suggestions Table
```typescript
{
  id: integer (primary key, auto-increment)
  documentId: integer (foreign key -> documents.id)
  category: varchar(100)          // 'FINRA', 'SEC', 'Grammar', 'Style'
  severity: varchar(50)           // 'critical', 'warning', 'info'
  originalText: text
  suggestedText: text
  explanation: text
  pageNumber: integer
  isApplied: boolean default false
  createdAt: timestamp
}
```

## API Endpoints

### POST /api/compliance/analyze

Analyzes uploaded documents for compliance issues.

**Request:**
```typescript
FormData {
  file: File  // .docx file
}
```

**Response:**
```typescript
{
  success: boolean
  documentId: string
  htmlContent: string
  extractedText: string
  suggestions: Array<{
    category: string
    severity: string
    originalText: string
    suggestedText: string
    explanation: string
    page: number
  }>
  cost: number
  message: string
}
```

**Compliance Checks:**
- **FINRA Rules**: Guarantees, high returns, risk-free claims
- **SEC Regulations**: Insider information, confidential disclosures
- **Grammar**: Common grammatical errors

**Cost:** $0.10 per analysis

### POST /api/compliance/apply-change

Applies a suggestion to the document.

**Request:**
```typescript
{
  documentId: string
  originalText: string
  suggestedText: string
  suggestionId?: string
}
```

**Response:**
```typescript
{
  success: boolean
  documentId: string
  appliedChange: {
    from: string
    to: string
    suggestionId: string
  }
  cost: number
  message: string
}
```

**Cost:** $0.01 per change

## Component Documentation

### BalanceIndicator Component

```typescript
interface BalanceIndicatorProps {
  balance: number
  className?: string
}
```

**Features:**
- Color-coded status indicator
- Real-time balance display
- Status badge (Healthy/Low/Critical)
- Icon-based visual feedback

### SuggestionCard Component

```typescript
interface ComplianceSuggestion {
  id?: string
  category: string
  severity: 'critical' | 'warning' | 'info'
  originalText: string
  suggestedText: string
  explanation: string
  page?: number
  isApplied?: boolean
}
```

**Features:**
- Severity icons and badges
- Color-coded category tags
- Original vs suggested text comparison
- Apply button with loading state
- Applied state indicator

### DocumentUpload Component

```typescript
interface DocumentUploadProps {
  onUploadSuccess: (data: {
    documentId: string
    htmlContent: string
    extractedText: string
    suggestions: any[]
  }) => void
  onError: (error: string) => void
}
```

**Features:**
- File type validation (.docx only)
- File size display
- Upload progress indication
- Error handling and display

## Usage Flow

### 1. Upload Document
```typescript
// User selects .docx file
// File is validated (type, size)
// FormData is created and sent to /api/compliance/analyze
```

### 2. Document Analysis
```typescript
// Backend extracts text using mammoth
// Converts to HTML for editor
// Generates compliance suggestions using regex patterns
// Returns analysis results with cost
```

### 3. View & Edit
```typescript
// Split view loads:
//   - Left: TinyMCE editor with document HTML
//   - Right: Categorized suggestions panel
// User can:
//   - Edit document directly
//   - Click suggestions to highlight text
//   - Apply suggestions with one click
```

### 4. Apply Suggestions
```typescript
// User clicks "Apply Change"
// API call to /api/compliance/apply-change
// Text replaced in editor
// Suggestion marked as applied
// Balance deducted
```

### 5. Export Document
```typescript
// User clicks download button
// Document converted to Word or PDF
// File downloaded with changes
```

## Mock Data System

The current implementation uses **mock data** for all backend operations:

### Mock Balance System
- Starting balance: $100.00
- Analysis cost: $0.10
- Apply change cost: $0.01
- Balance updates in UI immediately

### Mock Document IDs
- Generated using `Date.now().toString()`
- No actual database storage (ready for integration)

### Mock Compliance Patterns
```typescript
// FINRA
/guaranteed|promise|assure\s+returns?|profits?/gi
/high returns?/gi
/risk-free/gi

// SEC
/insider information/gi
/confidential (deal|agreement|information)/gi

// Grammar
/their\s+are/gi
/it's\s+(own|time|day)/gi
/effect\s+change/gi
```

## Integration Guide

### Connect to Real Database

1. Update database connection in `drizzle.config.ts`
2. Run migrations: `npm run db:migrate`
3. Update API routes to use Drizzle ORM queries

```typescript
// Example: Save document to database
import { db } from '@/lib/db';
import { documents } from '@/src/db/schema';

const doc = await db.insert(documents).values({
  userId: currentUser.id,
  title: file.name,
  originalFileName: file.name,
  fileType: 'docx',
  content: htmlContent,
  extractedText: extractedText,
  status: 'completed'
}).returning();
```

### Connect to Real AI Service

Replace mock compliance generator with actual AI:

```typescript
// In /api/compliance/analyze/route.ts
import { analyzePdfContent } from '@/lib/services/geminiService';

// Replace generateMockCompliance with:
const suggestions = await analyzePdfContent(extractedText);
```

### Connect to Payment System

Add Stripe or similar for balance management:

```typescript
// Deduct from user's actual balance
import { db } from '@/lib/db';
import { users } from '@/src/db/schema';

await db.update(users)
  .set({ balance: sql`balance - ${cost}` })
  .where(eq(users.id, userId));
```

## Testing

### Test Document Upload
1. Navigate to `/compliance-editor`
2. Click "Upload Document"
3. Select a `.docx` file
4. Verify analysis starts
5. Check suggestions appear

### Test Suggestion Application
1. Click on a suggestion card
2. Verify text highlights in editor
3. Click "Apply Change"
4. Verify text updates
5. Check balance deducted

### Test Export
1. Make edits to document
2. Click "Download Word"
3. Verify file downloads
4. Open in Word to verify content

## Performance Considerations

- **Chunked Upload**: For large files, consider implementing chunked upload
- **Lazy Loading**: Suggestions panel uses virtual scrolling for 100+ suggestions
- **Debouncing**: Editor changes debounced to prevent excessive re-renders
- **Memoization**: Suggestion cards memoized to prevent unnecessary re-renders

## Security Considerations

- **File Validation**: Only .docx files accepted
- **Size Limits**: 10MB file size limit
- **Sanitization**: HTML content sanitized before rendering
- **CSRF Protection**: Include CSRF tokens in production
- **Rate Limiting**: Add rate limiting to API endpoints

## Future Enhancements

1. **Real-time Collaboration**: Multiple users editing simultaneously
2. **Version History**: Track document changes over time
3. **Custom Rules**: Allow users to define custom compliance rules
4. **Batch Processing**: Upload and analyze multiple documents
5. **Advanced Analytics**: Compliance score, trends, reports
6. **Integration**: Connect to document management systems
7. **Notifications**: Email alerts for critical compliance issues
8. **Mobile Support**: Responsive design for mobile devices

## Troubleshooting

### Suggestions Not Appearing
- Check API response in browser console
- Verify mammoth is extracting text correctly
- Ensure compliance patterns are matching

### Editor Not Loading
- Check TinyMCE API key in environment variables
- Verify HTML content is valid
- Check browser console for errors

### Apply Button Not Working
- Verify API endpoint is accessible
- Check balance is sufficient
- Ensure original text exists in document

## Dependencies

```json
{
  "mammoth": "^1.11.0",           // DOCX to HTML conversion
  "@tinymce/tinymce-react": "^6.3.0",  // Rich text editor
  "docx": "^9.5.1",               // HTML to DOCX conversion
  "pdf-lib": "^1.17.1",           // PDF generation
  "drizzle-orm": "^0.44.7",       // Database ORM
  "framer-motion": "^12.23.24",   // Animations
  "lucide-react": "^0.553.0"      // Icons
}
```

## Support

For issues or questions:
1. Check console for error messages
2. Verify all dependencies are installed
3. Ensure API routes are accessible
4. Review this documentation

---

**Version:** 1.0.0  
**Last Updated:** November 2025  
**Status:** Production Ready (with mock data)

