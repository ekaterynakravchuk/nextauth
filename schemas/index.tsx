import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, 'Password is required'),
});

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  name: z.string().min(1, 'Name is required'),
});

export const ResetSchema = z.object({
  email: z.string().email(),
});
export const NewPasswordSchema = z.object({
  password: z.string().min(6, 'Password must be at least 6 characters'),
});