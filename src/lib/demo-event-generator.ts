import type { EventType, SiteBrainEvent } from "@/types/sitebrain";

type DemoEventTemplate = Omit<SiteBrainEvent, "id" | "time" | "status"> & {
  eventType: Extract<
    EventType,
    | "NO_HELMET"
    | "NO_VEST"
    | "PALLET_ARRIVED"
    | "ZONE_OCCUPIED"
    | "PROGRESS_SNAPSHOT_CREATED"
  >;
};

const demoEventTemplates = [
  {
    cameraId: "cam-safety-01",
    cameraName: "Safety Camera 01",
    agentType: "SAFETY",
    objectName: "Строительный объект №1",
    zone: "Main entrance",
    eventType: "NO_HELMET",
    severity: "HIGH",
    description: "Simulated AI event: worker detected without a helmet.",
    confidence: 0.93,
    assignedTo: "Safety supervisor",
    imageLabel: "Simulated PPE frame",
    isDemo: true,
  },
  {
    cameraId: "cam-safety-02",
    cameraName: "Safety Camera 02",
    agentType: "SAFETY",
    objectName: "Кровля / монтажная зона",
    zone: "Roof access",
    eventType: "NO_VEST",
    severity: "MEDIUM",
    description: "Simulated AI event: person detected without a hi-vis vest.",
    confidence: 0.88,
    assignedTo: "Site foreman",
    imageLabel: "Simulated roof access frame",
    isDemo: true,
  },
  {
    cameraId: "cam-logistics-01",
    cameraName: "Logistics Camera 01",
    agentType: "LOGISTICS",
    objectName: "Склад алкогольного магазина",
    zone: "Inbound dock",
    eventType: "PALLET_ARRIVED",
    severity: "LOW",
    description: "Simulated AI event: pallet arrived at the inbound dock.",
    confidence: 0.91,
    assignedTo: "Warehouse shift lead",
    imageLabel: "Simulated inbound frame",
    isDemo: true,
  },
  {
    cameraId: "cam-yard-01",
    cameraName: "Yard Camera 01",
    agentType: "LOGISTICS",
    objectName: "Зона разгрузки",
    zone: "Yard staging",
    eventType: "ZONE_OCCUPIED",
    severity: "MEDIUM",
    description: "Simulated AI event: unloading zone is now occupied.",
    confidence: 0.87,
    assignedTo: "Dock manager",
    imageLabel: "Simulated yard frame",
    isDemo: true,
  },
  {
    cameraId: "cam-progress-01",
    cameraName: "Progress Camera 01",
    agentType: "PROGRESS",
    objectName: "Строительный объект №1",
    zone: "Assembly area",
    eventType: "PROGRESS_SNAPSHOT_CREATED",
    severity: "LOW",
    description: "Simulated AI event: scheduled progress snapshot created.",
    confidence: 0.98,
    assignedTo: "Project manager",
    imageLabel: "Simulated progress snapshot",
    isDemo: true,
  },
] satisfies DemoEventTemplate[];

export function generateDemoEvent(
  existingEvents: SiteBrainEvent[],
): SiteBrainEvent {
  const template = demoEventTemplates[existingEvents.length % demoEventTemplates.length];
  const time = new Date().toISOString();

  return {
    ...template,
    id: `evt-demo-${Date.now()}-${existingEvents.length + 1}`,
    time,
    status: "NEW",
  };
}
