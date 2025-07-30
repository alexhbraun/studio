
"use client";

import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { Dumbbell, Repeat, Timer, RotateCcw, Flame, Footprints } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import type { WorkoutDay } from '@/lib/types';
import { Card, CardContent } from './ui/card';

interface WorkoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  dayData: WorkoutDay | null;
  isCompleted: boolean;
  onCompleteDay: () => void;
}

export function WorkoutModal({ isOpen, onClose, dayData, isCompleted, onCompleteDay }: WorkoutModalProps) {
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    if (typeof window !== 'undefined') {
        handleResize();
        window.addEventListener('resize', handleResize);
    }
    
    return () => {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', handleResize);
        }
    };
  }, []);
  
  if (!dayData) {
    return null;
  }
  
  const handleToggleComplete = () => {
    if (!isCompleted) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
    onCompleteDay();
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) {
        setShowConfetti(false);
        onClose();
      }
    }}>
      <DialogContent className="sm:max-w-3xl bg-background/95 backdrop-blur-sm border-border max-h-[90vh] flex flex-col">
        {showConfetti && <Confetti width={windowSize.width} height={windowSize.height} recycle={false} numberOfPieces={400} />}
        <DialogHeader>
          <DialogTitle className="font-headline text-3xl">Día {dayData.day}: {dayData.title}</DialogTitle>
          <DialogDescription>
            {dayData.description}
          </DialogDescription>
        </DialogHeader>

        <div className="flex-grow overflow-y-auto -mx-6 px-6">
            <div className="space-y-6">
                {dayData.exercises.map((exercise) => (
                <Card key={exercise.id} className="bg-card/80 border-border/60">
                    <CardContent className="p-6">
                    <div className="space-y-3">
                        <h3 className="text-xl font-bold font-headline text-primary">{exercise.name}</h3>
                        <p className="text-muted-foreground whitespace-pre-line">{exercise.description}</p>
                        <div className="flex flex-wrap gap-2 pt-2">
                        <Badge variant="secondary" className="flex items-center gap-2 text-base bg-muted text-muted-foreground">
                            <Timer className="h-4 w-4" />
                            {exercise.duration} minutos
                        </Badge>
                        {exercise.repetitions && (
                            <Badge variant="secondary" className="flex items-center gap-2 text-base bg-muted text-muted-foreground">
                            <Repeat className="h-4 w-4" />
                            {exercise.repetitions}
                            </Badge>
                        )}
                        <Badge variant="secondary" className="flex items-center gap-2 text-base bg-muted text-muted-foreground">
                            <Flame className="h-4 w-4" />
                            {exercise.calories} kcal
                        </Badge>
                         <Badge variant="secondary" className="flex items-center gap-2 text-base bg-muted text-muted-foreground">
                            <Footprints className="h-4 w-4" />
                            {exercise.steps} pasos
                        </Badge>
                        </div>
                    </div>
                    </CardContent>
                </Card>
                ))}
            </div>
        </div>

        <DialogFooter className="sm:justify-between gap-2 pt-4 flex-shrink-0">
            <DialogClose asChild>
                <Button type="button" variant="outline" className="w-full sm:w-auto">
                    Cerrar
                </Button>
            </DialogClose>
            <Button
                onClick={handleToggleComplete}
                className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90"
                size="lg"
            >
                {isCompleted ? (
                <>
                    <RotateCcw className="mr-2 h-5 w-5" />
                    Deshacer
                </>
                ) : (
                <>
                    <Dumbbell className="mr-2 h-5 w-5" />
                    Marcar como completado
                </>
                )}
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
