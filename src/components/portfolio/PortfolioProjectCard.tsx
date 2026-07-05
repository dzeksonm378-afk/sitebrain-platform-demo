import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { PortfolioProject } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type PortfolioProjectCardProps = {
  project: PortfolioProject;
  detailed?: boolean;
};

export function PortfolioProjectCard({
  project,
  detailed = false,
}: PortfolioProjectCardProps) {
  return (
    <Card
      className={cn(
        "group flex h-full flex-col overflow-hidden p-0 transition hover:border-white/25",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden border-b border-white/[0.12] bg-black",
          detailed ? "h-56 sm:h-64" : "h-48 sm:h-52",
        )}
      >
        <Image
          alt={`Скриншот проекта: ${project.title}`}
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.025]"
          height={750}
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
          src={project.image}
          unoptimized
          width={1200}
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/20 bg-black/75 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
            {project.status}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-normal text-zinc-500">
            {project.type}
          </p>
          <h3 className="mt-2 text-xl font-black uppercase tracking-normal text-white">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-zinc-400">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} tone="neutral">
              {tag}
            </Badge>
          ))}
        </div>

        {detailed ? (
          <div className="mt-auto space-y-3 border-t border-white/[0.1] pt-4">
            <p className="text-sm leading-6 text-zinc-300">
              {project.adaptable}
            </p>
            {project.note ? (
              <p className="text-xs leading-5 text-zinc-500">{project.note}</p>
            ) : null}
          </div>
        ) : null}
      </div>
    </Card>
  );
}
