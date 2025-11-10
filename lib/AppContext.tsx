"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { View, Document } from './types';

interface AppContextType {
  navigateTo: (view: View) => void;
  onUploadComplete: (newDoc: Document, content: string) => void;
  getDocumentContent: (documentId: string) => string | undefined;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [documentContentMap, setDocumentContentMap] = useState<Map<string, string>>(() => {
    if (typeof window !== 'undefined') {
      const storedMap = localStorage.getItem('documentContentMap');
      return storedMap ? new Map(JSON.parse(storedMap)) : new Map();
    }
    return new Map();
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('documentContentMap', JSON.stringify(Array.from(documentContentMap.entries())));
    }
  }, [documentContentMap]);

  const navigateTo = (view: View) => {
    setCurrentView(view);
    // In a Next.js app, you'd typically use next/router for actual navigation
    // For this example, we'll just update the state
    console.log(`Navigating to: ${view}`);
  };

  const onUploadComplete = (newDoc: Document, content: string) => {
    setDocumentContentMap(prevMap => new Map(prevMap.set(newDoc.id, content)));
    console.log("Upload Complete!", newDoc);
    navigateTo('dashboard'); // Example: navigate to dashboard after upload
  };

  const getDocumentContent = (documentId: string) => {
    return documentContentMap.get(documentId);
  };

  return (
    <AppContext.Provider value={{ navigateTo, onUploadComplete, getDocumentContent }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};
