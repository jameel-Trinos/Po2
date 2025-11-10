import React, { useState, useRef, useEffect, useCallback } from 'react';
import type { Suggestion } from '../../lib/types/proofreader';
import EditableHighlight from './EditableHighlight';

interface PdfViewerProps {
  extractedText: string;
  suggestions: Suggestion[];
  selectedSuggestion: Suggestion | null;
  onSuggestionClick: (suggestion: Suggestion | null) => void;
  onApplyEdit: (pageNumber: number, originalText: string, newText: string) => void;
  pdfUrl?: string | null;
}

const PdfViewer: React.FC<PdfViewerProps> = ({
  extractedText,
  suggestions,
  selectedSuggestion,
  onSuggestionClick,
  onApplyEdit,
  pdfUrl,
}) => {
  const viewerRef = useRef<HTMLDivElement>(null);
  const [activeHighlightBox, setActiveHighlightBox] = useState<{ left: number; top: number; width: number; height: number } | null>(null);

  const getBoundingBox = useCallback((text: string, original: string, pageContent: string) => {
    const pageOffset = pageContent.indexOf(text);
    if (pageOffset === -1) return null;

    const lines = pageContent.substring(0, pageOffset).split('\n');
    const lineNumber = lines.length - 1;
    const charOffsetInLine = lines[lines.length - 1].length;

    // Simplified bounding box calculation for plain text. This would be much more complex with a real PDF viewer.
    // For now, we'll just approximate a box around the first occurrence of the original text.
    const dummyElement = document.createElement('span');
    dummyElement.style.position = 'absolute';
    dummyElement.style.visibility = 'hidden';
    dummyElement.textContent = original;
    viewerRef.current?.appendChild(dummyElement);
    const rect = dummyElement.getBoundingClientRect();
    viewerRef.current?.removeChild(dummyElement);

    // These values are highly dependent on the rendering of <pre> and would need fine-tuning
    // or a more sophisticated text measurement. For a true PDF viewer, this would come from the PDF library.
    const lineHeight = 20; // Approximation
    const charWidth = 9;   // Approximation

    const startCharIndex = text.indexOf(original);
    if (startCharIndex === -1) return null;

    // Calculate approximate position based on character and line numbers
    // This is a very rough estimation for a plain <pre> tag
    const containerRect = viewerRef.current?.getBoundingClientRect();
    if (!containerRect) return null;

    const relativeLeft = charOffsetInLine * charWidth;
    const relativeTop = lineNumber * lineHeight;

    return {
      left: containerRect.left + relativeLeft,
      top: containerRect.top + relativeTop,
      width: original.length * charWidth,
      height: lineHeight,
    };
  }, []);

  useEffect(() => {
    if (selectedSuggestion && viewerRef.current) {
      const pages = extractedText.split(/--- PAGE \d+ ---\n/).filter(Boolean);
      const targetPageContent = pages[selectedSuggestion.page - 1];

      if (targetPageContent) {
        const box = getBoundingBox(targetPageContent, selectedSuggestion.original, targetPageContent);
        if (box) {
          setActiveHighlightBox(box);
          // Scroll to the highlight
          window.scrollTo({
            top: box.top + window.scrollY - 100, // Offset for better visibility
            behavior: 'smooth',
          });
        }
      }
    } else {
      setActiveHighlightBox(null);
    }
  }, [selectedSuggestion, extractedText, getBoundingBox]);

  const handleApply = (pageNumber: number, originalText: string, newText: string) => {
    onApplyEdit(pageNumber, originalText, newText);
    onSuggestionClick(null); // Close highlight after applying
  };

  const handleCancel = () => {
    onSuggestionClick(null); // Close highlight
  };

  return (
    <div ref={viewerRef} className="relative p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg shadow-inner min-h-[500px]">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Document Content</h2>
      {pdfUrl ? (
        <div className="rounded-md overflow-hidden border border-zinc-200 dark:border-zinc-700">
          <iframe
            src={pdfUrl}
            className="w-full h-[75vh] bg-white dark:bg-zinc-900"
            title="Original PDF"
          />
        </div>
      ) : null}
      <pre className="whitespace-pre-wrap font-mono text-gray-700 dark:text-gray-300 text-sm">
        {extractedText.split(/--- PAGE \d+ ---\n/).map((pageContent, index) => {
          if (index === 0 && !pageContent.includes('---')) return null;
          const [pageNumberStr, ...rest] = pageContent.split(' ---\n');
          const currentPageContent = rest.join(' ---\n');
          const pageNum = parseInt(pageNumberStr);

          // Highlight original text if it's the selected suggestion's page
          const highlightedContent = selectedSuggestion && selectedSuggestion.page === pageNum
            ? currentPageContent.split(selectedSuggestion.original).map((part, i) => (
                <React.Fragment key={i}>
                  {part}
                  {i < currentPageContent.split(selectedSuggestion.original).length - 1 && (
                    <span className="bg-yellow-300 dark:bg-yellow-700 bg-opacity-50 rounded px-0.5 cursor-pointer"
                          onClick={() => onSuggestionClick(selectedSuggestion)}>
                      {selectedSuggestion.original}
                    </span>
                  )}
                </React.Fragment>
              ))
            : currentPageContent;

          return (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">Page {pageNumberStr}</h3>
              <p>{highlightedContent}</p>
            </div>
          );
        })}
      </pre>

      {selectedSuggestion && activeHighlightBox && (
        <EditableHighlight
          suggestion={selectedSuggestion}
          box={activeHighlightBox}
          onApplyEdit={handleApply}
          onCancelEdit={handleCancel}
        />
      )}
    </div>
  );
};

export default PdfViewer;
