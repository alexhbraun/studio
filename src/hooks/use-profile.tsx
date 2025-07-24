'use client';

import { useState, useEffect, createContext, useContext, ReactNode, useCallback } from 'react';
import type { UserProfile } from '@/lib/types';

const PROFILE_KEY = 'slimWalkProfile';

interface ProfileContextType {
  userProfile: UserProfile | null;
  loading: boolean;
  setUserProfile: (profile: UserProfile) => void;
  clearProfile: () => void;
}

const ProfileContext = createContext<ProfileContextType>({
  userProfile: null,
  loading: true,
  setUserProfile: () => {},
  clearProfile: () => {},
});

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [userProfile, setUserProfileState] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedProfile = localStorage.getItem(PROFILE_KEY);
      if (storedProfile) {
        setUserProfileState(JSON.parse(storedProfile));
      }
    } catch (error) {
      console.error("Failed to load profile from localStorage", error);
      setUserProfileState(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const setUserProfile = useCallback((profile: UserProfile) => {
    try {
      localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
      setUserProfileState(profile);
    } catch (error) {
      console.error("Failed to save profile to localStorage", error);
    }
  }, []);
  
  const clearProfile = useCallback(() => {
      try {
          localStorage.removeItem(PROFILE_KEY);
          // Also remove progress when profile is cleared
          localStorage.removeItem('slimWalkProgress');
          setUserProfileState(null);
          // Force a reload to ensure the onboarding form is shown correctly.
          window.location.reload();
      } catch (error) {
          console.error("Failed to clear profile from localStorage", error);
      }
  }, []);

  return (
    <ProfileContext.Provider value={{ userProfile, loading, setUserProfile, clearProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
