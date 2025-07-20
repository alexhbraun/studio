"use client";

import { CheckCircle2, Circle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import type { WorkoutDay } from '@/lib/types';
import { cn } from '@/lib/utils';

interface WorkoutCardProps {
  day: WorkoutDay;
  isCompleted: boolean;
  onClick: () => void;
}

export function WorkoutCard({ day, isCompleted, onClick }: WorkoutCardProps) {
  return (
    <Card
      onClick={onClick}
      className={cn(
        "cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        isCompleted ? 'bg-secondary/70 border-primary/50' : 'bg-card'
      )}
    >
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-bold">Day {day.day}</CardTitle>
        {isCompleted ? (
          <CheckCircle2 className="h-6 w-6 text-primary" />
        ) : (
          <Circle className="h-6 w-6 text-muted-foreground/50" />
        )}
      </CardHeader>
      <CardContent>
        <CardDescription>{day.title}</CardDescription>
      </CardContent>
    </Card>
  );
}
