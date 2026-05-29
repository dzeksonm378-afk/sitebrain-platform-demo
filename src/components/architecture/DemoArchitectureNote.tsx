import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export function DemoArchitectureNote() {
  return (
    <Card className="border-cyan-300/15 bg-cyan-300/[0.04]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-cyan-100">Demo Stand</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            SiteBrain connects camera/video sources to a Python AI Worker, runs
            computer vision models, creates structured events and displays them
            in the platform for responsible action.
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-400">
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
