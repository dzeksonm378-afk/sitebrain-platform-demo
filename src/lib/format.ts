import type {
  AgentType,
  CameraStatus,
  EventStatus,
  EventType,
  Severity,
} from "@/types/sitebrain";

const eventTypeLabels: Record<EventType, string> = {
  NO_HELMET: "No helmet",
  NO_VEST: "No vest",
  DANGER_ZONE_ENTRY: "Danger zone entry",
  PALLET_ARRIVED: "Pallet arrived",
  PALLET_REMOVED: "Pallet removed",
  ZONE_OCCUPIED: "Zone occupied",
  LONG_STAY: "Long stay",
  PROGRESS_SNAPSHOT_CREATED: "Progress snapshot created",
  DAILY_REPORT_CREATED: "Daily report created",
  ZONE_IDLE_DETECTED: "Zone idle detected",
};

const agentTypeLabels: Record<AgentType, string> = {
  SAFETY: "Safety",
  LOGISTICS: "Logistics",
  PROGRESS: "Progress",
};

const statusLabels: Record<EventStatus | CameraStatus, string> = {
  ONLINE: "Online",
  WARNING: "Warning",
  OFFLINE: "Offline",
  NEW: "New",
  CONFIRMED: "Confirmed",
  FALSE_POSITIVE: "False positive",
  RESOLVED: "Resolved",
};

const severityLabels: Record<Severity, string> = {
  LOW: "Low",
  MEDIUM: "Medium",
  HIGH: "High",
  CRITICAL: "Critical",
};

export function formatEventType(type: EventType): string {
  return eventTypeLabels[type];
}

export function formatAgentType(agent: AgentType): string {
  return agentTypeLabels[agent];
}

export function formatStatus(status: EventStatus | CameraStatus | string): string {
  return status in statusLabels
    ? statusLabels[status as EventStatus | CameraStatus]
    : status
        .toLowerCase()
        .split("_")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");
}

export function formatSeverity(severity: Severity): string {
  return severityLabels[severity];
}

export function formatConfidence(confidence: number): string {
  return `${Math.round(confidence * 100)}%`;
}
