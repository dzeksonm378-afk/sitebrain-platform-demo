import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

const timelineItems = [
  {
    time: "08:00",
    title: "Snapshot created",
    description: "Morning baseline captured before peak activity.",
    tone: "info",
  },
  {
    time: "12:00",
    title: "Activity detected",
    description: "Assembly and material movement visible by zone.",
    tone: "online",
  },
  {
    time: "16:00",
    title: "Zone idle detected",
    description: "Roof perimeter shows no visible activity.",
    tone: "warning",
  },
  {
    time: "18:00",
    title: "Daily report created",
    description: "Progress summary prepared for manager review.",
    tone: "online",
  },
] as const;

export function ProgressTimeline() {
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-normal text-zinc-500">
            Snapshot timeline
          </p>
          <h2 className="mt-2 text-xl font-black uppercase tracking-normal text-white">
            One demo day from capture to report
          </h2>
        </div>
        <Badge tone="info">Daily flow</Badge>
      </div>

      <div className="mt-5 space-y-3">
        {timelineItems.map((item) => (
          <article
            className="flex gap-4 rounded-md border border-white/[0.14] bg-white/[0.035] p-4"
            key={item.time}
          >
            <div className="shrink-0">
              <Badge tone={item.tone}>{item.time}</Badge>
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-black uppercase text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Card>
  );
}
