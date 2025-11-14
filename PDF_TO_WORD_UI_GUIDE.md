# PDF to Word Conversion - UI Guide

## 🎨 Visual Overview

This guide shows the exact UI elements that were implemented for the PDF to Word conversion feature.

## 📱 UI States

### 1. PDF Viewer Mode (Initial State)

```
┌─────────────────────────────────────────────────────────────────┐
│ Document Viewer                                                  │
│                                                                  │
│ [Convert to Word ▼]  [Download PDF]                            │
│                                                                  │
│ ℹ️  Click "Convert to Word" → "Edit as Word" to apply AI        │
│    suggestions                                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  📄 PDF Content Display                                          │
│                                                                  │
│  Lorem ipsum dolor sit amet, consectetur adipiscing elit...     │
│                                                                  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

**"Convert to Word" Button** (Blue Theme):
- Background: `bg-blue-50 dark:bg-blue-950/30`
- Border: `border-blue-200 dark:border-blue-800`
- Hover: `hover:bg-blue-100 dark:hover:bg-blue-900/40`
- Icon: FileDown (📥)
- Dropdown Arrow: ChevronDown (▼)

### 2. Convert to Word Dropdown Menu

```
┌─────────────────────────────────────────────────────────┐
│ [Convert to Word ▼]                                     │
│  └─────────────────────────────────────────┐           │
│    │ 📝 Edit as Word                       │           │
│    │    Convert and open in editor          │           │
│    │                                        │           │
│    │ 📥 Download as Word                    │           │
│    │    Save .docx file to device           │           │
│    └────────────────────────────────────────┘           │
└─────────────────────────────────────────────────────────┘
```

**Dropdown Options**:

Option 1: **Edit as Word**
- Icon: FileText (📝)
- Title: "Edit as Word"
- Subtitle: "Convert and open in editor"
- Action: Opens document in editor with AI suggestions

Option 2: **Download as Word**
- Icon: Download (📥)
- Title: "Download as Word"
- Subtitle: "Save .docx file to device"
- Action: Downloads .docx file immediately

### 3. Word Editor Mode (After Conversion)

```
┌─────────────────────────────────────────────────────────────────┐
│ Document Editor                                                  │
│                                                                  │
│ [Back to PDF]  [Download ▼]                                    │
│                                                                  │
│ ✅ Editing Mode - Apply suggestions and download as Word or PDF │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  📝 Editable Content                                             │
│                                                                  │
│  This is editable text. You can click and type here.            │
│  │                                                               │
│  │  Suggestions can be applied directly to this text.           │
│  │                                                               │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

**"Back to PDF" Button** (Outline):
- Icon: ArrowLeftRight (⇄)
- Action: Returns to PDF viewer mode

**"Download" Button** (Green Theme):
- Background: `bg-green-50 dark:bg-green-950/30`
- Border: `border-green-200 dark:border-green-800`
- Hover: `hover:bg-green-100 dark:hover:bg-green-900/40`
- Icon: Download (📥)
- Dropdown Arrow: ChevronDown (▼)

### 4. Download Dropdown (Edit Mode)

```
┌─────────────────────────────────────────────────────────┐
│ [Download ▼]                                            │
│  └─────────────────────────────────────────┐           │
│    │ 📝 Download as Word                    │           │
│    │    Save edited .docx file              │           │
│    │                                        │           │
│    │ 📥 Download as PDF                     │           │
│    │    Convert and save as PDF             │           │
│    └────────────────────────────────────────┘           │
└─────────────────────────────────────────────────────────┘
```

**Dropdown Options**:

Option 1: **Download as Word**
- Icon: FileText (📝)
- Title: "Download as Word"
- Subtitle: "Save edited .docx file"
- Action: Downloads edited content as .docx

Option 2: **Download as PDF**
- Icon: Download (📥)
- Title: "Download as PDF"
- Subtitle: "Convert and save as PDF"
- Action: Converts edited content to PDF and downloads

## 🎭 Loading States

### Converting to Word (Download Mode)

```
┌─────────────────────────────────────────────────────────┐
│ 🔄 Converting PDF to Word...                           │
└─────────────────────────────────────────────────────────┘
```

### Converting to Word (Edit Mode)

```
┌─────────────────────────────────────────────────────────┐
│ 🔄 Converting PDF to editable Word format...           │
└─────────────────────────────────────────────────────────┘
```

Then:

```
┌─────────────────────────────────────────────────────────┐
│ 🔄 Opening document in editor...                       │
└─────────────────────────────────────────────────────────┘
```

### Button During Loading

```
[🔄 Convert to Word ▼]  ← Button disabled with spinner
```

