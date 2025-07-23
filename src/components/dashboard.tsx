"use client";

import { useState } from 'react';
import { workouts } from '@/lib/workouts';
import { useProgress } from '@/hooks/use-progress';
import { WorkoutDay } from '@/lib/types';
import { Flame, TrendingUp, Calendar, Trophy, Leaf } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { WorkoutCard } from '@/components/workout-card';
import { WorkoutModal } from '@/components/workout-modal';
import { MotivationalQuote } from '@/components/motivational-quote';

export default function Dashboard() {
  const [selectedDay, setSelectedDay] = useState<WorkoutDay | null>(null);
  const { completedDays, toggleDayCompletion, isCompleted, isLoaded } = useProgress();

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
  const currentWeek = isLoaded ? Math.floor(completedDays.length / 7) + 1 : 1;

  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-card/60 backdrop-blur-sm border-border/60 shadow-lg animate-fade-in-down">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Progreso total</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{progressPercentage.toFixed(0)}%</div>
            <p className="text-xs text-muted-foreground">{completedDays.length} de 30 días</p>
            <Progress value={progressPercentage} className="mt-2 h-2" />
          </CardContent>
        </Card>
        <Card className="bg-card/60 backdrop-blur-sm border-border/60 shadow-lg animate-fade-in-down animation-delay-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Racha</CardTitle>
            <Flame className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">Días seguidos</p>
          </CardContent>
        </Card>
        <Card className="bg-card/60 backdrop-blur-sm border-border/60 shadow-lg animate-fade-in-down animation-delay-400">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Semana actual</CardTitle>
            <Calendar className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentWeek}</div>
            <p className="text-xs text-muted-foreground">de 5 semanas del programa</p>
          </CardContent>
        </Card>
        <Card className="bg-card/60 backdrop-blur-sm border-border/60 shadow-lg animate-fade-in-down animation-delay-600">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Logros</CardTitle>
            <Trophy className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.floor(completedDays.length / 5)}</div>
            <p className="text-xs text-muted-foreground">Insignias desbloqueadas</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-primary/90 text-primary-foreground rounded-lg p-6 text-center shadow-lg animate-hero-glow">
        <h2 className="text-2xl font-bold">¡Es hora de empezar la aventura!</h2>
        <p>Cada paso te acerca a tu meta. ¡Continúa tu viaje hacia la salud!</p>
      </div>
      
      <div>
         <Accordion type="single" collapsible defaultValue="item-1" className="mb-8 rounded-lg bg-green-100/50 dark:bg-green-900/20 border border-green-200/50 dark:border-green-800/30 text-green-900 dark:text-green-200">
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger className="p-6 font-bold text-lg hover:no-underline">
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

        <h2 className="text-3xl font-bold mb-4">Tu plan de 30 días</h2>
        <p className="text-muted-foreground mb-6">Haz clic en una tarjeta de día para empezar el entrenamiento</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {workouts.map((day, index) => (
            <WorkoutCard
              key={day.day}
              day={day}
              isCompleted={isCompleted(day.day)}
              onClick={() => handleCardClick(day)}
              style={{ animationDelay: `${index * 50}ms` }}
            />
          ))}
        </div>
      </div>

      <WorkoutModal
        isOpen={!!selectedDay}
        onClose={handleCloseModal}
        dayData={selectedDay}
        isCompleted={selectedDay ? isCompleted(selectedDay.day) : false}
        onCompleteDay={() => selectedDay && handleCompleteDay(selectedDay.day)}
      />
      
      <MotivationalQuote progressPercentage={progressPercentage} />

    </div>
  );
}
