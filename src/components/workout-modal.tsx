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
  dayData: WorkoutDay;
  isCompleted: boolean;
  onCompleteDay: () => void;
}

export function WorkoutModal({ isOpen, onClose, dayData, isCompleted, onCompleteDay }: WorkoutModalProps) {
  const handleComplete = () => {
    onCompleteDay();
    onClose();
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl bg-background/95 backdrop-blur-sm border-border">
        <DialogHeader>
          <DialogTitle className="font-headline text-3xl">Tag {dayData.day}: {dayData.title}</DialogTitle>
          <DialogDescription>
            Führe die folgenden Übungen durch. Wische, um zwischen ihnen zu navigieren.
          </DialogDescription>
        </DialogHeader>

        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {dayData.exercises.map((exercise) => (
              <CarouselItem key={exercise.id}>
                <div className="p-1">
                  <Card className="bg-card border-border/60">
                    <CardContent className="flex flex-col md:flex-row items-center gap-6 p-6">
                      <div className="md:w-1/3 w-full">
                         <Image
                          src={exercise.image}
                          alt={exercise.name}
                          width={400}
                          height={400}
                          className="rounded-lg object-cover aspect-square"
                          data-ai-hint={exercise.imageHint}
                        />
                      </div>
                      <div className="md:w-2/3 w-full space-y-4">
                        <h3 className="text-2xl font-bold font-headline text-primary">{exercise.name}</h3>
                        <p className="text-muted-foreground">{exercise.description}</p>
                        <div className="flex flex-wrap gap-4 pt-2">
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
                    Schließen
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
                    Abgeschlossen
                </>
                ) : (
                <>
                    <Dumbbell className="mr-2 h-5 w-5" />
                    Als abgeschlossen markieren
                </>
                )}
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
