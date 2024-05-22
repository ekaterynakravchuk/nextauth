'use server'

import { RegisterSchema } from "@/schemas";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const register = async (values:z.infer<typeof RegisterSchema>)=>{
  const validatedValues = RegisterSchema.safeParse(values);

  if(!validatedValues.success){
    return{error: "Invalid fields"}
  }

  const {name, email, password} = validatedValues.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existedUser = await getUserByEmail(email);

  if(existedUser){
    return{error:"Email already in use"}
  }

  await db.user.create({
    data:{
      name,
      email,
      password: hashedPassword
    }
  })

  const verificationToken = await generateVerificationToken(email);

  await sendVerificationEmail(verificationToken.email, verificationToken.token)

  return{success:"Conformation email sent!"}
}