"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { toast } from 'sonner';

// Components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import TinyMCEEditor, { type TinyMCEEditorHandle } from '@/components/editor/TinyMCEEditor';

// Compliance Components
import BalanceIndicator from '@/components/compliance/BalanceIndicator';
import SuggestionCard, { type ComplianceSuggestion } from '@/components/compliance/SuggestionCard';
import DocumentUpload from '@/components/compliance/DocumentUpload';

// Services
import { htmlToWordBlob, convertHtmlToPdf } from '@/lib/services/pdfWordConverter';
import type { Suggestion } from '@/lib/types/proofreader';

export default function ComplianceEditorPage() {
  // State
  const [balance, setBalance] = useState(100.00); // Mock user balance
  const [documentId, setDocumentId] = useState<string | null>(null);
  const [documentName, setDocumentName] = useState<string>('');
  const [editorContent, setEditorContent] = useState<string>('');
  const [suggestions, setSuggestions] = useState<ComplianceSuggestion[]>([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState<number | null>(null);
  const [isApplying, setIsApplying] = useState<number | null>(null);
  const [showUpload, setShowUpload] = useState(true);

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
    htmlContent: string;
    extractedText: string;
    suggestions: any[];
  }) => {
    setDocumentId(data.documentId);
    setEditorContent(data.htmlContent);
    setSuggestions(data.suggestions.map((s, idx) => ({ ...s, id: `sugg-${idx}` })));
    setShowUpload(false);

    // Deduct analysis cost from balance
    const cost = 0.10;
    setBalance(prev => Math.max(0, prev - cost));

    toast.success(`Document analyzed! Found ${data.suggestions.length} suggestions.`, {
      description: `Cost: $${cost.toFixed(2)} | Remaining balance: $${(balance - cost).toFixed(2)}`
    });
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
    
    if (editorRef.current && suggestion) {
      // Highlight text in editor
      editorRef.current.highlightText(suggestion.originalText);
    }
  };

  // Handle applying suggestion
  const handleApplySuggestion = async (index: number) => {
    const suggestion = suggestions[index];
    if (!suggestion || !editorRef.current || !documentId) return;

    setIsApplying(index);

    try {
      // Call API to apply change (mock)
      const response = await fetch('/api/compliance/apply-change', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          documentId,
          originalText: suggestion.originalText,
          suggestedText: suggestion.suggestedText,
          suggestionId: suggestion.id,
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

      // Deduct cost from balance
      const cost = data.cost || 0.01;
      setBalance(prev => Math.max(0, prev - cost));

      toast.success('Change applied successfully', {
        description: `Cost: $${cost.toFixed(2)} | Remaining balance: $${(balance - cost).toFixed(2)}`
      });

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

  // Download as Word
  const handleDownloadWord = async () => {
    if (!editorRef.current) {
      toast.error('No content to download');
      return;
    }

    try {
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
      
      toast.success('Document downloaded as Word');
    } catch (err) {
      console.error('Download error:', err);
      toast.error('Failed to download document');
    }
  };

  // Download as PDF
  const handleDownloadPdf = async () => {
    if (!editorRef.current) {
      toast.error('No content to download');
      return;
    }

    try {
      const content = editorRef.current.getContent();
      const pdfDataUrl = await convertHtmlToPdf(content);
      const a = document.createElement('a');
      a.href = pdfDataUrl;
      a.download = `${documentName || 'document'}_edited.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      
      toast.success('Document downloaded as PDF');
    } catch (err) {
      console.error('Download error:', err);
      toast.error('Failed to download PDF');
    }
  };

  // Reset to upload new document
  const handleNewDocument = () => {
    setDocumentId(null);
    setDocumentName('');
    setEditorContent('');
    setSuggestions([]);
    setSelectedSuggestionIndex(null);
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
        <div className="mb-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-2">
              Financial Compliance Editor
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Upload documents for FINRA/SEC compliance review and real-time editing
            </p>
          </div>
          <BalanceIndicator balance={balance} className="lg:w-80" />
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
                <Button variant="outline" size="sm" onClick={handleDownloadWord}>
                  <Download className="h-4 w-4 mr-2" />
                  Download Word
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

            {/* Split View: Editor + Suggestions */}
            <div className="grid grid-cols-3 gap-6">
              {/* Left: Document Editor (2/3 width) */}
              <div className="col-span-2">
                <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-gray-900 dark:text-gray-50 flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Document Editor
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <TinyMCEEditor
                      ref={editorRef}
                      content={editorContent}
                      onContentChange={setEditorContent}
                      suggestions={editorSuggestions}
                      selectedSuggestionIndex={selectedSuggestionIndex}
                    />
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
