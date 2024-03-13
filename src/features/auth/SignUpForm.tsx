'use client';

import PasswordInput from '@/components/customs/PasswordInput';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SignUpSchema, SignUpSchemaType } from '@/schemas/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });

  const onSubmit: SubmitHandler<SignUpSchemaType> = async (data) => {
    const res = await fetch('http://localhost:8000/auth/sign-up', {
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

        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            errorMessage={errors.name?.message}
            {...register('name')}
          />
          <Label
            htmlFor="name"
            className="text-xs text-red-500"
          >
            {errors.name?.message}
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

        <div>
          <Label htmlFor="confirm_password">Confirm Password</Label>
          <PasswordInput
            id="confirm_password"
            errorMessage={errors.confirm_password?.message}
            register={register('confirm_password')}
          />
          <Label
            htmlFor="confirm_password"
            className="text-xs text-red-500"
          >
            {errors.confirm_password?.message}
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
          href="/auth/sign-in"
          className="text-blue-500 p-0"
        >
          Sign In
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
