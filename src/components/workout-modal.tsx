
"use client";

import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { Dumbbell, Repeat, Timer, RotateCcw, Flame, Footprints, Smile, Frown, Meh, Check } from 'lucide-react';
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
import type { WorkoutDay, WorkoutExercise } from '@/lib/types';
import { Card, CardContent } from './ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { Checkbox } from './ui/checkbox';
import { cn } from '@/lib/utils';

interface WorkoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  dayData: WorkoutDay | null;
  isCompleted: boolean;
  onCompleteDay: () => void;
}

const emojiVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: 'spring',
      stiffness: 300,
      damping: 15,
    },
  }),
  hover: {
    scale: 1.2,
    transition: { type: 'spring', stiffness: 400, damping: 10 },
  },
};

export function WorkoutModal({ isOpen, onClose, dayData, isCompleted, onCompleteDay }: WorkoutModalProps) {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [checkedExercises, setCheckedExercises] = useState(new Set<number>());

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
  
  useEffect(() => {
    // Reset state when a new day is opened
    if (dayData) {
      setCheckedExercises(new Set<number>());
    }
  }, [dayData]);
  
  useEffect(() => {
    if (!dayData || isCompleted) return;

    if (checkedExercises.size === dayData.exercises.length) {
      handleCompleteDay();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedExercises, dayData, isCompleted]);


  if (!dayData) {
    return null;
  }
  
  const handleCompleteDay = () => {
    if (!isCompleted) {
      setShowConfetti(true);
      setShowFeedback(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
    onCompleteDay();
  };

  const handleFeedback = () => {
    setShowFeedback(false);
  }
  
  const handleClose = () => {
    setShowConfetti(false);
    setShowFeedback(false);
    onClose();
  }
  
  const handleCheckChange = (exerciseId: number) => {
    setCheckedExercises(prev => {
      const newSet = new Set(prev);
      if (newSet.has(exerciseId)) {
        newSet.delete(exerciseId);
      } else {
        newSet.add(exerciseId);
      }
      return newSet;
    });
  };

  const allExercisesCompleted = dayData ? checkedExercises.size === dayData.exercises.length : false;
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-3xl bg-background/95 backdrop-blur-sm border-border max-h-[90vh] flex flex-col">
        {showConfetti && <Confetti width={windowSize.width} height={windowSize.height} recycle={false} numberOfPieces={400} />}
        <DialogHeader>
          <DialogTitle className="font-headline text-3xl">Día {dayData.day}: {dayData.title}</DialogTitle>
          <DialogDescription>
            {isCompleted ? "¡Ya has completado este entrenamiento! Puedes revisar los ejercicios." : "Marca cada ejercicio a medida que lo completes."}
          </DialogDescription>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {showFeedback ? (
            <motion.div 
              key="feedback"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="flex-grow flex flex-col items-center justify-center text-center p-8 space-y-4"
            >
              <h3 className="text-2xl font-bold">¡Gran trabajo!</h3>
              <p className="text-muted-foreground">¿Cómo te sentiste hoy?</p>
              <div className="flex items-center gap-6 pt-4">
                {[
                  { icon: Frown, label: "Intenso", color: "text-red-500" },
                  { icon: Meh, label: "Justo", color: "text-yellow-500" },
                  { icon: Smile, label: "Fácil", color: "text-green-500" },
                ].map((item, index) => (
                    <motion.div key={item.label} custom={index} variants={emojiVariants} initial="hidden" animate="visible" whileHover="hover" className="flex flex-col items-center gap-2">
                        <Button variant="ghost" size="icon" className={`h-20 w-20 rounded-full bg-muted hover:bg-muted/80 ${item.color}`} onClick={handleFeedback}>
                            <item.icon className="h-12 w-12" />
                        </Button>
                        <span className="text-sm font-medium">{item.label}</span>
                    </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="exercises"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-grow overflow-y-auto -mx-6 px-6"
            >
                <div className="space-y-4">
                    {dayData.exercises.map((exercise) => (
                    <Card key={exercise.id} className={cn("bg-card/80 border-border/60 transition-colors", checkedExercises.has(exercise.id) && 'bg-primary/10 border-primary/30')}>
                        <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                           <Checkbox
                              id={`exercise-${exercise.id}`}
                              checked={isCompleted || checkedExercises.has(exercise.id)}
                              onCheckedChange={() => handleCheckChange(exercise.id)}
                              disabled={isCompleted}
                              className="mt-1 h-5 w-5"
                           />
                           <div className="flex-1 space-y-3">
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
                        </div>
                        </CardContent>
                    </Card>
                    ))}
                </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <DialogFooter className="pt-4 flex-shrink-0">
          <DialogClose asChild>
              <Button type="button" variant="outline" className="w-full">
                  { isCompleted ? "Cerrar" : (allExercisesCompleted ? "Hecho" : "Cerrar por ahora")}
              </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
