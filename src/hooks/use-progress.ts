
"use client";

import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/contexts/auth-context';

export function useProgress() {
  const { user } = useAuth();
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getProgressKey = useCallback(() => {
    if (!user) return null;
    return `slimwalkProgress_${user.uid}`;
  }, [user]);

  useEffect(() => {
    const progressKey = getProgressKey();
    if (progressKey) {
        try {
          const storedProgress = localStorage.getItem(progressKey);
          if (storedProgress) {
            setCompletedDays(JSON.parse(storedProgress));
          } else {
            setCompletedDays([]);
          }
        } catch (error) {
          console.error("Failed to load progress from localStorage", error);
          setCompletedDays([]);
        }
    } else {
        setCompletedDays([]);
    }
    setIsLoaded(true);
  }, [user, getProgressKey]);

  const toggleDayCompletion = useCallback((day: number) => {
    const progressKey = getProgressKey();
    if (!progressKey) return;

    setCompletedDays(prev => {
      const newCompletedDays = prev.includes(day)
        ? prev.filter(d => d !== day)
        : [...prev, day].sort((a, b) => a - b);
      
      try {
        localStorage.setItem(progressKey, JSON.stringify(newCompletedDays));
      } catch (error) {
        console.error("Failed to save progress to localStorage", error);
      }
      
      return newCompletedDays;
    });
  }, [getProgressKey]);

  const isCompleted = useCallback((day: number) => {
    return completedDays.includes(day);
  }, [completedDays]);

  return { completedDays, toggleDayCompletion, isCompleted, isLoaded };
}
