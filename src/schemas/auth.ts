import { z } from 'zod';

export const SignInSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .max(64, 'Email must not exceed 64 characters')
    .email('Must be a valid email'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(64, 'Password must not exceed 64 character'),
});

export type SignInSchemaType = z.infer<typeof SignInSchema>;
