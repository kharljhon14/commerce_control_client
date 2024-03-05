'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AuthContextProvider } from '@/contexts/authContext';
import AuthForms from './AuthForms';

export default function AuthCard() {
  return (
    <Card className="max-w-lg w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Sign In</CardTitle>
      </CardHeader>
      <CardContent>
        <AuthContextProvider>
          <AuthForms />
        </AuthContextProvider>
      </CardContent>
    </Card>
  );
}
