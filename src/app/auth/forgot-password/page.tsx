import AuthCard from '@/features/auth/AuthCard';
import ForgotPasswordForm from '@/features/auth/ForgotPasswordForm';

export default function ForgotPasswordPage() {
  return (
    <AuthCard title="Forgot Password">
      <ForgotPasswordForm />
    </AuthCard>
  );
}
