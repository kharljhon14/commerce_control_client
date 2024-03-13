'use client';

import Cookie from 'js-cookie';
import PasswordInput from '@/components/customs/PasswordInput';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SignInSchema, SignInSchemaType } from '@/schemas/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignInForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema),
  });

  const onSubmit: SubmitHandler<SignInSchemaType> = async (data) => {
    const res = await fetch('http://localhost:8000/auth/sign-in', {
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

    const body = await res.json();

    Cookie.set('session', body.data.token, { expires: 7 });

    router.push('/');
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

        <div>
          <Label htmlFor="password">Password</Label>
          <PasswordInput
            id="password"
            errorMessage={errors.password?.message}
            register={register('password')}
          />
          <Label
            htmlFor="password"
            className="text-xs text-red-500"
          >
            {errors.password?.message}
          </Label>
        </div>
      </div>

      <div className="flex justify-between mx-4 mt-2">
        <Link
          href="/auth/forgot-password"
          className="text-blue-500 p-0"
        >
          Forgot Password
        </Link>

        <Link
          href="/auth/sign-up"
          className="text-blue-500 p-0"
        >
          Sign Up
        </Link>
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
