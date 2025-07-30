
"use client";

import { useState } from 'react';
import { workouts } from '@/lib/workouts';
import { useProgress } from '@/hooks/use-progress';
import { WorkoutDay } from '@/lib/types';
import { Flame, TrendingUp, Footprints, Leaf, BookOpen, BookMarked, Bed, Utensils, Droplets } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { WorkoutCard } from '@/components/workout-card';
import { WorkoutModal } from '@/components/workout-modal';
import { MotivationalQuote } from '@/components/motivational-quote';
import { useProfile } from '@/hooks/use-profile';
import Link from 'next/link';
import { Button } from './ui/button';

export default function Dashboard() {
  const [selectedDay, setSelectedDay] = useState<WorkoutDay | null>(null);
  const { completedDays, toggleDayCompletion, isCompleted, isLoaded } = useProgress();
  const { userProfile } = useProfile();

  const handleCardClick = (day: WorkoutDay) => {
    setSelectedDay(day);
  };

  const handleCloseModal = () => {
    setSelectedDay(null);
  };

  const handleCompleteDay = (dayNumber: number) => {
    toggleDayCompletion(dayNumber);
  };

  const progressPercentage = isLoaded ? (completedDays.length / workouts.length) * 100 : 0;
  
  const name = userProfile?.name || 'Usuario';
  const diff = userProfile ? userProfile.currentWeight - userProfile.goalWeight : 0;
  const weightGoalText = diff > 0 ? `perder ${diff} kg` : 'mejorar tu estilo de vida';

  const completedWorkouts = workouts.filter(w => completedDays.includes(w.day));
  const totalCalories = completedWorkouts.reduce((sum, workout) => sum + workout.calories, 0);
  const totalSteps = completedWorkouts.reduce((sum, workout) => sum + workout.steps, 0);

  // Calculate streak
  const currentStreak = isLoaded ? completedDays.slice().sort((a, b) => b - a).reduce((streak, day, index, arr) => {
    if (index === 0 && completedDays.length > 0) return 1;
    if (day === arr[index - 1] - 1) return streak + 1;
    return streak;
  }, 0) : 0;


  return (
    <div className="flex flex-col gap-10">
      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-card/60 backdrop-blur-sm border-border/60 shadow-lg animate-fade-in-down">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Progreso total</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{progressPercentage.toFixed(0)}%</div>
            <p className="text-xs text-muted-foreground">{completedDays.length} de 30 días</p>
            <Progress value={progressPercentage} className="mt-2 h-3" />
          </CardContent>
        </Card>
        <Card className="bg-card/60 backdrop-blur-sm border-border/60 shadow-lg animate-fade-in-down animation-delay-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Racha de días</CardTitle>
            <Flame className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentStreak}</div>
            <p className="text-xs text-muted-foreground">días consecutivos</p>
          </CardContent>
        </Card>
        <Card className="bg-card/60 backdrop-blur-sm border-border/60 shadow-lg animate-fade-in-down animation-delay-400">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Calorías quemadas</CardTitle>
            <Flame className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCalories.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">kcal totales</p>
          </CardContent>
        </Card>
        <Card className="bg-card/60 backdrop-blur-sm border-border/60 shadow-lg animate-fade-in-down animation-delay-600">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pasos totales</CardTitle>
            <Footprints className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalSteps.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">pasos dados</p>
          </CardContent>
        </Card>
      </div>

      {/* Hero Action Blocks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-primary via-green-900 to-cyan-900 text-primary-foreground rounded-lg p-6 text-center shadow-lg animate-hero-glow flex flex-col justify-center">
          <h2 className="text-2xl font-bold">¡Es hora de empezar la aventura!</h2>
          <p>Cada paso te acerca a tu meta. ¡Continúa tu viaje hacia la salud!</p>
        </div>
        <Card className="bg-card/60 backdrop-blur-sm border-border/60 shadow-lg hover:shadow-primary/20 transition-shadow flex flex-col justify-between p-6">
            <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <BookMarked className="h-8 w-8" />
                </div>
                <div className="flex-1">
                    <h3 className="text-xl font-bold">Tu Guía de Transformación</h3>
                    <p className="text-muted-foreground mt-1">
                        Descubre consejos y técnicas para sacar el máximo de tu plan personalizado.
                    </p>
                </div>
            </div>
            <div className="mt-4 flex flex-col items-start gap-3">
                 <p className="text-xs text-muted-foreground font-medium bg-muted px-2 py-1 rounded-full">Disponible solo para miembros SlimWalk.</p>
                <Link href="/guide" passHref className="w-full">
                    <Button className="w-full" variant="outline">
                        Abrir mi Guía
                    </Button>
                </Link>
            </div>
        </Card>
      </div>
      
      {/* Collapsible Info Sections */}
      <div className="space-y-6">
        <Accordion type="single" collapsible className="w-full bg-card/60 backdrop-blur-sm border-border/60 shadow-lg rounded-lg">
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger className="p-6 font-semibold text-primary hover:no-underline">
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5" />
                Tu plan de 30 días para {name}
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 text-muted-foreground">
              <div className="space-y-4">
                <p>
                  Durante los próximos 30 días, te acompañaremos paso a paso para ayudarte a {weightGoalText} y sentirte más saludable y con más energía. Este programa ha sido diseñado pensando en ti: cada rutina, cada consejo y cada desafío están orientados a que alcances tu meta de manera sostenible y disfrutes del proceso.
                </p>
                <p>
                  No estarás solo/a en este camino. Te brindaremos apoyo, motivación y todas las herramientas necesarias para que celebres cada logro, por pequeño que sea. Recuerda: el cambio se construye día a día. Confía en el proceso, sé paciente contigo mismo/a y permítete disfrutar cada paso.
                </p>
                <p className="font-bold text-foreground">¡Este es tu momento, {name}! Tu meta está más cerca de lo que imaginas.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible defaultValue="item-1" className="mb-8 rounded-lg bg-green-100/50 dark:bg-green-900/20 border border-green-200/50 dark:border-green-800/30 text-green-900 dark:text-green-200">
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger className="p-6 font-semibold text-lg hover:no-underline">
              <div className="flex items-center gap-2"><Leaf size={20} /> Antes de empezar…</div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="space-y-3">
                  <p><strong>¡Respira hondo y relájate!</strong><br />Este plan está pensado para acompañarte, no para exigirte ni causarte estrés. Avanza a tu propio ritmo, escucha a tu cuerpo y recuerda que cada paso cuenta.</p>
                  <p>No es necesario completar todos los ejercicios a la perfección ni seguir el plan de manera estricta. Lo más importante es crear el hábito y disfrutar el proceso. Si algún día necesitas hacer menos, descansar o adaptar las caminatas a tus posibilidades, está perfecto.</p>
                  <p className="font-semibold">Tu bienestar es la prioridad.</p>
                  <p>Confía en ti mismo/a y en tu progreso. Lo importante es avanzar, celebrar cada logro, y sentirte mejor día a día.</p>
                  <p className="mt-3 font-bold">¡Estamos contigo en cada paso!</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Daily Plan Section */}
        <div className="mt-12 bg-card/40 backdrop-blur-sm border border-border/40 rounded-xl p-6 shadow-lg">
          <h2 className="text-3xl font-bold mb-2">Este es tu plan de 30 días, {name}</h2>
          <p className="text-muted-foreground mb-8">Haz clic en una tarjeta de día para empezar el entrenamiento. La tarjeta de hoy está resaltada.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {workouts.map((day, index) => (
              <WorkoutCard
                key={day.day}
                day={day}
                isCompleted={isCompleted(day.day)}
                onClick={() => handleCardClick(day)}
                isToday={!isCompleted(day.day) && (completedDays.length === 0 ? day.day === 1 : day.day === Math.max(...(completedDays.length > 0 ? completedDays : [0])) + 1)}
                style={{ animationDelay: `${index * 50}ms` }}
              />
            ))}
          </div>
        </div>
      </div>

      <WorkoutModal
        isOpen={!!selectedDay}
        onClose={handleCloseModal}
        dayData={selectedDay}
        isCompleted={selectedDay ? isCompleted(selectedDay.day) : false}
        onCompleteDay={() => selectedDay && handleCompleteDay(selectedDay.day)}
      />
      
      <MotivationalQuote />

      {/* Bottom info cards */}
      <footer className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up">
        <Accordion type="single" collapsible className="w-full bg-card/60 backdrop-blur-sm border-border/60 shadow-lg rounded-lg">
           <AccordionItem value="item-1" className="border-b-0">
             <AccordionTrigger className="p-6 font-semibold hover:no-underline">
                <div className="flex items-center gap-2 text-lg text-primary">
                  <Droplets className="h-5 w-5" />
                  Consejo del día
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-muted-foreground">
                Recuerda beber agua regularmente durante el entrenamiento. La hidratación es la clave para una quema de calorías efectiva.
              </AccordionContent>
           </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full bg-card/60 backdrop-blur-sm border-border/60 shadow-lg rounded-lg">
           <AccordionItem value="item-1" className="border-b-0">
             <AccordionTrigger className="p-6 font-semibold hover:no-underline">
                <div className="flex items-center gap-2 text-lg text-primary">
                  <Utensils className="h-5 w-5" />
                  Alimentación saludable
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-muted-foreground">
                 Combina el entrenamiento con una comida ligera y rica en proteínas 30 minutos después del ejercicio.
              </AccordionContent>
           </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full bg-card/60 backdrop-blur-sm border-border/60 shadow-lg rounded-lg">
           <AccordionItem value="item-1" className="border-b-0">
             <AccordionTrigger className="p-6 font-semibold hover:no-underline">
                <div className="flex items-center gap-2 text-lg text-primary">
                  <Bed className="h-5 w-5" />
                  Recuperación
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-muted-foreground">
                 Un buen sueño es la base de la regeneración. Intenta dormir de 7 a 8 horas para obtener resultados óptimos.
              </AccordionContent>
           </AccordionItem>
        </Accordion>
      </footer>
    </div>
  );
}
