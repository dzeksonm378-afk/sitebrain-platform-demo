import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  children?: ReactNode;
  className?: string;
};

export function SectionHeader({
  title,
  description,
  eyebrow,
  children,
  className,
}: SectionHeaderProps) {
  return (
    <section
      className={cn(
        "flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between",
        className,
      )}
    >
      <div className="max-w-3xl">
        {eyebrow ? (
          <p className="mb-2 text-xs font-bold uppercase tracking-normal text-zinc-500">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="text-3xl font-black uppercase tracking-normal text-white sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-400">
            {description}
          </p>
        ) : null}
      </div>
      {children ? <div className="shrink-0">{children}</div> : null}
    </section>
  );
}