## ✅ Success Notifications

### Download Mode Success

```
┌─────────────────────────────────────────────────────────┐
│ ✅ PDF converted to Word and downloaded                 │
└─────────────────────────────────────────────────────────┘
```

### Edit Mode Success

```
┌─────────────────────────────────────────────────────────┐
│ ✅ Document ready for editing! You can now apply AI     │
│    suggestions.                                         │
└─────────────────────────────────────────────────────────┘
```

### Word Download Success

```
┌─────────────────────────────────────────────────────────┐
│ ✅ Word document downloaded successfully                │
└─────────────────────────────────────────────────────────┘
```

### PDF Export Success

```
┌─────────────────────────────────────────────────────────┐
│ ✅ PDF downloaded successfully                          │
└─────────────────────────────────────────────────────────┘
```

## ❌ Error Notifications

### No PDF Available

```
┌─────────────────────────────────────────────────────────┐
│ ❌ PDF not available for conversion                     │
└─────────────────────────────────────────────────────────┘
```

### Conversion Failed

```
┌─────────────────────────────────────────────────────────┐
│ ❌ Failed to convert PDF to Word                        │
└─────────────────────────────────────────────────────────┘
```

### No Content to Download

```
┌─────────────────────────────────────────────────────────┐
│ ❌ No document content to download                      │
└─────────────────────────────────────────────────────────┘
```

## 🎨 Complete Layout - Split View

### Full Editor Layout (PDF Mode)

```
┌───────────────────────────────────────┬─────────────────────────┐
│ Document Viewer                       │ AI Suggestions Panel    │
│                                       │                         │
│ [Convert to Word ▼] [Download PDF]  │  💡 Suggestions (12)    │
│                                       │                         │
│ ℹ️  Click "Convert to Word" →        │  ┌───────────────────┐ │
│    "Edit as Word" to apply AI         │  │ 1. Grammar Issue  │ │
│    suggestions                        │  │    Change "their" │ │
│                                       │  │    to "there"     │ │
├───────────────────────────────────────┤  │                   │ │
│                                       │  │ [Go To] [Apply]   │ │
│  📄 PDF Content                       │  └───────────────────┘ │
│                                       │                         │
│  Lorem ipsum dolor sit amet,          │  ┌───────────────────┐ │
│  consectetur adipiscing elit...       │  │ 2. Style Issue    │ │
│                                       │  │    ...            │ │
│  [Page 1 of 5]                        │  └───────────────────┘ │
│                                       │                         │
│                                       │  [Save Draft]           │
└───────────────────────────────────────┴─────────────────────────┘
```

### Full Editor Layout (Edit Mode)

```
┌───────────────────────────────────────┬─────────────────────────┐
│ Document Editor                       │ AI Suggestions Panel    │
│                                       │                         │
│ [Back to PDF] [Download ▼]          │  💡 Suggestions (12)    │
│                                       │                         │
│ ✅ Editing Mode - Apply suggestions   │  ┌───────────────────┐ │
│    and download as Word or PDF        │  │ 1. Grammar Issue  │ │
│                                       │  │    Change "their" │ │
├───────────────────────────────────────┤  │    to "there"     │ │
│                                       │  │                   │ │
│  📝 Editable Content                  │  │ [Go To] [Apply]   │ │
│                                       │  └───────────────────┘ │
│  This is editable text. You can       │                         │
│  click and type here.                 │  ┌───────────────────┐ │
│  │                                    │  │ 2. Style Issue    │ │
│  │  Suggestions can be applied        │  │    ...            │ │
│  │  directly to this text.            │  └───────────────────┘ │
│  │                                    │                         │
│                                       │  [Save Draft]           │
└───────────────────────────────────────┴─────────────────────────┘
```

## 🖱️ Interactive Elements

### Hover States

**Convert to Word Button (Hover)**:
```
┌───────────────────────────┐
│ 📥 Convert to Word ▼      │  ← Slightly darker blue
└───────────────────────────┘
```

**Download Button (Hover)**:
```
┌───────────────────────────┐
│ 📥 Download ▼             │  ← Slightly darker green
└───────────────────────────┘
```

### Disabled States

**Button Disabled (No PDF)**:
```
┌───────────────────────────┐
│ 📥 Convert to Word ▼      │  ← Grayed out, no pointer
└───────────────────────────┘
```

### Focus States

**Button Focused**:
```
┌───────────────────────────┐
│ 📥 Convert to Word ▼      │  ← Blue ring around button
└───────────────────────────┘
```

## 🎯 Suggestion Highlighting

### When Suggestion is Selected

