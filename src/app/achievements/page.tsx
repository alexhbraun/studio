
// src/app/achievements/page.tsx
'use client';

import { useProgress } from '@/hooks/use-progress';
import { Header } from '@/components/header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Trophy, Zap, Award, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { workouts } from '@/lib/workouts';

type Achievement = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  isAchieved: (completedDays: number[], totalSteps: number, totalCalories: number) => boolean;
};

const achievements: Achievement[] = [
  {
    id: 'first_step',
    title: 'Primer Paso',
    description: 'Completa tu primer día de entrenamiento.',
    icon: Star,
    isAchieved: (completedDays) => completedDays.length >= 1,
  },
  {
    id: 'perfect_week',
    title: 'Semana Perfecta',
    description: 'Completa 7 días de entrenamiento.',
    icon: Award,
    isAchieved: (completedDays) => completedDays.length >= 7,
  },
  {
    id: 'halfway_there',
    title: 'A Mitad de Camino',
    description: 'Completa 15 días del programa.',
    icon: Zap,
    isAchieved: (completedDays) => completedDays.length >= 15,
  },
  {
    id: 'finisher',
    title: '¡Finalista!',
    description: 'Completa los 30 días del programa SlimWalk.',
    icon: Trophy,
    isAchieved: (completedDays) => completedDays.length >= 30,
  },
  {
    id: 'calorie_crusher_1',
    title: 'Quema-Calorías I',
    description: 'Quema un total de 2,000 calorías.',
    icon: Star,
    isAchieved: (_, __, totalCalories) => totalCalories >= 2000,
  },
  {
    id: 'calorie_crusher_2',
    title: 'Quema-Calorías II',
    description: 'Quema un total de 5,000 calorías.',
    icon: Award,
    isAchieved: (_, __, totalCalories) => totalCalories >= 5000,
  },
  {
    id: 'step_master_1',
    title: 'Maestro de Pasos I',
    description: 'Acumula un total de 50,000 pasos.',
    icon: Star,
    isAchieved: (_, totalSteps) => totalSteps >= 50000,
  },
  {
    id: 'step_master_2',
    title: 'Maestro de Pasos II',
    description: 'Acumula un total de 100,000 pasos.',
    icon: Award,
    isAchieved: (_, totalSteps) => totalSteps >= 100000,
  },
];


export default function AchievementsPage() {
  const { completedDays } = useProgress();
  
  const completedWorkouts = workouts.filter(w => completedDays.includes(w.day));
  const totalCalories = completedWorkouts.reduce((sum, workout) => sum + workout.calories, 0);
  const totalSteps = completedWorkouts.reduce((sum, workout) => sum + workout.steps, 0);

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8 mt-32">
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-primary">
            Mis Logros
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Aquí puedes ver todos los trofeos y medallas que has ganado.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => {
            const achieved = achievement.isAchieved(completedDays, totalSteps, totalCalories);
            return (
              <Card
                key={achievement.id}
                className={cn(
                  "transition-all duration-300",
                  achieved ? 'bg-card/80 backdrop-blur-sm border-yellow-400/50 shadow-lg' : 'bg-muted/60'
                )}
              >
                <CardContent className="p-6 flex items-center gap-6">
                  <div className={cn("p-4 rounded-full", achieved ? 'bg-yellow-400/20 text-yellow-400' : 'bg-muted-foreground/20 text-muted-foreground')}>
                    <achievement.icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className={cn("font-bold text-lg", achieved ? 'text-foreground' : 'text-muted-foreground')}>{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    </>
  );
}
