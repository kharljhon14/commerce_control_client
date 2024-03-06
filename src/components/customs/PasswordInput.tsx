'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { Input, InputProps } from '../ui/input';

interface Props extends Omit<InputProps, 'types'> {
  className?: string;
}

export default function PasswordInput({ className, ...props }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        {...props}
        className={className}
        type={showPassword ? 'text' : 'password'}
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
