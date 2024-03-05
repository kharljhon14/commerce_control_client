import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SignInForm from './SignInForm';

export default function AuthCard() {
  return (
    <Card className="max-w-lg w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Sign In</CardTitle>
      </CardHeader>
      <CardContent>
        <SignInForm />
      </CardContent>
    </Card>
  );
}
