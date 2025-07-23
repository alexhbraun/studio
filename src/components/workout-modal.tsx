
"use client";

import Image from 'next/image';
import { Check, Dumbbell, Timer, Repeat, X } from 'lucide-react';
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
  if (!dayData) {
    return null;
  }
  
  const handleComplete = () => {
    onCompleteDay();
    onClose();
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
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
                    <CardContent className="grid md:grid-cols-2 items-center gap-6 p-6 min-h-[400px]">
                      <div className="flex justify-center">
                         <Image
                          src={exercise.image}
                          alt={exercise.name}
                          width={300}
                          height={300}
                          className="rounded-lg object-cover aspect-square"
                          data-ai-hint={exercise.imageHint}
                        />
                      </div>
                      <div className="space-y-4 text-center md:text-left">
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
