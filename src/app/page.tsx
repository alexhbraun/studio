
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/auth-context';

export default function HomePage() {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (user) {
        router.replace('/dashboard');
      } else {
        router.replace('/register');
      }
    }
  }, [user, loading, router]);

  return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
  );
}
