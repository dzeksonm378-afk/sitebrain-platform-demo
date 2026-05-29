import { Badge } from "@/components/ui/Badge";
import type { ArchitectureStep } from "@/types/sitebrain";

type ArchitectureStepCardProps = {
  step: ArchitectureStep;
  index: number;
};

const roleLabels = [
  "Input",
  "Worker",
  "Vision",
  "Payload",
  "Platform",
  "Output",
] as const;

export function ArchitectureStepCard({
  step,
  index,
}: ArchitectureStepCardProps) {
  const roleLabel = roleLabels[index] ?? "Step";

  return (
    <article className="relative min-h-56 rounded-md border border-white/[0.14] bg-[#141416] p-5">
      <div className="flex items-start justify-between gap-3">
        <span className="grid size-9 place-items-center rounded-md border border-white/20 bg-white text-sm font-black text-black">
          {index + 1}
        </span>
        <Badge tone={index === 0 || index === 5 ? "online" : "info"}>
          {roleLabel}
        </Badge>
      </div>

      <h3 className="mt-5 text-lg font-black uppercase tracking-normal text-white">
        {step.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-zinc-500">
        {step.description}
      </p>

      <div className="mt-5 rounded-md border border-white/[0.14] bg-black/30 px-3 py-2 text-xs font-medium text-zinc-300">
        {step.technicalLabel}
      </div>
    </article>
  );
}
