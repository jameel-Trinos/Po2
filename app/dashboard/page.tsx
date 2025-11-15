"use client";

import { useUser, SignOutButton } from "@clerk/nextjs";
import {
  Search,
  Check,
  FolderOpen,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useAppContext } from "@/lib/AppContext";
import { toast } from "sonner";
import { motion } from "framer-motion";

const statusCards = [
  { title: "Documents in review", value: "0", icon: Search, color: "purple", bgColor: "bg-gradient-to-br from-purple-900/30 via-pink-800/20 to-sky-900/10", iconBg: "bg-white/6", iconColor: "text-purple-300" },
  { title: "Documents approved", value: "0", icon: Check, color: "sky", bgColor: "bg-gradient-to-br from-sky-900/30 via-teal-900/20 to-rose-900/10", iconBg: "bg-white/6", iconColor: "text-sky-300" },
  { title: "Needs action plan", value: "0", icon: FolderOpen, color: "orange", bgColor: "bg-gradient-to-br from-orange-900/30 via-amber-900/20 to-purple-900/8", iconBg: "bg-white/6", iconColor: "text-orange-300" },
];

interface Document {
  id: string;
  originalName: string;
  fileType: string;
  createdAt: string;
  updatedAt: string;
  suggestionCount: number;
}

export default function DashboardPage() {
  const { user, isLoaded } = useUser();
  const { getProjects } = useAppContext();
  const displayName = isLoaded
    ? user?.fullName ?? user?.firstName ?? user?.username ?? "there"
    : "there";
  const [documents, setDocuments] = useState<Document[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState<Array<{ id: string; name: string; status: string; lastActivity: string; collaborators: number; documentId?: string }>>([]);
  
  // Load documents from database
  useEffect(() => {
    if (!isLoaded || !user) {
      setIsLoading(false);
      return;
    }

    const loadDocuments = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/documents');
        
        if (!response.ok) {
          // Try to get error details from response
          let errorMessage = 'Failed to load documents';
          let errorDetails = '';
          
          try {
            const errorData = await response.json();
            errorMessage = errorData.error || errorMessage;
            errorDetails = errorData.details || errorData.message || '';
          } catch (e) {
            // If response is not JSON, use status text
            errorDetails = response.statusText || `HTTP ${response.status}`;
          }
          
          console.error('API Error Response:', {
            status: response.status,
            statusText: response.statusText,
            errorMessage,
            errorDetails
          });
          
          throw new Error(errorDetails || errorMessage);
        }
        
        const data = await response.json();
        
        if (data.success && data.documents) {
          setDocuments(data.documents);
          console.log('✅ Loaded documents from database:', data.documents.length);
        } else {
          console.warn('API returned success=false or missing documents:', data);
          setDocuments([]);
        }
      } catch (error) {
        console.error('Error loading documents:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        toast.error('Failed to load documents', {
          description: errorMessage
        });
        // Set empty array on error to prevent UI issues
        setDocuments([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadDocuments();
    
    // Listen for documents updated event
    const handleDocumentsUpdated = () => {
      loadDocuments();
    };
    
    window.addEventListener('documentsUpdated', handleDocumentsUpdated);
    
    return () => {
      window.removeEventListener('documentsUpdated', handleDocumentsUpdated);
    };
  }, [isLoaded, user]);

  // Also load projects from localStorage (for backward compatibility)
  useEffect(() => {
    const loadProjects = () => {
      const savedProjects = getProjects();
      setProjects(savedProjects);
    };
    
    loadProjects();
    
    // Listen for storage changes to update projects in real-time
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'projects') {
        loadProjects();
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Also listen for custom events (for same-tab updates)
    const handleCustomStorageChange = () => {
      loadProjects();
    };
    
    window.addEventListener('projectsUpdated', handleCustomStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('projectsUpdated', handleCustomStorageChange);
    };
  }, [getProjects]);

  // Combine database documents with localStorage projects
  // Convert documents to project-like format for display
  const databaseProjects = documents.map(doc => ({
    id: doc.id,
    name: doc.originalName,
    status: doc.suggestionCount > 0 ? 'IN_REVIEW' : 'APPROVED',
    lastActivity: doc.updatedAt,
    collaborators: 0, // Could be fetched if you add that to the schema
    documentId: doc.id,
  }));

  const allProjects = [
    ...databaseProjects,
    ...projects,
    // Fallback demo projects if no documents exist
    ...(databaseProjects.length === 0 && projects.length === 0 
      ? ["Blackrock Test Case", "TC17", "TC13", "TC12", "TC10", "TC8"].map((name, index) => ({
          id: `default-${index}`,
          name,
          status: 'ACTIVE',
          lastActivity: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
          collaborators: 4,
        }))
      : [])
  ];

  return (
    <div className="min-h-screen w-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#0f172a] via-[#050816] to-[#041022] text-slate-50 font-inter px-6 py-10 md:px-12">
      {/* Subtle floating gradient orbs for the gradient-tech aesthetic */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-32 -top-24 w-96 h-96 rounded-full blur-3xl opacity-40 bg-gradient-to-br from-purple-600 to-pink-500 mix-blend-screen"></div>
        <div className="absolute right-0 top-32 w-72 h-72 rounded-full blur-2xl opacity-30 bg-gradient-to-br from-sky-400 to-teal-300 mix-blend-screen"></div>
      </div>

      <div className="max-w-[1400px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">Welcome back, {displayName}!</h1>
            <p className="text-slate-300 mt-2">Streamline compliance with a faster, smarter editor.</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center bg-white/3 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/6">
              <Search className="w-4 h-4 text-slate-200 mr-2" />
              <input aria-label="Search projects" placeholder="Search projects..." className="bg-transparent outline-none placeholder:text-slate-400 text-sm text-slate-100" />
            </div>

            <SignOutButton>
              <Button variant="ghost" className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-700/20 via-sky-700/10 to-pink-700/10 border border-white/6 hover:scale-105 transform transition">
                Sign Out
              </Button>
            </SignOutButton>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
              {statusCards.map((card, idx) => {
                const Icon = card.icon;
                let value = card.value;
                let subtitle = card.title;

                if (card.title === "Documents in review") {
                  const inReviewDocs = documents.filter(d => d.suggestionCount > 0);
                  value = inReviewDocs.length.toString();
                  const totalSuggestionsToReview = inReviewDocs.reduce((sum, doc) => sum + doc.suggestionCount, 0);
                  subtitle = totalSuggestionsToReview > 0 
                    ? `${card.title} (${totalSuggestionsToReview} suggestions)`
                    : card.title;
                } else if (card.title === "Documents approved") {
                  value = documents.filter(d => d.suggestionCount === 0).length.toString();
                } else if (card.title === "Needs action plan") {
                  const needsAction = documents.filter(d => d.suggestionCount > 0);
                  value = needsAction.length.toString();
                  const totalUnchangedSuggestions = needsAction.reduce((sum, doc) => sum + doc.suggestionCount, 0);
                  subtitle = totalUnchangedSuggestions > 0
                    ? `${card.title} (${totalUnchangedSuggestions} unchanged)`
                    : card.title;
                }

                return (
                  <motion.div key={card.title} whileHover={{ y: -6, scale: 1.02 }} className={cn("rounded-xl p-4 border border-white/6 shadow-2xl", card.bgColor)}>
                    <div className="flex items-center gap-4">
                      <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center shadow-glow", card.iconBg)}>
                        <Icon className={cn("w-6 h-6", card.iconColor)} />
                      </div>
                      <div>
                        <p className="text-2xl font-semibold text-white flex items-center gap-3">
                          {isLoading ? <Loader2 className="h-5 w-5 animate-spin text-slate-300" /> : value}
                        </p>
                        <p className="text-sm text-slate-300 mt-1">{subtitle}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Projects */}
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">My Projects</h2>
              <Button asChild variant="outline" className="bg-white/3 border-white/6 text-sm">
                <Link href="/dashboard/projects">View all</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {isLoading ? (
                <div className="col-span-full flex items-center justify-center py-12">
                  <Loader2 className="h-8 w-8 animate-spin text-slate-300" />
                  <p className="ml-3 text-slate-300">Loading documents...</p>
                </div>
              ) : allProjects.length === 0 ? (
                <div className="col-span-full text-center py-12">
                  <p className="text-slate-400">No documents found. Upload a document to get started.</p>
                </div>
              ) : (
                allProjects.map((project) => {
                  const doc = project.documentId ? documents.find(d => d.id === project.documentId) : null;
                  const status = doc 
                    ? (doc.suggestionCount > 0 ? 'IN_REVIEW' : 'APPROVED')
                    : project.status;

                  return (
                    <motion.div key={project.id} whileHover={{ translateY: -8 }} className="rounded-2xl overflow-hidden">
                      <Card className={cn("p-0 border-white/6 bg-gradient-to-br from-black/20 to-white/2 hover:shadow-2xl transform transition-all duration-300", "rounded-2xl")}> 
                        <Button asChild variant="ghost" className="w-full p-5 text-left h-full">
                          <Link href={`/compliance-editor${project.documentId ? `?documentId=${project.documentId}` : ''}`}>
                            <div className="w-full">
                              <p className="font-semibold text-white text-lg mb-1 truncate">{project.name}</p>
                              {doc && (
                                <>
                                  <p className="text-xs text-slate-300 mb-2">{doc.suggestionCount || 0} suggestions</p>
                                  <Badge 
                                    variant="outline" 
                                    className={cn(
                                      "text-xs px-2 py-1 rounded-md",
                                      status === 'IN_REVIEW' 
                                        ? "border-transparent bg-gradient-to-r from-purple-700/20 to-pink-700/10 text-purple-200"
                                        : "border-transparent bg-gradient-to-r from-green-700/20 to-emerald-700/10 text-green-200"
                                    )}
                                  >
                                    {status === 'IN_REVIEW' ? 'In Review' : 'Approved'}
                                  </Badge>
                                </>
                              )}
                              {!doc && project.status && (
                                <Badge variant="outline" className="text-xs border-slate-500/50 text-slate-300">{project.status}</Badge>
                              )}
                            </div>
                          </Link>
                        </Button>
                      </Card>
                    </motion.div>
                  );
                })
              )}
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="hidden lg:block lg:col-span-1">
            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="sticky top-20">
              <Card className="p-6 rounded-2xl border border-white/6 bg-gradient-to-br from-black/20 to-white/2">
                <CardHeader className="p-0 mb-3">
                  <CardTitle className="text-lg font-bold text-white">Version comparison made easy</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-sm text-slate-300 mb-4">Quickly view differences between versions and accept changes with confidence.</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-200">Latest scan</p>
                        <p className="text-xs text-slate-400">3 hours ago</p>
                      </div>
                      <Badge className="text-xs border-transparent bg-gradient-to-r from-sky-700/20 to-teal-700/10 text-sky-200">Up to date</Badge>
                    </div>

                    <div className="border-t border-white/6 pt-3">
                      <Button asChild variant="ghost" className="w-full px-3 py-2 text-sm">
                        <Link href="/dashboard/projects">Open projects</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* small help card */}
              <Card className="mt-4 p-4 rounded-xl border border-white/6 bg-gradient-to-br from-purple-900/10 to-pink-900/6">
                <p className="text-sm text-slate-300">Need help? Check the docs or open a support ticket.</p>
                <div className="mt-3">
                  <Button variant="outline" className="w-full text-sm">Open docs</Button>
                </div>
              </Card>
            </motion.div>
          </aside>
        </div>
      </div>
    </div>
  );
}
