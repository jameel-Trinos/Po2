"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Upload, FileText } from 'lucide-react';

interface DocumentUploadProps {
  onUploadSuccess: (data: {
    documentId: string;
    htmlContent: string;
    extractedText: string;
    suggestions: any[];
  }) => void;
  onError: (error: string) => void;
}

export default function DocumentUpload({ onUploadSuccess, onError }: DocumentUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    setError(null);

    if (selectedFile && !selectedFile.name.toLowerCase().endsWith('.docx')) {
      setError('Please select a .docx file');
      setFile(null);
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

      const response = await fetch('/api/compliance/analyze', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMsg = errorData.details 
          ? `${errorData.error}: ${errorData.details}` 
          : errorData.error || 'Failed to analyze document';
        throw new Error(errorMsg);
      }

      const data = await response.json();
      onUploadSuccess(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to process the file.';
      setError(errorMessage);
      onError(errorMessage);
    } finally {
      setIsUploading(false);
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
            Select Word Document (.docx)
          </Label>
          <div className="flex gap-3">
            <Input
              id="file-upload"
              type="file"
              accept=".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
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
            Supported format: DOCX (up to 10MB). Analysis checks for FINRA, SEC, and grammar compliance.
          </p>
        </div>

        {file && !error && (
          <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-700 dark:text-blue-300">
              <span className="font-medium">Selected:</span> {file.name}
            </p>
            <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
              Size: {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

