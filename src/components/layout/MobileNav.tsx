"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navigationItems } from "./nav-items";

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Mobile primary"
      className="border-t border-white/[0.14] px-4 py-3 lg:hidden"
    >
      <div className="flex flex-wrap gap-2">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "shrink-0 rounded-full border px-3 py-2 text-sm font-semibold transition",
                isActive
                  ? "border-white bg-white text-black"
                  : "border-white/15 bg-white/[0.03] text-zinc-300 hover:bg-white/10 hover:text-white",
              )}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
