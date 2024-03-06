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

export const SignUpSchema = z
  .object({
    email: z
      .string()
      .min(1, 'Email is required')
      .max(64, 'Email must not exceed 64 characters')
      .email('Must be a valid email'),
    name: z.string().min(1, 'Name is required').max(32, 'Name must not exceed 32 characters'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .max(64, 'Password must not exceed 64 character')
      .regex(/^(?=.*[A-Z])/, 'Password must contain at least one uppercase letter')
      .regex(/^(?=.*\d)/, 'Password must contain at least one numeric digit')
      .regex(/^(?=.*[!@#$%^&*()_+])/, 'Password must contain at least one special character'),
    confirm_password: z
      .string()
      .min(8, 'Confirm password must be at least 8 characters long')
      .max(64, 'Confirm password must not exceed 64 character')
      .regex(/^(?=.*[A-Z])/, 'Confirm password must contain at least one uppercase letter')
      .regex(/^(?=.*\d)/, 'Confirm password must contain at least one numeric digit')
      .regex(
        /^(?=.*[!@#$%^&*()_+])/,
        'Confirm password must contain at least one special character'
      ),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "passwords doesn't match",
    path: ['confirm_password'],
  });

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;

export const ForgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .max(64, 'Email must not exceed 64 characters')
    .email('Must be a valid email'),
});

export type ForgotPasswordSchemaType = z.infer<typeof ForgotPasswordSchema>;
