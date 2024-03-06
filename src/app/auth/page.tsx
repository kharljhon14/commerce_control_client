'use client';

import { AuthContextProvider } from '@/contexts/authContext';
import AuthCard from '@/features/auth/AuthCard';

export default function AuthPage() {
  return (
    <AuthContextProvider>
      <AuthCard />
    </AuthContextProvider>
  );
}
