import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import AuthForms from './AuthForms';
import { useAuthContext } from '@/contexts/authContext';

export default function AuthCard() {
  const { state } = useAuthContext();

  return (
    <Card className="max-w-lg w-full">
      <CardHeader>
        <CardTitle className="text-2xl text-center">
          {state === 'sign-in' && 'Sign In'}
          {state === 'sign-up' && 'Sign Up'}
          {state === 'forgot-password' && 'Forgot Password'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <AuthForms />
      </CardContent>
    </Card>
  );
}
