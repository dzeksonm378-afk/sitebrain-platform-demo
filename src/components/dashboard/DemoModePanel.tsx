import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { formatEventType } from "@/lib/format";
import type { SiteBrainEvent } from "@/types/sitebrain";

type DemoModePanelProps = {
  generatedCount: number;
  lastGeneratedEvent: SiteBrainEvent | null;
  onSimulate: () => void;
};

function formatGeneratedTime(value: string) {
  return new Date(value).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

export function DemoModePanel({
  generatedCount,
  lastGeneratedEvent,
  onSimulate,
}: DemoModePanelProps) {
  return (
    <Card className="border-white/20 bg-white/[0.06]">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="info">Demo Mode</Badge>
            <Badge tone="online">Safe public demo</Badge>
          </div>
          <h2 className="mt-4 text-2xl font-black uppercase tracking-normal text-white">
            Mock data / No real cameras connected
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
            This dashboard is prepared for QR presentation. It shows the
            product logic without sending data to a backend or connecting real
            video streams.
          </p>
        </div>
        <div className="shrink-0 sm:text-right">
          <Button
            aria-describedby="simulation-note"
            onClick={onSimulate}
            variant="primary"
          >
            <span className="mr-2 size-2 rounded-full bg-black" />
            Simulate AI Event
          </Button>
          <p
            className="mt-2 max-w-48 text-xs leading-5 text-zinc-500"
            id="simulation-note"
          >
            Demo events generated: {generatedCount}
          </p>
        </div>
      </div>

      {lastGeneratedEvent ? (
        <div className="mt-5 rounded-lg border border-emerald-300/20 bg-emerald-300/[0.08] px-4 py-3">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-emerald-100">
                Demo event generated
              </p>
              <p className="mt-1 text-sm leading-6 text-zinc-300">
                New AI event added to dashboard preview.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge tone="online">
                {formatEventType(lastGeneratedEvent.eventType)}
              </Badge>
              <Badge tone="neutral">
                {formatGeneratedTime(lastGeneratedEvent.time)}
              </Badge>
            </div>
          </div>
        </div>
      ) : null}
    </Card>
  );
}
