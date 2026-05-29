import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeTone = "neutral" | "online" | "warning" | "critical" | "info";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  tone?: BadgeTone;
};

const toneStyles: Record<BadgeTone, string> = {
  neutral: "border-white/15 bg-white/[0.06] text-zinc-100",
  online: "border-emerald-300/20 bg-emerald-300/10 text-emerald-200",
  warning: "border-amber-300/25 bg-amber-300/10 text-amber-200",
  critical: "border-red-300/25 bg-red-300/10 text-red-200",
  info: "border-white/20 bg-white/10 text-white",
};

export function Badge({
  children,
  tone = "neutral",
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium leading-none",
        toneStyles[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
