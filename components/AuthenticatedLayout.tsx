"use client";

import { useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

const authenticatedRoutes = [
  "/dashboard",
  "/editor",
  "/proofread",
  "/compliance-editor",
  "/settings",
];

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoaded, user } = useUser();
  const pathname = usePathname();
  
  // Check if current route should show sidebar (exclude /editor and /compliance-editor for full-screen experience)
  const shouldShowSidebar = authenticatedRoutes.some((route) =>
    pathname?.startsWith(route)
  ) && isLoaded && user && !pathname?.startsWith("/editor") && !pathname?.startsWith("/compliance-editor");

  if (!shouldShowSidebar) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64">
        {children}
      </main>
    </div>
  );
}

