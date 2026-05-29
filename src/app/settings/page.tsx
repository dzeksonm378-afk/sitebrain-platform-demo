import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

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
  return (
    <div className="space-y-6">
      <SectionHeader
        description="Simple presentation controls for the mock demo experience."
        eyebrow="Settings"
        title="Demo Settings"
      >
        <div className="flex flex-wrap gap-2">
          <Badge tone="online">Demo Mode: Enabled</Badge>
          <Badge tone="info">Mock Data: Enabled</Badge>
        </div>
      </SectionHeader>

      <Card className="border-cyan-300/15 bg-cyan-300/[0.04]">
        <p className="text-sm leading-6 text-slate-300">
          Settings are presentation-only in this public demo. Nothing is saved,
          no backend is connected, and no real camera data is processed.
        </p>
      </Card>

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
                <p className="mt-4 text-xl font-semibold tracking-normal text-white">
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
