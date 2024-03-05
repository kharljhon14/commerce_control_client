import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function SignInForm() {
  return (
    <form autoComplete="off">
      <div className="space-y-2">
        <div>
          <Label for="email">Email</Label>
          <Input
            id="email"
            name="email"
          />
        </div>

        <div>
          <Label for="password">Password</Label>
          <Input
            id="password"
            name="password"
          />
        </div>
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
