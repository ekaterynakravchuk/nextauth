'use server'

import { z } from 'zod'
import { LoginSchema } from '@/schemas/schemas'

export const login = async (values: z.infer<typeof LoginSchema>)=> {
  const validatedValues = LoginSchema.safeParse(values);

  if(!validatedValues.success){
    return{error: "Invalid fields"}
  }
  
  return{success:"Email sent"}
}