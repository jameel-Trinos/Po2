"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Upload } from 'lucide-react';
import * as pdfjs from 'pdfjs-dist';
// Set the worker source for pdfjs-dist
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs';

import { analyzePdfContent } from '../../lib/services/geminiService';
import type { Suggestion } from '../../lib/types/proofreader';
import SuggestionSidebar from '../../components/proofreader/SuggestionSidebar';
import PdfViewer from '../../components/proofreader/PdfViewer';

// shadcn/ui components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";

// Placeholder for SuggestionSidebar
interface SuggestionSidebarProps {
  suggestions: Suggestion[];
  onSuggestionClick: (suggestion: Suggestion) => void;
  selectedSuggestion: Suggestion | null;
  onEditPage: (pageNum: number) => void;
}

const ProofreadPage: React.FC<{}> = () => {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [extractedText, setExtractedText] = useState<string>('');
  const [selectedSuggestion, setSelectedSuggestion] = useState<Suggestion | null>(null);
  const [progress, setProgress] = useState<number>(66);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files ? e.target.files[0] : null);
    setSuggestions([]); // Clear previous suggestions
    setError(null);
    setExtractedText(''); // Clear extracted text
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError("Please select a document to upload.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuggestions([]);
    setSelectedSuggestion(null); // Clear any selected suggestion
    setProgress(12);

    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
      let fullText = '';
      const pageTexts: string[] = [];

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map((item: any) => item.str).join(' ');
        pageTexts.push(pageText);
        fullText += `--- PAGE ${i} ---\n${pageText}\n`;
        // simple perceived progress
        setProgress(Math.min(90, Math.round((i / pdf.numPages) * 80) + 10));
      }
      setExtractedText(fullText); 
      setProgress(92);

      const aiSuggestions = await analyzePdfContent(fullText);
      setSuggestions(aiSuggestions);
      setProgress(100);
    } catch (e) {
      console.error("Failed to process file or get suggestions:", e);
      setError("Could not process the file or get suggestions. Ensure it's a valid PDF file and your API_KEY is set.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleApplyEdit = (pageNumber: number, originalText: string, newText: string) => {
    // A simplified text replacement. In a real PDF viewer, this would involve more complex DOM manipulation
    // or updating a state that controls PDF rendering.
    setExtractedText((prevText) => {
      // Replace only the first occurrence on the specific page to avoid unintended global replacements
      const pageIdentifier = `--- PAGE ${pageNumber} ---\n`;
      const parts = prevText.split(pageIdentifier);
      if (parts.length > 1) {
        const beforePage = parts[0];
        const pageContentAndAfter = parts.slice(1).join(pageIdentifier); // Rest of the document

        const pageContentParts = pageContentAndAfter.split(originalText);
        if (pageContentParts.length > 1) {
          // Replace only the first occurrence within this specific page block
          const newPageContent = pageContentParts[0] + newText + pageContentParts.slice(1).join(originalText);
          return beforePage + pageIdentifier + newPageContent;
        }
      }
      return prevText; // If not found or something went wrong, return original text
    });
    setSuggestions((prevSuggestions) => prevSuggestions.filter(s => !(s.page === pageNumber && s.original === originalText)));
    setSelectedSuggestion(null); // Clear selected suggestion after applying
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-zinc-50 dark:bg-zinc-950 text-center gap-4 px-6">
        <Card className="w-full max-w-md border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-gray-50">Analyzing Document...</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Progress value={progress} />
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Please wait while our AI proofreads your document.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-4 sm:p-6 lg:p-8 flex items-center justify-center"
    >
      <Card className="max-w-6xl w-full border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <CardContent className="p-6 sm:p-8 flex flex-col md:flex-row gap-8">
        {/* Document Upload / Viewer Area */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-7 text-center">Document Proofreader</h1>
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {!extractedText ? (
            <form onSubmit={handleSubmit} className="space-y-6 mb-8">
              <div className="space-y-2">
                <Label htmlFor="file-upload">Upload Document</Label>
                <div className="flex items-center gap-3">
                  <Input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    accept="application/pdf"
                    onChange={handleFileChange}
                  />
                  <Button type="submit">
                    <Upload className="h-4 w-4 mr-2" />
                    Analyze
                  </Button>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">PDF files only, up to 10MB</p>
                {file && <p className="text-sm text-green-600 dark:text-green-400">{file.name}</p>}
              </div>
            </form>
          ) : (
            <PdfViewer
              extractedText={extractedText}
              suggestions={suggestions}
              selectedSuggestion={selectedSuggestion}
              onSuggestionClick={setSelectedSuggestion}
              onApplyEdit={handleApplyEdit}
            />
          )}
        </div>

        {/* Suggestion Sidebar Area */}
        <div className="md:w-1/3">
          <SuggestionSidebar
            suggestions={suggestions}
            onSuggestionClick={setSelectedSuggestion}
            selectedSuggestion={selectedSuggestion}
            onEditPage={(pageNum) => {
              // In a more sophisticated viewer, this would scroll to the page and allow inline editing
              console.log(`Edit page ${pageNum} - not implemented for plain text viewer.`);
              // For now, if a suggestion is clicked in the sidebar, we'll try to highlight it in the viewer
              const suggestionToHighlight = suggestions.find(s => s.page === pageNum);
              if (suggestionToHighlight) {
                setSelectedSuggestion(suggestionToHighlight);
              }
            }}
          />
        </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProofreadPage;
