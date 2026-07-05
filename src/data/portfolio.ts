export type PortfolioProject = {
  slug: string;
  title: string;
  type: string;
  status: string;
  description: string;
  tags: string[];
  image: string;
  featured: boolean;
  adaptable: string;
  note?: string;
};

export const portfolioContactHref = "https://t.me/dvertton";

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "beauty-crm",
    title: "CRM для салона красоты",
    type: "CRM / MVP-приложение",
    status: "MVP-прототип",
    description:
      "Система для учёта клиентов, заявок, записей и работы администратора. Подходит для салонов, студий и частных мастеров.",
    tags: ["CRM", "заявки", "клиенты", "beauty"],
    image: "/portfolio/beauty-crm/cover.png",
    featured: true,
    adaptable:
      "Можно адаптировать под салон, клинику, студию услуг или сервисную команду с записью клиентов.",
    note: "Внутренняя CRM-зона требует demo-доступ для полного показа рабочих экранов.",
  },
  {
    slug: "industria-crm",
    title: "CRM для демонтажной компании",
    type: "CRM / web-приложение",
    status: "технический кейс",
    description:
      "Панель для клиентов, объектов, заказов, финансов, задач и внутренней работы строительной или демонтажной компании.",
    tags: ["CRM", "заказы", "финансы", "строительство"],
    image: "/portfolio/industria-crm/cover.png",
    featured: true,
    adaptable:
      "Подходит как основа для объектного учёта, подрядчиков, финансового контроля и клиентского портала.",
    note: "Рабочие разделы защищены авторизацией; публичный cover показывает безопасную схему панели без внутренних данных.",
  },
  {
    slug: "industria-website",
    title: "Сайт для демонтажной компании",
    type: "сайт / лендинг",
    status: "demo-проект",
    description:
      "Премиальный сайт для строительной ниши: услуги, преимущества, процесс работы, портфолио и заявки.",
    tags: ["сайт", "лендинг", "услуги", "заявки"],
    image: "/portfolio/industria-website/cover.png",
    featured: true,
    adaptable:
      "Можно использовать для строительных услуг, ремонта, демонтажа, логистики или локального сервиса.",
  },
  {
    slug: "logistics-b2b-site",
    title: "B2B-сайт для логистики",
    type: "многостраничный B2B-сайт",
    status: "demo-проект",
    description:
      "Сайт для логистической компании с услугами, маршрутами, преимуществами, формой заявки и адаптацией под мобильные устройства.",
    tags: ["B2B", "логистика", "сайт", "заявки"],
    image: "/portfolio/logistics-b2b-site/cover.png",
    featured: true,
    adaptable:
      "Подходит для транспортных, складских, производственных и B2B-сервисных компаний.",
  },
  {
    slug: "sitebrain-logistics-control",
    title: "SiteBrain Logistics Control",
    type: "AI / R&D / пилот",
    status: "R&D-направление",
    description:
      "Пилотное направление для складов: AI-камера фиксирует занятость зоны, блокировку прохода, простой и активность через dashboard.",
    tags: ["AI", "камеры", "склад", "dashboard"],
    image: "/portfolio/sitebrain-logistics-control/cover.png",
    featured: true,
    adaptable:
      "Можно развивать в пилот для склада, разгрузочной зоны, строительной площадки или safety-control сценария.",
  },
  {
    slug: "telegram-bots",
    title: "Telegram-боты для заявок и оплаты",
    type: "Telegram automation / MVP",
    status: "MVP-прототип",
    description:
      "Боты для сбора заявок, уведомлений, оплаты, выдачи доступа и интеграции с таблицей или CRM.",
    tags: ["Telegram", "бот", "оплата", "заявки"],
    image: "/portfolio/telegram-bots/cover.png",
    featured: true,
    adaptable:
      "Можно собрать как intake-бот, оплату доступа, уведомления менеджеру или связку с CRM/Google Sheets.",
    note: "Cover концептуальный: реальный бот и интеграции не запускались для скриншотов.",
  },
  {
    slug: "avito-ai-control-center",
    title: "Avito AI Control Center",
    type: "dashboard / CRM / AI-прототип",
    status: "MVP-прототип",
    description:
      "Панель управления для агентства: клиенты, проекты, задачи, отчёты, роли и AI-рекомендации.",
    tags: ["CRM", "AI", "dashboard", "агентство"],
    image: "/portfolio/avito-ai-control-center/cover.png",
    featured: false,
    adaptable:
      "Подходит для агентства, команды продаж, рекламного кабинета или клиентского report center.",
    note: "Внутренние разделы требуют demo-доступа; public cover не раскрывает реальные данные.",
  },
  {
    slug: "sitebrain-ai-vision",
    title: "SiteBrain AI Vision",
    type: "AI Vision / R&D-прототип",
    status: "R&D-направление",
    description:
      "R&D-прототип AI-платформы для анализа видео, камер, событий и визуального контроля.",
    tags: ["AI", "computer vision", "камеры", "R&D"],
    image: "/portfolio/sitebrain-ai-vision/cover.png",
    featured: false,
    adaptable:
      "Можно использовать как pitch hub, QR demo, презентационную страницу или вход в AI-platform demo.",
  },
];

export const featuredPortfolioProjects = portfolioProjects.filter(
  (project) => project.featured,
);
