"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Upload, FileText, FileType2, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface DocumentUploadProps {
  onUploadSuccess: (data: {
    documentId: string;
    fileType: 'pdf' | 'docx';
    htmlContent: string;
    extractedText: string;
    suggestions: any[];
    pdfUrl?: string; // Only for PDF files
  }) => void;
  onError: (error: string) => void;
}

export default function DocumentUpload({ onUploadSuccess, onError }: DocumentUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    setError(null);

    if (selectedFile) {
      const fileName = selectedFile.name.toLowerCase();
      const isValidFile = fileName.endsWith('.docx') || fileName.endsWith('.pdf');
      
      if (!isValidFile) {
        setError('Please select a .docx or .pdf file');
        setFile(null);
      }
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a document to upload.');
      return;
    }

    setIsUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('file', file);

      console.log('📤 Uploading file to /api/compliance/analyze...');
      const response = await fetch('/api/compliance/analyze', {
        method: 'POST',
        body: formData,
      });

      console.log('📥 Response status:', response.status, response.statusText);
      
      if (!response.ok) {
        console.log('⚠️ Response is not OK, handling error...');
        
        // Initialize with guaranteed default values
        const defaultError = {
          error: 'Server Error',
          details: `Request failed with status ${response.status}: ${response.statusText}`
        };
        
        let errorData = { ...defaultError };
        console.log('🔧 Initialized errorData with defaults:', errorData);
        
        try {
          console.log('📖 Attempting to read response body...');
          // Clone the response so we can read it multiple times if needed
          const clonedResponse = response.clone();
          const text = await clonedResponse.text();
          console.log('📄 Raw error response text:', text);
          console.log('📄 Response text length:', text.length);
          console.log('📄 Response Content-Type:', response.headers.get('content-type'));
          console.log('📄 Text is truthy:', !!text);
          console.log('📄 Trimmed text length:', text?.trim().length);
          
          // Only try to parse if we have content
          if (text && text.trim()) {
            console.log('✅ Have text content, attempting to parse JSON...');
            try {
              const parsed = JSON.parse(text);
              console.log('📄 Successfully parsed JSON:', parsed);
              console.log('📄 Parsed type:', typeof parsed);
              console.log('📄 Parsed keys:', parsed ? Object.keys(parsed) : 'null');
              
              // Check if the parsed data has meaningful content
              if (parsed && typeof parsed === 'object' && Object.keys(parsed).length > 0) {
                console.log('✅ Parsed object has keys');
                // Ensure we have at least error or details
                if (parsed.error || parsed.details || parsed.message) {
                  console.log('✅ Found error/details/message in parsed data');
                  errorData = {
                    error: parsed.error || 'Server error',
                    details: parsed.details || parsed.message || 'An error occurred'
                  };
                  console.log('✅ Updated errorData:', errorData);
                } else {
                  // Has keys but no error/details - might be a different format
                  console.warn('⚠️ Parsed JSON has no error/details/message fields:', parsed);
                  errorData = { 
                    error: 'Server error', 
                    details: `Server returned: ${JSON.stringify(parsed)}`
                  };
                  console.log('✅ Updated errorData with stringified response:', errorData);
                }
              } else {
                // Empty object or invalid JSON
                console.warn('⚠️ Received empty or invalid JSON from server');
                errorData = { 
                  error: 'Empty Response', 
                  details: `The server returned an empty response (HTTP ${response.status}). This may indicate an unhandled error in the API.` 
                };
                console.log('✅ Updated errorData with empty response message:', errorData);
              }
            } catch (jsonError) {
              console.error('❌ JSON parse error:', jsonError);
              console.log('Using raw text as error details');
              // If JSON parsing fails, use the raw text as details
              errorData = { 
                error: 'Invalid Response Format', 
                details: text.length > 500 ? text.substring(0, 500) + '...' : text
              };
              console.log('✅ Updated errorData with raw text:', errorData);
            }
          } else {
            console.warn('⚠️ Empty error response body (no text)');
            errorData = { 
              error: 'Empty Response', 
              details: `The server returned an error (HTTP ${response.status}) but no response body. Please check the server logs.` 
            };
            console.log('✅ Updated errorData for empty body:', errorData);
          }
        } catch (readError) {
          console.error('❌ Failed to read error response:', readError);
          console.log('Keeping default errorData');
          // errorData already has default values, no need to change
        }
        
        // Final safety check - ensure errorData is never empty
        if (!errorData || typeof errorData !== 'object' || Object.keys(errorData).length === 0) {
          console.error('🚨 CRITICAL: errorData is empty or invalid, resetting to default');
          errorData = { ...defaultError };
        }
        
        // Ensure at least one of error or details is present
        if (!errorData.error && !errorData.details) {
          console.error('🚨 CRITICAL: errorData has no error or details, adding defaults');
          errorData = { ...defaultError };
        }
        
        console.error('❌ Final error data:', JSON.stringify(errorData));
        console.error('❌ Final error data keys:', Object.keys(errorData));
        console.error('❌ Final error data.error:', errorData.error);
        console.error('❌ Final error data.details:', errorData.details);
        
        // Build error message with multiple fallbacks
        let errorMsg = 'Unknown error occurred';
        
        if (errorData.error && errorData.details) {
          errorMsg = `${errorData.error}: ${errorData.details}`;
        } else if (errorData.error) {
          errorMsg = errorData.error;
        } else if (errorData.details) {
          errorMsg = errorData.details;
        } else {
          errorMsg = `Failed to analyze document (HTTP ${response.status}: ${response.statusText})`;
        }
        
        console.error('❌ Final error message:', errorMsg);
        throw new Error(errorMsg);
      }

      const data = await response.json();
      console.log('✅ Analysis complete! Response data:', data);
      onUploadSuccess(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to process the file.';
      setError(errorMessage);
      onError(errorMessage);
    } finally {
      setIsUploading(false);
    }
  };

  // Handle PDF to Word conversion
  const handleConvertToWord = async () => {
    if (!file) {
      setError('Please select a PDF file to convert.');
      return;
    }

    const fileName = file.name.toLowerCase();
    if (!fileName.endsWith('.pdf')) {
      setError('Only PDF files can be converted to Word.');
      return;
    }

    setIsConverting(true);
    setError(null);

    try {
      toast.info('Converting PDF to Word...', {
        description: 'This may take a few moments.'
      });

      // Create FormData to send to the API
      const formData = new FormData();
      formData.append('file', file);

      console.log('📤 Converting PDF to DOCX via /api/pdf-to-docx...');
      const response = await fetch('/api/pdf-to-docx', {
        method: 'POST',
        body: formData,
      });

      console.log('📥 Conversion response status:', response.status, response.statusText);

      if (!response.ok) {
        let errorMessage = 'Failed to convert PDF to Word';
        
        try {
          const contentType = response.headers.get('content-type');
          const text = await response.text();
          
          if (contentType && contentType.includes('application/json') && text) {
            const errorData = JSON.parse(text);
            errorMessage = errorData.message || errorData.error || errorData.details || errorMessage;
          } else if (text) {
            errorMessage = text;
          }
        } catch (e) {
          console.error('Error reading response:', e);
        }
        
        throw new Error(errorMessage);
      }

      // Get the DOCX blob
      const docxBlob = await response.blob();
      console.log('✅ PDF converted to DOCX, blob size:', docxBlob.size);

      // Create a new File object from the blob
      const docxFile = new File([docxBlob], file.name.replace(/\.pdf$/i, '.docx'), {
        type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      });

      toast.success('PDF converted to Word!', {
        description: 'Now analyzing the document for compliance...'
      });

      // Now upload the converted DOCX file for analysis
      const analysisFormData = new FormData();
      analysisFormData.append('file', docxFile);

      console.log('📤 Uploading converted DOCX to /api/compliance/analyze...');
      const analysisResponse = await fetch('/api/compliance/analyze', {
        method: 'POST',
        body: analysisFormData,
      });

      console.log('📥 Analysis response status:', analysisResponse.status, analysisResponse.statusText);
      
      if (!analysisResponse.ok) {
        const defaultError = {
          error: 'Analysis Error',
          details: `Request failed with status ${analysisResponse.status}: ${analysisResponse.statusText}`
        };
        
        let errorData = { ...defaultError };
        
        try {
          const text = await analysisResponse.text();
          
          if (text && text.trim()) {
            try {
              const parsed = JSON.parse(text);
              if (parsed && (parsed.error || parsed.details || parsed.message)) {
                errorData = {
                  error: parsed.error || 'Server error',
                  details: parsed.details || parsed.message || 'An error occurred'
                };
              } else {
                errorData = { 
                  error: 'Server error', 
                  details: `Server returned: ${JSON.stringify(parsed)}`
                };
              }
            } catch (jsonError) {
              errorData = { 
                error: 'Invalid Response Format', 
                details: text.length > 500 ? text.substring(0, 500) + '...' : text
              };
            }
          } else {
            errorData = { 
              error: 'Empty Response', 
              details: `The server returned an error (HTTP ${analysisResponse.status}) but no response body.` 
            };
          }
        } catch (readError) {
          console.error('Failed to read error response:', readError);
        }
        
        const errorMsg = errorData.error && errorData.details 
          ? `${errorData.error}: ${errorData.details}`
          : errorData.error || errorData.details || `Failed to analyze document (HTTP ${analysisResponse.status})`;
        
        throw new Error(errorMsg);
      }

      const data = await analysisResponse.json();
      console.log('✅ Analysis complete! Response data:', data);
      
      toast.success('Conversion and analysis complete!');
      onUploadSuccess(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to convert PDF to Word.';
      console.error('❌ Conversion error:', errorMessage);
      setError(errorMessage);
      onError(errorMessage);
      toast.error('Conversion failed', {
        description: errorMessage
      });
    } finally {
      setIsConverting(false);
    }
  };

  return (
    <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-gray-50 flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Upload Document for Compliance Review
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {error && (
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        <div className="space-y-2">
          <Label htmlFor="file-upload" className="text-gray-700 dark:text-gray-300">
            Select Document (PDF or DOCX)
          </Label>
          <div className="flex gap-3">
            <Input
              id="file-upload"
              type="file"
              accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={handleFileChange}
              disabled={isUploading}
              className="flex-1"
            />
            <Button 
              onClick={handleUpload} 
              disabled={!file || isUploading}
              className="whitespace-nowrap"
            >
              <Upload className="h-4 w-4 mr-2" />
              {isUploading ? 'Analyzing...' : 'Analyze'}
            </Button>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Supported formats: PDF, DOCX (up to 10MB). Analysis checks for FINRA, SEC, and grammar compliance.
          </p>
        </div>

        {file && !error && (
          <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  <span className="font-medium">Selected:</span> {file.name}
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                  Size: {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
              
              {/* Show Convert to Word icon for PDF files */}
              {file.name.toLowerCase().endsWith('.pdf') && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleConvertToWord}
                        disabled={isConverting || isUploading}
                        className="ml-2 h-8 w-8 p-0"
                      >
                        {isConverting ? (
                          <Loader2 className="h-4 w-4 animate-spin text-blue-600 dark:text-blue-400" />
                        ) : (
                          <FileType2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        )}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Convert PDF to Word for editing</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

