"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserButton } from "@clerk/nextjs";
import {
  Home,
  FileText,
  Settings,
  LogOut,
  Search,
  Check,
  FolderOpen,
  Plus,
  Upload,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-950">
      {/* ========== Left Sidebar ========== */}
      <aside className="w-64 bg-white dark:bg-gray-900 shadow-md flex flex-col justify-between">
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center space-x-2 mb-10">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-blue-600 dark:text-blue-400"
            >
              <path
                d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 12L2 7L12 2L22 7L12 12ZM12 12V22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h1 className="text-lg font-bold text-gray-800 dark:text-gray-50">
              Power of Two
            </h1>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            <Button variant="secondary" className="w-full justify-start relative">
              <div className="absolute left-0 top-0 h-full w-1 bg-blue-600 rounded-r-md" />
              <Home className="mr-2 h-4 w-4" />
              Home
            </Button>

            <Button variant="ghost" className="w-full justify-start">
              <FileText className="mr-2 h-4 w-4" />
              My Projects
            </Button>

            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </nav>
        </div>

        {/* Logout */}
        <div className="p-4 border-t border-gray-100 dark:border-gray-800 flex items-center gap-3">
          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-9 h-9",
              },
            }}
          />
          <Button variant="ghost" className="justify-start w-full">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </aside>

      {/* ========== Main Content ========== */}
      <main className="flex-1 p-10 overflow-y-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-1">
          Welcome back, Janice CO!
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Streamline compliance with us.
        </p>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card className="flex flex-col items-center justify-center py-8">
            <Search className="h-8 w-8 text-blue-500 mb-2" />
            <CardTitle className="text-4xl font-bold">0</CardTitle>
            <CardContent className="text-gray-500 text-center mt-1">
              Documents in review
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center justify-center py-8">
            <Check className="h-8 w-8 text-green-500 mb-2" />
            <CardTitle className="text-4xl font-bold">0</CardTitle>
            <CardContent className="text-gray-500 text-center mt-1">
              Documents approved
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center justify-center py-8">
            <FolderOpen className="h-8 w-8 text-red-500 mb-2" />
            <CardTitle className="text-4xl font-bold">0</CardTitle>
            <CardContent className="text-gray-500 text-center mt-1">
              Needs action plan
            </CardContent>
          </Card>
        </div>

        {/* Projects Section */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
            My Projects
          </h3>
          <Button variant="outline">View all</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {["Blackrock Test Case", "TC17", "TC13", "TC12", "TC10", "TC8"].map(
            (title) => (
              <Card key={title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-800 dark:text-gray-100">
                    {title}
                  </CardTitle>
                </CardHeader>
              </Card>
            )
          )}
        </div>
      </main>

      {/* ========== Right Sidebar ========== */}
      <aside className="w-80 bg-white dark:bg-gray-900 shadow-md p-6 flex flex-col gap-6">
        <Card className="flex flex-col items-center justify-center text-white bg-gradient-to-b from-teal-500 to-teal-600 dark:from-teal-700 dark:to-teal-800 p-8 rounded-xl text-center">
          <Plus className="h-12 w-12 mb-3" />
          <CardTitle className="text-xl font-semibold">
            Want to kickstart a new project?
          </CardTitle>
          <CardContent className="text-sm mt-2">
            Get started by uploading a document
          </CardContent>
        </Card>

        <Card className="flex flex-col items-center justify-center p-6">
          <Upload className="h-8 w-8 text-gray-500 mb-3" />
          <Button variant="outline">Upload a document</Button>
        </Card>

        <Card className="p-5">
          <CardTitle className="text-lg font-semibold">
            Version comparison made easy
          </CardTitle>
          <CardContent className="text-gray-500 text-sm mt-2">
            Quickly view changes between document versions.
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}