```
┌─────────────────────────────────────────────────────────┐
│  This is some text with a ┃highlighted section┃ that   │
│  needs to be changed.                                   │
└─────────────────────────────────────────────────────────┘
```

**Highlight Style**:
- Background: `bg-yellow-200 dark:bg-yellow-300/40`
- Padding: `px-1`
- Border Radius: `rounded`
- Smooth scroll to highlighted text

## 📏 Responsive Design

### Desktop (>768px)
- Dropdown menus aligned to the right
- Full button labels visible
- Icons + text on all buttons
- Split view with PDF/Editor + Suggestions

### Tablet (768px - 1024px)
- Same as desktop but with adjusted spacing
- Dropdown menus may stack vertically

### Mobile (<768px)
- Buttons may wrap to new line
- Dropdown menus full width
- Stacked layout (content above suggestions)

## 🌓 Dark Mode

### Dark Mode Colors

**Blue Theme (Convert to Word)**:
- Background: `bg-blue-950/30`
- Border: `border-blue-800`
- Hover: `hover:bg-blue-900/40`

**Green Theme (Download)**:
- Background: `bg-green-950/30`
- Border: `border-green-800`
- Hover: `hover:bg-green-900/40`

**Badge Colors**:
- Info Badge: Default secondary variant
- Success Badge: `bg-green-950/30 border-green-800`

**Text Colors**:
- Primary: `text-gray-50`
- Secondary: `text-gray-300`
- Muted: `text-gray-400`
- Subtitle: `text-zinc-400`

## 🎨 Color Palette

### Light Mode
- Primary Blue: `#EFF6FF` (bg-blue-50)
- Border Blue: `#BFDBFE` (border-blue-200)
- Hover Blue: `#DBEAFE` (bg-blue-100)
- Primary Green: `#F0FDF4` (bg-green-50)
- Border Green: `#BBF7D0` (border-green-200)
- Hover Green: `#DCFCE7` (bg-green-100)

### Dark Mode
- Primary Blue: `#1E3A8A` (bg-blue-950/30)
- Border Blue: `#1E40AF` (border-blue-800)
- Hover Blue: `#1E3A8A` (bg-blue-900/40)
- Primary Green: `#14532D` (bg-green-950/30)
- Border Green: `#166534` (border-green-800)
- Hover Green: `#14532D` (bg-green-900/40)

## 🔤 Typography

### Button Text
- Font Size: `text-sm` (14px)
- Font Weight: `font-medium`
- Line Height: Default

### Dropdown Titles
- Font Size: `text-base` (16px)
- Font Weight: `font-medium`

### Dropdown Subtitles
- Font Size: `text-xs` (12px)
- Color: `text-zinc-500 dark:text-zinc-400`

### Badge Text
- Font Size: `text-sm` (14px)
- Font Weight: Default

## 📐 Spacing

### Button Spacing
- Gap between buttons: `gap-2` (8px)
- Button padding: `px-3 py-1.5` (size="sm")
- Icon margin: `mr-2` (8px)

### Dropdown Spacing
- Width: `w-56` (224px)
- Padding: Default from shadcn/ui
- Item padding: Default from shadcn/ui

### Badge Spacing
- Margin top: `mt-2` (8px)
- Padding: Default from shadcn/ui

## ✨ Animations

### Loading Spinner
```css
.animate-spin {
  animation: spin 1s linear infinite;
}
```

### Dropdown Open/Close
- Smooth fade in/out
- Slide down effect
- Duration: ~200ms

### Toast Notifications
- Slide in from top
- Auto-dismiss after 3-5 seconds
- Smooth fade out

## 🎭 Accessibility

### Keyboard Navigation
- **Tab**: Navigate between buttons
- **Enter/Space**: Activate button or dropdown item
- **Escape**: Close dropdown
- **Arrow Keys**: Navigate dropdown items

### Screen Reader Support
- All buttons have proper labels
- Dropdown items have descriptive text
- Loading states announced
- Error messages announced

### Focus Management
- Clear focus indicators (ring)
- Proper tab order
- Focus trapped in dropdowns when open

## 🏆 Best Practices Implemented

1. **Consistent Design**: All UI elements follow the same design system
2. **Clear Feedback**: Every action has visual and textual feedback
3. **Progressive Enhancement**: Features degrade gracefully
4. **Mobile-First**: Works on all screen sizes
5. **Accessible**: Keyboard and screen reader friendly
6. **Fast Loading**: Optimized for performance
7. **Error Recovery**: Clear error messages and recovery paths

---

**Last Updated**: 2025-01-13
**Version**: 1.0.0
**Status**: ✅ Production Ready

