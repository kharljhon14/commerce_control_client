'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { Input, InputProps } from '../ui/input';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Props extends Omit<InputProps, 'types'> {
  className?: string;
  register?: UseFormRegisterReturn<any>;
}

export default function PasswordInput({ className, register, ...props }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        {...props}
        {...register}
        type={showPassword ? 'text' : 'password'}
        className={className}
      />

      <Button
        className="absolute right-0 top-0"
        type="button"
        variant="ghost"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? 'Hide' : 'Show'}
      </Button>
    </div>
  );
}
