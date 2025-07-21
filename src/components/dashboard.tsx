"use client";

import { useState } from 'react';
import { workouts } from '@/lib/workouts';
import { useProgress } from '@/hooks/use-progress';
import { WorkoutDay } from '@/lib/types';
import { Flame, TrendingUp, Calendar, Trophy } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
            <CardTitle className="text-sm font-medium text-muted-foreground">Gesamtfortschritt</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{progressPercentage.toFixed(0)}%</div>
            <p className="text-xs text-muted-foreground">{completedDays.length} von 30 Tagen</p>
            <Progress value={progressPercentage} className="mt-2 h-2" />
          </CardContent>
        </Card>
        <Card className="bg-card/60 backdrop-blur-sm border-border/60 shadow-lg animate-fade-in-down animation-delay-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Serie</CardTitle>
            <Flame className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">Tage in Folge</p>
          </CardContent>
        </Card>
        <Card className="bg-card/60 backdrop-blur-sm border-border/60 shadow-lg animate-fade-in-down animation-delay-400">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Aktuelle Woche</CardTitle>
            <Calendar className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentWeek}</div>
            <p className="text-xs text-muted-foreground">von 5 Programmwochen</p>
          </CardContent>
        </Card>
        <Card className="bg-card/60 backdrop-blur-sm border-border/60 shadow-lg animate-fade-in-down animation-delay-600">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Erfolge</CardTitle>
            <Trophy className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.floor(completedDays.length / 5)}</div>
            <p className="text-xs text-muted-foreground">Freigeschaltete Abzeichen</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-primary/90 text-primary-foreground rounded-lg p-6 text-center shadow-lg animate-hero-glow">
        <h2 className="text-2xl font-bold">Zeit, das Abenteuer zu beginnen!</h2>
        <p>Jeder Schritt bringt dich deinem Ziel näher. Setze deine Reise zur Gesundheit fort!</p>
      </div>
      
      <div>
        <h2 className="text-3xl font-bold mb-4">Dein 30-Tage Plan</h2>
        <p className="text-muted-foreground mb-6">Klicke auf eine Tageskarte, um das Training zu starten</p>
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

      {selectedDay && (
        <WorkoutModal
          isOpen={!!selectedDay}
          onClose={handleCloseModal}
          dayData={selectedDay}
          isCompleted={isCompleted(selectedDay.day)}
          onCompleteDay={() => handleCompleteDay(selectedDay.day)}
        />
      )}
      
      <MotivationalQuote progressPercentage={progressPercentage} />

    </div>
  );
}
