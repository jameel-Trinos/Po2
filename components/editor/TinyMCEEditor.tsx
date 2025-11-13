"use client";

import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import type { Editor as TinyMCEEditorType } from 'tinymce';
import { Card, CardContent } from '@/components/ui/card';
import type { Suggestion } from '@/lib/types/proofreader';

interface TinyMCEEditorProps {
  content: string;
  onContentChange: (html: string) => void;
  suggestions?: Suggestion[];
  selectedSuggestionIndex?: number | null;
  className?: string;
}

export interface TinyMCEEditorHandle {
  highlightText: (text: string) => void;
  replaceText: (original: string, replacement: string) => void;
  getEditor: () => TinyMCEEditorType | null;
  getContent: () => string;
}

const TinyMCEEditor = forwardRef<TinyMCEEditorHandle, TinyMCEEditorProps>(
  ({ content, onContentChange, suggestions = [], selectedSuggestionIndex = null, className }, ref) => {
    const editorRef = useRef<TinyMCEEditorType | null>(null);

    // Expose methods to parent via ref
    useImperativeHandle(ref, () => ({
      highlightText: (text: string) => {
        if (!editorRef.current) return;
        highlightTextInEditor(editorRef.current, text);
      },
      replaceText: (original: string, replacement: string) => {
        if (!editorRef.current) return;
        replaceTextInEditor(editorRef.current, original, replacement);
      },
      getEditor: () => editorRef.current,
      getContent: () => editorRef.current?.getContent() || '',
    }));

    // Update content when it changes externally
    useEffect(() => {
      if (editorRef.current && content !== editorRef.current.getContent()) {
        editorRef.current.setContent(content);
      }
    }, [content]);

    // Highlight selected suggestion
    useEffect(() => {
      if (editorRef.current && selectedSuggestionIndex !== null && suggestions[selectedSuggestionIndex]) {
        const suggestion = suggestions[selectedSuggestionIndex];
        const textToHighlight = suggestion.text || suggestion.original || '';
        if (textToHighlight) {
          highlightTextInEditor(editorRef.current, textToHighlight);
        }
      }
    }, [selectedSuggestionIndex, suggestions]);

    const handleEditorChange = (content: string) => {
      onContentChange(content);
    };

    const handleEditorInit = (_evt: any, editor: TinyMCEEditorType) => {
      editorRef.current = editor;
    };

    return (
      <Card className={`border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 ${className || ''}`}>
        <CardContent className="p-0">
          <Editor
            apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY || 'no-api-key'}
            onInit={handleEditorInit}
            value={content}
            onEditorChange={handleEditorChange}
            init={{
              height: '70vh',
              menubar: 'file edit view insert format tools table help',
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount',
                'nonbreaking', 'pagebreak', 'save', 'directionality', 'emoticons',
                'codesample'
              ],
              toolbar: [
                'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | forecolor backcolor | superscript subscript',
                'alignleft aligncenter alignright alignjustify | outdent indent | bullist numlist | link image media table | charmap emoticons pagebreak',
                'searchreplace visualblocks code codesample | insertdatetime nonbreaking anchor | fullscreen preview | removeformat help'
              ],
              toolbar_mode: 'sliding',
              toolbar_sticky: true,
              toolbar_sticky_offset: 0,
              content_style: `
                body { 
                  font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif; 
                  font-size: 16px; 
                  padding: 30px; 
                  line-height: 1.7;
                  color: #1e293b;
                  max-width: 900px;
                  margin: 0 auto;
                }
                h1, h2, h3, h4, h5, h6 {
                  margin-top: 1.5em;
                  margin-bottom: 0.5em;
                  font-weight: 600;
                  line-height: 1.3;
                  color: #0f172a;
                }
                p {
                  margin-bottom: 1em;
                }
                a {
                  color: #667eea;
                  text-decoration: none;
                  border-bottom: 1px solid rgba(102, 126, 234, 0.3);
                  transition: border-color 0.2s ease;
                }
                a:hover {
                  border-bottom-color: #667eea;
                }
              `,
              skin: typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'oxide-dark' : 'oxide',
              content_css: typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default',
              branding: false,
              promotion: false,
              // Hide promotion elements via CSS
              init_instance_callback: (editor) => {
                const style = document.createElement('style');
                style.textContent = `
                  .tox-promotion,
                  .tox-promotion-button,
                  .tox-statusbar__branding {
                    display: none !important;
                  }
                `;
                document.head.appendChild(style);
              },
              resize: true,
              statusbar: false,
              paste_as_text: false,
              paste_auto_cleanup_on_paste: true,
              convert_urls: false,
              font_size_formats: '8pt 10pt 12pt 14pt 16pt 18pt 24pt 28pt 36pt 48pt',
              font_family_formats: 'System Font=-apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, sans-serif; Arial=arial,helvetica,sans-serif; Times New Roman=times new roman,times,serif; Courier New=courier new,courier,monospace; Georgia=georgia,palatino,serif; Verdana=verdana,geneva,sans-serif',
              setup: (editor) => {
                // Add custom command to highlight text
                editor.addCommand('highlightText', (ui, value) => {
                  if (value) {
                    highlightTextInEditor(editor, value);
                  }
                });

                // Add custom command to replace text
                editor.addCommand('replaceText', (ui, value) => {
                  if (value?.original && value?.replacement) {
                    replaceTextInEditor(editor, value.original, value.replacement);
                  }
                });
              },
            }}
          />
        </CardContent>
      </Card>
    );
  }
);

TinyMCEEditor.displayName = 'TinyMCEEditor';

/**
 * Highlight text in TinyMCE editor (yellow highlight)
 */
