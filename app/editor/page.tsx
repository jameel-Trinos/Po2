"use client";

import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useAppContext } from '../../lib/AppContext';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Download, Loader2, FileText, ArrowLeftRight, FileDown } from 'lucide-react';
import type { Suggestion } from '../../lib/types/proofreader';
import { analyzePdfContent } from '../../lib/services/geminiService';
import { downloadPdf, generatePdfFilename } from '../../lib/utils/pdfDownload';
import EditorSuggestionsPanel from '../../components/editor/EditorSuggestionsPanel';
import WordEditor from '../../components/editor/WordEditor';
import dynamic from 'next/dynamic';
import { wordBlobToHtml, htmlToWordBlob, convertWordToPdf } from '../../lib/services/pdfWordConverter';
import { toast } from 'sonner';

// Helper function to load pdfjs dynamically
async function loadPdfJs() {
  const pdfjs = await import('pdfjs-dist');
  if (typeof window !== 'undefined' && !pdfjs.GlobalWorkerOptions.workerSrc) {
    pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs';
  }
  return pdfjs;
}

// Dynamically import PDF viewer to avoid SSR issues with pdfjs-dist
const PdfViewerPdfJs = dynamic(() => import('@/components/editor/PdfViewerPdfJs'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[75vh] rounded-md overflow-hidden border border-zinc-200 dark:border-zinc-800 flex items-center justify-center bg-zinc-50 dark:bg-zinc-900">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zinc-900 dark:border-zinc-100 mb-4"></div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">Loading PDF viewer...</p>
      </div>
    </div>
  )
});

