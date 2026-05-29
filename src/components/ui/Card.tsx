import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-white/10 bg-slate-950/65 p-5 shadow-[0_18px_70px_rgba(0,0,0,0.24)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
