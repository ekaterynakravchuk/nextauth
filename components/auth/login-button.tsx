"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: 'modal' | 'redirect';
  asChild?: boolean;
}

const LoginButton = ({ children, mode="redirect", asChild }: LoginButtonProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/auth/login');
  }

if(mode === 'modal') {
  return <div className="cursor-pointer">todo: modal</div>;
}

  return <span onClick={handleClick} className="cursor-pointer">{children}</span>;
};

export default LoginButton;
