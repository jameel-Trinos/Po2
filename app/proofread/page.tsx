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

// Placeholder for a Spinner component (if you have one, otherwise replace with a simple loading indicator)
const Spinner = () => (
  <div className="flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-gray-100"></div>
  </div>
);

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
      }
      setExtractedText(fullText); 

      const aiSuggestions = await analyzePdfContent(fullText);
      setSuggestions(aiSuggestions);
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
      <div className="flex flex-col items-center justify-center h-screen bg-zinc-50 dark:bg-zinc-950 text-center">
        <Spinner />
        <h2 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">Analyzing Document...</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Please wait while our AI proofreads your document.</p>
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
      <div className="max-w-6xl w-full bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 flex flex-col lg:flex-row gap-8">
        {/* Document Upload / Viewer Area */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-7 text-center">Document Proofreader</h1>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-6 dark:bg-red-900 dark:text-red-200"
              role="alert"
            >
              {error}
            </motion.div>
          )}

          {!extractedText ? (
            <form onSubmit={handleSubmit} className="space-y-6 mb-8">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Upload Document</label>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-zinc-300 dark:border-zinc-700 border-dashed rounded-lg cursor-pointer transition-colors duration-200 hover:border-blue-500 dark:hover:border-blue-400"
                >
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" />
                    <div className="flex text-sm text-gray-600 dark:text-gray-300">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          onChange={handleFileChange}
                          accept="application/pdf" // Accept only PDF files
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">PDF files only, up to 10MB</p>
                    {file && <p className="text-sm text-green-600 dark:text-green-400 mt-2">{file.name}</p>}
                  </div>
                </motion.div>
              </div>
              <div className="flex justify-end pt-6">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex justify-center py-2.5 px-5 border border-transparent shadow-sm text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                >
                  Analyze Document
                </motion.button>
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
        <div className="lg:w-1/3">
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
      </div>
    </motion.div>
  );
};

export default ProofreadPage;
