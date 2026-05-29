import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export function DemoArchitectureNote() {
  return (
    <Card className="border-white/20 bg-white/[0.06]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-normal text-white">
            Demo Stand
          </p>
          <p className="mt-2 text-sm leading-6 text-zinc-300">
            SiteBrain connects camera/video sources to a Python AI Worker, runs
            computer vision models, creates structured events and displays them
            in the platform for responsible action.
          </p>
          <p className="mt-2 text-sm leading-6 text-zinc-500">
            This page explains the target architecture. The public QR demo runs
            on mock data, while the AI Worker and camera integrations are
            demonstrated separately.
          </p>
        </div>
        <Badge tone="info">Demo architecture</Badge>
      </div>
    </Card>
  );
}
