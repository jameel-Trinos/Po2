"use client";

import { useUser } from "@clerk/nextjs";
import {
  Search,
  Check,
  FolderOpen,
  Plus,
  Upload,
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
import { cn } from "@/lib/utils";
import { useAppContext } from "@/lib/AppContext";

const statusCards = [
  { title: "Documents in review", value: "0", icon: Search, color: "purple", bgColor: "bg-purple-100/10", iconBg: "bg-purple-500/20", iconColor: "text-purple-400" },
  { title: "Documents approved", value: "0", icon: Check, color: "sky", bgColor: "bg-sky-100/10", iconBg: "bg-sky-500/20", iconColor: "text-sky-400" },
  { title: "Needs action plan", value: "0", icon: FolderOpen, color: "orange", bgColor: "bg-orange-100/10", iconBg: "bg-orange-500/20", iconColor: "text-orange-400" },
];

export default function DashboardPage() {
  const { user, isLoaded } = useUser();
  const { getProjects } = useAppContext();
  const displayName = isLoaded
    ? user?.fullName ?? user?.firstName ?? user?.username ?? "there"
    : "there";
  const [projects, setProjects] = useState<Array<{ id: string; name: string; status: string; lastActivity: string; collaborators: number; documentId?: string }>>([]);
  
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

  // Combine saved projects with default projects (for demo purposes)
  const allProjects = projects.length > 0 
    ? projects 
    : ["Blackrock Test Case", "TC17", "TC13", "TC12", "TC10", "TC8"].map((name, index) => ({
        id: `default-${index}`,
        name,
        status: 'ACTIVE',
        lastActivity: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
        collaborators: 4,
      }));

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 px-6 py-10 font-sans text-slate-50 md:px-12">
      <div className="flex flex-1 gap-8">
        {/* Main Content Area */}
        <div className="flex-1">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white">Welcome back, {displayName}!</h1>
            <p className="text-slate-400 mt-1">Streamline compliance with us.</p>
          </div>

          {/* Stat Cards */}
          <div className="flex gap-6 mb-8">
            {statusCards.map((card) => {
              const Icon = card.icon;
              return (
                <Card
                  key={card.title}
                  className={cn(
                    "flex-1 border border-white/10 bg-white/5 rounded-xl",
                    card.bgColor
                  )}
                >
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center",
                      card.iconBg
                    )}>
                      <Icon className={cn("w-6 h-6", card.iconColor)} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">{card.value}</p>
                      <p className="text-sm text-slate-400">{card.title}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Projects Section */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-white">My Projects</h2>
              <Button
                asChild
                variant="outline"
                className="bg-slate-800 text-white text-sm font-semibold hover:bg-slate-700 border-slate-700"
              >
                <Link href="/dashboard/projects">View all</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProjects.map((project) => (
                <Card
                  key={project.id}
                  className="border border-white/10 bg-white/5 rounded-xl cursor-pointer hover:border-sky-500/50 hover:shadow-lg transition-all h-28"
                >
                  <Button
                    asChild
                    variant="ghost"
                    className="h-full w-full p-5 flex items-start justify-start"
                  >
                    <Link href={`/editor?documentId=${encodeURIComponent(project.documentId || project.id)}`}>
                      <p className="font-semibold text-white">{project.name}</p>
                    </Link>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 flex-shrink-0 space-y-8">
          {/* Upload Card */}
          <Card className="bg-gradient-to-br from-teal-400 to-cyan-500 text-white p-6 rounded-2xl text-center border-0">
            <CardContent className="p-0">
              <div className="mb-4 inline-block p-4 border-2 border-dashed border-white/50 rounded-xl">
                <Plus className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Want to kickstart a new project?</h3>
              <p className="text-sm text-white/80 mb-6">Get started by uploading a document</p>
              <Button
                asChild
                className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2"
              >
                <Link href="/upload">
                  <Upload className="h-5 w-5" />
                  Upload a document
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Version Comparison Card */}
          <Card className="border border-white/10 bg-white/5 p-6 rounded-2xl">
            <CardHeader className="p-0">
              <CardTitle className="text-xl font-bold text-white">Version comparison made easy</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
