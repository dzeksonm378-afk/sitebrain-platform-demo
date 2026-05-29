import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-md border border-white/[0.14] bg-[#111113]/90 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.22)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
