import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getDataMode } from "@/lib/data-mode";

const demoSettings = [
  {
    label: "Demo Mode",
    value: "Enabled",
    badge: "Enabled",
    tone: "online",
  },
  {
    label: "Mock Data",
    value: "Enabled",
    badge: "Enabled",
    tone: "info",
  },
  {
    label: "Public QR Demo",
    value: "Ready after Vercel deploy",
    badge: "Pending deploy",
    tone: "warning",
  },
  {
    label: "Real Cameras",
    value: "Not connected in public demo",
    badge: "Not connected",
    tone: "neutral",
  },
  {
    label: "Face Recognition",
    value: "Disabled",
    badge: "Disabled",
    tone: "online",
  },
  {
    label: "Personal Data",
    value: "Not used",
    badge: "Not used",
    tone: "online",
  },
] as const;

export default function SettingsPage() {
  const currentDataMode = getDataMode();
  const cameraReadySettings = [
    {
      label: "Current data mode",
      value: currentDataMode,
      badge: currentDataMode,
      tone: "info",
    },
    {
      label: "Public demo",
      value: "Works without database",
      badge: "Stable",
      tone: "online",
    },
    {
      label: "Real camera integration",
      value: "Requires ingestion API and database",
      badge: "Stage 16+",
      tone: "warning",
    },
    {
      label: "Python Worker",
      value: "Integration planned",
      badge: "Planned",
      tone: "neutral",
    },
  ] as const;

  return (
    <div className="space-y-6">
      <SectionHeader
        description="Simple presentation controls and camera-ready foundation status."
        eyebrow="Settings"
        title="Demo Settings"
      >
        <div className="flex flex-wrap gap-2">
          <Badge tone="online">Demo Mode: Enabled</Badge>
          <Badge tone="info">Data mode: {currentDataMode}</Badge>
        </div>
      </SectionHeader>

      <Card className="border-white/20 bg-white/[0.06]">
        <p className="text-sm leading-6 text-zinc-300">
          Settings are presentation-only in this public demo. Mock mode remains
          the fallback, while real camera integration will require Event
          Ingestion API, database storage and Python Worker integration.
        </p>
      </Card>

      <section
        aria-label="Camera-ready foundation status"
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
      >
        {cameraReadySettings.map((setting) => (
          <Card className="min-h-32" key={setting.label}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-slate-400">
                  {setting.label}
                </p>
                <p className="mt-4 text-lg font-black uppercase tracking-normal text-white">
                  {setting.value}
                </p>
              </div>
              <Badge tone={setting.tone}>{setting.badge}</Badge>
            </div>
          </Card>
        ))}
      </section>

      <section
        aria-label="Demo settings status"
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
      >
        {demoSettings.map((setting) => (
          <Card className="min-h-36" key={setting.label}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-slate-400">
                  {setting.label}
                </p>
                <p className="mt-4 text-xl font-black uppercase tracking-normal text-white">
                  {setting.value}
                </p>
              </div>
              <Badge tone={setting.tone}>{setting.badge}</Badge>
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
}