function highlightTextInEditor(editor: TinyMCEEditorType, text: string): void {
  if (!text || !text.trim()) return;

  try {
    // Remove previous highlights
    const body = editor.getBody();
    const existingHighlights = body.querySelectorAll('mark.suggestion-highlight');
    existingHighlights.forEach((el) => {
      const parent = el.parentNode;
      if (parent) {
        while (el.firstChild) {
          parent.insertBefore(el.firstChild, el);
        }
        parent.removeChild(el);
        parent.normalize();
      }
    });

    // Get plain text content for searching
    const plainText = editor.getContent({ format: 'text' });
    const searchText = text.trim().toLowerCase();
    const lowerText = plainText.toLowerCase();
    const index = lowerText.indexOf(searchText);

    if (index === -1) {
      console.warn('Text not found in editor:', text);
      return;
    }

    // Use TinyMCE's searchreplace plugin or manual DOM manipulation
    const htmlContent = editor.getContent();
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;

  // Find text nodes that contain the search text
    const walker = document.createTreeWalker(
      tempDiv,
      NodeFilter.SHOW_TEXT,
      null
    );

    let currentNode: Node | null = null;
    let cumulativeLength = 0;
    let found = false;

    while ((currentNode = walker.nextNode()) && !found) {
      const textNode = currentNode as Text;
      const nodeText = textNode.textContent || '';
      const nodeLowerText = nodeText.toLowerCase();
      const nodeStart = cumulativeLength;
      const nodeEnd = cumulativeLength + nodeText.length;

      cumulativeLength = nodeEnd;

      // Check if this node contains the search text
      const searchIndex = nodeLowerText.indexOf(searchText);
      if (searchIndex !== -1) {
        // Found the text in this node
        const beforeText = nodeText.substring(0, searchIndex);
        const matchText = nodeText.substring(searchIndex, searchIndex + searchText.length);
        const afterText = nodeText.substring(searchIndex + searchText.length);

        // Create fragment with highlighted text
        const fragment = document.createDocumentFragment();
        if (beforeText) {
          fragment.appendChild(document.createTextNode(beforeText));
        }

        const mark = document.createElement('mark');
        mark.className = 'suggestion-highlight';
        mark.setAttribute('style', 'background-color: #fef08a; color: #000; padding: 2px 4px; border-radius: 3px;');
        mark.textContent = matchText;
        fragment.appendChild(mark);

        if (afterText) {
          fragment.appendChild(document.createTextNode(afterText));
        }

        // Replace the text node with the fragment
        textNode.parentNode?.replaceChild(fragment, textNode);
        found = true;
      }
    }

    if (found) {
      // Update editor with highlighted content
      editor.setContent(tempDiv.innerHTML);

      // Scroll to highlighted text
      setTimeout(() => {
        const highlight = editor.getBody().querySelector('mark.suggestion-highlight');
        if (highlight) {
          editor.selection.select(highlight as any);
          editor.selection.scrollIntoView();
          // Also try to scroll the editor window
          highlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  } catch (error) {
    console.error('Error highlighting text in TinyMCE:', error);
  }
}

/**
 * Replace text in TinyMCE editor
 */
function replaceTextInEditor(editor: TinyMCEEditorType, original: string, replacement: string): void {
  if (!original || !original.trim()) return;

  try {
    // Remove any existing highlights first
    const body = editor.getBody();
    const existingHighlights = body.querySelectorAll('mark.suggestion-highlight');
    existingHighlights.forEach((el) => {
      const parent = el.parentNode;
      if (parent) {
        while (el.firstChild) {
          parent.insertBefore(el.firstChild, el);
        }
        parent.removeChild(el);
        parent.normalize();
      }
    });

    // Get current content
    const htmlContent = editor.getContent();
    const plainText = editor.getContent({ format: 'text' });
    const searchText = original.trim().toLowerCase();
    const lowerText = plainText.toLowerCase();
    const index = lowerText.indexOf(searchText);

    if (index === -1) {
      console.warn('Text not found in editor for replacement:', original);
      return;
    }

    // Create temporary DOM for manipulation
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;

    // Find and replace text
    const walker = document.createTreeWalker(
      tempDiv,
      NodeFilter.SHOW_TEXT,
      null
    );

    let currentNode: Node | null = null;
    let cumulativeLength = 0;
    let replaced = false;

    while ((currentNode = walker.nextNode()) && !replaced) {
      const textNode = currentNode as Text;
      const nodeText = textNode.textContent || '';
      const nodeLowerText = nodeText.toLowerCase();
      const nodeStart = cumulativeLength;
      const nodeEnd = cumulativeLength + nodeText.length;

      cumulativeLength = nodeEnd;

      // Check if this node contains the search text
      const searchIndex = nodeLowerText.indexOf(searchText);
      if (searchIndex !== -1) {
        // Found the text in this node - replace it
        const beforeText = nodeText.substring(0, searchIndex);
        const afterText = nodeText.substring(searchIndex + searchText.length);

        // Create fragment with replacement text
        const fragment = document.createDocumentFragment();
        if (beforeText) {
          fragment.appendChild(document.createTextNode(beforeText));
        }
        fragment.appendChild(document.createTextNode(replacement));
        if (afterText) {
          fragment.appendChild(document.createTextNode(afterText));
        }

        // Replace the text node with the fragment
        textNode.parentNode?.replaceChild(fragment, textNode);
        replaced = true;
      }
    }

    if (replaced) {
      // Update editor with replaced content
      editor.setContent(tempDiv.innerHTML);
    }
  } catch (error) {
    console.error('Error replacing text in TinyMCE:', error);
  }
}

export default TinyMCEEditor;

