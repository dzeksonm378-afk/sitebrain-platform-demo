import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

const workflowSteps = [
  {
    title: "Scheduled camera snapshot",
    description: "Progress camera captures site frames on a planned schedule.",
  },
  {
    title: "AI compares activity by zones",
    description: "The pipeline checks visible work, idle state and change.",
  },
  {
    title: "Progress / idle event created",
    description: "Typed events explain what changed in each monitored zone.",
  },
  {
    title: "Daily report prepared",
    description: "SiteBrain summarizes progress and attention areas.",
  },
  {
    title: "Manager reviews progress",
    description: "The project manager sees status, snapshots and reports.",
  },
] as const;

export function ProgressWorkflow() {
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-normal text-zinc-500">
            Progress workflow
          </p>
          <h2 className="mt-2 text-xl font-black uppercase tracking-normal text-white">
            From scheduled snapshot to daily report
          </h2>
        </div>
        <Badge tone="info">Demo logic</Badge>
      </div>

      <div className="mt-5 grid gap-3 lg:grid-cols-5">
        {workflowSteps.map((step, index) => (
          <article
            className="rounded-md border border-white/[0.14] bg-white/[0.035] p-4"
            key={step.title}
          >
            <span className="grid size-8 place-items-center rounded-md border border-white/20 bg-white text-sm font-black text-black">
              {index + 1}
            </span>
            <h3 className="mt-4 text-sm font-black uppercase text-white">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </Card>
  );
}
