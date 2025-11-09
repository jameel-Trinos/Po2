"use client";

import { useSearchParams } from 'next/navigation';
import { useAppContext } from '../../lib/AppContext';

export default function EditorPage() {
  const searchParams = useSearchParams();
  const documentId = searchParams.get('documentId');
  const { getDocumentContent } = useAppContext();
  const documentContent = documentId ? getDocumentContent(documentId) : 'Loading document...';

  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 border-r overflow-auto">
        <h2 className="text-xl font-bold mb-4">Uploaded Document</h2>
        <p className="whitespace-pre-wrap">{documentContent}</p>
      </div>
      <div className="w-1/2 p-4">
        <h2 className="text-xl font-bold mb-4">Suggestions</h2>
        <p>Suggestions for improvement will appear here.</p>
      </div>
    </div>
  );
}
