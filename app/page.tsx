"use client";

import { SignInButton, SignUpButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

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
              <Button size="lg" className="rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl">
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button size="lg" variant="outline" className="rounded-full border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 shadow-lg hover:shadow-xl">
                Sign Up
              </Button>
            </SignUpButton>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
