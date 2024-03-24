import AuthCard from '@/features/auth/AuthCard';
import SignInForm from '@/features/auth/SignInForm';

export default function SignInPage() {
  return (
    <AuthCard title="Sign In">
      <SignInForm />
    </AuthCard>
  );
}
