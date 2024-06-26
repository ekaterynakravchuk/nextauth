'use server';

import { z } from 'zod';
import { LoginSchema } from '@/schemas';
import { signIn } from '@/auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { AuthError } from 'next-auth';
import { getUserByEmail } from '@/data/user';
import { generateVerificationToken } from '@/lib/tokens';
import { sendVerificationEmail } from '@/lib/mail';

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedValues = LoginSchema.safeParse(values);

  if (!validatedValues.success) {
    return { error: 'Invalid fields' };
  }

  const { email, password } = validatedValues.data;
  const existingUser = await getUserByEmail(email);

  if(!existingUser || !existingUser.email || !existingUser.password){
    return {error: 'Email does not exist'}
  }

  if(!existingUser.emailVerified){
    const verificationToken = await generateVerificationToken(existingUser.email);

    await sendVerificationEmail(existingUser.email, verificationToken.token);

    return {success: "Conformation email sent!"}
  }

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid Credentials' };
        default:
          return { error: 'Something went wrong...' };
      }
    }

    throw error;
  }
};
