
'use client';

import { useState, useEffect, createContext, useContext, ReactNode, useCallback } from 'react';
import { doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { UserProfile } from '@/lib/types';
import { useAuth } from '@/contexts/auth-context';

interface ProfileContextType {
  userProfile: UserProfile | null;
  loading: boolean;
  setUserProfile: (profile: UserProfile) => Promise<void>;
  clearProfile: () => Promise<void>;
}

const ProfileContext = createContext<ProfileContextType>({
  userProfile: null,
  loading: true,
  setUserProfile: async () => {},
  clearProfile: async () => {},
});

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const [userProfile, setUserProfileState] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = useCallback(async () => {
    if (user) {
      setLoading(true);
      try {
        const profileDocRef = doc(db, 'profiles', user.uid);
        const docSnap = await getDoc(profileDocRef);
        if (docSnap.exists()) {
          setUserProfileState(docSnap.data() as UserProfile);
        } else {
          setUserProfileState(null); // No profile found for this user
        }
      } catch (error) {
        console.error("Failed to load profile from Firestore", error);
        setUserProfileState(null);
      } finally {
        setLoading(false);
      }
    } else {
      setUserProfileState(null); // No user, no profile
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);
  
  const setUserProfile = useCallback(async (profile: UserProfile) => {
    if (user) {
      try {
        const profileDocRef = doc(db, 'profiles', user.uid);
        await setDoc(profileDocRef, profile, { merge: true });
        setUserProfileState(profile);
      } catch (error) {
        console.error("Failed to save profile to Firestore", error);
      }
    }
  }, [user]);
  
  const clearProfile = useCallback(async () => {
    if (user) {
      try {
        const profileDocRef = doc(db, 'profiles', user.uid);
        await deleteDoc(profileDocRef);
        setUserProfileState(null);
      } catch (error) {
        console.error("Failed to clear profile from Firestore", error);
      }
    }
  }, [user]);

  return (
    <ProfileContext.Provider value={{ userProfile, loading, setUserProfile, clearProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
