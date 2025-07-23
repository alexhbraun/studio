
'use client';

import { useState, useEffect } from 'react';
import Dashboard from "@/components/dashboard";
import { Header } from "@/components/header";
import { Droplets, Utensils, Bed, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface UserProfile {
  name: string;
  currentWeight: number;
  goalWeight: number;
}

export default function DashboardPage() {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    try {
      const storedProfile = localStorage.getItem('userProfile');
      if (storedProfile) {
        setUserProfile(JSON.parse(storedProfile));
      } else {
        // Fallback for demo purposes if nothing is in localStorage
        setUserProfile({ name: "Usuario", currentWeight: 75, goalWeight: 70 });
      }
    } catch (error) {
      console.error("Failed to parse user profile from localStorage", error);
      setUserProfile({ name: "Usuario", currentWeight: 75, goalWeight: 70 });
    }
  }, []);

  const name = userProfile?.name || 'Usuario';
  const diff = userProfile ? userProfile.currentWeight - userProfile.goalWeight : 5;
  const weightGoalText = diff > 0 ? `perder ${diff} kg` : 'mejorar tu estilo de vida';

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8 mt-16">
        <header className="text-center mb-10 animate-fade-in-down">
          <div className="flex justify-center items-center gap-4 mb-2">
            <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-green-400 to-primary">
              ¡Hola, {name}!
            </h1>
          </div>
          <p className="text-muted-foreground mt-2 text-lg">
             Tu plan personalizado para {weightGoalText} en 30 días está listo.
          </p>
        </header>

        <Accordion type="single" collapsible className="w-full mb-8 bg-card/60 backdrop-blur-sm border-border/60 shadow-lg rounded-lg">
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger className="p-6 text-lg font-semibold text-primary hover:no-underline">
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6" />
                ¡Bienvenido a tu programa!
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 text-muted-foreground">
              <div className="space-y-4">
                <p>
                  Estás a punto de comenzar tu propio plan de caminata de 30 días, diseñado especialmente para ayudarte a {weightGoalText} y sentirte mejor contigo mismo/a. A lo largo del mes, te acompañaremos con entrenamientos diarios que aumentan poco a poco en intensidad para que logres resultados reales, sin perder la motivación.
                </p>
                <p>
                  Aquí celebramos cada pequeño avance, y nuestro objetivo es ayudarte a alcanzar tu meta de forma sostenible, disfrutando del proceso. Este es tu momento, tu ritmo y tu cambio. ¡Confía en el proceso y celébralo! ¿Listo para transformar tu vida caminando?
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <Dashboard />

        <footer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up">
          <Card className="bg-card/60 backdrop-blur-sm border-border/60 shadow-lg hover:shadow-primary/20 transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-accent">
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
              <CardTitle className="flex items-center gap-2 text-lg text-accent">
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
              <CardTitle className="flex items-center gap-2 text-lg text-accent">
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
