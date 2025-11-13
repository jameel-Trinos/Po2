"use client";

import React from 'react';
import type { Editor } from '@tiptap/react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Undo,
  Redo,
  Highlighter,
} from 'lucide-react';

interface FormattingToolbarProps {
  editor: Editor | null;
}

export default function FormattingToolbar({ editor }: FormattingToolbarProps) {
  if (!editor) {
    return null;
  }

  return (
    <div className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-2 flex flex-wrap gap-1">
      {/* Undo/Redo */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().undo()}
        className="h-8 w-8 p-0"
        title="Undo"
      >
        <Undo className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().redo()}
        className="h-8 w-8 p-0"
        title="Redo"
      >
        <Redo className="h-4 w-4" />
      </Button>

      <Separator orientation="vertical" className="h-8 mx-1" />

      {/* Text Formatting */}
      <Button
        variant={editor.isActive('bold') ? 'secondary' : 'ghost'}
        size="sm"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className="h-8 w-8 p-0"
        title="Bold"
      >
        <Bold className="h-4 w-4" />
      </Button>
      <Button
        variant={editor.isActive('italic') ? 'secondary' : 'ghost'}
        size="sm"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className="h-8 w-8 p-0"
        title="Italic"
      >
        <Italic className="h-4 w-4" />
      </Button>
      <Button
        variant={editor.isActive('underline') ? 'secondary' : 'ghost'}
        size="sm"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className="h-8 w-8 p-0"
        title="Underline"
      >
        <Underline className="h-4 w-4" />
      </Button>
      <Button
        variant={editor.isActive('highlight') ? 'secondary' : 'ghost'}
        size="sm"
        onClick={() => editor.chain().focus().toggleHighlight({ color: '#fef08a' }).run()}
        className="h-8 w-8 p-0"
        title="Highlight"
      >
        <Highlighter className="h-4 w-4" />
      </Button>

      <Separator orientation="vertical" className="h-8 mx-1" />

      {/* Lists */}
      <Button
        variant={editor.isActive('bulletList') ? 'secondary' : 'ghost'}
        size="sm"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className="h-8 w-8 p-0"
        title="Bullet List"
      >
        <List className="h-4 w-4" />
      </Button>
      <Button
        variant={editor.isActive('orderedList') ? 'secondary' : 'ghost'}
        size="sm"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className="h-8 w-8 p-0"
        title="Numbered List"
      >
        <ListOrdered className="h-4 w-4" />
      </Button>

      <Separator orientation="vertical" className="h-8 mx-1" />

      {/* Text Alignment */}
      <Button
        variant={editor.isActive({ textAlign: 'left' }) ? 'secondary' : 'ghost'}
        size="sm"
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        className="h-8 w-8 p-0"
        title="Align Left"
      >
        <AlignLeft className="h-4 w-4" />
      </Button>
      <Button
        variant={editor.isActive({ textAlign: 'center' }) ? 'secondary' : 'ghost'}
        size="sm"
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        className="h-8 w-8 p-0"
        title="Align Center"
      >
        <AlignCenter className="h-4 w-4" />
      </Button>
      <Button
        variant={editor.isActive({ textAlign: 'right' }) ? 'secondary' : 'ghost'}
        size="sm"
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        className="h-8 w-8 p-0"
        title="Align Right"
      >
        <AlignRight className="h-4 w-4" />
      </Button>
      <Button
        variant={editor.isActive({ textAlign: 'justify' }) ? 'secondary' : 'ghost'}
        size="sm"
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
        className="h-8 w-8 p-0"
        title="Justify"
      >
        <AlignJustify className="h-4 w-4" />
      </Button>
    </div>
  );
}


