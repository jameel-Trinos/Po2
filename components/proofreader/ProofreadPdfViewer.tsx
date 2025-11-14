"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import type { Suggestion } from '../../lib/types/proofreader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from 'lucide-react';

// Helper function to load pdfjs dynamically
async function loadPdfJs() {
  const pdfjs = await import('pdfjs-dist');
  if (typeof window !== 'undefined' && !pdfjs.GlobalWorkerOptions.workerSrc) {
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
  }
  return pdfjs;
}

interface ProofreadPdfViewerProps {
  pdfUrl: string;
  suggestions: Suggestion[];
  selectedSuggestion: Suggestion | null;
  onSuggestionClick: (suggestion: Suggestion | null) => void;
  onApplyEdit: (pageNumber: number, originalText: string, newText: string) => void;
}

const ProofreadPdfViewer: React.FC<ProofreadPdfViewerProps> = ({
  pdfUrl,
  suggestions,
  selectedSuggestion,
  onSuggestionClick,
  onApplyEdit,
}) => {
  const [pdfDoc, setPdfDoc] = useState<any | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [zoom, setZoom] = useState(1.2);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [renderedPages, setRenderedPages] = useState<Set<number>>(new Set());
  const [textLayerLoaded, setTextLayerLoaded] = useState<Set<number>>(new Set());
  
  const canvasRefs = useRef<Map<number, HTMLCanvasElement>>(new Map());
  const textLayerRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const renderTasksRef = useRef<Map<number, any>>(new Map());
  const textLayerTasksRef = useRef<Map<number, AbortController>>(new Map());
  const renderingInProgressRef = useRef<Map<number, boolean>>(new Map());
  const containerRef = useRef<HTMLDivElement>(null);
  const pageRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  // Load PDF document
  useEffect(() => {
    const loadPdf = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // Dynamically load pdfjs
        const pdfjs = await loadPdfJs();
        const loadingTask = pdfjs.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        setPdfDoc(pdf);
        setTotalPages(pdf.numPages);
        setIsLoading(false);
        console.log(`[ProofreadPdfViewer] PDF loaded with ${pdf.numPages} pages`);
      } catch (err) {
        console.error('[ProofreadPdfViewer] Error loading PDF:', err);
        setError('Failed to load PDF document');
        setIsLoading(false);
      }
    };

    if (pdfUrl) {
      loadPdf();
    }

    return () => {
      // Cleanup render tasks
      renderTasksRef.current.forEach((task) => {
        try {
          task.cancel();
        } catch (e) {
          // Ignore
        }
      });
      renderTasksRef.current.clear();
      
      // Cleanup text layer tasks
      textLayerTasksRef.current.forEach((controller) => {
        try {
          controller.abort();
        } catch (e) {
          // Ignore
        }
      });
      textLayerTasksRef.current.clear();
      
      renderingInProgressRef.current.clear();
    };
  }, [pdfUrl]);

  // Cleanup render tasks when zoom changes
  useEffect(() => {
    const cancelAllTasks = async () => {
      const cancelPromises: Promise<void>[] = [];
      renderTasksRef.current.forEach((task) => {
        cancelPromises.push(
          (async () => {
            try {
              await task.cancel();
            } catch (e) {
              // Ignore errors during cancellation
            }
          })()
        );
      });
      await Promise.all(cancelPromises);
      renderTasksRef.current.clear();
      
      // Cancel text layer tasks
      textLayerTasksRef.current.forEach((controller) => {
        try {
          controller.abort();
        } catch (e) {
          // Ignore errors during cancellation
        }
      });
      textLayerTasksRef.current.clear();
      
      renderingInProgressRef.current.clear();
      setRenderedPages(new Set());
      setTextLayerLoaded(new Set());
    };
    
    cancelAllTasks();
  }, [zoom]);

  // Render a page
  const renderPage = useCallback(async (pageNum: number) => {
    if (!pdfDoc) return;

    // Check if already rendering this page
    if (renderingInProgressRef.current.get(pageNum)) {
      console.log(`[ProofreadPdfViewer] Page ${pageNum} is already rendering, skipping`);
      return;
    }

    const canvas = canvasRefs.current.get(pageNum);
    if (!canvas) {
      console.log(`[ProofreadPdfViewer] Canvas not ready for page ${pageNum}`);
      return;
    }

    // Mark as rendering in progress
    renderingInProgressRef.current.set(pageNum, true);

    // Cancel existing render task
    const existingTask = renderTasksRef.current.get(pageNum);
    if (existingTask) {
      try {
        console.log(`[ProofreadPdfViewer] Cancelling existing render for page ${pageNum}`);
        await existingTask.cancel();
        renderTasksRef.current.delete(pageNum);
        // Wait for cancellation to fully complete
        await new Promise(resolve => setTimeout(resolve, 100));
      } catch (e) {
        // Ignore
        console.log(`[ProofreadPdfViewer] Cancellation error for page ${pageNum}:`, e);
      }
    }

    try {
      const page: any = await pdfDoc.getPage(pageNum);
      
      // Double-check canvas is still available
      const currentCanvas = canvasRefs.current.get(pageNum);
      if (!currentCanvas) {
        renderingInProgressRef.current.set(pageNum, false);
        return;
      }
      
      const context = currentCanvas.getContext('2d');
      if (!context) {
        renderingInProgressRef.current.set(pageNum, false);
        return;
      }

      const viewport = page.getViewport({ scale: zoom });

      // Clear canvas
      context.clearRect(0, 0, currentCanvas.width, currentCanvas.height);
      currentCanvas.width = viewport.width;
      currentCanvas.height = viewport.height;

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };

      const renderTask = page.render(renderContext);
      renderTasksRef.current.set(pageNum, renderTask);

      await renderTask.promise;
      renderTasksRef.current.delete(pageNum);
      setRenderedPages(prev => new Set([...prev, pageNum]));

      // Render text layer for highlighting
      await renderTextLayer(page, pageNum, viewport);

      console.log(`[ProofreadPdfViewer] Rendered page ${pageNum}`);
    } catch (err: any) {
      renderTasksRef.current.delete(pageNum);
      if (err?.name !== 'RenderingCancelledException') {
        console.error(`[ProofreadPdfViewer] Error rendering page ${pageNum}:`, err);
      }
    } finally {
      // Always mark as no longer rendering
      renderingInProgressRef.current.set(pageNum, false);
    }
  }, [pdfDoc, zoom]);

  // Render text layer for text selection and highlighting
  const renderTextLayer = async (page: any, pageNum: number, viewport: any) => {
    const textLayerDiv = textLayerRefs.current.get(pageNum);
    if (!textLayerDiv) return;

    // Cancel any existing text layer task for this page
    const existingController = textLayerTasksRef.current.get(pageNum);
    if (existingController) {
      existingController.abort();
      textLayerTasksRef.current.delete(pageNum);
    }

    // Create new AbortController for this text layer task
    const abortController = new AbortController();
    textLayerTasksRef.current.set(pageNum, abortController);

    try {
      // Check if already aborted before starting async work
      if (abortController.signal.aborted) {
        textLayerTasksRef.current.delete(pageNum);
        return;
      }

      const textContent = await page.getTextContent();
      
      // Check again after async operation
      if (abortController.signal.aborted) {
        textLayerTasksRef.current.delete(pageNum);
        return;
      }
      
      // Dynamically load pdfjs for Util
      const pdfjs = await loadPdfJs();
      
      // Check again after loading pdfjs
      if (abortController.signal.aborted) {
        textLayerTasksRef.current.delete(pageNum);
        return;
      }
      
      // Clear existing text layer
      textLayerDiv.innerHTML = '';
      textLayerDiv.style.width = `${viewport.width}px`;
      textLayerDiv.style.height = `${viewport.height}px`;

      // Render text items
      textContent.items.forEach((item: any) => {
        // Check if aborted during iteration
        if (abortController.signal.aborted) {
          return;
        }

        const textDiv = document.createElement('div');
        const tx = pdfjs.Util.transform(
          pdfjs.Util.transform(viewport.transform, item.transform),
          [1, 0, 0, -1, 0, 0]
        );
        const style = textContent.styles[item.fontName];
        
        textDiv.style.position = 'absolute';
        textDiv.style.left = `${tx[4]}px`;
        textDiv.style.top = `${tx[5]}px`;
        textDiv.style.fontSize = `${Math.abs(tx[3])}px`;
        textDiv.style.fontFamily = style?.fontFamily || 'sans-serif';
        textDiv.textContent = item.str;
        textDiv.className = 'pdf-text-item';
        
        textLayerDiv.appendChild(textDiv);
      });

      // Only update state if not aborted
      if (!abortController.signal.aborted) {
        setTextLayerLoaded(prev => new Set([...prev, pageNum]));
      }
      
      // Clean up the controller
      textLayerTasksRef.current.delete(pageNum);
    } catch (err: any) {
      // Clean up the controller
      textLayerTasksRef.current.delete(pageNum);
      
      // Silently ignore AbortError and other expected cancellation errors
      if (err?.name === 'AbortError' || err?.name === 'AbortException') {
        // Task was cancelled, this is expected
        return;
      }
      
      // Only log unexpected errors
      if (err?.message && !err.message.includes('cancelled') && !err.message.includes('abort')) {
        console.error(`[ProofreadPdfViewer] Error rendering text layer for page ${pageNum}:`, err);
      }
    }
  };

  // Render visible pages
  useEffect(() => {
    if (!pdfDoc || totalPages === 0) return;

    // Render all pages sequentially to avoid canvas conflicts
    const renderAllPages = async () => {
      for (let i = 1; i <= totalPages; i++) {
        if (!renderingInProgressRef.current.get(i)) {
          await renderPage(i);
          // Small delay between renders to ensure clean separation
          await new Promise(resolve => setTimeout(resolve, 50));
        }
      }
    };

    // Use a small delay to ensure canvases are mounted and ready
    const timeoutId = setTimeout(() => {
      renderAllPages();
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pdfDoc, totalPages, zoom, renderPage]);

  // Scroll to selected suggestion
  useEffect(() => {
    if (selectedSuggestion && selectedSuggestion.page && selectedSuggestion.original) {
      const pageDiv = pageRefs.current.get(selectedSuggestion.page);
      if (pageDiv) {
        pageDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Highlight the text
        const textLayerDiv = textLayerRefs.current.get(selectedSuggestion.page);
        if (textLayerDiv) {
          highlightTextInLayer(textLayerDiv, selectedSuggestion.original);
        }
      }
    } else {
      // Clear all highlights
      textLayerRefs.current.forEach((textLayerDiv) => {
        const highlighted = textLayerDiv.querySelectorAll('.highlighted-text');
        highlighted.forEach(el => {
          el.classList.remove('highlighted-text');
        });
      });
    }
  }, [selectedSuggestion]);

  // Highlight text in text layer
  const highlightTextInLayer = (textLayerDiv: HTMLDivElement, text: string) => {
    // Clear previous highlights
    const previousHighlights = textLayerDiv.querySelectorAll('.highlighted-text');
    previousHighlights.forEach(el => el.classList.remove('highlighted-text'));

    // Find and highlight matching text
    const textItems = textLayerDiv.querySelectorAll('.pdf-text-item');
    let fullText = '';
    const itemMap: { start: number; end: number; element: HTMLElement }[] = [];

    textItems.forEach((item) => {
      const start = fullText.length;
      const content = item.textContent || '';
      fullText += content;
      const end = fullText.length;
      itemMap.push({ start, end, element: item as HTMLElement });
    });

    // Find text position
    const searchText = text.toLowerCase().trim();
    const fullTextLower = fullText.toLowerCase();
    const index = fullTextLower.indexOf(searchText);

    if (index !== -1) {
      const matchStart = index;
      const matchEnd = index + searchText.length;

      // Highlight matching elements
      itemMap.forEach(({ start, end, element }) => {
        if ((start >= matchStart && start < matchEnd) || (end > matchStart && end <= matchEnd) || (start <= matchStart && end >= matchEnd)) {
          element.classList.add('highlighted-text');
        }
      });
    }
  };

  // Navigation handlers
  const handlePrevPage = () => {
    if (currentPage > 1) {
      const pageDiv = pageRefs.current.get(currentPage - 1);
      if (pageDiv) {
        pageDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const pageDiv = pageRefs.current.get(currentPage + 1);
      if (pageDiv) {
        pageDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setCurrentPage(currentPage + 1);
    }
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.2, 3));
    setRenderedPages(new Set());
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.2, 0.5));
    setRenderedPages(new Set());
  };

  if (isLoading) {
    return (
      <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-50">Loading PDF...</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-96">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zinc-900 dark:border-zinc-100"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <CardHeader>
          <CardTitle className="text-red-600 dark:text-red-400">Error</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 dark:text-gray-300">{error}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-gray-900 dark:text-gray-50">Document Viewer</CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">
              Page {currentPage} of {totalPages}
            </Badge>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <Button variant="outline" size="sm" onClick={handlePrevPage} disabled={currentPage === 1}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={handleNextPage} disabled={currentPage === totalPages}>
            <ChevronRight className="h-4 w-4" />
          </Button>
          <div className="flex-1" />
          <Button variant="outline" size="sm" onClick={handleZoomOut} disabled={zoom <= 0.5}>
            <ZoomOut className="h-4 w-4" />
          </Button>
          <span className="text-sm text-gray-600 dark:text-gray-400">{Math.round(zoom * 100)}%</span>
          <Button variant="outline" size="sm" onClick={handleZoomIn} disabled={zoom >= 3}>
            <ZoomIn className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div 
          ref={containerRef}
          className="relative overflow-auto bg-zinc-100 dark:bg-zinc-800 rounded-lg p-4"
          style={{ maxHeight: '75vh' }}
        >
          <div className="flex flex-col items-center gap-4">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <div
                key={pageNum}
                ref={(el) => {
                  if (el) pageRefs.current.set(pageNum, el);
                }}
                className="relative bg-white shadow-lg"
                style={{ marginBottom: '20px' }}
              >
                <canvas
                  ref={(el) => {
                    if (el) canvasRefs.current.set(pageNum, el);
                  }}
                  className="block w-full h-auto"
                />
                <div
                  ref={(el) => {
                    if (el) textLayerRefs.current.set(pageNum, el);
                  }}
                  className="absolute top-0 left-0 pointer-events-none pdf-text-layer"
                  style={{
                    overflow: 'hidden',
                  }}
                />
                <div className="absolute bottom-2 right-2">
                  <Badge variant="secondary">
                    {pageNum}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProofreadPdfViewer;

