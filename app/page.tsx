"use client";

import Image from "next/image";
import { SignInButton, SignUpButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from 'framer-motion';

export default function Home() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && user) {
      router.push("/dashboard");
    }
  }, [user, isLoaded, router]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900 font-sans transition-colors duration-500 p-4"
      >
        <div className="flex flex-col items-center gap-6 text-center max-w-4xl w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-7xl font-bold leading-tight tracking-tighter text-black dark:text-white transition-colors duration-500"
          >
            Point Of Two
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl text-lg md:text-xl leading-8 text-zinc-700 dark:text-zinc-300 transition-colors duration-500"
          >
            Your all-in-one solution for compliance management. Streamline
            reviews, ensure compliance, and mitigate risk with AI-powered
            insights for regulatory content management.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <SignInButton mode="modal">
              <button className="inline-flex items-center justify-center rounded-full text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-blue-600 text-white hover:bg-blue-700 h-12 px-6 py-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="inline-flex items-center justify-center rounded-full text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 h-12 px-6 py-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
                Sign Up
              </button>
            </SignUpButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-3xl border border-dashed border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-card-foreground shadow-2xl flex flex-col items-center justify-center p-10 text-center text-black dark:text-white transition-colors duration-500 mt-12 w-full max-w-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">Want to kickstart a new project?</h3>
            <Link href="/upload" className="inline-flex items-center justify-center rounded-full text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-green-500 text-white hover:bg-green-600 h-12 px-6 py-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
              Upload a document
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
