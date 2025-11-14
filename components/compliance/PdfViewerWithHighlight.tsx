"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Loader2 } from 'lucide-react';
import type { HighlightInfo } from '@/lib/pdf-utils';

// Configure pdf.js worker - use version matching react-pdf
if (typeof window !== 'undefined' && !pdfjs.GlobalWorkerOptions.workerSrc) {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
}

// Note: TextLayer abort warnings are suppressed globally via lib/pdf-config.ts

export interface PdfViewerWithHighlightProps {
  pdfUrl: string;
  fileName?: string;
  highlightInfo?: HighlightInfo | null;
  onPageChange?: (pageNumber: number) => void;
  className?: string;
}

const PdfViewerWithHighlight: React.FC<PdfViewerWithHighlightProps> = ({
  pdfUrl,
  fileName,
  highlightInfo,
  onPageChange,
  className = '',
}) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const highlightLayerRef = useRef<HTMLDivElement>(null);
  const documentRef = useRef<any>(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // Cleanup any pending PDF.js tasks when component unmounts
      if (documentRef.current) {
        try {
          documentRef.current.destroy?.();
        } catch (e) {
          // Silently ignore cleanup errors
        }
      }
    };
  }, []);

  // Load document
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setIsLoading(false);
  };

  const onDocumentLoadError = (error: Error) => {
    console.error('Error loading PDF:', error);
    setIsLoading(false);
  };

  // Navigate to specific page
  const goToPage = (page: number) => {
    if (page >= 1 && page <= numPages) {
      setPageNumber(page);
      onPageChange?.(page);
    }
  };

  // Zoom controls
  const zoomIn = () => setScale(prev => Math.min(prev + 0.2, 3.0));
  const zoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.5));

  // Navigate to highlight location
  useEffect(() => {
    if (highlightInfo && highlightInfo.pageNumber !== pageNumber) {
      goToPage(highlightInfo.pageNumber);
    }
  }, [highlightInfo]);

  // Draw highlight overlay
  useEffect(() => {
    if (!highlightInfo || !highlightInfo.boundingBox || !highlightLayerRef.current) {
      return;
    }

    const { x, y, width, height } = highlightInfo.boundingBox;

    // Clear previous highlights
    highlightLayerRef.current.innerHTML = '';

    // Create highlight div
    const highlightDiv = document.createElement('div');
    highlightDiv.style.position = 'absolute';
    highlightDiv.style.left = `${x * scale}px`;
    highlightDiv.style.top = `${y * scale}px`;
    highlightDiv.style.width = `${width * scale}px`;
    highlightDiv.style.height = `${height * scale}px`;
    highlightDiv.style.backgroundColor = 'rgba(255, 255, 0, 0.4)';
    highlightDiv.style.border = '2px solid rgba(255, 200, 0, 0.8)';
    highlightDiv.style.pointerEvents = 'none';
    highlightDiv.style.zIndex = '10';

    highlightLayerRef.current.appendChild(highlightDiv);

    // Scroll to highlight
    setTimeout(() => {
      highlightDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
  }, [highlightInfo, scale, pageNumber]);

  return (
    <div className={`flex flex-col h-full ${className}`}>
      {/* Toolbar */}
      <div className="flex items-center justify-between p-3 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs">
            Page {pageNumber} of {numPages}
          </Badge>
          {fileName && (
            <Badge variant="secondary" className="text-xs">
              {fileName}
            </Badge>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Zoom controls */}
          <Button
            variant="outline"
            size="sm"
            onClick={zoomOut}
            disabled={scale <= 0.5}
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Badge variant="outline" className="text-xs min-w-[60px] text-center">
            {Math.round(scale * 100)}%
          </Badge>
          <Button
            variant="outline"
            size="sm"
            onClick={zoomIn}
            disabled={scale >= 3.0}
          >
            <ZoomIn className="h-4 w-4" />
          </Button>

          {/* Page navigation */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => goToPage(pageNumber - 1)}
            disabled={pageNumber <= 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => goToPage(pageNumber + 1)}
            disabled={pageNumber >= numPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* PDF Viewer */}
      <div
        ref={containerRef}
        className="flex-1 overflow-auto bg-zinc-100 dark:bg-zinc-950 relative"
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-50 dark:bg-zinc-950">
            <div className="flex flex-col items-center gap-3">
              <Loader2 className="h-8 w-8 animate-spin text-zinc-600 dark:text-zinc-400" />
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Loading PDF...</p>
            </div>
          </div>
        )}

        <div className="flex justify-center p-6 relative">
          {/* Highlight layer */}
          <div
            ref={highlightLayerRef}
            className="absolute top-6 left-0 right-0 pointer-events-none"
            style={{ zIndex: 10 }}
          />

          {/* PDF Document */}
          <Document
            file={pdfUrl}
            onLoadSuccess={(pdf) => {
              documentRef.current = pdf;
              onDocumentLoadSuccess(pdf);
            }}
            onLoadError={onDocumentLoadError}
            loading={
              <div className="flex items-center justify-center p-8">
                <Loader2 className="h-6 w-6 animate-spin text-zinc-600 dark:text-zinc-400" />
              </div>
            }
            error={
              <div className="flex items-center justify-center p-8 text-red-600 dark:text-red-400">
                <p>Failed to load PDF. Please try again.</p>
              </div>
            }
          >
            <Page
              key={`page-${pageNumber}-${scale}`}
              pageNumber={pageNumber}
              scale={scale}
              renderTextLayer={true}
              renderAnnotationLayer={true}
              loading={
                <div className="flex items-center justify-center p-8">
                  <Loader2 className="h-6 w-6 animate-spin text-zinc-600 dark:text-zinc-400" />
                </div>
              }
              className="shadow-lg"
            />
          </Document>
        </div>
      </div>
    </div>
  );
};

export default PdfViewerWithHighlight;

