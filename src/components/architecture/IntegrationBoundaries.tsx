import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

const currentDemoItems = [
  "mock data",
  "no real cameras connected",
  "no face recognition",
  "no personal data",
  "no production backend",
] as const;

const futureProductionItems = [
  "RTSP/IP cameras",
  "Python AI Worker",
  "YOLO models",
  "PostgreSQL event storage",
  "Telegram/email notifications",
  "reports and exports",
] as const;

export function IntegrationBoundaries() {
  return (
    <section
      aria-label="Demo and production integration boundaries"
      className="grid gap-4 lg:grid-cols-2"
    >
      <Card className="border-white/15 bg-white/[0.035]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-zinc-500">
              Current public demo
            </p>
            <h2 className="mt-2 text-xl font-black uppercase tracking-normal text-white">
              Honest demo boundaries
            </h2>
          </div>
          <Badge tone="info">QR demo</Badge>
        </div>

        <ul className="mt-5 grid gap-3">
          {currentDemoItems.map((item) => (
            <li
              className="flex items-center gap-3 rounded-md border border-white/[0.14] bg-black/30 px-3 py-2 text-sm text-zinc-300"
              key={item}
            >
              <span className="size-2 rounded-full bg-white" />
              {item}
            </li>
          ))}
        </ul>
      </Card>

      <Card className="border-emerald-300/15 bg-emerald-300/[0.025]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-emerald-200">
              Future production integration
            </p>
            <h2 className="mt-2 text-xl font-black uppercase tracking-normal text-white">
              Target system components
            </h2>
          </div>
          <Badge tone="online">Production path</Badge>
        </div>

        <ul className="mt-5 grid gap-3">
          {futureProductionItems.map((item) => (
            <li
              className="flex items-center gap-3 rounded-md border border-white/[0.14] bg-black/30 px-3 py-2 text-sm text-zinc-300"
              key={item}
            >
              <span className="size-2 rounded-full bg-emerald-300" />
              {item}
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
}
