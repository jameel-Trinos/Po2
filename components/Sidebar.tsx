"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FolderKanban, Settings, FileCheck } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "Compliance Editor", href: "/compliance-editor", icon: FileCheck },
  { name: "Projects", href: "/dashboard/projects", icon: FolderKanban },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[radial-gradient(ellipse_at_top_left,_#0b0f23,_#050816)] border-r border-white/6 flex flex-col z-50 p-6 space-y-8">
      {/* Project Logo / Name */}
      <div className="mb-10">
        <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 drop-shadow-[0_0_10px_rgba(128,0,255,0.7)]">
          Power Of Two
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-4">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");

          return (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.05 }}
              className={cn(
                "rounded-xl px-4 py-3 flex items-center gap-3 cursor-pointer transition-all duration-300",
                isActive
                  ? "bg-gradient-to-r from-purple-700/20 via-pink-700/10 to-sky-700/10 shadow-glow"
                  : "hover:bg-purple-700/10 hover:shadow-[0_0_12px_rgba(128,0,255,0.3)]"
              )}
            >
              <Link href={item.href} className="flex items-center gap-3 w-full">
                <Icon
                  className={cn(
                    "w-5 h-5 transition-colors duration-300",
                    isActive
                      ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                      : "text-purple-300 group-hover:text-cyan-300"
                  )}
                />
                <span className="text-sm font-medium text-white">{item.name}</span>
              </Link>
            </motion.div>
          );
        })}
      </nav>

      {/* Optional bottom section */}
      <div className="mt-auto">
        <motion.div whileHover={{ scale: 1.03 }} className="rounded-lg p-3 bg-gradient-to-br from-purple-900/10 to-pink-900/10 border border-white/6 text-center text-sm text-slate-300">
          Pro SaaS Tools
        </motion.div>
      </div>
    </aside>
  );
}
