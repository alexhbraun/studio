// src/components/header.tsx
"use client";

import Link from 'next/link';
import {
  Home,
  Settings,
  Moon,
  User,
  LogOut,
  BarChart,
  Heart,
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

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b bg-background/95 px-4 backdrop-blur-sm md:px-6">
      <Link href="/dashboard" className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold">
          <Heart className="h-5 w-5" />
        </div>
        <span className="text-lg font-semibold text-white">
          Abnehm-Gehprogramm
        </span>
      </Link>
      <nav className="hidden items-center gap-4 md:flex">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-white"
        >
          <Home className="h-4 w-4" />
          Dashboard
        </Link>
        <Link
          href="/settings"
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-white"
        >
          <Settings className="h-4 w-4" />
          Einstellungen
        </Link>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white">
          <Moon className="h-5 w-5" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </nav>
      <div className="flex items-center gap-4">
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
