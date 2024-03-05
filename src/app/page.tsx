import { Button } from '@/components/ui/button';
import SignInForm from '@/features/auth/SignInForm';

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Button>Click me</Button>
      <SignInForm />
    </div>
  );
}
