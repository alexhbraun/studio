
"use client";

import { CheckCircle2, Circle, Clock, Dumbbell, Flame, Footprints } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { WorkoutDay } from '@/lib/types';
import { cn } from '@/lib/utils';

interface WorkoutCardProps {
  day: WorkoutDay;
  isCompleted: boolean;
  onClick: () => void;
  style?: React.CSSProperties;
}

function getDifficultyBadge(day: number): { text: string; className: string } {
    if (day <= 10) return { text: 'Fácil', className: 'bg-green-100 text-green-800 border-green-200 hover:bg-green-200/80 dark:bg-green-900/40 dark:text-green-200 dark:border-green-700/60' };
    if (day <= 20) return { text: 'Medio', className: 'bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200/80 dark:bg-orange-900/40 dark:text-orange-200 dark:border-orange-700/60' };
    return { text: 'Difícil', className: 'bg-red-100 text-red-800 border-red-200 hover:bg-red-200/80 dark:bg-red-900/40 dark:text-red-200 dark:border-red-700/60' };
}

export function WorkoutCard({ day, isCompleted, onClick, style }: WorkoutCardProps) {
  const totalDuration = day.exercises.reduce((acc, curr) => acc + parseInt(curr.duration), 0);
  const difficulty = getDifficultyBadge(day.day);

  return (
    <Card
      onClick={onClick}
      style={style}
      className={cn(
        "cursor-pointer transition-all duration-300 group bg-card/60 backdrop-blur-sm border-border/60 shadow-lg hover:shadow-primary/20 hover:-translate-y-2 animate-fade-in-up",
        isCompleted ? 'border-primary/50 pulse-glow-completed' : 'hover:border-primary/80'
      )}
    >
      <CardContent className="p-4 space-y-3">
        <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
                <div className="bg-muted rounded-full h-8 w-8 flex items-center justify-center text-sm font-bold transition-colors group-hover:bg-primary group-hover:text-primary-foreground">{day.day}</div>
                 <h3 className="font-bold text-md">{day.title}</h3>
            </div>
             {isCompleted ? (
              <CheckCircle2 className="h-5 w-5 text-primary" />
            ) : (
              <Circle className="h-5 w-5 text-muted-foreground/50" />
            )}
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{day.description}</p>
        <div className="flex items-end justify-between text-muted-foreground text-xs pt-2">
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    <span>{totalDuration} min</span>
                </div>
                 <div className="flex items-center gap-1.5">
                    <Dumbbell className="h-4 w-4" />
                    <span>{day.exercises.length} ejer.</span>
                </div>
                 <div className="flex items-center gap-1.5">
                    <Flame className="h-4 w-4" />
                    <span>{day.calories} kcal</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Footprints className="h-4 w-4" />
                    <span>{day.steps} pasos</span>
                </div>
            </div>
             <Badge variant="outline" className={cn("text-xs shrink-0", difficulty.className)}>{difficulty.text}</Badge>
        </div>
      </CardContent>
    </Card>
  );
}
