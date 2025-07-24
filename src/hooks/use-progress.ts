// src/hooks/use-progress.ts
"use client";

import { useState, useEffect, useCallback } from 'react';

const PROGRESS_KEY = 'strideSculptProgress';

export function useProgress() {
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedProgress = localStorage.getItem(PROGRESS_KEY);
      if (storedProgress) {
        setCompletedDays(JSON.parse(storedProgress));
      }
    } catch (error) {
      console.error("Failed to load progress from localStorage", error);
      setCompletedDays([]);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const toggleDayCompletion = useCallback((day: number) => {
    setCompletedDays(prev => {
      const newCompletedDays = prev.includes(day)
        ? prev.filter(d => d !== day)
        : [...prev, day].sort((a, b) => a - b);
      
      try {
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(newCompletedDays));
      } catch (error) {
        console.error("Failed to save progress to localStorage", error);
      }
      
      return newCompletedDays;
    });
  }, []);

  const isCompleted = useCallback((day: number) => {
    return completedDays.includes(day);
  }, [completedDays]);

  return { completedDays, toggleDayCompletion, isCompleted, isLoaded };
}
