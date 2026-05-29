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
          <p className="text-sm font-medium text-cyan-200">System flow</p>
          <h2 className="mt-2 text-xl font-semibold tracking-normal text-white">
            From camera signal to responsible action
          </h2>
        </div>
        <Badge tone="online">Online</Badge>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {steps.map((step, index) => (
          <article
            className="relative rounded-lg border border-white/10 bg-white/[0.03] p-4"
            key={step.id}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="grid size-8 place-items-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-sm font-semibold text-cyan-100">
                {index + 1}
              </span>
              <span className="text-xs font-medium text-slate-500">
                {step.technicalLabel}
              </span>
            </div>
            <h3 className="mt-4 text-base font-semibold text-white">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </Card>
  );
}
