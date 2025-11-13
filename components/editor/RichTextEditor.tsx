"use client";

import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Highlight from '@tiptap/extension-highlight';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import { Card, CardContent } from '@/components/ui/card';
import FormattingToolbar from './FormattingToolbar';
import type { Suggestion } from '@/lib/types/proofreader';

interface RichTextEditorProps {
  content: string;
  onContentChange: (html: string) => void;
  suggestions?: Suggestion[];
  selectedSuggestionIndex?: number | null;
  className?: string;
}

export interface RichTextEditorHandle {
  highlightText: (text: string) => void;
  replaceText: (original: string, replacement: string) => void;
  getEditor: () => any;
}

const RichTextEditor = forwardRef<RichTextEditorHandle, RichTextEditorProps>(
  ({ content, onContentChange, suggestions = [], selectedSuggestionIndex = null, className }, ref) => {
    const editor = useEditor({
      extensions: [
        StarterKit.configure({
          heading: {
            levels: [1, 2, 3],
          },
        }),
        Underline,
        TextAlign.configure({
          types: ['heading', 'paragraph'],
        }),
        Highlight.configure({
          multicolor: true,
        }),
        TextStyle,
        Color,
      ],
      content,
      editorProps: {
        attributes: {
          class: 'prose prose-zinc dark:prose-invert max-w-none min-h-[70vh] p-6 focus:outline-none',
        },
      },
      onUpdate: ({ editor }) => {
        onContentChange(editor.getHTML());
      },
    });

    // Update content when it changes externally
    useEffect(() => {
      if (editor && content !== editor.getHTML()) {
        editor.commands.setContent(content);
      }
    }, [content, editor]);

    // Highlight selected suggestion
    useEffect(() => {
      if (editor && selectedSuggestionIndex !== null && suggestions[selectedSuggestionIndex]) {
        const suggestion = suggestions[selectedSuggestionIndex];
        highlightText(suggestion.original);
      }
    }, [selectedSuggestionIndex, suggestions, editor]);

    const highlightText = (text: string) => {
      if (!editor) return;

      // Remove previous highlights by searching for marks
      const { state } = editor;
      const { tr } = state;
      let modified = false;

      state.doc.descendants((node, pos) => {
        if (node.isText && node.marks.some(mark => mark.type.name === 'highlight' && mark.attrs.color === '#fef08a')) {
          tr.removeMark(pos, pos + node.nodeSize, editor.schema.marks.highlight);
          modified = true;
        }
      });

      if (modified) {
        editor.view.dispatch(tr);
      }

      // Find and highlight the text
      const searchText = text.toLowerCase();
      let found = false;

      state.doc.descendants((node, pos) => {
        if (found || !node.isText) return;

        const nodeText = node.text || '';
        const lowerText = nodeText.toLowerCase();
        const index = lowerText.indexOf(searchText);

        if (index !== -1) {
          const from = pos + index;
          const to = from + text.length;

          // Apply highlight
          editor.chain()
            .focus()
            .setTextSelection({ from, to })
            .setHighlight({ color: '#fef08a' })
            .run();

          // Scroll to the highlighted text
          setTimeout(() => {
            const { node: domNode } = editor.view.domAtPos(from);
            if (domNode) {
              (domNode as HTMLElement).scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              });
            }
          }, 100);

          found = true;
        }
      });
    };

    const replaceText = (original: string, replacement: string) => {
      if (!editor) return;

      const { state } = editor;
      const searchText = original.toLowerCase();
      let found = false;

      state.doc.descendants((node, pos) => {
        if (found || !node.isText) return;

        const nodeText = node.text || '';
        const lowerText = nodeText.toLowerCase();
        const index = lowerText.indexOf(searchText);

        if (index !== -1) {
          const from = pos + index;
          const to = from + original.length;

          editor.chain()
            .focus()
            .setTextSelection({ from, to })
            .insertContent(replacement)
            .run();

          found = true;
        }
      });
    };

    // Expose methods to parent via ref
    useImperativeHandle(ref, () => ({
      highlightText,
      replaceText,
      getEditor: () => editor,
    }));

    return (
      <Card className={`border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 ${className || ''}`}>
        <FormattingToolbar editor={editor} />
        <CardContent className="p-0">
          <EditorContent 
            editor={editor} 
            className="min-h-[70vh] max-h-[70vh] overflow-y-auto bg-white dark:bg-zinc-900"
          />
        </CardContent>
      </Card>
    );
  }
);

RichTextEditor.displayName = 'RichTextEditor';

export default RichTextEditor;


