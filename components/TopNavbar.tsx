import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import Link from 'next/link';
import { UserButton } from "@clerk/nextjs";
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

export default function TopNavbar() {
  return (
    <Navbar isBordered className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-lg dark:bg-black dark:bg-opacity-90">
      <NavbarBrand>
        <p className="font-bold text-inherit">Dashboard</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/analytics" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
            Analytics
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/settings" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
            Settings
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex items-center space-x-2">
          <ThemeSwitcher />
          <UserButton afterSignOutUrl="/" />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
