
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/auth-context';

export default function HomePage() {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    // Wait until the authentication state is determined
    if (!loading) {
      if (user) {
        // If the user is logged in, redirect to the dashboard
        router.replace('/dashboard');
      } else {
        // If the user is not logged in (new visitor), redirect to the sign-up page
        router.replace('/register');
      }
    }
  }, [user, loading, router]);

  // Show a generic loading message while the logic is processing
  return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
  );
}
