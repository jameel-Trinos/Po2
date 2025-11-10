"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider, UserButton, SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { ThemeProvider } from 'next-themes';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { Providers } from './providers';
import { AppContextProvider } from '../lib/AppContext';
import AuthenticatedLayout from '@/components/AuthenticatedLayout';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning key="app-html">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Providers>
            <ThemeSwitcher />
            <AppContextProvider>
              <AuthenticatedLayout>
                {children}
              </AuthenticatedLayout>
            </AppContextProvider>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
