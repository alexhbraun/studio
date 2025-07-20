"use client";

import { useState } from 'react';
import { workouts } from '@/lib/workouts';
import { useProgress } from '@/hooks/use-progress';
import { WorkoutDay } from '@/lib/types';

import { WorkoutCard } from '@/components/workout-card';
import { WorkoutModal } from '@/components/workout-modal';
import { MotivationalQuote } from '@/components/motivational-quote';
import { Skeleton } from '@/components/ui/skeleton';

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

  const progressPercentage = (completedDays.length / workouts.length) * 100;

  return (
    <div>
      <MotivationalQuote progressPercentage={progressPercentage} />
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
        {!isLoaded && Array.from({ length: 30 }).map((_, index) => (
          <Skeleton key={index} className="h-40 w-full rounded-lg" />
        ))}
        {isLoaded && workouts.map(day => (
          <WorkoutCard
            key={day.day}
            day={day}
            isCompleted={isCompleted(day.day)}
            onClick={() => handleCardClick(day)}
          />
        ))}
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
    </div>
  );
}
