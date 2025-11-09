"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

import { View, Document, DocumentStatus } from '../../lib/types';
// import * as pdfjs from 'pdfjs-dist'; // Remove direct import

import Spinner from '../../components/Spinner';
import { Upload } from 'lucide-react';
import { useAppContext } from '../../lib/AppContext';

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
      const pdfjs = await import('pdfjs-dist');
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

          <div className="flex flex-col items-center justify-center h-screen bg-zinc-50 dark:bg-zinc-950 text-center">

              <Spinner />

              <h2 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">Processing Document...</h2>

              <p className="text-gray-600 dark:text-gray-400 mt-2">Finalizing your upload.</p>

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

      <div className="max-w-4xl w-full bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800">

        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-7 text-center">Upload Document</h1>

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

        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Project Name */}

            <div>

              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Project Name</label>

              <input

                type="text"

                value={projectName}

                onChange={e => setProjectName(e.target.value)}

                required

                className="mt-1 block w-full rounded-md border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-50 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm transition-colors duration-200 p-2.5"

              />

            </div>

            {/* Document Type */}

            <div>

              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Document Type</label>

              <select

                value={documentType}

                onChange={e => setDocumentType(e.target.value)}

                required

                className="mt-1 block w-full rounded-md border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-50 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm transition-colors duration-200 p-2.5"

              >

                {DOCUMENT_TYPES.map(t => <option key={t}>{t}</option>)}

              </select>

            </div>

            {/* Title of the Piece (Optional) */}

            <div className="md:col-span-2">

              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Title of the Piece (Optional)</label>

              <input

                type="text"

                value={title}

                onChange={e => setTitle(e.target.value)}

                placeholder="Defaults to filename if left blank"

                className="mt-1 block w-full rounded-md border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-50 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm transition-colors duration-200 p-2.5"

              />

            </div>

            {/* Anticipated First Use Date */}

            <div>

              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Anticipated First Use Date</label>

              <input

                type="date"

                value={firstUseDate}

                onChange={e => setFirstUseDate(e.target.value)}

                required

                className="mt-1 block w-full rounded-md border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-50 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm transition-colors duration-200 p-2.5"

              />

            </div>

            {/* As of Content Date */}

            <div>

              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">As of Content Date</label>

              <input

                type="date"

                value={asOfContentDate}

                onChange={e => setAsOfContentDate(e.target.value)}

                required

                className="mt-1 block w-full rounded-md border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-50 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm transition-colors duration-200 p-2.5"

              />

            </div>

            {/* Production Frequency */}

            <div>

              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Production Frequency</label>

              <select

                value={productionFrequency}

                onChange={e => setProductionFrequency(e.target.value)}

                required

                className="mt-1 block w-full rounded-md border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-50 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm transition-colors duration-200 p-2.5"

              >

                {PRODUCTION_FREQUENCIES.map(f => <option key={f}>{f}</option>)}

              </select>

            </div>

            {/* Target Audience */}

            <div>

              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Target Audience</label>

              <select

                value={targetAudience}

                onChange={e => setTargetAudience(e.target.value)}

                required

                className="mt-1 block w-full rounded-md border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-50 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm transition-colors duration-200 p-2.5"

              >

                {TARGET_AUDIENCES.map(a => <option key={a}>{a}</option>)}

              </select>

            </div>

            {/* Is a product mentioned? */}

            <div className="md:col-span-2">

              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Is a product mentioned?</label>

              <div className="mt-2 flex items-center space-x-4">

                <label className="inline-flex items-center text-gray-900 dark:text-gray-50">

                  <input

                    type="radio"

                    className="form-radio text-blue-600 focus:ring-blue-500 h-4 w-4 transition-colors duration-200"

                    name="productMentioned"

                    value="yes"

                    checked={isProductMentioned}

                    onChange={() => setIsProductMentioned(true)}

                  />

                  <span className="ml-2">Yes</span>

                </label>

                <label className="inline-flex items-center text-gray-900 dark:text-gray-50">

                  <input

                    type="radio"

                    className="form-radio text-blue-600 focus:ring-blue-500 h-4 w-4 transition-colors duration-200"

                    name="productMentioned"

                    value="no"

                    checked={!isProductMentioned}

                    onChange={() => setIsProductMentioned(false)}

                  />

                  <span className="ml-2">No</span>

                </label>

              </div>

            </div>

            {/* Fund Type (Conditional) */}

            {isProductMentioned && (

              <div className="md:col-span-2">

                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Fund Type</label>

                <select

                  value={fundType}

                  onChange={e => setFundType(e.target.value)}

                  required

                  className="mt-1 block w-full rounded-md border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-50 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm transition-colors duration-200 p-2.5"

                >

                  {FUND_TYPES.map(f => <option key={f}>{f}</option>)}

                </select>

              </div>

            )}

            {/* Document File */}

            <div className="md:col-span-2">

              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Document File</label>

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

                        onChange={e => setFile(e.target.files ? e.target.files[0] : null)}

                      />

                    </label>

                    <p className="pl-1">or drag and drop</p>

                  </div>

                  <p className="text-xs text-gray-500 dark:text-gray-400">Any text-based file, up to 10MB</p>

                  {file && <p className="text-sm text-green-600 dark:text-green-400 mt-2">{file.name}</p>}

                </div>

              </motion.div>

            </div>

          </div>

          <div className="flex justify-end space-x-4 pt-6">

            <motion.button

              type="button"

              onClick={() => router.push('/dashboard')}

              whileHover={{ scale: 1.05 }}

              whileTap={{ scale: 0.95 }}

              className="bg-white dark:bg-zinc-800 py-2.5 px-5 border border-zinc-300 dark:border-zinc-700 rounded-full shadow-sm text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"

            >

              Cancel

            </motion.button>

            <motion.button

              type="submit"

              whileHover={{ scale: 1.05 }}

              whileTap={{ scale: 0.95 }}

              className="inline-flex justify-center py-2.5 px-5 border border-transparent shadow-sm text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"

            >

              Upload File

            </motion.button>

          </div>

        </form>

      </div>

    </motion.div>

  );

};



export default UploadPage;
