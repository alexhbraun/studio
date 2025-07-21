"use client";

import { CheckCircle2, Circle, Clock, Dumbbell } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { WorkoutDay } from '@/lib/types';
import { cn } from '@/lib/utils';

interface WorkoutCardProps {
  day: WorkoutDay;
  isCompleted: boolean;
  onClick: () => void;
}

function getDifficultyBadge(day: number): { text: string; className: string } {
    if (day <= 10) return { text: 'Leicht', className: 'bg-green-500/20 text-green-300 border-green-500/40 hover:bg-green-500/30' };
    if (day <= 20) return { text: 'Mittel', className: 'bg-orange-500/20 text-orange-300 border-orange-500/40 hover:bg-orange-500/30' };
    return { text: 'Schwer', className: 'bg-red-500/20 text-red-300 border-red-500/40 hover:bg-red-500/30' };
}

export function WorkoutCard({ day, isCompleted, onClick }: WorkoutCardProps) {
  const totalDuration = day.exercises.reduce((acc, curr) => acc + parseInt(curr.duration), 0);
  const difficulty = getDifficultyBadge(day.day);

  return (
    <Card
      onClick={onClick}
      className={cn(
        "cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/80 bg-card border-border/60 flex flex-col justify-between",
        isCompleted ? 'border-primary/50' : ''
      )}
    >
      <CardContent className="p-4 space-y-3">
        <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
                <div className="bg-muted rounded-full h-8 w-8 flex items-center justify-center text-sm font-bold">{day.day}</div>
                 <h3 className="font-bold text-md">{day.title}</h3>
            </div>
             {isCompleted ? (
              <CheckCircle2 className="h-5 w-5 text-primary" />
            ) : (
              <Circle className="h-5 w-5 text-muted-foreground/50" />
            )}
        </div>
        <p className="text-sm text-muted-foreground">{day.description}</p>
        <div className="flex items-center justify-between text-muted-foreground text-xs pt-2">
            <div className="flex gap-4">
                <div className="flex items-center gap-1.5">
                    <Clock className="h-3 w-3" />
                    <span>{totalDuration} Minuten</span>
                </div>
                 <div className="flex items-center gap-1.5">
                    <Dumbbell className="h-3 w-3" />
                    <span>{day.exercises.length} Übungen</span>
                </div>
            </div>
             <Badge variant="outline" className={cn("text-xs", difficulty.className)}>{difficulty.text}</Badge>
        </div>
      </CardContent>
    </Card>
  );
}
