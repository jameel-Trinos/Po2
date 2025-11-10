"use client";

import React, { useEffect, useState } from 'react';
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
import { Download } from 'lucide-react';
import type { Suggestion } from '../../lib/types/proofreader';
import { analyzePdfContent } from '../../lib/services/geminiService';

export default function EditorPage() {
  const searchParams = useSearchParams();
  const documentId = searchParams.get('documentId');
  const { getDocumentPdfUrl, getDocumentContent, saveProjectAsDraft, getDocument } = useAppContext();

  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rawText, setRawText] = useState<string>('');
  const [editableHtml, setEditableHtml] = useState<string>('');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState<number | null>(null);
  const [acceptedIndices, setAcceptedIndices] = useState<number[]>([]);
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [projectName, setProjectName] = useState<string>('');

  useEffect(() => {
    if (!documentId) {
      setError("No document ID provided.");
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const url = getDocumentPdfUrl(documentId);
      if (url) {
        setPdfUrl(url);
      } else {
        // Don't set error - just leave pdfUrl as null so we can still show editable content
        setPdfUrl(null);
      }
    } catch (e) {
      // Don't block the page if PDF can't be loaded - still allow editing
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
      setRawText(content);
      const html = content.split('\n').map(l => l === '' ? '<br/>' : l).join('<br/>');
      setEditableHtml(html);
      analyzePdfContent(content)
        .then(ai => setSuggestions(ai))
        .catch(e => console.error(e));
    }
  }, [documentId, getDocumentContent, getDocument]);

  // Highlight selected suggestion in editableHtml
  const getHighlightedHtml = (): string => {
    if (selectedSuggestionIndex === null) return editableHtml;
    const s = suggestions[selectedSuggestionIndex];
    if (!s) return editableHtml;
    // Avoid duplicating marks; strip previous marks first
    const clean = editableHtml.replace(/<mark data-po2="1" class="[^"]*">([\s\S]*?)<\/mark>/g, '$1');
    // Replace first occurrence of original with a marked version
    const escaped = s.original.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escaped, 'i');
    return clean.replace(regex, `<mark data-po2="1" class="bg-yellow-200 dark:bg-yellow-300/40">$&</mark>`);
  };

  const handleApplySuggestion = (index: number) => {
    const s = suggestions[index];
    if (!s) return;
    const escaped = s.original.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escaped, 'i');
    const clean = editableHtml.replace(/<mark data-po2="1" class="[^"]*">([\s\S]*?)<\/mark>/g, '$1');
    const replacedOnce = clean.replace(regex, s.suggestion);
    setEditableHtml(replacedOnce);
    // Track accepted (applied) suggestions for counters
    setAcceptedIndices(prev => [...prev, index]);
    setSuggestions(prev => prev.filter((_, i) => i !== index));
    setSelectedSuggestionIndex(null);
  };

  const handleSaveAsDraft = () => {
    if (!documentId) return;
    
    // If project name exists, save directly; otherwise show dialog
    if (projectName.trim()) {
      saveProjectAsDraft(projectName.trim(), documentId);
      // Show success feedback (you could use toast here)
      alert('Project saved as draft!');
    } else {
      setSaveDialogOpen(true);
    }
  };

  const handleConfirmSave = () => {
    if (!documentId || !projectName.trim()) return;
    saveProjectAsDraft(projectName.trim(), documentId);
    setSaveDialogOpen(false);
    alert('Project saved as draft!');
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
            <CardHeader className="pb-2 flex items-center justify-between">
              <CardTitle className="text-gray-900 dark:text-gray-50">Document Viewer</CardTitle>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download document
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              {pdfUrl ? (
                <iframe
                  src={pdfUrl}
                  className="w-full h-[88vh] rounded-b-xl"
                  title="PDF Viewer"
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-[88vh] p-6 text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    PDF not available for this document.
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">
                    You can still edit the content below.
                  </div>
                </div>
              )}
              {/* Editable pane below the viewer */}
              <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
                <div className="text-sm font-medium mb-2 text-zinc-700 dark:text-zinc-200">Editable content</div>
                <div
                  id="po2-editable"
                  className="prose prose-zinc dark:prose-invert max-w-none outline-none min-h-[240px] bg-zinc-50/40 dark:bg-zinc-900/40 rounded-md p-3"
                  contentEditable
                  suppressContentEditableWarning
                  dangerouslySetInnerHTML={{ __html: getHighlightedHtml() }}
                  onInput={(e) => setEditableHtml((e.target as HTMLDivElement).innerHTML)}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <aside className="md:col-span-1">
          <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-emerald-600 dark:text-emerald-400">
                  PO2 compliance pre-checks
                </CardTitle>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <div className="flex items-center justify-between rounded-md border border-zinc-200 dark:border-zinc-800 px-3 py-2">
                  <div className="text-sm text-zinc-600 dark:text-zinc-300">All suggestions</div>
                  <Badge variant="secondary" className="rounded-full">
                    {suggestions.length + acceptedIndices.length}
                  </Badge>
                </div>
                <div className="flex items-center justify-between rounded-md border border-zinc-200 dark:border-zinc-800 px-3 py-2">
                  <div className="text-sm text-zinc-600 dark:text-zinc-300">Accepted</div>
                  <Badge variant="secondary" className="rounded-full">
                    {acceptedIndices.length}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge className="bg-amber-600 hover:bg-amber-600 text-white">Misleading</Badge>
                  <span className="text-zinc-400">•</span>
                  <Badge variant="outline" className="border-zinc-300 dark:border-zinc-700">Unsubstantiated Claims</Badge>
                  <div className="ml-auto">
                    <Badge variant="secondary">Page 1</Badge>
                  </div>
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                  SEC Marketing Rule 206(4)-1(a)(1), SEC Marketing Rule 206(4)-1(a)(6), SEC Marketing Rule 206(4)-1(d)(1)
                </div>
                {/* Dynamic suggestions list */}
                <div className="space-y-3">
                  {suggestions.length === 0 ? (
                    <p className="text-sm text-zinc-600 dark:text-zinc-300">No suggestions yet.</p>
                  ) : (
                    suggestions.map((s, i) => (
                      <div
                        key={`${s.page}-${i}-${s.original.slice(0, 16)}`}
                        className={`rounded-md border p-3 cursor-pointer transition ${
                          selectedSuggestionIndex === i
                            ? 'border-emerald-400 bg-emerald-50/50 dark:bg-emerald-900/20'
                            : 'border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/40'
                        }`}
                        onClick={() => setSelectedSuggestionIndex(i)}
                      >
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="rounded-full">Page {s.page}</Badge>
                          <span className="text-xs text-zinc-500">Click to highlight</span>
                        </div>
                        <div className="mt-2 text-sm text-zinc-800 dark:text-zinc-100">
                          {s.explanation}
                        </div>
                        <div className="mt-2 text-sm">
                          <span className="text-zinc-500">Original:</span>{' '}
                          <span className="font-medium">{s.original}</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-zinc-500">Suggestion:</span>{' '}
                          <span className="font-medium text-emerald-700 dark:text-emerald-300">{s.suggestion}</span>
                        </div>
                        <div className="mt-3 flex gap-2">
                          <Button size="sm" onClick={(e) => { e.stopPropagation(); handleApplySuggestion(i); }}>
                            Apply
                          </Button>
                          <Button size="sm" variant="outline" onClick={(e) => { e.stopPropagation(); setSelectedSuggestionIndex(i); }}>
                            Tell me why
                          </Button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="font-medium text-zinc-900 dark:text-zinc-50">Recommendations</div>
                  <p className="text-sm text-emerald-700 dark:text-emerald-300">
                    Correct the statement to ‘Performance data represents past performance and does not guarantee
                    future results.’ If gross performance is calculated and available for this fund/share class,
                    show it with equal prominence to net performance.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <Button variant="outline" onClick={handleSaveAsDraft}>Save as draft</Button>
                  <Button>Send file to</Button>
                </div>

                <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
                  <DialogContent className="bg-white dark:bg-zinc-900">
                    <DialogHeader>
                      <DialogTitle className="text-gray-900 dark:text-gray-50">Save Project as Draft</DialogTitle>
                      <DialogDescription className="text-gray-600 dark:text-gray-400">
                        Enter a name for your project
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="project-name" className="text-gray-900 dark:text-gray-50">
                          Project Name
                        </Label>
                        <Input
                          id="project-name"
                          value={projectName}
                          onChange={(e) => setProjectName(e.target.value)}
                          placeholder="Enter project name"
                          className="bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-50"
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && projectName.trim()) {
                              handleConfirmSave();
                            }
                          }}
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setSaveDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleConfirmSave} disabled={!projectName.trim()}>
                        Save
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </motion.div>
  );
}
