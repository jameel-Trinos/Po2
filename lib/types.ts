export enum DocumentStatus {
    InReview = 'In Review',
    Approved = 'Approved',
    Rejected = 'Rejected',
    PendingUpload = 'Pending Upload',
  }
  
  export interface Document {
    id: string;
    projectName: string;
    title: string;
    type: string;
    status: DocumentStatus;
    lastUpdated: string;
  }
  
  export interface DocumentReview {
    id: string;
    documentId: string;
    reviewerId: string;
    comments: string;
    status: 'pending' | 'approved' | 'rejected';
  }
  
  export type View = 'dashboard' | 'upload' | 'review';
