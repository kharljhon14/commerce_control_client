import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuthContext } from '@/contexts/authContext';
import { Label } from '@radix-ui/react-label';

export default function ForgotPasswordForm() {
  const { handleState } = useAuthContext();

  return (
    <form autoComplete="off">
      <div className="space-y-2">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
          />
        </div>
      </div>

      <div className="flex justify-between mx-4 mt-2">
        <Button
          type="button"
          variant="link"
          className="text-blue-500 p-0"
          onClick={() => handleState('sign-in')}
        >
          Sign In
        </Button>

        <Button
          type="button"
          variant="link"
          className="text-blue-500 p-0"
          onClick={() => handleState('sign-up')}
        >
          Sign Up
        </Button>
      </div>

      <Button
        className="w-full mt-6"
        size="lg"
      >
        Submit
      </Button>
    </form>
  );
}
