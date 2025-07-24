
'use client';

import { useState, useEffect, createContext, useContext, ReactNode, useCallback } from 'react';
import type { UserProfile } from '@/lib/types';
import { useAuth } from '@/contexts/auth-context';

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
  const { user } = useAuth();
  const [userProfile, setUserProfileState] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const getProfileKey = useCallback(() => {
    if (!user) return null;
    return `slimwalkProfile_${user.uid}`;
  }, [user]);

  useEffect(() => {
    const profileKey = getProfileKey();
    if (profileKey) {
      try {
        const storedProfile = localStorage.getItem(profileKey);
        if (storedProfile) {
          setUserProfileState(JSON.parse(storedProfile));
        } else {
          setUserProfileState(null); // No profile found for this user
        }
      } catch (error) {
        console.error("Failed to load profile from localStorage", error);
        setUserProfileState(null);
      }
    } else {
        setUserProfileState(null); // No user, no profile
    }
    setLoading(false);
  }, [user, getProfileKey]);

  const setUserProfile = useCallback((profile: UserProfile) => {
    const profileKey = getProfileKey();
    if (profileKey) {
        try {
          localStorage.setItem(profileKey, JSON.stringify(profile));
          setUserProfileState(profile);
        } catch (error) {
          console.error("Failed to save profile to localStorage", error);
        }
    }
  }, [getProfileKey]);
  
  const clearProfile = useCallback(() => {
      const profileKey = getProfileKey();
      const progressKey = profileKey ? `slimwalkProgress_${user?.uid}` : null;
      
      if (profileKey) {
          try {
              localStorage.removeItem(profileKey);
              if(progressKey) localStorage.removeItem(progressKey);
              setUserProfileState(null);
          } catch (error) {
              console.error("Failed to clear profile from localStorage", error);
          }
      }
  }, [getProfileKey, user]);

  return (
    <ProfileContext.Provider value={{ userProfile, loading, setUserProfile, clearProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
