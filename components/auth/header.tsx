import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

interface HeaderProps {
  label: string;
}

const font = Poppins({
  subsets: ['latin'],
  weight: "600"
})

export const Header = ({label}: HeaderProps) => {
  return(
    <div className="flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("font-semibold text-4xl", font.className)}>🔐 Auth</h1>
      <p className="text-gray-500">{label}</p>
    </div>
  )
}