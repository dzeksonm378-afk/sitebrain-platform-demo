import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-[#070707] text-zinc-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_30%),linear-gradient(135deg,rgba(24,24,27,0.88),rgba(7,7,7,0.98))]" />
      <div className="relative min-h-screen lg:pl-72">
        <Sidebar />
        <div className="flex min-h-screen flex-col">
          <Topbar />
          <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-7xl">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
