import Link from 'next/link';
import { UserButton } from "@clerk/nextjs";
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

export default function TopNavbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-lg dark:bg-black dark:bg-opacity-90 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <p className="font-bold text-inherit text-gray-900 dark:text-gray-50">Dashboard</p>
          </div>
          <div className="hidden sm:flex gap-4 items-center justify-center">
            <Link href="/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link href="/analytics" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 text-sm font-medium">
              Analytics
            </Link>
            <Link href="/settings" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 text-sm font-medium">
              Settings
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <ThemeSwitcher />
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>
    </nav>
  );
}
