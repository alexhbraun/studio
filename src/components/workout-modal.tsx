
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Confetti from 'react-confetti';
import { Check, Dumbbell, Timer, Repeat } from 'lucide-react';
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
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
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial size
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  if (!dayData) {
    return null;
  }
  
  const handleComplete = () => {
    if (!isCompleted) {
      onCompleteDay();
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000); // Confetti for 5 seconds
    }
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) {
        setShowConfetti(false);
      }
      onClose();
    }}>
        {showConfetti && <Confetti width={windowSize.width} height={windowSize.height} recycle={false} numberOfPieces={400} />}
      <DialogContent className="sm:max-w-3xl bg-background/95 backdrop-blur-sm border-border">
        <DialogHeader>
          <DialogTitle className="font-headline text-3xl">Día {dayData.day}: {dayData.title}</DialogTitle>
          <DialogDescription>
            Realiza los siguientes ejercicios. Desliza para navegar entre ellos.
          </DialogDescription>
        </DialogHeader>

        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {dayData.exercises.map((exercise) => (
              <CarouselItem key={exercise.id}>
                <div className="p-1">
                  <Card className="bg-card border-border/60">
                    <CardContent className="grid md:grid-cols-2 items-center justify-center gap-6 p-6 min-h-[400px]">
                      <div className="flex justify-center items-center">
                         <Image
                          src={exercise.image}
                          alt={exercise.name}
                          width={300}
                          height={300}
                          className="rounded-lg object-cover aspect-square"
                          data-ai-hint={exercise.imageHint}
                        />
                      </div>
                      <div className="space-y-4 text-center md:text-left flex flex-col items-center justify-center md:items-start">
                        <h3 className="text-2xl font-bold font-headline text-primary">{exercise.name}</h3>
                        <p className="text-muted-foreground">{exercise.description}</p>
                        <div className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start">
                           <Badge variant="secondary" className="flex items-center gap-2 text-base bg-muted text-muted-foreground">
                              <Timer className="h-4 w-4" />
                              {exercise.duration}
                            </Badge>
                          {exercise.repetitions && (
                             <Badge variant="secondary" className="flex items-center gap-2 text-base bg-muted text-muted-foreground">
                              <Repeat className="h-4 w-4" />
                              {exercise.repetitions}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-12" />
          <CarouselNext className="mr-12" />
        </Carousel>

        <DialogFooter className="sm:justify-between gap-2">
            <DialogClose asChild>
                <Button type="button" variant="outline" className="w-full sm:w-auto">
                    Cerrar
                </Button>
            </DialogClose>
            <Button
                onClick={handleComplete}
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 disabled:bg-green-600 disabled:opacity-100"
                size="lg"
                disabled={isCompleted}
            >
                {isCompleted ? (
                <>
                    <Check className="mr-2 h-5 w-5" />
                    Completado
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
