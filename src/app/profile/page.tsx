
'use client';

import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Settings, Trash2 } from 'lucide-react';
import { Header } from '@/components/header';
import { useProfile } from '@/hooks/use-profile';
import { OnboardingForm } from '@/components/onboarding-form';
import { useAuth } from '@/contexts/auth-context';

export default function ProfilePage() {
  const { userProfile, loading, clearProfile } = useProfile();
  const { logout } = useAuth();
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

  const handleReset = async () => {
    await clearProfile();
    await logout();
    // The AuthProvider will handle the redirect to /login
  }
  
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

  return (
    <>
      <Header />
      <div className="flex min-h-screen w-full flex-col bg-muted/40 pt-28">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="mx-auto grid max-w-4xl flex-1 auto-rows-max gap-4">
            <div className="flex items-center gap-4">
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                Perfil de usuario
              </h1>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Información personal</CardTitle>
                    <CardDescription>
                      Aquí puede ver su información personal.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-20 w-20">
                          <AvatarImage src="/avatar-profile.png" alt={userProfile.name} data-ai-hint="user avatar" />
                          <AvatarFallback>{userInitials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-lg font-semibold">{userProfile.name}</p>
                          <p className="text-sm text-muted-foreground">Peso actual: {userProfile.currentWeight} kg</p>
                          <p className="text-sm text-muted-foreground">Peso objetivo: {userProfile.goalWeight} kg</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold">Sobre mí</h3>
                        <p className="text-muted-foreground">
                          Participante motivado del programa de caminata de 30 días que quiere alcanzar sus metas de fitness.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                 <Card>
                    <CardHeader>
                        <CardTitle>Acciones del perfil</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-2">
                         <Button variant="outline" className="justify-start gap-2" disabled>
                           <User className="h-4 w-4" /> Editar perfil
                        </Button>
                         <Button variant="outline" className="justify-start gap-2" disabled>
                           <Settings className="h-4 w-4" /> Configuración
                        </Button>
                         <Button variant="destructive" className="w-full justify-start gap-2" onClick={handleReset}>
                           <Trash2 className="h-4 w-4" /> Restablecer mis datos
                        </Button>
                    </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
