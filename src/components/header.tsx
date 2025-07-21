// src/components/header.tsx
"use client";

import Link from 'next/link';
import { useTheme } from "next-themes"
import {
  Home,
  Settings,
  Moon,
  Sun,
  User,
  LogOut,
  Route,
  BookMarked,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const SlimWalkLogo = () => (
    <svg 
      width="130" 
      height="32" 
      viewBox="0 0 130 32"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className="text-primary h-8 w-auto"
    >
        <g clipPath="url(#clip0_123_456)">
            <path d="M15.1852 2.37037C15.1852 2.37037 15.6888 2.05926 16.5926 2.05926C18.237 2.05926 18.9815 3.32148 18.9815 3.32148C18.9815 3.32148 18.6704 4.87185 17.4074 5.37556C16.1444 5.87926 15.1852 5.08741 15.1852 5.08741L13.8333 13.9259H16.037L15.3481 18.3704H11.5704L10.3074 26.9037C10.3074 26.9037 10.0555 28.5481 11.5704 29.1778C13.0852 29.8074 13.7148 28.163 13.7148 28.163L14.7778 22.4889H17.5704L16.2185 30.6963C16.2185 30.6963 15.4267 33.0222 12.0148 31.4778C8.60296 29.9333 9.39556 26.1333 9.39556 26.1333L10.9407 15.6444L8.14815 17.5704C8.14815 17.5704 6.7963 18.5296 6.0037 17.6519C5.21111 16.7741 5.94444 15.363 5.94444 15.363L10.2481 8.88889L12.3519 12.5185L15.1852 2.37037Z" fill="currentColor"/>
            <path d="M22.0964 25.109C18.4357 28.106 12.6366 28.9135 8.14666 26.6527C3.65678 24.3919 1.4859 19.6644 2.81233 15.2285C4.13876 10.7926 8.64756 7.82855 13.1374 10.0894C14.7222 10.8242 16.0232 12.0673 16.9463 13.5358" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <text x="35" y="24" fontFamily="serif" fontSize="18" fill="currentColor">SlimWalk</text>
        </g>
        <defs>
            <clipPath id="clip0_123_456">
                <rect width="130" height="32" fill="white"/>
            </clipPath>
        </defs>
    </svg>
);


export function Header() {
  const { setTheme, theme } = useTheme()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b bg-background/95 px-4 backdrop-blur-sm md:px-6">
      <Link href="/dashboard" className="flex items-center gap-2">
        <SlimWalkLogo />
      </Link>
      <div className="flex items-center gap-2">
      <nav className="hidden items-center gap-4 md:flex">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <Home className="h-4 w-4" />
          Dashboard
        </Link>
         <Link
          href="/guide"
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <BookMarked className="h-4 w-4" />
          Handbuch
        </Link>
         <Link
          href="/tracking"
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <Route className="h-4 w-4" />
          Tracking
        </Link>
        <Link
          href="/settings"
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <Settings className="h-4 w-4" />
          Einstellungen
        </Link>
      </nav>
        <Button 
            variant="ghost" 
            size="icon" 
            className="text-muted-foreground hover:text-foreground"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
         <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <Avatar>
                <AvatarImage src="https://placehold.co/32x32.png" alt="User" data-ai-hint="user avatar" />
                <AvatarFallback>MM</AvatarFallback>
              </Avatar>
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Max Mustermann</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/profile" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Profil</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                <span>Einstellungen</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
               <Link href="/login" className="flex items-center gap-2">
                <LogOut className="h-4 w-4" />
                <span>Abmelden</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
