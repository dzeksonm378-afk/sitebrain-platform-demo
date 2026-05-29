import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { ArchitectureStep } from "@/types/sitebrain";

type SystemFlowProps = {
  steps: ArchitectureStep[];
};

export function SystemFlow({ steps }: SystemFlowProps) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-normal text-zinc-500">
            System flow
          </p>
          <h2 className="mt-2 text-xl font-black uppercase tracking-normal text-white">
            From camera signal to responsible action
          </h2>
        </div>
        <Badge tone="online">Online</Badge>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {steps.map((step, index) => (
          <article
            className="relative rounded-md border border-white/[0.14] bg-white/[0.035] p-4"
            key={step.id}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="grid size-8 place-items-center rounded-md border border-white/20 bg-white text-sm font-black text-black">
                {index + 1}
              </span>
              <span className="text-xs font-semibold uppercase tracking-normal text-zinc-600">
                {step.technicalLabel}
              </span>
            </div>
            <h3 className="mt-4 text-base font-black uppercase text-white">
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
