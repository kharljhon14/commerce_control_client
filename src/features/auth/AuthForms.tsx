import { useAuthContext } from '@/contexts/authContext';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import ForgotPasswordForm from './ForgotPasswordForm';

export default function AuthForms() {
  const { state } = useAuthContext();

  return (
    <div>
      {state === 'sign-in' && <SignInForm />}
      {state === 'sign-up' && <SignUpForm />}
      {state === 'forgot-password' && <ForgotPasswordForm />}
    </div>
  );
}
