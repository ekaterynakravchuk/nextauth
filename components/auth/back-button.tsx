'use client'

import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
  label: string;
  href: string;
}

export const BackButton=({label, href}: BackButtonProps) => {
  return(
    <Button asChild variant="link">
      <Link href={href} className="font-normal text-xs">{label}</Link>
    </Button>
  )
}