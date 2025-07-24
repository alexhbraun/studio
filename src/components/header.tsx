
'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Home,
  Settings,
  User,
  BookMarked,
  Menu,
  LogOut,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { useProfile } from '@/hooks/use-profile';
import { useAuth } from '@/contexts/auth-context';

const SlimWalkLogo = () => (
  <div className="flex items-center gap-2">
    <Image 
      src="/logo.png" 
      alt="SlimWalk Logo" 
      width={1040} 
      height={256}
      className="h-20 w-auto"
      data-ai-hint="logo"
    />
  </div>
);

const NavLink = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { icon: React.ReactNode, text: string, onClick?: () => void }
>(({ href, icon, text, className, onClick, ...props }, ref) => (
  <Link
    href={href}
    ref={ref}
    onClick={onClick}
    className={cn("flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground", className)}
    {...props}
  >
    {icon}
    {text}
  </Link>
));
NavLink.displayName = 'NavLink';


export function Header() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const { userProfile } = useProfile();
  const { logout } = useAuth();
  const [userInitials, setUserInitials] = React.useState('U');

  React.useEffect(() => {
    if (userProfile?.name) {
      const initials = userProfile.name
        .split(' ')
        .map((n: string) => n[0])
        .join('');
      setUserInitials(initials.substring(0, 2).toUpperCase());
    } else {
        setUserInitials('?');
    }
  }, [userProfile]);
  
  const userName = userProfile?.name || 'Invitado';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-24 items-center justify-between border-b bg-white/80 px-4 backdrop-blur-sm md:px-6">
      <Link href="/dashboard" className="flex items-center gap-2">
        <SlimWalkLogo />
      </Link>
      <div className="flex items-center gap-4">
        <nav className="hidden items-center gap-4 text-sm font-medium md:flex">
          <NavLink href="/dashboard" icon={<Home className="h-4 w-4" />} text="Inicio" />
          <NavLink href="/guide" icon={<BookMarked className="h-4 w-4" />} text="Manual" />
          <NavLink href="/settings" icon={<Settings className="h-4 w-4" />} text="Ajustes" />
        </nav>
        
        <NavLink href="/guide" icon={<BookMarked className="h-5 w-5" />} text="Manual" className="md:hidden text-sm font-medium" />

        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="mt-10 flex flex-col gap-4">
               <NavLink 
                  href="/dashboard" 
                  icon={<Home className="h-5 w-5" />} 
                  text="Inicio"
                  className="text-lg"
                  onClick={() => setIsSheetOpen(false)}
                />
                <NavLink 
                  href="/settings" 
                  icon={<Settings className="h-5 w-5" />} 
                  text="Ajustes"
                  className="text-lg"
                  onClick={() => setIsSheetOpen(false)}
                />
            </nav>
          </SheetContent>
        </Sheet>
        
         <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <Avatar>
                <AvatarFallback>{userInitials}</AvatarFallback>
              </Avatar>
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>{userName}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/profile" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Perfil</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                <span>Ajustes</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logout} className="flex items-center gap-2 cursor-pointer text-red-500 focus:text-red-500 focus:bg-red-50">
                <LogOut className="h-4 w-4" />
                <span>Cerrar sesión</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
