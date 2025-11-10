"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { View, Document } from './types';

export interface Project {
  id: string;
  name: string;
  status: 'ACTIVE' | 'DRAFT' | 'COMPLETED';
  lastActivity: string;
  collaborators: number;
  documentId?: string;
}

interface AppContextType {
  navigateTo: (view: View) => void;
  onUploadComplete: (newDoc: Document, content: string, pdfUrl?: string) => void;
  getDocumentContent: (documentId: string) => string | undefined;
  getDocumentPdfUrl: (documentId: string) => string | undefined;
  saveProjectAsDraft: (projectName: string, documentId: string) => void;
  getProjects: () => Project[];
  getDocument: (documentId: string) => Document | undefined;
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
  const [documentPdfUrlMap, setDocumentPdfUrlMap] = useState<Map<string, string>>(() => {
    if (typeof window !== 'undefined') {
      const storedMap = localStorage.getItem('documentPdfUrlMap');
      return storedMap ? new Map(JSON.parse(storedMap)) : new Map();
    }
    return new Map();
  });
  const [documentsMap, setDocumentsMap] = useState<Map<string, Document>>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('documentsMap');
      return stored ? new Map(JSON.parse(stored)) : new Map();
    }
    return new Map();
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('documentContentMap', JSON.stringify(Array.from(documentContentMap.entries())));
    }
  }, [documentContentMap]);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('documentPdfUrlMap', JSON.stringify(Array.from(documentPdfUrlMap.entries())));
    }
  }, [documentPdfUrlMap]);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('documentsMap', JSON.stringify(Array.from(documentsMap.entries())));
    }
  }, [documentsMap]);

  const navigateTo = (view: View) => {
    setCurrentView(view);
    // In a Next.js app, you'd typically use next/router for actual navigation
    // For this example, we'll just update the state
    console.log(`Navigating to: ${view}`);
  };

  const onUploadComplete = (newDoc: Document, content: string, pdfUrl?: string) => {
    setDocumentContentMap(prevMap => new Map(prevMap.set(newDoc.id, content)));
    if (pdfUrl) {
      setDocumentPdfUrlMap(prevMap => new Map(prevMap.set(newDoc.id, pdfUrl)));
    }
    setDocumentsMap(prevMap => new Map(prevMap.set(newDoc.id, newDoc)));
    console.log("Upload Complete!", newDoc);
    navigateTo('dashboard'); // Example: navigate to dashboard after upload
  };

  const getDocumentContent = (documentId: string) => {
    return documentContentMap.get(documentId);
  };
  const getDocumentPdfUrl = (documentId: string) => {
    return documentPdfUrlMap.get(documentId);
  };

  const getDocument = (documentId: string): Document | undefined => {
    return documentsMap.get(documentId);
  };

  const saveProjectAsDraft = (projectName: string, documentId: string) => {
    const existingDoc = documentsMap.get(documentId);
    const project: Project = {
      id: documentId,
      name: projectName,
      status: 'DRAFT',
      lastActivity: new Date().toISOString(),
      collaborators: existingDoc ? 4 : 0,
      documentId: documentId,
    };
    
    // Store projects in localStorage
    if (typeof window !== 'undefined') {
      const storedProjects = localStorage.getItem('projects');
      const projects: Project[] = storedProjects ? JSON.parse(storedProjects) : [];
      
      // Check if project already exists
      const existingIndex = projects.findIndex(p => p.id === documentId);
      if (existingIndex >= 0) {
        projects[existingIndex] = project;
      } else {
        projects.push(project);
      }
      
      localStorage.setItem('projects', JSON.stringify(projects));
      
      // Dispatch custom event to notify other components
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('projectsUpdated'));
      }
    }
  };

  const getProjects = (): Project[] => {
    if (typeof window !== 'undefined') {
      const storedProjects = localStorage.getItem('projects');
      return storedProjects ? JSON.parse(storedProjects) : [];
    }
    return [];
  };

  return (
    <AppContext.Provider value={{ 
      navigateTo, 
      onUploadComplete, 
      getDocumentContent, 
      getDocumentPdfUrl,
      saveProjectAsDraft,
      getProjects,
      getDocument,
    }}>
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
