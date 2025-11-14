'use client';

import { ThemeProvider } from 'next-themes';
// Import PDF.js configuration to suppress expected TextLayer abort warnings
import '@/lib/pdf-config';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
