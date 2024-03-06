import PasswordInput from '@/components/customs/PasswordInput';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuthContext } from '@/contexts/authContext';

export default function SignUphtmlForm() {
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

        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
          />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <PasswordInput
            id="password"
            name="password"
          />
        </div>

        <div>
          <Label htmlFor="confirm-password">Confirm Password</Label>
          <PasswordInput
            id="confirm-password"
            name="confirm-password"
          />
        </div>
      </div>

      <div className="flex justify-between mx-4 mt-2">
        <Button
          type="button"
          variant="link"
          className="text-blue-500 p-0"
          onClick={() => handleState('forgot-password')}
        >
          Forgot Password
        </Button>

        <Button
          type="button"
          variant="link"
          className="text-blue-500 p-0"
          onClick={() => handleState('sign-in')}
        >
          Sign In
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
