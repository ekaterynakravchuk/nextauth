import { TriangleAlert } from "lucide-react";

interface FormErrorProps {
  message: string | undefined;
}

export const FormError=({message}: FormErrorProps)=>{
  if (!message) return null;
  return <div className='bg-destructive/15 text-xs text-destructive flex items-center gap-x-4 p-3 rounded-md'>
    <TriangleAlert className='w-5 h-5'/>
    <p>{message}</p></div>;
}