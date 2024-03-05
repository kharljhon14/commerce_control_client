import { useAuthContext } from '@/contexts/authContext';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

export default function AuthForms() {
  const { state } = useAuthContext();

  return (
    <div>
      {state === 'sign-in' && <SignInForm />}
      {state === 'sign-up' && <SignUpForm />}
    </div>
  );
}
