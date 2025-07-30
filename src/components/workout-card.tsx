
"use client";

import { CheckCircle2, Circle, Clock, Dumbbell, Flame, Footprints } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { WorkoutDay } from '@/lib/types';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface WorkoutCardProps {
  day: WorkoutDay;
  isCompleted: boolean;
  onClick: () => void;
  style?: React.CSSProperties;
  isToday?: boolean;
}

function getDifficultyBadge(day: number): { text: string; className: string } {
    if (day <= 10) return { text: 'Fácil', className: 'bg-green-100 text-green-800 border-green-200/80 dark:bg-green-900/50 dark:text-green-200 dark:border-green-800/60' };
    if (day <= 20) return { text: 'Medio', className: 'bg-orange-100 text-orange-800 border-orange-200/80 dark:bg-orange-900/50 dark:text-orange-200 dark:border-orange-800/60' };
    return { text: 'Difícil', className: 'bg-red-100 text-red-800 border-red-200/80 dark:bg-red-900/50 dark:text-red-200 dark:border-red-800/60' };
}

export function WorkoutCard({ day, isCompleted, onClick, style, isToday = false }: WorkoutCardProps) {
  const totalDuration = day.exercises.reduce((acc, curr) => acc + parseInt(curr.duration), 0);
  const difficulty = getDifficultyBadge(day.day);

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      style={style}
      className="h-full"
    >
      <Card
        onClick={onClick}
        className={cn(
          "cursor-pointer transition-all duration-300 group bg-card/60 backdrop-blur-sm border-border/60 shadow-lg flex flex-col h-full",
          isCompleted ? 'border-primary/50' : 'hover:border-primary/80',
          isToday && !isCompleted ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''
        )}
      >
        <CardContent className="p-4 flex flex-col flex-grow">
          {/* --- Top Section --- */}
          <div className="flex justify-between items-start mb-2 h-[60px]">
              <div className="flex items-start gap-3">
                  <div className="bg-muted rounded-full h-8 w-8 flex items-center justify-center text-sm font-bold transition-colors group-hover:bg-primary group-hover:text-primary-foreground flex-shrink-0">{day.day}</div>
                  <h3 className="font-bold text-md leading-tight pt-1 line-clamp-2">{day.title}</h3>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0 pl-2">
                  {isCompleted ? (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring' }}>
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </motion.div>
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground/30" />
                  )}
              </div>
          </div>
          
          {/* --- Middle Section (Description) --- */}
          <div className="flex-grow my-2 h-10">
            <p className="text-sm text-muted-foreground line-clamp-2">{day.description}</p>
          </div>
          
          {/* --- Bottom Section (Metrics) --- */}
          <div className="mt-auto pt-3 border-t border-border/60">
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-muted-foreground text-xs">
                  <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 flex-shrink-0" />
                      <span>{totalDuration} min</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                      <Dumbbell className="h-3.5 w-3.5 flex-shrink-0" />
                      <span>{day.exercises.length} ejer.</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                      <Flame className="h-3.5 w-3.5 flex-shrink-0" />
                      <span>{day.calories} kcal</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                      <Footprints className="h-3.5 w-3.5 flex-shrink-0" />
                      <span>{day.steps} pasos</span>
                  </div>
              </div>
              <div className="flex justify-end mt-2">
                  <Badge variant="outline" className={cn("text-xs px-1.5 py-0.5 h-fit font-normal", difficulty.className)}>{difficulty.text}</Badge>
              </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
