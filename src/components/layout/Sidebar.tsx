"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navigationItems } from "./nav-items";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-white/10 bg-slate-950/85 px-5 py-6 shadow-2xl shadow-black/25 backdrop-blur-xl lg:flex lg:flex-col">
      <div className="flex items-center gap-3">
        <div className="grid size-11 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-sm font-semibold text-cyan-100">
          SB
        </div>
        <div>
          <p className="text-lg font-semibold tracking-normal text-white">
            SiteBrain
          </p>
          <p className="text-xs text-slate-400">AI Camera Platform</p>
        </div>
      </div>

      <nav className="mt-8 flex flex-1 flex-col gap-1" aria-label="Primary">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "group flex min-h-11 items-center justify-between rounded-lg border px-3 text-sm font-medium transition",
                isActive
                  ? "border-cyan-300/25 bg-cyan-300/10 text-cyan-100"
                  : "border-transparent text-slate-300 hover:border-white/10 hover:bg-white/5 hover:text-white",
              )}
              href={item.href}
              key={item.href}
            >
              <span>{item.label}</span>
              <span
                className={cn(
                  "size-1.5 rounded-full transition",
                  isActive
                    ? "bg-cyan-300"
                    : "bg-slate-700 group-hover:bg-slate-400",
                )}
              />
            </Link>
          );
        })}
      </nav>

    </aside>
  );
}
