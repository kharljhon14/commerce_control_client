'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuthContext } from '@/contexts/authContext';

export default function SignInForm() {
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
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
          />
        </div>
      </div>

      <div>
        <Button
          type="button"
          variant="link"
          className="text-blue-500"
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
