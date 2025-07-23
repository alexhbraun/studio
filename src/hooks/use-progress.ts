// src/hooks/use-progress.ts
"use client";

import { useState, useEffect, useCallback } from 'react';
import { useAuth } from './use-auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const getProgressKey = (userId: string) => `slimWalkProgress_${userId}`;

export function useProgress() {
  const { user } = useAuth();
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Function to get progress from Firestore
  const getProgressFromFirestore = useCallback(async (userId: string) => {
    const progressDocRef = doc(db, 'userProgress', userId);
    try {
      const docSnap = await getDoc(progressDocRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        return data.completedDays || [];
      }
    } catch (error) {
      console.error("Failed to load progress from Firestore", error);
    }
    return [];
  }, []);
  
  // Function to save progress to Firestore
  const saveProgressToFirestore = useCallback(async (userId: string, days: number[]) => {
      const progressDocRef = doc(db, 'userProgress', userId);
      try {
        await setDoc(progressDocRef, { completedDays: days }, { merge: true });
      } catch (error) {
          console.error("Failed to save progress to Firestore", error);
      }
  }, []);


  useEffect(() => {
    const loadProgress = async () => {
      if (user) {
        setIsLoaded(false);
        // Load from Firestore
        const firestoreProgress = await getProgressFromFirestore(user.uid);
        setCompletedDays(firestoreProgress);
        setIsLoaded(true);
      } else {
        // No user, clear progress
        setCompletedDays([]);
        setIsLoaded(true);
      }
    };
    loadProgress();
  }, [user, getProgressFromFirestore]);

  const toggleDayCompletion = useCallback((day: number) => {
    if (!user) return;
    
    setCompletedDays(prev => {
      const newCompletedDays = prev.includes(day)
        ? prev.filter(d => d !== day)
        : [...prev, day].sort((a, b) => a - b);
      
      // Save to Firestore
      saveProgressToFirestore(user.uid, newCompletedDays);
      
      return newCompletedDays;
    });
  }, [user, saveProgressToFirestore]);

  const isCompleted = useCallback((day: number) => {
    return completedDays.includes(day);
  }, [completedDays]);

  return { completedDays, toggleDayCompletion, isCompleted, isLoaded };
}
