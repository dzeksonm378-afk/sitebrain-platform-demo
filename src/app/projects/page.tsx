import type { Metadata } from "next";
import Link from "next/link";
import { PortfolioProjectCard } from "@/components/portfolio/PortfolioProjectCard";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { portfolioContactHref, portfolioProjects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Проекты и MVP-прототипы — SiteBrain",
  description:
    "CRM, сайты, Telegram-боты, AI-инструменты и MVP-прототипы SiteBrain для бизнеса.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        description="Здесь собраны проекты, MVP-прототипы и технические кейсы SiteBrain. Мы используем их как базу для разработки решений под конкретный бизнес: сайты, CRM, Telegram-боты, AI-инструменты и панели управления."
        eyebrow="Portfolio"
        title="Проекты и MVP-прототипы"
      >
        <div className="flex flex-wrap gap-2">
          <Badge tone="info">{portfolioProjects.length} кейсов</Badge>
          <a
            className="inline-flex min-h-8 items-center rounded-full border border-white/20 bg-white/[0.04] px-3 text-xs font-bold text-zinc-100 transition hover:border-white/40 hover:bg-white/10"
            href="#project-contact"
          >
            Обсудить адаптацию
          </a>
        </div>
      </SectionHeader>

      <Card className="grid gap-4 md:grid-cols-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-normal text-zinc-500">
            Формат
          </p>
          <p className="mt-2 text-sm leading-6 text-zinc-300">
            MVP-прототипы, demo-проекты, R&D-направления и технические кейсы.
          </p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-normal text-zinc-500">
            Фокус
          </p>
          <p className="mt-2 text-sm leading-6 text-zinc-300">
            Реальные интерфейсы: CRM, сайты, Telegram-автоматизация, AI и
            dashboard-инструменты.
          </p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-normal text-zinc-500">
            Адаптация
          </p>
          <p className="mt-2 text-sm leading-6 text-zinc-300">
            Каждый кейс можно доработать под процесс, роли, данные и сценарий
            конкретного бизнеса.
          </p>
        </div>
      </Card>

      <section
        aria-label="Portfolio projects"
        className="grid auto-rows-fr gap-4 lg:grid-cols-2"
      >
        {portfolioProjects.map((project) => (
          <PortfolioProjectCard
            detailed
            key={project.slug}
            project={project}
          />
        ))}
      </section>

      <Card
        className="flex flex-col gap-4 border-emerald-300/20 bg-emerald-300/[0.06] sm:flex-row sm:items-center sm:justify-between"
        id="project-contact"
      >
        <div className="max-w-3xl">
          <Badge tone="online">Следующий шаг</Badge>
          <h2 className="mt-3 text-2xl font-black uppercase tracking-normal text-white">
            Соберём MVP под вашу задачу
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-300">
            Начнём с понятной первой версии: сайт, CRM, Telegram-бот,
            AI-инструмент или dashboard. После проверки гипотезы можно
            расширять продукт без лишней архитектуры на старте.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <a
            className="inline-flex min-h-10 items-center justify-center rounded-md border border-white bg-white px-4 text-sm font-semibold text-black transition hover:bg-zinc-200"
            href={portfolioContactHref}
            rel="noreferrer"
            target="_blank"
          >
            Обсудить проект
          </a>
          <Link
            className="inline-flex min-h-10 items-center justify-center rounded-md border border-white/20 bg-transparent px-4 text-sm font-semibold text-zinc-100 transition hover:border-white/40 hover:bg-white/10"
            href="/"
          >
            Вернуться к demo
          </Link>
        </div>
      </Card>
    </div>
  );
}
