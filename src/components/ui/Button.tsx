import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border-cyan-300/30 bg-cyan-300/15 text-cyan-100 hover:bg-cyan-300/20",
  secondary:
    "border-white/10 bg-white/5 text-slate-100 hover:border-white/20 hover:bg-white/10",
  ghost: "border-transparent bg-transparent text-slate-300 hover:bg-white/5",
};

export function Button({
  children,
  variant = "secondary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex min-h-10 items-center justify-center rounded-lg border px-4 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 disabled:pointer-events-none disabled:opacity-50",
        variantStyles[variant],
        className,
      )}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
