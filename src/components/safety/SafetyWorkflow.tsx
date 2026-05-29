import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

const workflowSteps = [
  {
    title: "Camera frame",
    description: "Safety camera captures the current work zone frame.",
  },
  {
    title: "YOLO detects person / helmet / vest",
    description: "Computer vision identifies PPE objects and people.",
  },
  {
    title: "Rule checks PPE / danger zone",
    description: "SiteBrain checks compliance and restricted-zone rules.",
  },
  {
    title: "Event created",
    description: "A typed safety event is added to the platform.",
  },
  {
    title: "Responsible person reviews",
    description: "Supervisor confirms, resolves, or marks a false positive.",
  },
] as const;

export function SafetyWorkflow() {
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-normal text-zinc-500">
            Safety workflow
          </p>
          <h2 className="mt-2 text-xl font-black uppercase tracking-normal text-white">
            From camera frame to responsible review
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
