"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useAppContext } from '../../lib/AppContext';
import { motion } from 'framer-motion';

// import * as pdfjs from 'pdfjs-dist'; // Remove direct import

import { analyzePdfContent } from '../../lib/services/geminiService';
import type { Suggestion } from '../../lib/types/proofreader';
import SuggestionSidebar from '../../components/proofreader/SuggestionSidebar';
import PdfViewer from '../../components/proofreader/PdfViewer';

// Placeholder for a Spinner component
const Spinner = () => (
  <div className="flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-gray-100"></div>
  </div>
);

export default function EditorPage() {
  const searchParams = useSearchParams();
  const documentId = searchParams.get('documentId');
  const { getDocumentContent } = useAppContext();

  const [extractedText, setExtractedText] = useState<string>('');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedSuggestion, setSelectedSuggestion] = useState<Suggestion | null>(null);
  const [pdfjsLib, setPdfjsLib] = useState<any>(null);

  useEffect(() => {
    // Dynamically import pdfjs-dist on the client-side
    const loadPdfjs = async () => {
      const pdfjs = await import('pdfjs-dist');
      pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs';
      setPdfjsLib(pdfjs);
    };
    loadPdfjs();
  }, []);

  useEffect(() => {
    if (documentId) {
      const content = getDocumentContent(documentId);
      if (content) {
        setExtractedText(content);
        // Analyze content for suggestions
        const fetchSuggestions = async () => {
          setIsLoading(true);
          setError(null);
          try {
            // Ensure pdfjsLib is loaded before calling analyzePdfContent if it internally uses pdfjs-dist
            // For now, analyzePdfContent doesn't directly use pdfjs-dist, but if it did, we'd await pdfjsLib
            const aiSuggestions = await analyzePdfContent(content);
            setSuggestions(aiSuggestions);
          } catch (e) {
            console.error("Failed to get suggestions from AI:", e);
            setError("Could not retrieve AI suggestions. Ensure your API_KEY is set.");
          } finally {
            setIsLoading(false);
          }
        };
        fetchSuggestions();
      } else {
        setError("Document content not found.");
      }
    } else {
      setError("No document ID provided.");
    }
  }, [documentId, getDocumentContent]);

  const handleApplyEdit = (pageNumber: number, originalText: string, newText: string) => {
    setExtractedText((prevText) => {
      const pageIdentifier = `--- PAGE ${pageNumber} ---\n`;
      const parts = prevText.split(pageIdentifier);
      if (parts.length > 1) {
        const beforePage = parts[0];
        const pageContentAndAfter = parts.slice(1).join(pageIdentifier);

        const pageContentParts = pageContentAndAfter.split(originalText);
        if (pageContentParts.length > 1) {
          const newPageContent = pageContentParts[0] + newText + pageContentParts.slice(1).join(originalText);
          return beforePage + pageIdentifier + newPageContent;
        }
      }
      return prevText;
    });
    setSuggestions((prevSuggestions) => prevSuggestions.filter(s => !(s.page === pageNumber && s.original === originalText)));
    setSelectedSuggestion(null);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-zinc-50 dark:bg-zinc-950 text-center">
        <Spinner />
        <h2 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">Loading Document and Suggestions...</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Please wait.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-zinc-50 dark:bg-zinc-950 text-center text-red-600 dark:text-red-400">
        <h2 className="text-2xl font-semibold">Error: {error}</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Please go back and try uploading again.</p>
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
      <div className="max-w-6xl w-full bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 flex flex-col lg:flex-row gap-8">
        {/* Document Viewer Area */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-7 text-center">Document Editor</h1>
          <PdfViewer
            extractedText={extractedText}
            suggestions={suggestions}
            selectedSuggestion={selectedSuggestion}
            onSuggestionClick={setSelectedSuggestion}
            onApplyEdit={handleApplyEdit}
          />
        </div>

        {/* Suggestion Sidebar Area */}
        <div className="lg:w-1/3">
          <SuggestionSidebar
            suggestions={suggestions}
            onSuggestionClick={setSelectedSuggestion}
            selectedSuggestion={selectedSuggestion}
            onEditPage={(pageNum) => {
              console.log(`Edit page ${pageNum} - functionality implemented via direct highlight interaction.`);
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
}
