import { Badge } from "@/components/ui/Badge";
import { MobileNav } from "./MobileNav";

export function Topbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/[0.14] bg-[#070707]/88 backdrop-blur-xl">
      <div className="flex min-h-16 flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-normal text-white">
            SiteBrain Platform Demo
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            Mock data / No real cameras
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="info">Demo Stand</Badge>
          <Badge tone="online">Online</Badge>
          <span className="rounded-full border border-white/15 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-zinc-300">
            Presentation mode
          </span>
        </div>
      </div>
      <MobileNav />
    </header>
  );
}
