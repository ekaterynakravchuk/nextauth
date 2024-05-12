'use client';

import { useForm } from 'react-hook-form';
import { useState, useTransition } from 'react';
import { z } from 'zod';
import { RegisterSchema } from '@/schemas';

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from '../ui/form';
import { Input } from '../ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { CardWrapper } from './card-wrapper';
import { Button } from '../ui/button';
import { register } from '@/actions/register';
import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';

export const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [isPending, setTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values:z.infer<typeof RegisterSchema>)=>{
    setError('')
    setSuccess('')
    setTransition(()=>{
      register(values)
      .then((data)=>{
        setError(data.error)
        setSuccess(data.success)
      
      })
    })
  }

  return (
    <CardWrapper
      headerLabel='Create an account'
      backButtonLabel='Already have an account?'
      backButtonHref='/auth/login'
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=' space-y-8'>
          <div className='space-y-4'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='Name' />
                  </FormControl>
                  <FormMessage className='text-xs'/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} type='email' placeholder='email@example.com' />
                  </FormControl>
                  <FormMessage className='text-xs'/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='******' type='password' />
                  </FormControl>
                  <FormMessage className='text-xs'/>
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type='submit' className='w-full'>Register</Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
