"use client";

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
import Link from "next/link";
import { motion } from 'framer-motion';

const navItems = [
  { name: "Home", icon: Home, href: "/dashboard", active: true },
  { name: "My Projects", icon: FileText, href: "/dashboard/projects", active: false },
  { name: "Settings", icon: Settings, href: "/dashboard/settings", active: false },
];

const statusCards = [
  { title: "Documents in review", value: 0, icon: Search, color: "blue" },
  { title: "Documents approved", value: 0, icon: Check, color: "green" },
  { title: "Needs action plan", value: 0, icon: FolderOpen, color: "red" },
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-zinc-950 font-sans">
      {/* ========== Left Sidebar ========== */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-64 bg-white dark:bg-zinc-900 shadow-xl flex flex-col justify-between p-4"
      >
        <div className="p-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-10">
            <svg
              width="32"
              height="32"
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
            <h1 className="text-xl font-bold text-gray-800 dark:text-gray-50">
              Point Of Two
            </h1>
          </div>

          {/* Navigation */}
          <nav className="space-y-3">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} passHref>
                <motion.button
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full justify-start relative flex items-center rounded-lg text-base font-medium transition-all duration-200 h-11 px-4 py-2
                    ${item.active
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800"}
                  `}
                >
                  {item.active && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute left-0 top-0 h-full w-1 bg-white rounded-r-lg"
                    />
                  )}
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </motion.button>
              </Link>
            ))}
          </nav>
        </div>

        {/* Logout */}
        <div className="p-4 border-t border-gray-100 dark:border-zinc-800 flex items-center gap-4">
          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-10 h-10",
              },
            }}
          />
          <button className="justify-start w-full inline-flex items-center rounded-lg text-base font-medium transition-colors duration-200 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 h-11 px-4 py-2">
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </button>
        </div>
      </motion.aside>

      {/* ========== Main Content ========== */}
      <main className="flex-1 p-8 md:p-10 overflow-y-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-4xl font-bold text-gray-900 dark:text-gray-50 mb-2"
        >
          Welcome back, Janice CO!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-400 mb-8"
        >
          Streamline compliance with us.
        </motion.p>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {statusCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="rounded-xl border bg-white dark:bg-zinc-800 text-card-foreground shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center py-8 px-4"
              >
                <Icon className={`h-10 w-10 text-${card.color}-500 mb-3`} />
                <h3 className="text-5xl font-bold text-gray-900 dark:text-white">{card.value}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center mt-2 text-base">
                  {card.title}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="flex justify-between items-center mb-5"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-50">
            My Projects
          </h3>
          <Link href="/dashboard/projects" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center rounded-full text-base font-medium transition-colors duration-200 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 h-11 px-5 py-2"
            >
              View all
            </motion.button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {["Blackrock Test Case", "TC17", "TC13", "TC12", "TC10", "TC8"].map(
            (title, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                className="rounded-xl border bg-white dark:bg-zinc-800 text-card-foreground shadow-lg hover:shadow-xl transition-all duration-300 p-6"
              >
                <h3 className="text-lg text-gray-800 dark:text-gray-100 font-semibold mb-2">
                  {title}
                </h3>
              </motion.div>
            )
          )}
        </div>
      </main>

      {/* ========== Right Sidebar ========== */}
      <motion.aside
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.8 }}
        className="w-80 bg-white dark:bg-zinc-900 shadow-xl p-6 flex flex-col gap-6"
      >
        <Link href="/upload" passHref>
          <motion.div
            whileHover={{ scale: 1.03, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            whileTap={{ scale: 0.98 }}
            className="cursor-pointer rounded-xl border border-dashed border-teal-400 dark:border-teal-600 bg-gradient-to-br from-teal-500 to-teal-600 dark:from-teal-700 dark:to-teal-800 text-white p-8 text-center shadow-lg transition-all duration-300"
          >
            <Plus className="h-12 w-12 mb-3 mx-auto" />
            <h3 className="text-xl font-semibold">
              Want to kickstart a new project?
            </h3>
            <p className="text-sm mt-2 opacity-90">
              Get started by uploading a document
            </p>
          </motion.div>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.9 }}
          className="rounded-xl border bg-white dark:bg-zinc-800 text-card-foreground shadow-lg p-6 flex flex-col items-center justify-center"
        >
          <Upload className="h-8 w-8 text-gray-500 dark:text-gray-400 mb-3" />
          <Link href="/upload" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center rounded-full text-base font-medium transition-colors duration-200 bg-blue-600 text-white hover:bg-blue-700 h-11 px-5 py-2 shadow-md"
            >
              Upload a document
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.0 }}
          className="rounded-xl border bg-white dark:bg-zinc-800 text-card-foreground shadow-lg p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
            Version comparison made easy
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
            Quickly view changes between document versions.
          </p>
        </motion.div>
      </motion.aside>
    </div>
  );
}
