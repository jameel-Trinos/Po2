"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, FileType2 } from 'lucide-react';
import { toast } from 'sonner';

// Components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import TinyMCEEditor, { type TinyMCEEditorHandle } from '@/components/editor/TinyMCEEditor';

// Compliance Components
import SuggestionCard, { type ComplianceSuggestion } from '@/components/compliance/SuggestionCard';
import DocumentUpload from '@/components/compliance/DocumentUpload';

// Services
import { htmlToWordBlob, convertHtmlToPdf } from '@/lib/services/pdfWordConverter';
import type { Suggestion } from '@/lib/types/proofreader';
import { findTextLocation, type PdfPageText, type HighlightInfo } from '@/lib/pdf-utils';

// Dynamic import for PDF viewer (uses pdfjs which requires browser APIs)
import dynamic from 'next/dynamic';
import { Loader2 } from 'lucide-react';

const PdfViewerWithHighlight = dynamic(
  () => import('@/components/compliance/PdfViewerWithHighlight'),
  { 
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-full bg-zinc-100 dark:bg-zinc-950">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="h-8 w-8 animate-spin text-zinc-600 dark:text-zinc-400" />
          <p className="text-sm text-zinc-600 dark:text-zinc-400">Loading PDF viewer...</p>
        </div>
      </div>
    )
  }
);

