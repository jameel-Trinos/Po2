"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import type { Suggestion } from '../../lib/types/proofreader';

interface WordEditorProps {
  wordHtml: string;
  suggestions: Suggestion[];
  selectedSuggestionIndex: number | null;
  onContentChange: (html: string) => void;
  onApplySuggestion: (index: number) => void;
  isLoading?: boolean;
}

export default function WordEditor({
  wordHtml,
  suggestions,
  selectedSuggestionIndex,
  onContentChange,
  onApplySuggestion,
  isLoading = false,
}: WordEditorProps) {
  const [content, setContent] = useState<string>(wordHtml);
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setContent(wordHtml);
  }, [wordHtml]);

  useEffect(() => {
    // Highlight the selected suggestion
    if (selectedSuggestionIndex !== null && editorRef.current) {
      const s = suggestions[selectedSuggestionIndex];
      if (s && s.original) {
        highlightText(s.original);
      }
    }
  }, [selectedSuggestionIndex, suggestions]);

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    const newContent = (e.target as HTMLDivElement).innerHTML;
    setContent(newContent);
    onContentChange(newContent);
  };

  const highlightText = (text: string) => {
    if (!editorRef.current) return;
    
    // Remove previous highlights
    const previousHighlights = editorRef.current.querySelectorAll('.suggestion-highlight');
    previousHighlights.forEach(el => {
      const parent = el.parentNode;
      if (parent) {
        parent.replaceChild(document.createTextNode(el.textContent || ''), el);
        parent.normalize();
      }
    });

    // Find and highlight the text
    const walker = document.createTreeWalker(
      editorRef.current,
      NodeFilter.SHOW_TEXT,
      null
    );

    const textNodes: Text[] = [];
    let node;
    while ((node = walker.nextNode())) {
      textNodes.push(node as Text);
    }

    const searchText = text.toLowerCase();
    let fullText = '';
    const nodeMap: { start: number; end: number; node: Text }[] = [];

    textNodes.forEach((textNode) => {
      const start = fullText.length;
      const content = textNode.textContent || '';
      fullText += content;
      const end = fullText.length;
      nodeMap.push({ start, end, node: textNode });
    });

    const index = fullText.toLowerCase().indexOf(searchText);
    if (index !== -1) {
      const matchStart = index;
      const matchEnd = index + searchText.length;

      nodeMap.forEach(({ start, end, node }) => {
        if (start >= matchEnd || end <= matchStart) return;

        const nodeText = node.textContent || '';
        const highlightStart = Math.max(0, matchStart - start);
        const highlightEnd = Math.min(nodeText.length, matchEnd - start);

        if (highlightStart < highlightEnd) {
          const before = nodeText.substring(0, highlightStart);
          const highlighted = nodeText.substring(highlightStart, highlightEnd);
          const after = nodeText.substring(highlightEnd);

          const fragment = document.createDocumentFragment();
          if (before) fragment.appendChild(document.createTextNode(before));
          
          const mark = document.createElement('mark');
          mark.className = 'suggestion-highlight bg-yellow-200 dark:bg-yellow-300/40 px-1 rounded';
          mark.textContent = highlighted;
          fragment.appendChild(mark);
          
          if (after) fragment.appendChild(document.createTextNode(after));

          node.parentNode?.replaceChild(fragment, node);
        }
      });

      // Scroll to highlighted text
      setTimeout(() => {
        const highlight = editorRef.current?.querySelector('.suggestion-highlight');
        if (highlight) {
          highlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  };

  return (
    <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
      <CardContent className="p-0">
        {isLoading ? (
          <div className="flex items-center justify-center h-[75vh]">
            <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
            <span className="ml-2 text-zinc-600 dark:text-zinc-400">Processing document...</span>
          </div>
        ) : (
          <div
            ref={editorRef}
            contentEditable
            suppressContentEditableWarning
            className="prose prose-zinc dark:prose-invert max-w-none min-h-[75vh] max-h-[75vh] overflow-y-auto p-6 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-md"
            dangerouslySetInnerHTML={{ __html: content }}
            onInput={handleInput}
          />
        )}
      </CardContent>
    </Card>
  );
}


