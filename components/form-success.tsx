import { CheckCircle } from "lucide-react";

interface FormSuccessProps {
  message: string | undefined;
}

export const FormSuccess= ({ message }: FormSuccessProps) => {
  if (!message) return null;
  return (
    <div className='bg-emerald-500/15 text-xs text-emerald-500 flex items-center gap-x-4 p-3 rounded-md'>
      <CheckCircle className='w-5 h-5' />
      <p>{message}</p>
    </div>
  );
};