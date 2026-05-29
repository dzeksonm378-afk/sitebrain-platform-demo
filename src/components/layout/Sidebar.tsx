"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navigationItems } from "./nav-items";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-white/[0.14] bg-[#070707]/95 px-5 py-6 shadow-2xl shadow-black/30 backdrop-blur-xl lg:flex lg:flex-col">
      <div className="flex items-center gap-3">
        <div className="grid size-11 place-items-center overflow-hidden rounded-md border border-white/20 bg-black">
          <Image
            alt="SiteBrain"
            className="size-10 rounded-lg object-contain"
            height={40}
            priority
            src="/brand/sitebrain-icon.png"
            width={40}
          />
        </div>
        <div>
          <p className="text-lg font-semibold tracking-normal text-white">
            SiteBrain
          </p>
          <p className="text-xs font-medium text-zinc-500">
            Платформа ИИ-камер
          </p>
        </div>
      </div>

      <nav className="mt-8 flex flex-1 flex-col gap-1" aria-label="Primary">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "group flex min-h-11 items-center justify-between rounded-md border px-3 text-sm font-semibold transition",
                isActive
                  ? "border-white bg-white text-black"
                  : "border-transparent text-zinc-400 hover:border-white/15 hover:bg-white/[0.06] hover:text-white",
              )}
              href={item.href}
              key={item.href}
            >
              <span>{item.label}</span>
              <span
                className={cn(
                  "size-1.5 rounded-full transition",
                  isActive
                    ? "bg-black"
                    : "bg-zinc-700 group-hover:bg-zinc-400",
                )}
              />
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
