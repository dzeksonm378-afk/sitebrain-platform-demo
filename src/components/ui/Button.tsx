import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: "border-white bg-white text-black hover:bg-zinc-200",
  secondary:
    "border-white/20 bg-transparent text-zinc-100 hover:border-white/40 hover:bg-white/10",
  ghost: "border-transparent bg-transparent text-zinc-300 hover:bg-white/5",
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
        "inline-flex min-h-10 items-center justify-center rounded-md border px-4 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 disabled:pointer-events-none disabled:opacity-50",
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
