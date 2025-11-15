"use client";

import React, { useEffect, useRef, useImperativeHandle, forwardRef, useState } from 'react';
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
    // Force dark mode always - never change based on system theme
    const isDarkMode = true;

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
      <div className="force-dark-mode">
        <Card className={`border-zinc-700 bg-gradient-to-b from-zinc-900 to-zinc-950 shadow-xl ${className || ''}`}>
          <CardContent className="p-0">
            <Editor
              key="dark"
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
                  color: #f1f5f9;
                  background-color: #18181b;
                  max-width: 1100px;
                  margin: 0 auto;
                }
                h1, h2, h3, h4, h5, h6 {
                  margin-top: 1.5em;
                  margin-bottom: 0.5em;
                  font-weight: 600;
                  line-height: 1.3;
                  color: #f8fafc;
                }
                p {
                  margin-bottom: 1em;
                  color: #f1f5f9;
                  line-height: 1.6;
                }
                a {
                  color: #818cf8;
                  text-decoration: none;
                  border-bottom: 1px solid rgba(129, 140, 248, 0.3);
                  transition: border-color 0.2s ease;
                }
                a:hover {
                  border-bottom-color: #818cf8;
                }
                /* Table styling for better formatting */
                table {
                  border-collapse: collapse;
                  width: 100%;
                  margin: 1.5rem 0;
                  border: 1px solid #3f3f46;
                  background-color: #27272a;
                  overflow: hidden;
                  border-radius: 8px;
                }
                th {
                  background-color: #3f3f46;
                  color: #f8fafc;
                  font-weight: 600;
                  padding: 12px 16px;
                  text-align: left;
                  border: 1px solid #52525b;
                }
                td {
                  padding: 10px 16px;
                  border: 1px solid #3f3f46;
                  color: #e4e4e7;
                  vertical-align: top;
                }
                tr:nth-child(even) {
                  background-color: #2d2d31;
                }
                tr:hover {
                  background-color: #35353a;
                }
                /* Image styling for proper display */
                img {
                  max-width: 100%;
                  height: auto;
                  display: block;
                  margin: 1.5rem auto;
                  border-radius: 8px;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
                }
                /* List styling */
                ul, ol {
                  margin: 1rem 0;
                  padding-left: 2rem;
                  color: #f1f5f9;
                }
                li {
                  margin: 0.5rem 0;
                  line-height: 1.6;
                }
                /* Code blocks */
                pre, code {
                  background-color: #27272a;
                  border: 1px solid #3f3f46;
                  border-radius: 6px;
                  padding: 0.2em 0.4em;
                  font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
                  font-size: 0.9em;
                  color: #a5f3fc;
                }
                pre {
                  padding: 1em;
                  overflow-x: auto;
                  margin: 1rem 0;
                }
                /* Blockquote styling */
                blockquote {
                  border-left: 4px solid #818cf8;
                  padding-left: 1rem;
                  margin: 1rem 0;
                  color: #d1d5db;
                  font-style: italic;
                  background-color: rgba(129, 140, 248, 0.05);
                  padding: 1rem;
                  border-radius: 4px;
                }
              `,
              skin: 'oxide-dark',
              content_css: 'dark',
              branding: false,
              promotion: false,
              // Hide promotion elements via CSS and ensure proper theming
              init_instance_callback: (editor) => {
                const style = document.createElement('style');
                style.textContent = `
                  .tox-promotion,
                  .tox-promotion-button,
                  .tox-statusbar__branding {
                    display: none !important;
                  }
                  /* Force dark mode always - beautiful enhanced styling */
                  .force-dark-mode .tox .tox-menubar,
                  .force-dark-mode .tox .tox-toolbar,
                  .force-dark-mode .tox .tox-toolbar__primary {
                    background: linear-gradient(135deg, #1e1e24 0%, #27272a 100%) !important;
                    border-bottom: 1px solid rgba(124, 58, 237, 0.2) !important;
                  }
                  .force-dark-mode .tox .tox-toolbar__group,
                  .force-dark-mode .tox .tox-split-button,
                  .force-dark-mode .tox .tox-tbtn {
                    color: #e4e4e7 !important;
                  }
                  .force-dark-mode .tox .tox-tbtn__select-label,
                  .force-dark-mode .tox .tox-tbtn--select {
                    color: #e4e4e7 !important;
                    font-weight: 500 !important;
                  }
                  /* Enhanced menubar styling */
                  .force-dark-mode .tox .tox-mbtn {
                    color: #f4f4f5 !important;
                    font-weight: 500 !important;
                    padding: 8px 14px !important;
                    border-radius: 6px !important;
                    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
                  }
                  .force-dark-mode .tox .tox-mbtn:hover {
                    background: rgba(124, 58, 237, 0.15) !important;
                    transform: translateY(-1px) !important;
                  }
                  /* Enhanced toolbar button styling */
                  .force-dark-mode .tox .tox-tbtn {
                    border-radius: 6px !important;
                    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
                  }
                  .force-dark-mode .tox .tox-tbtn:hover {
                    background: rgba(124, 58, 237, 0.15) !important;
                    transform: scale(1.05) !important;
                  }
                  .force-dark-mode .tox .tox-tbtn--enabled {
                    background: rgba(124, 58, 237, 0.2) !important;
                  }
                  .force-dark-mode .tox .tox-tbtn svg {
                    fill: #d4d4d8 !important;
                  }
                  .force-dark-mode .tox .tox-tbtn:hover svg,
                  .force-dark-mode .tox .tox-tbtn--enabled svg {
                    fill: #c4b5fd !important;
                  }
                  /* Group separators */
                  .force-dark-mode .tox .tox-toolbar__group {
                    border-right: 1px solid rgba(124, 58, 237, 0.2) !important;
                  }
                  /* Editor container */
                  .force-dark-mode .tox-tinymce {
                    border: 1px solid rgba(124, 58, 237, 0.3) !important;
                    border-radius: 12px !important;
                    overflow: hidden !important;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(124, 58, 237, 0.1) !important;
                  }
                  /* Dropdowns and panels */
                  .force-dark-mode .tox .tox-collection,
                  .force-dark-mode .tox .tox-menu,
                  .force-dark-mode .tox .tox-dialog {
                    background: #27272a !important;
                    border: 1px solid rgba(124, 58, 237, 0.3) !important;
                  }
                `;
                document.head.appendChild(style);
              },
              resize: true,
              statusbar: false,
              paste_as_text: false,
              paste_auto_cleanup_on_paste: true,
              paste_retain_style_properties: 'all',
              paste_merge_formats: true,
              convert_urls: false,
              font_size_formats: '8pt 10pt 12pt 14pt 16pt 18pt 24pt 28pt 36pt 48pt',
              font_family_formats: 'System Font=-apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, sans-serif; Arial=arial,helvetica,sans-serif; Times New Roman=times new roman,times,serif; Courier New=courier new,courier,monospace; Georgia=georgia,palatino,serif; Verdana=verdana,geneva,sans-serif',
              // Table plugin settings for better table handling
              table_use_colgroups: true,
              table_resize_bars: true,
              table_default_attributes: {
                border: '1'
              },
              table_default_styles: {
                'border-collapse': 'collapse',
                'width': '100%',
                'border': '1px solid #3f3f46',
                'background-color': '#27272a'
              },
              table_cell_default_styles: {
                'padding': '10px 16px',
                'border': '1px solid #3f3f46',
                'vertical-align': 'top'
              },
              table_header_default_styles: {
                'background-color': '#3f3f46',
                'font-weight': '600',
                'padding': '12px 16px'
              },
              // Image settings for better image handling
              image_advtab: true,
              image_dimensions: true,
              image_class_list: [
                {title: 'Responsive', value: 'img-responsive'},
                {title: 'Full Width', value: 'img-full-width'},
                {title: 'Center', value: 'img-center'}
              ],
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
      </div>
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

