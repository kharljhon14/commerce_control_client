'use client';

import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ForgotPasswordSchema, ForgotPasswordSchemaType } from '@/schemas/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@radix-ui/react-label';
import Link from 'next/link';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function ForgotPasswordForm() {
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordSchemaType>({ resolver: zodResolver(ForgotPasswordSchema) });

  const onSubmit: SubmitHandler<ForgotPasswordSchemaType> = async (data) => {
    setErrorMessage('');
    const res = await fetch('http://localhost:8000/auth/forgot-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ callback_url: 'http://localhost:3000', ...data }),
    });

    if (!res.ok) {
      const error = await res.json();
      setErrorMessage(error.message);

      return;
    }
  };

  return (
    <div className="space-y-4">
      {errorMessage && (
        <Alert variant="destructive">
          <AlertTitle>Something went wrong!</AlertTitle>
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}
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
          <Link
            href="/auth/sign-up"
            className="text-blue-500 p-0"
          >
            Sign Up
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
    </div>
  );
}
