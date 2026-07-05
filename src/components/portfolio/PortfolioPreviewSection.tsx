import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import {
  featuredPortfolioProjects,
  portfolioContactHref,
} from "@/data/portfolio";
import { PortfolioProjectCard } from "./PortfolioProjectCard";

export function PortfolioPreviewSection() {
  return (
    <section className="space-y-5" aria-labelledby="portfolio-preview-title">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-4xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-normal text-zinc-500">
            MVP showcase
          </p>
          <h2
            className="text-2xl font-black uppercase tracking-normal text-white sm:text-4xl"
            id="portfolio-preview-title"
          >
            Проекты и MVP-прототипы
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-400">
            Показываем не абстрактные обещания, а реальные интерфейсы и
            технические заготовки: CRM, сайты, Telegram-боты, AI-инструменты и
            складские пилоты. Часть решений находится в формате MVP и
            дорабатывается под конкретный бизнес-процесс.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <a
            className="inline-flex min-h-10 items-center justify-center rounded-md border border-white bg-white px-4 text-sm font-semibold text-black transition hover:bg-zinc-200"
            href="#portfolio-contact"
          >
            Обсудить проект
          </a>
          <Link
            className="inline-flex min-h-10 items-center justify-center rounded-md border border-white/20 bg-transparent px-4 text-sm font-semibold text-zinc-100 transition hover:border-white/40 hover:bg-white/10"
            href="/projects"
          >
            Все проекты
          </Link>
        </div>
      </div>

      <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {featuredPortfolioProjects.map((project) => (
          <PortfolioProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <Card
        className="flex flex-col gap-4 border-emerald-300/20 bg-emerald-300/[0.06] sm:flex-row sm:items-center sm:justify-between"
        id="portfolio-contact"
      >
        <div className="max-w-3xl">
          <Badge tone="online">MVP под задачу</Badge>
          <h3 className="mt-3 text-2xl font-black uppercase tracking-normal text-white">
            Хотите похожий MVP под свой бизнес?
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-300">
            Можем начать с первой рабочей версии: сайт, CRM, Telegram-бот или
            AI-инструмент, а затем развивать его в полноценный продукт.
          </p>
        </div>
        <a
          className="inline-flex min-h-10 items-center justify-center rounded-md border border-white/20 bg-transparent px-4 text-sm font-semibold text-zinc-100 transition hover:border-white/40 hover:bg-white/10"
          href={portfolioContactHref}
          rel="noreferrer"
          target="_blank"
        >
          Обсудить проект
        </a>
      </Card>
    </section>
  );
}
