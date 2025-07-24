
// src/app/dashboard/page.tsx
'use client';

import { useProfile } from '@/hooks/use-profile';
import Dashboard from "@/components/dashboard";
import { Header } from "@/components/header";
import { Droplets, Utensils, Bed } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OnboardingForm } from '@/components/onboarding-form';

export default function DashboardPage() {
  const { userProfile, loading } = useProfile();
  
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
        <header className="text-center mb-10 animate-fade-in-down">
          <div className="flex justify-center items-center gap-4 mb-2">
            <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-green-400 to-primary">
              ¡Hola, {name}!
            </h1>
          </div>
          <p className="text-muted-foreground mt-2 text-lg">
             Bienvenido/a a SlimWalk, tu programa de caminata personalizado.
          </p>
        </header>

        <Dashboard />

        <footer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up">
          <Card className="bg-card/60 backdrop-blur-sm border-border/60 shadow-lg hover:shadow-primary/20 transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-primary">
                <Droplets className="h-5 w-5" />
                Consejo del día
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Recuerda beber agua regularmente durante el entrenamiento. La hidratación es la clave para una quema de calorías efectiva.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card/60 backdrop-blur-sm border-border/60 shadow-lg hover:shadow-primary/20 transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-primary">
                <Utensils className="h-5 w-5" />
                Alimentación saludable
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Combina el entrenamiento con una comida ligera y rica en proteínas 30 minutos después del ejercicio.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card/60 backdrop-blur-sm border-border/60 shadow-lg hover:shadow-primary/20 transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-primary">
                <Bed className="h-5 w-5" />
                Recuperación
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Un buen sueño es la base de la regeneración. Intenta dormir de 7 a 8 horas para obtener resultados óptimos.
              </p>
            </CardContent>
          </Card>
        </footer>
      </main>
    </>
  );
}
