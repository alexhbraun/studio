
// src/app/dashboard/page.tsx
'use client';

import { useProfile } from '@/hooks/use-profile';
import Dashboard from "@/components/dashboard";
import { Header } from "@/components/header";
import { OnboardingForm } from '@/components/onboarding-form';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const { userProfile, loading } = useProfile();
  const [userInitials, setUserInitials] = useState('');
  
  useEffect(() => {
    if (userProfile?.name) {
      const initials = userProfile.name
        .split(' ')
        .map((n: string) => n[0])
        .join('');
      setUserInitials(initials.substring(0, 2).toUpperCase());
    }
  }, [userProfile]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Cargando...</p>
      </div>
    );
  }

  if (!userProfile) {
    return <OnboardingForm />;
  }

  const name = userProfile.name || 'Usuario';
  
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8 mt-32">
        <header className="mb-10 animate-fade-in-down">
          <div className="flex items-center gap-4">
             <Avatar className="h-16 w-16 text-xl">
              <AvatarFallback>{userInitials}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                ¡Hola, {name}!
              </h1>
              <p className="text-muted-foreground mt-1 text-lg">
                Bienvenido/a a SlimWalk, tu programa de caminata personalizado.
              </p>
            </div>
          </div>
        </header>

        <Dashboard />

      </main>
    </>
  );
}
