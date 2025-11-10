"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

import { View, Document, DocumentStatus } from '../../lib/types';
// import * as pdfjs from 'pdfjs-dist'; // Remove direct import

import Spinner from '../../components/Spinner';
import { Upload } from 'lucide-react';
import { useAppContext } from '../../lib/AppContext';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// Set the worker source for pdfjs-dist (will be set after dynamic import)
// pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs'; // Remove direct setting

const DOCUMENT_TYPES = [
  'Fact Sheet',
  'White Paper',
  'Presentation',
  'Report',
  'Brochure',
  'Other',
];

const PRODUCTION_FREQUENCIES = [
  'Daily',
  'Weekly',
  'Monthly',
  'Quarterly',
  'Annually',
  'Ad-hoc',
];

const TARGET_AUDIENCES = [
  'Retail',
  'Institutional',
  'Advisors',
  'Internal',
  'High Net Worth',
];

const FUND_TYPES = [
  'Open-ended Fund',
  'Close-ended Fund',
  'ETF',
  'Hedge Fund',
  'Private Equity',
  'Real Estate Fund',
];

const UploadPage: React.FC<{}> = () => {

  const { onUploadComplete } = useAppContext();
  const router = useRouter();

  const [projectName, setProjectName] = useState('New Marketing Document');

  const [documentType, setDocumentType] = useState('Fact Sheet');

  const [title, setTitle] = useState('');

  const [file, setFile] = useState<File | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);



  // State for new fields from original spec

  const [firstUseDate, setFirstUseDate] = useState(new Date().toISOString().split('T')[0]);

  const [asOfContentDate, setAsOfContentDate] = useState(new Date().toISOString().split('T')[0]);

  const [productionFrequency, setProductionFrequency] = useState('Monthly');

  const [targetAudience, setTargetAudience] = useState('Retail');

  const [isProductMentioned, setIsProductMentioned] = useState(true);

  const [fundType, setFundType] = useState('Open-ended Fund');

  const [pdfjsLib, setPdfjsLib] = useState<any>(null);

  useEffect(() => {
    // Dynamically import pdfjs-dist on the client-side
    const loadPdfjs = async () => {
      const pdfjs = await import(/* webpackChunkName: "pdfjs-dist", ssr: false */ 'pdfjs-dist');
      pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs';
      setPdfjsLib(pdfjs);
    };
    loadPdfjs();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    if (!file) {

      setError("Please select a document to upload.");

      return;

    }

    if (!title) {

        setTitle(file.name.replace(/\.[^/.]+$/, ""));

    }

    setIsLoading(true);

    setError(null);



    try {
        if (!pdfjsLib) {
          setError("PDF.js library not loaded. Please try again.");
          setIsLoading(false);
          return;
        }

        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        let extractedText = '';
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          const pageText = textContent.items.map((item: any) => item.str).join(' ');
          extractedText += `--- PAGE ${i} ---\n${pageText}\n`;
        }

        const newDocId = `doc-${Date.now()}`;

        const newDoc: Document = {

          id: newDocId,

          projectName,

          title: title || file.name.replace(/\.[^/.]+$/, ""),

          type: documentType,

          status: DocumentStatus.InReview,

          lastUpdated: new Date().toISOString().split('T')[0],

        };



        // Simulate a delay for a better UX, then complete with mock data

        setTimeout(() => {

          onUploadComplete(newDoc, extractedText);

          router.push(`/editor?documentId=${encodeURIComponent(newDoc.id)}`);

        }, 1000);

        

    } catch(e) {

        console.error("Failed to process file:", e);

        setError("Could not read or process the file. Please ensure it's a valid PDF and try again.");

        setIsLoading(false);

    }

  };



  if (isLoading) {
      return (
          <div className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-100 via-slate-100 to-slate-200 px-6 text-center dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
              <div className="pointer-events-none absolute inset-0 -z-10">
                  <div className="absolute left-1/3 top-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl dark:bg-blue-500/15" aria-hidden />
                  <div className="absolute right-10 bottom-10 h-80 w-80 rounded-full bg-purple-500/20 blur-[120px] dark:bg-purple-500/15" aria-hidden />
              </div>
              <Card className="w-full max-w-md border-white/20 bg-white/60 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.25)] backdrop-blur-2xl transition-shadow duration-500 dark:border-white/10 dark:bg-zinc-900/70">
                  <CardContent className="flex flex-col items-center gap-4 text-center">
                      <Spinner />
                      <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Processing Document...</CardTitle>
                      <CardDescription className="text-base text-gray-600 dark:text-gray-300">
                          Finalizing your upload. This should only take a moment.
                      </CardDescription>
                  </CardContent>
              </Card>
          </div>
      );
  }



  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-100 via-slate-100 to-slate-200 p-4 sm:p-8 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-12 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/25 blur-3xl dark:bg-blue-500/15" aria-hidden />
        <div className="absolute bottom-0 right-12 h-80 w-80 rounded-full bg-violet-500/20 blur-[140px] dark:bg-violet-500/15" aria-hidden />
        <div className="absolute -left-10 bottom-16 h-56 w-56 rounded-full bg-cyan-400/20 blur-[120px] dark:bg-cyan-400/10" aria-hidden />
      </div>
      <Card className="relative w-full max-w-4xl border border-white/20 bg-white/60 shadow-[0_25px_70px_rgba(15,23,42,0.28)] backdrop-blur-2xl transition-all duration-500 hover:shadow-[0_35px_90px_rgba(15,23,42,0.35)] dark:border-white/10 dark:bg-zinc-900/70">
        <CardHeader className="space-y-3 text-center">
          <div className="mx-auto h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 p-[1px] shadow-inner shadow-blue-500/40 dark:shadow-blue-500/20">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-white/80 backdrop-blur-md dark:bg-zinc-950/70">
              <Upload className="h-6 w-6 text-blue-600 dark:text-blue-300" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Upload Document
          </CardTitle>
          <CardDescription className="text-base text-gray-600 dark:text-gray-300">
            Provide your document details and effortlessly process marketing materials with compliance-ready metadata.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              role="alert"
              aria-live="polite"
            >
              <Alert className="border border-red-500/30 bg-red-500/10 text-red-600 backdrop-blur-md transition-colors duration-300 hover:border-red-500/40 dark:border-red-400/30 dark:bg-red-500/10 dark:text-red-200">
                <AlertTitle className="font-semibold">Upload error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            </motion.div>
          )}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="projectName" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Project Name
                </Label>
                <Input
                  id="projectName"
                  type="text"
                  value={projectName}
                  onChange={e => setProjectName(e.target.value)}
                  required
                  className="h-12 rounded-2xl border-white/40 bg-white/70 text-base text-gray-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition-all duration-200 placeholder:text-gray-400 focus-visible:border-blue-400 focus-visible:ring-2 focus-visible:ring-blue-300/70 focus-visible:ring-offset-0 dark:border-white/15 dark:bg-zinc-900/70 dark:text-gray-50 dark:placeholder:text-gray-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="documentType" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Document Type
                </Label>
                <Select onValueChange={setDocumentType} value={documentType}>
                  <SelectTrigger
                    id="documentType"
                    className="h-12 w-full rounded-2xl border-white/40 bg-white/70 text-base backdrop-blur-md transition-all duration-200 focus:ring-2 focus:ring-blue-300/70 dark:border-white/15 dark:bg-zinc-900/70"
                  >
                    <SelectValue placeholder="Select a document type" />
                  </SelectTrigger>
                  <SelectContent className="backdrop-blur-lg">
                    {DOCUMENT_TYPES.map(t => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="title" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Title of the Piece (Optional)
                </Label>
                <Input
                  id="title"
                  type="text"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  placeholder="Defaults to filename if left blank"
                  className="h-12 rounded-2xl border-white/40 bg-white/70 text-base transition-all duration-200 placeholder:text-gray-400 focus-visible:border-blue-400 focus-visible:ring-2 focus-visible:ring-blue-300/70 dark:border-white/15 dark:bg-zinc-900/70 dark:text-gray-50 dark:placeholder:text-gray-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="firstUseDate" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Anticipated First Use Date
                </Label>
                <Input
                  id="firstUseDate"
                  type="date"
                  value={firstUseDate}
                  onChange={e => setFirstUseDate(e.target.value)}
                  required
                  className="h-12 rounded-2xl border-white/40 bg-white/70 text-base transition-all duration-200 focus-visible:border-blue-400 focus-visible:ring-2 focus-visible:ring-blue-300/70 dark:border-white/15 dark:bg-zinc-900/70 dark:text-gray-50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="asOfContentDate" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  As of Content Date
                </Label>
                <Input
                  id="asOfContentDate"
                  type="date"
                  value={asOfContentDate}
                  onChange={e => setAsOfContentDate(e.target.value)}
                  required
                  className="h-12 rounded-2xl border-white/40 bg-white/70 text-base transition-all duration-200 focus-visible:border-blue-400 focus-visible:ring-2 focus-visible:ring-blue-300/70 dark:border-white/15 dark:bg-zinc-900/70 dark:text-gray-50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="productionFrequency" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Production Frequency
                </Label>
                <Select onValueChange={setProductionFrequency} value={productionFrequency}>
                  <SelectTrigger
                    id="productionFrequency"
                    className="h-12 w-full rounded-2xl border-white/40 bg-white/70 text-base backdrop-blur-md transition-all duration-200 focus:ring-2 focus:ring-blue-300/70 dark:border-white/15 dark:bg-zinc-900/70"
                  >
                    <SelectValue placeholder="Select production frequency" />
                  </SelectTrigger>
                  <SelectContent className="backdrop-blur-lg">
                    {PRODUCTION_FREQUENCIES.map(f => (
                      <SelectItem key={f} value={f}>
                        {f}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="targetAudience" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Target Audience
                </Label>
                <Select onValueChange={setTargetAudience} value={targetAudience}>
                  <SelectTrigger
                    id="targetAudience"
                    className="h-12 w-full rounded-2xl border-white/40 bg-white/70 text-base backdrop-blur-md transition-all duration-200 focus:ring-2 focus:ring-blue-300/70 dark:border-white/15 dark:bg-zinc-900/70"
                  >
                    <SelectValue placeholder="Select target audience" />
                  </SelectTrigger>
                  <SelectContent className="backdrop-blur-lg">
                    {TARGET_AUDIENCES.map(a => (
                      <SelectItem key={a} value={a}>
                        {a}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-3 md:col-span-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="isProductMentioned" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    Is a product mentioned?
                  </Label>
                </div>
                <RadioGroup
                  defaultValue={isProductMentioned ? 'yes' : 'no'}
                  onValueChange={value => setIsProductMentioned(value === 'yes')}
                  className="flex flex-wrap gap-4 rounded-2xl border border-white/30 bg-white/60 p-4 backdrop-blur-xl transition-colors duration-200 dark:border-white/10 dark:bg-zinc-900/60"
                >
                  <div className="flex items-center gap-2 rounded-xl border border-transparent bg-white/80 px-4 py-2 transition-all duration-200 hover:border-blue-300 hover:shadow-md hover:shadow-blue-500/20 dark:bg-zinc-800/70">
                    <RadioGroupItem value="yes" id="r1" className="text-blue-600 dark:text-blue-300" />
                    <Label htmlFor="r1" className="text-sm font-medium text-gray-800 dark:text-gray-100">
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-transparent bg-white/80 px-4 py-2 transition-all duration-200 hover:border-blue-300 hover:shadow-md hover:shadow-blue-500/20 dark:bg-zinc-800/70">
                    <RadioGroupItem value="no" id="r2" className="text-blue-600 dark:text-blue-300" />
                    <Label htmlFor="r2" className="text-sm font-medium text-gray-800 dark:text-gray-100">
                      No
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              {isProductMentioned && (
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="fundType" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    Fund Type
                  </Label>
                  <Select onValueChange={setFundType} value={fundType}>
                    <SelectTrigger
                      id="fundType"
                      className="h-12 w-full rounded-2xl border-white/40 bg-white/70 text-base backdrop-blur-md transition-all duration-200 focus:ring-2 focus:ring-blue-300/70 dark:border-white/15 dark:bg-zinc-900/70"
                    >
                      <SelectValue placeholder="Select fund type" />
                    </SelectTrigger>
                    <SelectContent className="backdrop-blur-lg">
                      {FUND_TYPES.map(f => (
                        <SelectItem key={f} value={f}>
                          {f}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="file-upload" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Document File
                </Label>
                <div className="group mt-1 flex cursor-pointer justify-center rounded-3xl border border-dashed border-white/40 bg-white/60 px-6 py-8 transition-all duration-300 hover:border-blue-400 hover:bg-white/80 hover:shadow-xl hover:shadow-blue-500/15 dark:border-white/10 dark:bg-zinc-900/70 dark:hover:border-blue-400/60 dark:hover:bg-zinc-900/80">
                  <div className="space-y-3 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 p-[1px] shadow-inner shadow-blue-500/30 transition-transform duration-300 group-hover:scale-105 dark:shadow-blue-500/15">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-white/80 backdrop-blur-md dark:bg-zinc-950/70">
                        <Upload className="h-7 w-7 text-blue-600 dark:text-blue-300" />
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-700 dark:text-gray-200">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-full bg-blue-600/10 px-4 py-1.5 font-medium text-blue-700 outline-none transition-colors duration-200 hover:bg-blue-600/20 focus-visible:ring-2 focus-visible:ring-blue-400 dark:text-blue-300"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          onChange={e => setFile(e.target.files ? e.target.files[0] : null)}
                        />
                      </label>
                      <p className="text-sm text-gray-500 dark:text-gray-400">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Any text-based file, up to 10MB</p>
                    {file && (
                      <p className="text-sm font-medium text-green-600 transition-colors duration-200 dark:text-green-400">
                        {file.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 border-t border-white/20 pt-6 backdrop-blur-sm dark:border-white/10 sm:flex-row sm:justify-end">
              <Button
                type="button"
                onClick={() => router.push('/dashboard')}
                variant="outline"
                className="h-11 rounded-full border-white/40 bg-white/70 px-6 text-base font-medium shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/20 dark:border-white/15 dark:bg-zinc-900/70"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="relative h-11 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 px-8 text-base font-semibold shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-slate-100 dark:shadow-blue-500/20"
              >
                <span className="relative z-10">Upload File</span>
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-0 z-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.25),rgba(255,255,255,0.05))] opacity-0"
                  initial={false}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );

};



export default UploadPage;
