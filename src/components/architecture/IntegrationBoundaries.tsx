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
      <Card className="border-cyan-300/15 bg-cyan-300/[0.025]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-cyan-200">
              Current public demo
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-normal text-white">
              Honest demo boundaries
            </h2>
          </div>
          <Badge tone="info">QR demo</Badge>
        </div>

        <ul className="mt-5 grid gap-3">
          {currentDemoItems.map((item) => (
            <li
              className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-slate-300"
              key={item}
            >
              <span className="size-2 rounded-full bg-cyan-300" />
              {item}
            </li>
          ))}
        </ul>
      </Card>

      <Card className="border-emerald-300/15 bg-emerald-300/[0.025]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-emerald-200">
              Future production integration
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-normal text-white">
              Target system components
            </h2>
          </div>
          <Badge tone="online">Production path</Badge>
        </div>

        <ul className="mt-5 grid gap-3">
          {futureProductionItems.map((item) => (
            <li
              className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-slate-300"
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
