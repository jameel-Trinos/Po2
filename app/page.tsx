"use client";

import Image from "next/image";
import { SignInButton, SignUpButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && user) {
      router.push("/dashboard");
    }
  }, [user, isLoaded, router]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-5xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50">
          Point Of Two
        </h1>
        <h2 className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Your all-in-one solution for compliance management. Streamline
          reviews, ensure compliance, and mitigate risk with AI-powered
          insights for regulatory content management.
        </h2>
        <div className="mt-8 flex gap-4">
          <SignInButton mode="modal">
            <Button variant="default">Sign In</Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button variant="outline">Sign Up</Button>
          </SignUpButton>
        </div>
      </div>
    </div>
  );
}
