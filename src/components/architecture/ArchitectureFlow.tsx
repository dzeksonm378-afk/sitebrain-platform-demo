import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { ArchitectureStep } from "@/types/sitebrain";
import { ArchitectureStepCard } from "./ArchitectureStepCard";

type ArchitectureFlowProps = {
  steps: ArchitectureStep[];
};

export function ArchitectureFlow({ steps }: ArchitectureFlowProps) {
  return (
    <section className="space-y-4" aria-label="SiteBrain architecture flow">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-normal text-zinc-500">
            Main system flow
          </p>
          <h2 className="mt-2 text-2xl font-black uppercase tracking-normal text-white">
            Camera stream to responsible action
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
            A simple demo architecture that maps computer vision detections into
            structured platform events.
          </p>
        </div>
        <Badge tone="info">{steps.length} architecture steps</Badge>
      </div>

      <Card className="border-white/15 bg-white/[0.035]">
        <div className="grid gap-3 lg:grid-cols-6">
          {steps.map((step, index) => (
            <div className="relative" key={step.id}>
              <ArchitectureStepCard index={index} step={step} />
              {index < steps.length - 1 ? (
                <div
                  aria-hidden="true"
                  className="mx-auto grid h-8 place-items-center text-zinc-300 lg:absolute lg:-right-5 lg:top-1/2 lg:z-10 lg:mx-0 lg:h-auto lg:-translate-y-1/2"
                >
                  <span className="rounded-full border border-white/20 bg-black px-2 py-1 text-sm">
                    <span className="lg:hidden">↓</span>
                    <span className="hidden lg:inline">→</span>
                  </span>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