export default function ComplianceEditorPage() {
  // State
  const [documentId, setDocumentId] = useState<string | null>(null);
  const [documentName, setDocumentName] = useState<string>('');
  const [fileType, setFileType] = useState<'pdf' | 'docx' | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [editorContent, setEditorContent] = useState<string>('');
  const [suggestions, setSuggestions] = useState<ComplianceSuggestion[]>([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState<number | null>(null);
  const [isApplying, setIsApplying] = useState<number | null>(null);
  const [showUpload, setShowUpload] = useState(true);
  const [highlightInfo, setHighlightInfo] = useState<HighlightInfo | null>(null);

  const editorRef = useRef<TinyMCEEditorHandle>(null);

  // Convert ComplianceSuggestion to Suggestion type for TinyMCE
  const editorSuggestions: Suggestion[] = suggestions.map(s => ({
    issue: s.explanation,
    page: s.page || 1,
    text: s.originalText,
    suggestion: s.suggestedText,
    original: s.originalText,
    explanation: s.explanation,
    category: s.category.toLowerCase() as 'grammar' | 'compliance' | 'style',
    severity: s.severity as 'critical' | 'warning' | 'suggestion',
  }));

  // Handle successful document upload
  const handleUploadSuccess = (data: {
    documentId: string;
    fileType: 'pdf' | 'docx';
    htmlContent: string;
    extractedText: string;
    suggestions: any[];
    pdfUrl?: string;
    fileName?: string;
  }) => {
    console.log('📄 Upload success! Document data:', {
      documentId: data.documentId,
      fileType: data.fileType,
      hasHtmlContent: !!data.htmlContent,
      htmlContentLength: data.htmlContent?.length || 0,
      extractedTextLength: data.extractedText?.length || 0,
      suggestionsCount: data.suggestions?.length || 0,
      hasPdfUrl: !!data.pdfUrl,
      fileName: data.fileName,
    });
    
    if (data.suggestions && data.suggestions.length > 0) {
      console.log('Sample suggestion:', data.suggestions[0]);
    } else {
      console.log('⚠️ No suggestions received from API');
      console.log('Extracted text preview:', data.extractedText?.substring(0, 200));
    }
    
    setDocumentId(data.documentId);
    setDocumentName(data.fileName || 'document');
    setFileType(data.fileType);
    setEditorContent(data.htmlContent);
    setPdfUrl(data.pdfUrl || null);
    setSuggestions(data.suggestions.map((s, idx) => ({ ...s, id: `sugg-${idx}` })));
    setShowUpload(false);

    toast.success(`Document analyzed! Found ${data.suggestions.length} suggestions.`);
  };

  // Handle upload error
  const handleUploadError = (error: string) => {
    toast.error('Upload failed', {
      description: error
    });
  };

  // Handle suggestion selection
  const handleSelectSuggestion = (index: number) => {
    setSelectedSuggestionIndex(index);
    const suggestion = suggestions[index];
    
    if (suggestion) {
      if (fileType === 'pdf' && pdfUrl) {
        // For PDF: Create highlight info
        // In a real implementation, you would calculate the bounding box from the PDF
        setHighlightInfo({
          pageNumber: suggestion.page || 1,
          text: suggestion.originalText,
          boundingBox: undefined, // Would be calculated from PDF text positions
        });
      } else if (editorRef.current) {
        // For DOCX: Highlight text in editor
        editorRef.current.highlightText(suggestion.originalText);
      }
    }
  };

  // Handle applying suggestion
  const handleApplySuggestion = async (index: number) => {
    const suggestion = suggestions[index];
    if (!suggestion || !documentId) return;

    // For PDF files that haven't been converted, show conversion prompt
    if (fileType === 'pdf') {
      toast.info('Convert to edit', {
        description: 'Click "Convert to Word" to enable editing and apply suggestions.'
      });
      
      // Mark as acknowledged
      setSuggestions(prev =>
        prev.map((s, i) => (i === index ? { ...s, isApplied: true } : s))
      );
      return;
    }

    // For documents in the editor (DOCX or converted PDF)
    if (!editorRef.current) return;

    setIsApplying(index);

    try {
      // Call API to apply change
      const response = await fetch('/api/compliance/apply-change', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          documentId,
          originalText: suggestion.originalText,
          suggestedText: suggestion.suggestedText,
          suggestionId: suggestion.id,
          fileType,
          documentData: pdfUrl || undefined, // Send document data if available
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to apply change');
      }

      const data = await response.json();

      // Replace text in editor
      editorRef.current.replaceText(suggestion.originalText, suggestion.suggestedText);
      
      // Update editor content
      const newContent = editorRef.current.getContent();
      setEditorContent(newContent);

      // Mark suggestion as applied
      setSuggestions(prev =>
        prev.map((s, i) => (i === index ? { ...s, isApplied: true } : s))
      );

      toast.success('Change applied successfully');

      // Clear selection
      if (selectedSuggestionIndex === index) {
        setSelectedSuggestionIndex(null);
      }
    } catch (error) {
      console.error('Error applying suggestion:', error);
      toast.error('Failed to apply change');
    } finally {
      setIsApplying(null);
    }
  };

  // Analyze current editor content for compliance
  const handleAnalyzeContent = async () => {
    if (!editorRef.current) {
      toast.error('No content to analyze');
      return;
    }

    const loadingToast = toast.loading('Analyzing content for compliance...');

    try {
      // Get current editor content
      const currentContent = editorRef.current.getContent();
      
      // Extract plain text from HTML
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = currentContent;
      const plainText = tempDiv.textContent || tempDiv.innerText || '';

      console.log('📝 Analyzing editor content...', {
        htmlLength: currentContent.length,
        textLength: plainText.length,
        textPreview: plainText.substring(0, 200)
      });

      // Create a temporary file from the content to send to the API
      const blob = new Blob([plainText], { type: 'text/plain' });
      const file = new File([blob], 'editor-content.txt', { type: 'text/plain' });
      
      const formData = new FormData();
      formData.append('file', file);
      formData.append('isPlainText', 'true'); // Flag to indicate plain text analysis

      const response = await fetch('/api/compliance/analyze', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to analyze content');
      }

      const data = await response.json();
      
      console.log('✅ Analysis complete:', {
        suggestionsCount: data.suggestions?.length || 0
      });

      // Update suggestions
      setSuggestions(data.suggestions.map((s: any, idx: number) => ({ ...s, id: `sugg-${idx}` })));
      
      toast.success(`Analysis complete! Found ${data.suggestions.length} suggestions.`, { 
        id: loadingToast 
      });
    } catch (err) {
      console.error('Analysis error:', err);
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      toast.error('Failed to analyze content', {
        description: errorMessage,
        id: loadingToast
      });
    }
  };

  // Convert PDF to Word and display in editor
  const handleConvertToWord = async () => {
    if (fileType !== 'pdf' || !pdfUrl) {
      toast.error('PDF not available for conversion');
      return;
    }

    const loadingToast = toast.loading('Converting PDF to Word format...');

    try {
      console.log('📥 Converting PDF to editable format...');
      
      // Convert data URL to blob
      const response = await fetch(pdfUrl);
      const pdfBlob = await response.blob();
      
      // Create form data with the PDF file
      const formData = new FormData();
      formData.append('file', pdfBlob, documentName || 'document.pdf');
      
      // Call the PDF to DOCX conversion API with the actual file
      const convertResponse = await fetch('/api/convert-pdf-to-docx', {
        method: 'POST',
        body: formData,
      });
      
      if (!convertResponse.ok) {
        const responseText = await convertResponse.text();
        console.error('❌ Conversion API error:', responseText);
        let errorMessage = 'Conversion failed';
        
        try {
          const errorData = JSON.parse(responseText);
          errorMessage = errorData.message || errorData.error || errorMessage;
        } catch (e) {
          errorMessage = responseText.substring(0, 200);
        }
        
        throw new Error(errorMessage);
      }
      
      console.log('✅ Conversion successful, loading into editor...');
      
      // Get the DOCX blob
      const docxBlob = await convertResponse.blob();
      
      // Convert DOCX to HTML for the editor with enhanced formatting options
      const mammoth = await import('mammoth');
      const arrayBuffer = await docxBlob.arrayBuffer();
      
      // Configure mammoth to preserve formatting and styles
      const result = await mammoth.convertToHtml(
        { arrayBuffer },
        {
          styleMap: [
            "p[style-name='Heading 1'] => h1:fresh",
            "p[style-name='Heading 2'] => h2:fresh",
            "p[style-name='Heading 3'] => h3:fresh",
            "p[style-name='Title'] => h1.title:fresh",
            "r[style-name='Strong'] => strong",
            "r[style-name='Emphasis'] => em",
          ],
          includeDefaultStyleMap: true,
          convertImage: mammoth.images.imgElement((image) => {
            return image.read("base64").then((imageBuffer) => {
              return {
                src: `data:${image.contentType};base64,${imageBuffer}`
              };
            });
          })
        }
      );
      
      const htmlContent = result.value;
      
      // Log any conversion messages (warnings about unsupported features)
      if (result.messages.length > 0) {
        console.log('Conversion messages:', result.messages);
      }
      
      // Switch to editor mode
      setEditorContent(htmlContent);
      setFileType('docx');
      setPdfUrl(null); // Clear PDF URL to switch to editor view
      
      toast.success('Document converted! Click "Analyze Content" to check compliance.', { 
        id: loadingToast,
        duration: 5000
      });
    } catch (err) {
      console.error('Conversion error:', err);
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      toast.error('Failed to convert PDF', {
        description: errorMessage,
        id: loadingToast
      });
    }
  };

  // Download as Word file
  const handleDownloadWord = async () => {
    try {
      if (fileType === 'pdf' && pdfUrl) {
        // For PDF files, convert and download
        toast.info('Converting PDF to Word...');
        
        // Convert data URL to blob
        const response = await fetch(pdfUrl);
        const pdfBlob = await response.blob();
        
        // Create form data with the PDF file
        const formData = new FormData();
        formData.append('file', pdfBlob, documentName || 'document.pdf');
        
        const convertResponse = await fetch('/api/convert-pdf-to-docx', {
          method: 'POST',
          body: formData,
        });
        
        if (!convertResponse.ok) {
          throw new Error('Failed to convert PDF to Word');
        }
        
        const docxBlob = await convertResponse.blob();
        const url = URL.createObjectURL(docxBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${documentName || 'document'}_converted.docx`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        toast.success('Word document downloaded');
      } else if (editorRef.current) {
        // For documents in editor
        const content = editorRef.current.getContent();
        const blob = await htmlToWordBlob(content);
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${documentName || 'document'}_edited.docx`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        toast.success('Word document downloaded');
      } else {
        toast.error('No content to download');
      }
    } catch (err) {
      console.error('Download error:', err);
      toast.error('Failed to download Word document');
    }
  };

  // Download as PDF
  const handleDownloadPdf = async () => {
    try {
      if (fileType === 'pdf' && pdfUrl) {
        // For PDF files, download the original
        const a = document.createElement('a');
        a.href = pdfUrl;
        a.download = `${documentName || 'document'}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        toast.success('PDF downloaded');
      } else if (editorRef.current) {
        // For DOCX files in editor, convert to PDF
        const content = editorRef.current.getContent();
        const pdfDataUrl = await convertHtmlToPdf(content);
        const a = document.createElement('a');
        a.href = pdfDataUrl;
        a.download = `${documentName || 'document'}_edited.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        toast.success('Document downloaded as PDF');
      } else {
        toast.error('No content to download');
      }
    } catch (err) {
      console.error('Download error:', err);
      toast.error('Failed to download PDF');
    }
  };

  // Reset to upload new document
  const handleNewDocument = () => {
    setDocumentId(null);
    setDocumentName('');
    setFileType(null);
    setPdfUrl(null);
    setEditorContent('');
    setSuggestions([]);
    setSelectedSuggestionIndex(null);
    setHighlightInfo(null);
    setShowUpload(true);
  };

  // Group suggestions by category
  const groupedSuggestions = suggestions.reduce((acc, suggestion, index) => {
    const category = suggestion.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push({ ...suggestion, index });
    return acc;
  }, {} as Record<string, Array<ComplianceSuggestion & { index: number }>>);

  // Calculate statistics
  const totalSuggestions = suggestions.length;
  const appliedSuggestions = suggestions.filter(s => s.isApplied).length;
  const criticalIssues = suggestions.filter(s => s.severity === 'critical' && !s.isApplied).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-4 sm:p-6 lg:p-8"
    >
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-2">
            Financial Compliance Editor
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Upload documents for FINRA/SEC compliance review and real-time editing
          </p>
        </div>

        {/* Upload View */}
        {showUpload && (
          <div className="max-w-2xl mx-auto">
            <DocumentUpload
              onUploadSuccess={handleUploadSuccess}
              onError={handleUploadError}
            />
          </div>
        )}

        {/* Editor View */}
        {!showUpload && documentId && (
          <>
            {/* Stats Bar */}
            <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="text-sm">
                  <FileText className="h-3 w-3 mr-1" />
                  Document #{documentId}
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  {totalSuggestions} Total Suggestions
                </Badge>
                <Badge variant="default" className="text-sm bg-green-600">
                  {appliedSuggestions} Applied
                </Badge>
                {criticalIssues > 0 && (
                  <Badge variant="destructive" className="text-sm">
                    {criticalIssues} Critical Issues
                  </Badge>
                )}
              </div>
              <div className="flex gap-2">
                {fileType === 'pdf' && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleConvertToWord}
                    className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/40"
                  >
                    <FileType2 className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                    Convert to Word
                  </Button>
                )}
                {fileType === 'docx' && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleAnalyzeContent}
                    className="bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/40"
                  >
                    <FileText className="h-4 w-4 mr-2 text-purple-600 dark:text-purple-400" />
                    Analyze Content
                  </Button>
                )}
                <Button variant="outline" size="sm" onClick={handleDownloadWord}>
                  <Download className="h-4 w-4 mr-2" />
                  Download as Word
                </Button>
                <Button variant="outline" size="sm" onClick={handleDownloadPdf}>
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
                <Button variant="default" size="sm" onClick={handleNewDocument}>
                  New Document
                </Button>
              </div>
            </div>

            {/* Split View: Editor/Viewer + Suggestions */}
            <div className="grid grid-cols-3 gap-6">
              {/* Left: Document Editor/Viewer (2/3 width) */}
              <div className="col-span-2">
                <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-gray-900 dark:text-gray-50 flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      {fileType === 'pdf' ? 'PDF Viewer' : 'Document Editor'}
                      {fileType && (
                        <Badge variant="secondary" className="ml-2 text-xs">
                          {fileType.toUpperCase()}
                        </Badge>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    {fileType === 'pdf' && pdfUrl ? (
                      <div className="h-[calc(100vh-300px)]">
                        <PdfViewerWithHighlight
                          pdfUrl={pdfUrl}
                          fileName={documentName}
                          highlightInfo={highlightInfo}
                          onPageChange={(page) => console.log('Page changed:', page)}
                          className="h-full"
                        />
                      </div>
                    ) : (
                      <TinyMCEEditor
                        ref={editorRef}
                        content={editorContent}
                        onContentChange={setEditorContent}
                        suggestions={editorSuggestions}
                        selectedSuggestionIndex={selectedSuggestionIndex}
                      />
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Right: Compliance Suggestions (1/3 width) */}
              <div className="col-span-1">
                <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 sticky top-6">
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-gray-50 flex items-center justify-between">
                      <span>Compliance Suggestions</span>
                      <Badge variant="secondary">
                        {suggestions.filter(s => !s.isApplied).length}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="max-h-[calc(100vh-200px)] overflow-y-auto space-y-4">
                    {totalSuggestions === 0 ? (
                      <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                        <p className="text-lg font-medium">No suggestions found</p>
                        <p className="text-sm mt-2">Your document looks compliant!</p>
                      </div>
                    ) : (
                      <>
                        {Object.entries(groupedSuggestions).map(([category, items]) => (
                          <div key={category}>
                            <div className="flex items-center gap-2 mb-3">
                              <Badge
                                variant="outline"
                                className={`text-xs font-semibold ${
                                  category === 'FINRA' ? 'border-purple-500 text-purple-700 dark:text-purple-300' :
                                  category === 'SEC' ? 'border-blue-500 text-blue-700 dark:text-blue-300' :
                                  category === 'Grammar' ? 'border-green-500 text-green-700 dark:text-green-300' :
                                  ''
                                }`}
                              >
                                {category}
                              </Badge>
                              <Separator className="flex-1" />
                              <span className="text-xs text-gray-500">
                                {items.filter(s => !s.isApplied).length} pending
                              </span>
                            </div>
                            
                            <div className="space-y-3">
                              {items.map((item) => (
                                <SuggestionCard
                                  key={item.index}
                                  suggestion={item}
                                  index={item.index}
                                  isSelected={selectedSuggestionIndex === item.index}
                                  onSelect={() => handleSelectSuggestion(item.index)}
                                  onApply={() => handleApplySuggestion(item.index)}
                                  isApplying={isApplying === item.index}
                                />
                              ))}
                            </div>
                          </div>
                        ))}
                      </>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}
