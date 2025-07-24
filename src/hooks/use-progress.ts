
"use client";

import { useState, useEffect, useCallback } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAuth } from '@/contexts/auth-context';

export function useProgress() {
  const { user } = useAuth();
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchProgress = useCallback(async () => {
    if (user) {
        setIsLoaded(false);
        try {
          const progressDocRef = doc(db, 'profiles', user.uid);
          const docSnap = await getDoc(progressDocRef);
          if (docSnap.exists() && docSnap.data().completedDays) {
            setCompletedDays(docSnap.data().completedDays);
          } else {
            setCompletedDays([]);
          }
        } catch (error) {
          console.error("Failed to load progress from Firestore", error);
          setCompletedDays([]);
        } finally {
            setIsLoaded(true);
        }
    } else {
        setCompletedDays([]);
        setIsLoaded(true);
    }
  }, [user]);

  useEffect(() => {
    fetchProgress();
  }, [fetchProgress]);


  const toggleDayCompletion = useCallback(async (day: number) => {
    if (!user) return;

    const newCompletedDays = completedDays.includes(day)
      ? completedDays.filter(d => d !== day)
      : [...completedDays, day].sort((a, b) => a - b);
    
    setCompletedDays(newCompletedDays); // Optimistic update

    try {
      const progressDocRef = doc(db, 'profiles', user.uid);
      await setDoc(progressDocRef, { completedDays: newCompletedDays }, { merge: true });
    } catch (error) {
      console.error("Failed to save progress to Firestore", error);
      // Revert optimistic update on error
      fetchProgress(); 
    }
  }, [user, completedDays, fetchProgress]);

  const isCompleted = useCallback((day: number) => {
    return completedDays.includes(day);
  }, [completedDays]);

  return { completedDays, toggleDayCompletion, isCompleted, isLoaded };
}
