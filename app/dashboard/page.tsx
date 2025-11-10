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
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

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
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-black px-6 py-10 font-sans text-slate-50 md:px-10">
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex w-72 flex-col gap-6"
      >
        <Card className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.65)] backdrop-blur-2xl transition-colors duration-300 dark:bg-black/30">
          <CardHeader className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-3"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/90 via-indigo-500/80 to-violet-600/70 shadow-lg">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-slate-50"
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
              </span>
              <div className="space-y-1">
                <CardTitle className="text-xl font-semibold tracking-tight text-slate-50">
                  Point Of Two
                </CardTitle>
                <CardDescription className="text-sm text-slate-300">
                  Precision compliance insights
                </CardDescription>
              </div>
            </motion.div>
            <Separator className="bg-white/10" />
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    whileHover={{ x: 6, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      asChild
                      variant={item.active ? "default" : "ghost"}
                      className={cn(
                        "group relative flex h-12 w-full items-center gap-3 rounded-2xl border border-transparent px-4 text-base font-medium transition-all duration-300",
                        "backdrop-blur-xl",
                        item.active
                          ? "border-white/10 bg-white/20 text-slate-50 shadow-[0_20px_45px_-20px_rgba(56,189,248,0.75)] hover:border-white/20 hover:bg-white/25"
                          : "text-slate-300 hover:border-white/10 hover:bg-white/10 hover:text-white"
                      )}
                    >
                      <Link href={item.href} className="flex flex-1 items-center gap-3">
                        {item.active && (
                          <motion.span
                            layoutId="activeTab"
                            className="absolute left-3 h-2 w-2 rounded-full bg-gradient-to-br from-sky-400 via-cyan-300 to-blue-500 shadow-[0_0_10px_rgba(56,189,248,0.65)]"
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          />
                        )}
                        <span className="rounded-xl bg-white/10 p-2 text-slate-100 shadow-inner shadow-slate-900/40 backdrop-blur">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="truncate">{item.name}</span>
                      </Link>
                    </Button>
                  </motion.div>
                );
              })}
            </div>
          </CardHeader>
        </Card>

        <Card className="rounded-3xl border border-white/15 bg-white/8 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.75)] backdrop-blur-2xl transition-colors duration-300 dark:bg-black/30">
          <CardContent className="flex items-center gap-4 p-5">
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "h-12 w-12 rounded-2xl",
                },
              }}
            />
            <div className="flex-1 space-y-3">
              <Separator className="bg-white/10" />
              <Button
                variant="ghost"
                className="group flex h-12 w-full items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 text-slate-100 transition-all duration-300 hover:border-white/20 hover:bg-white/15 hover:text-white"
              >
                <span className="flex items-center gap-3 text-base font-medium">
                  <LogOut className="h-5 w-5 text-slate-200 transition duration-300 group-hover:text-sky-200" />
                  Logout
                </span>
                <span className="rounded-full bg-slate-900/50 px-3 py-1 text-xs font-semibold text-slate-300 shadow-inner shadow-slate-900/60">
                  Cmd + L
                </span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.aside>

      <main className="flex w-full flex-1 flex-col gap-10 px-6 md:px-10">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="space-y-4"
        >
          <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-10 text-left shadow-[0_25px_80px_-35px_rgba(14,165,233,0.6)] backdrop-blur-2xl dark:bg-black/25">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-semibold tracking-tight text-slate-100 md:text-5xl"
            >
              Welcome back, Janice CO!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="text-lg text-slate-300 md:text-xl"
            >
              Streamline compliance with us.
            </motion.p>
          </div>
        </motion.section>

        <section className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {statusCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.25 + index * 0.08 }}
                >
                  <Card className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/12 shadow-[0_30px_90px_-45px_rgba(56,189,248,0.8)] backdrop-blur-2xl transition-all duration-500 hover:border-white/25 hover:shadow-[0_40px_120px_-50px_rgba(56,189,248,0.95)] dark:bg-black/25">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/4 via-transparent to-white/2 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <CardContent className="relative z-10 flex flex-col items-center justify-center gap-4 py-10">
                      <span
                        className={cn(
                          "flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br text-slate-50 shadow-2xl shadow-slate-900/50",
                          card.color === "blue" && "from-sky-500/90 via-indigo-500/75 to-blue-600/70",
                          card.color === "green" && "from-emerald-500/90 via-teal-500/75 to-green-600/70",
                          card.color === "red" && "from-rose-500/85 via-orange-500/70 to-amber-500/65"
                        )}
                      >
                        <Icon className="h-7 w-7" />
                      </span>
                      <p className="text-sm uppercase tracking-[0.25em] text-slate-300">
                        {card.title}
                      </p>
                      <h3 className="text-5xl font-semibold tracking-tight text-white drop-shadow-lg">
                        {card.value}
                      </h3>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.35 }}
          className="space-y-6"
        >
          <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/8 px-6 py-4 backdrop-blur-2xl dark:bg-black/25 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-3xl font-semibold tracking-tight text-white">
              My Projects
            </h3>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                variant="outline"
                className="group h-11 rounded-2xl border-white/20 bg-white/5 px-6 text-slate-100 transition-all duration-300 hover:border-white/30 hover:bg-white/10"
              >
                <Link href="/dashboard/projects" className="flex items-center gap-3">
                  <span>View all</span>
                  <span className="rounded-full bg-slate-900/60 px-2 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-300 transition duration-300 group-hover:text-white">
                    Explore
                  </span>
                </Link>
              </Button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {["Blackrock Test Case", "TC17", "TC13", "TC12", "TC10", "TC8"].map(
              (title, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.45 + index * 0.05 }}
                >
                  <Card className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/8 p-6 shadow-[0_25px_90px_-55px_rgba(14,165,233,0.75)] backdrop-blur-2xl transition-all duration-500 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_35px_120px_-60px_rgba(56,189,248,0.9)] dark:bg-black/25">
                    <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <CardHeader className="relative z-10 space-y-3 p-0">
                      <CardTitle className="text-lg font-semibold text-white">
                        {title}
                      </CardTitle>
                      <CardDescription className="text-sm text-slate-300">
                        Last activity 12 hours ago • 4 collaborators
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10 mt-5 flex items-center justify-between p-0 text-sm text-slate-300">
                      <span className="rounded-full bg-slate-900/50 px-3 py-1 text-xs uppercase tracking-[0.35em] text-slate-200">
                        Active
                      </span>
                      <span className="text-xs text-slate-400">Click to open</span>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            )}
          </div>
        </motion.section>
      </main>

      <motion.aside
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.4 }}
        className="flex w-[22rem] flex-col gap-6"
      >
        <Card className="group relative overflow-hidden rounded-3xl border border-teal-200/20 bg-gradient-to-br from-teal-400/40 via-emerald-500/35 to-sky-500/25 p-1 shadow-[0_45px_120px_-40px_rgba(13,148,136,0.7)] backdrop-blur-2xl transition-all duration-500 hover:border-white/25 dark:from-teal-500/35 dark:via-emerald-500/25 dark:to-cyan-500/20">
          <Button
            asChild
            variant="ghost"
            className="h-full w-full rounded-[21px] bg-gradient-to-br from-white/35 via-white/15 to-white/10 p-8 text-left text-white shadow-[0_25px_70px_-40px_rgba(13,148,136,0.85)] transition-all duration-500 hover:bg-white/20"
          >
            <Link href="/upload" className="flex flex-col items-start gap-4">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 shadow-lg backdrop-blur">
                <Plus className="h-8 w-8" />
              </span>
              <span className="text-xl font-semibold leading-snug text-white">
                Want to kickstart a new project?
              </span>
              <span className="text-sm text-white/80">
                Get started by uploading a document
              </span>
            </Link>
          </Button>
        </Card>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <Card className="rounded-3xl border border-white/12 bg-white/8 shadow-[0_30px_110px_-60px_rgba(56,189,248,0.75)] backdrop-blur-2xl transition-all duration-500 hover:border-white/20 hover:bg-white/12 dark:bg-black/25">
            <CardContent className="flex flex-col items-center gap-5 p-8">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/12 text-slate-100 shadow-inner shadow-slate-900/50">
                <Upload className="h-7 w-7" />
              </span>
              <Button
                asChild
                className="h-12 w-full rounded-2xl border border-cyan-300/40 bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 text-base font-semibold text-white shadow-[0_30px_80px_-35px_rgba(14,165,233,0.75)] transition-all duration-500 hover:shadow-[0_35px_100px_-40px_rgba(59,130,246,0.85)]"
              >
                <Link href="/upload" className="flex items-center justify-center gap-2">
                  Upload a document
                </Link>
              </Button>
              <p className="text-center text-sm text-slate-300">
                Drag & drop supported • AES-256 encrypted in transit
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <Card className="rounded-3xl border border-white/12 bg-white/10 p-8 shadow-[0_35px_110px_-60px_rgba(79,70,229,0.65)] backdrop-blur-2xl transition-all duration-500 hover:border-white/20 hover:bg-white/14 dark:bg-black/25">
            <CardHeader className="space-y-2 p-0">
              <CardTitle className="text-xl font-semibold text-white">
                Version comparison made easy
              </CardTitle>
              <CardDescription className="text-sm text-slate-300">
                Quickly view changes between document versions with instant diff previews.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-6 flex items-center justify-between gap-4 p-0 text-sm text-slate-300">
              <span className="rounded-full bg-slate-900/60 px-3 py-1 text-xs uppercase tracking-[0.35em] text-slate-200">
                Sync
              </span>
              <span className="text-xs text-slate-400">
                Auto-updates in real time
              </span>
            </CardContent>
          </Card>
        </motion.div>
      </motion.aside>
    </div>
  );
}