export default function EditorPage() {
  const searchParams = useSearchParams();
  const documentId = searchParams.get('documentId');
  const { 
    getDocumentPdfUrl, 
    getDocumentContent, 
    saveProjectAsDraft, 
    getDocument,
    getModifiedPdfUrl,
    setModifiedPdfUrl,
  } = useAppContext();

  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState<number | null>(null);
  const [acceptedIndices, setAcceptedIndices] = useState<number[]>([]);
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [projectName, setProjectName] = useState<string>('');
  const [editingMode, setEditingMode] = useState<'pdf' | 'word'>('pdf');
  const [wordHtml, setWordHtml] = useState<string>('');
  const [wordBlob, setWordBlob] = useState<Blob | null>(null);
  const [originalPdfUrl, setOriginalPdfUrl] = useState<string | null>(null);
  const pdfApisRef = useRef<{ 
    gotoLocation: (opts: { pageNumber: number; zoom?: number }) => Promise<void>;
    getCurrentPage: () => number;
    getTotalPages: () => number;
    reload: (file: Blob | string) => Promise<void>;
    search?: (query: string) => Promise<{ pageNumber: number } | null>;
  } | null>(null);

  useEffect(() => {
    if (!documentId) {
      console.error('[EditorPage] No document ID provided');
      setError("No document ID provided.");
      return;
    }
    
    console.log('[EditorPage] Loading document:', documentId);
    setIsLoading(true);
    setError(null);
    
    try {
      const url = getDocumentPdfUrl(documentId);
      console.log('[EditorPage] PDF URL retrieved:', url ? 'exists' : 'null');
      
      if (url) {
        setPdfUrl(url);
        setOriginalPdfUrl(url);
      } else {
        console.warn('[EditorPage] No PDF URL found for document');
        setPdfUrl(null);
      }
    } catch (e) {
      console.error('[EditorPage] Error loading PDF:', e);
      setPdfUrl(null);
    } finally {
      setIsLoading(false);
    }
  }, [documentId, getDocumentPdfUrl]);

  // Load extracted text and fetch AI suggestions
  useEffect(() => {
    if (!documentId) return;
    const content = getDocumentContent(documentId);
    const document = getDocument(documentId);
    if (document) {
      setProjectName(document.projectName || '');
    }
    if (content) {
      analyzePdfContent(content)
        .then(ai => setSuggestions(ai))
        .catch(e => console.error(e));
    }
  }, [documentId, getDocumentContent, getDocument]);

  // Convert PDF to Word for editing
  const handleConvertToWord = async () => {
    if (!documentId || !pdfUrl) {
      toast.error('PDF not available for conversion');
      return;
    }

    setIsConverting(true);
    setError(null);

    try {
      // Extract text from PDF using pdfjs
      const response = await fetch(pdfUrl);
      const arrayBuffer = await response.arrayBuffer();
      
      // Dynamically load pdfjs
      const pdfjs = await loadPdfJs();
      const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
      
      let fullText = '';
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map((item: any) => item.str).join(' ');
        fullText += pageText + '\n\n';
      }
      
      // Convert to HTML format for editing
      const htmlContent = fullText
        .split('\n\n')
        .filter(p => p.trim())
        .map(p => `<p>${p}</p>`)
        .join('\n');
      
      setWordHtml(htmlContent);
      setEditingMode('word');
      toast.success('Converted to editable format');
    } catch (err) {
      console.error('Error converting PDF:', err);
      toast.error('Failed to convert PDF. Please try again.');
      setError('Failed to convert PDF to editable format.');
    } finally {
      setIsConverting(false);
    }
  };

  // Convert back to PDF
  const handleConvertBackToPdf = async () => {
    if (!documentId || !wordHtml) {
      toast.error('No content to convert');
      return;
    }

    setIsConverting(true);
    setError(null);

    try {
      const htmlBlob = await htmlToWordBlob(wordHtml);
      const newPdfUrl = await convertWordToPdf(htmlBlob);
      
      setPdfUrl(newPdfUrl);
      setModifiedPdfUrl(documentId, newPdfUrl);
      setEditingMode('pdf');
      toast.success('Converted back to PDF');
    } catch (err) {
      console.error('Error converting to PDF:', err);
      toast.error('Failed to convert to PDF. Please try again.');
      setError('Failed to convert to PDF.');
    } finally {
      setIsConverting(false);
    }
  };

  // Apply suggestion to Word content
  const handleApplySuggestion = (index: number) => {
    const s = suggestions[index];
    if (!s) return;

    if (editingMode === 'word') {
      // Apply to Word HTML content
      const originalText = s.original || s.text;
      const regex = new RegExp(originalText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
      const updatedHtml = wordHtml.replace(regex, s.suggestion);
      setWordHtml(updatedHtml);
      
      setAcceptedIndices(prev => [...prev, index]);
      setSuggestions(prev => prev.filter((_, i) => i !== index));
      setSelectedSuggestionIndex(null);
      toast.success('Suggestion applied');
    } else {
      toast.error('Convert to Word to apply suggestions');
    }
  };

  // Navigate to suggestion in Word editor
  const handleGoToSuggestion = (index: number) => {
    setSelectedSuggestionIndex(index);
    // The WordEditor component will handle highlighting
  };

  const handleDownloadPdf = async () => {
    if (!documentId) return;

    try {
      if (!pdfUrl) {
        toast.error('No PDF available to download');
        return;
      }

      const filename = generatePdfFilename(projectName, pdfUrl !== originalPdfUrl ? 'modified' : 'original');
      downloadPdf(pdfUrl, filename);
    } catch (err) {
      console.error('Error downloading PDF:', err);
      toast.error('Failed to download PDF');
    }
  };

  const handleConvertPdfToWord = async () => {
    if (!documentId || !pdfUrl) {
      toast.error('PDF not available for conversion');
      return;
    }

    setIsConverting(true);
    setError(null);

    try {
      // Fetch the PDF file
      const response = await fetch(pdfUrl);
      const pdfBlob = await response.blob();
      
      // Create FormData to send to the API
      const formData = new FormData();
      const filename = projectName ? `${projectName}.pdf` : 'document.pdf';
      formData.append('file', pdfBlob, filename);

      // Call the PDF to DOCX conversion API
      const convertResponse = await fetch('/api/pdf-to-docx', {
        method: 'POST',
        body: formData,
      });

      if (!convertResponse.ok) {
        // Try to get error details from the response
        let errorMessage = 'Failed to convert PDF to Word';
        const contentType = convertResponse.headers.get('content-type');
        
        console.error('[PDF to Word] Conversion failed:', {
          status: convertResponse.status,
          statusText: convertResponse.statusText,
          contentType,
        });
        
        try {
          // Try to get the response body as text first
          const errorText = await convertResponse.text();
          console.log('[PDF to Word] Error response body:', errorText);
          
          // Check if response is JSON
          if (contentType && contentType.includes('application/json') && errorText) {
            try {
              const errorData = JSON.parse(errorText);
              console.error('[PDF to Word] Parsed error data:', errorData);
              // Try multiple fields for error message, prioritizing user-friendly messages
              errorMessage = errorData.message || errorData.error || errorData.details || errorMessage;
            } catch (parseError) {
              // If JSON parsing fails, use the text as error message
              console.error('[PDF to Word] JSON parse error:', parseError);
              errorMessage = errorText || errorMessage;
            }
          } else if (errorText) {
            // Response is not JSON or no content-type header, use text directly
            errorMessage = errorText || convertResponse.statusText || `HTTP ${convertResponse.status}`;
          } else {
            // No response body
            errorMessage = convertResponse.statusText || `HTTP ${convertResponse.status}`;
          }
        } catch (e) {
          // If we can't read the response, use status information
          console.error('[PDF to Word] Error reading response:', e);
          errorMessage = convertResponse.statusText || `HTTP ${convertResponse.status}: Failed to convert PDF to Word`;
        }
        
        console.error('[PDF to Word] Final error message:', errorMessage);
        throw new Error(errorMessage);
      }

      // Get the DOCX blob
      const docxBlob = await convertResponse.blob();
      
      // Download the DOCX file
      const url = window.URL.createObjectURL(docxBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename.replace(/\.pdf$/i, '.docx');
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      toast.success('PDF converted to Word and downloaded');
    } catch (err) {
      console.error('Error converting PDF to Word:', err);
      const errorMessage = err instanceof Error ? err.message : 'Failed to convert PDF to Word';
      toast.error(errorMessage);
      setError(errorMessage);
    } finally {
      setIsConverting(false);
    }
  };

  const handleSaveAsDraft = () => {
    if (!documentId) return;
    
    if (projectName.trim()) {
      saveProjectAsDraft(projectName.trim(), documentId);
      toast.success('Project saved as draft!');
    } else {
      setSaveDialogOpen(true);
    }
  };

  const handleConfirmSave = () => {
    if (!documentId || !projectName.trim()) return;
    saveProjectAsDraft(projectName.trim(), documentId);
    setSaveDialogOpen(false);
    toast.success('Project saved as draft!');
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-zinc-50 dark:bg-zinc-950 text-center px-6">
        <Card className="w-full max-w-md border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-gray-50">Loading Document…</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Progress value={66} />
            <p className="text-sm text-gray-600 dark:text-gray-400">Preparing the viewer.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error && !documentId) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-zinc-50 dark:bg-zinc-950 text-center text-red-600 dark:text-red-400">
        <h2 className="text-2xl font-semibold">Error: {error}</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Please go back and try again.</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-4 sm:p-6 lg:p-8 flex justify-center"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-gray-900 dark:text-gray-50">
                  {editingMode === 'word' ? 'Document Editor' : 'Document Viewer'}
                </CardTitle>
                <div className="flex gap-2">
                  {editingMode === 'pdf' && pdfUrl && (
                    <>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={handleConvertToWord}
                        disabled={isConverting}
                      >
                        {isConverting ? (
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        ) : (
                          <FileText className="h-4 w-4 mr-2" />
                        )}
                        Edit Document
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={handleConvertPdfToWord}
                        disabled={isConverting}
                      >
                        {isConverting ? (
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        ) : (
                          <FileDown className="h-4 w-4 mr-2" />
                        )}
                        Convert to Word
                      </Button>
                    </>
                  )}
                  {editingMode === 'word' && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handleConvertBackToPdf}
                      disabled={isConverting}
                    >
                      {isConverting ? (
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      ) : (
                        <ArrowLeftRight className="h-4 w-4 mr-2" />
                      )}
                      Back to PDF
                    </Button>
                  )}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleDownloadPdf} 
                    disabled={!pdfUrl}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
              {editingMode === 'pdf' && (
                <Badge variant="secondary" className="mt-2">
                  Click "Edit Document" to apply suggestions
                </Badge>
              )}
            </CardHeader>
            <CardContent className="p-4">
              {error && (
                <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                  <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                </div>
              )}
              
              {editingMode === 'word' ? (
                <WordEditor
                  wordHtml={wordHtml}
                  suggestions={suggestions}
                  selectedSuggestionIndex={selectedSuggestionIndex}
                  onContentChange={setWordHtml}
                  onApplySuggestion={handleApplySuggestion}
                  isLoading={isConverting}
                />
              ) : pdfUrl ? (
                <PdfViewerPdfJs
                  fileUrl={pdfUrl}
                  fileName={projectName ? `${projectName}.pdf` : 'document.pdf'}
                  onReady={(apis) => {
                    pdfApisRef.current = apis;
                  }}
                  className="w-full h-[75vh] rounded-md overflow-hidden border border-zinc-200 dark:border-zinc-800"
                />
              ) : (
                <div className="w-full h-[75vh] rounded-md overflow-hidden border border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center p-6 bg-zinc-50 dark:bg-zinc-900">
                  <svg
                    className="w-16 h-16 text-zinc-400 dark:text-zinc-600 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  <h3 className="text-lg font-semibold text-zinc-700 dark:text-zinc-300 mb-2">No PDF Available</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center max-w-md">
                    No PDF file was found for this document. Please upload a PDF file to view it here.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <aside className="md:col-span-1">
          <EditorSuggestionsPanel
            suggestions={suggestions}
            selectedIndex={selectedSuggestionIndex}
            onSelectIndex={setSelectedSuggestionIndex}
            onApplyAtIndex={handleApplySuggestion}
            onGoToIndex={handleGoToSuggestion}
            acceptedCount={acceptedIndices.length}
            onSaveDraft={handleSaveAsDraft}
            saveDialogOpen={saveDialogOpen}
            setSaveDialogOpen={setSaveDialogOpen}
            projectName={projectName}
            setProjectName={setProjectName}
            onConfirmSave={handleConfirmSave}
            isApplying={isConverting}
            canApply={editingMode === 'word'}
          />
        </aside>
      </div>
    </motion.div>
  );
}
