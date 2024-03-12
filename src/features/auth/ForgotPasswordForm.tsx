import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuthContext } from '@/contexts/authContext';
import { fetchRequest } from '@/lib/utils';
import { ForgotPasswordSchema, ForgotPasswordSchemaType } from '@/schemas/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@radix-ui/react-label';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function ForgotPasswordForm() {
  const { handleState } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordSchemaType>({ resolver: zodResolver(ForgotPasswordSchema) });

  const onSubmit: SubmitHandler<ForgotPasswordSchemaType> = async (data) => {
    const res = await fetch('http://localhost:8000/auth/forgot-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const error = await res.json();
      alert(error.message);

      return;
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <div className="space-y-2">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            errorMessage={errors.email?.message}
            {...register('email')}
          />
          <Label
            htmlFor="email"
            className="text-xs text-red-500"
          >
            {errors.email?.message}
          </Label>
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
