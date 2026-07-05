export type AgentType = "SAFETY" | "LOGISTICS" | "PROGRESS";

export type CameraStatus = "ONLINE" | "WARNING" | "OFFLINE";

export type EventStatus =
  | "NEW"
  | "CONFIRMED"
  | "FALSE_POSITIVE"
  | "RESOLVED";

export type Severity = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

export type SafetyEventType =
  | "NO_HELMET"
  | "NO_VEST"
  | "DANGER_ZONE_ENTRY";

export type LogisticsEventType =
  | "PALLET_ARRIVED"
  | "PALLET_REMOVED"
  | "ZONE_OCCUPIED"
  | "LONG_STAY";

export type ProgressEventType =
  | "PROGRESS_SNAPSHOT_CREATED"
  | "DAILY_REPORT_CREATED"
  | "ZONE_IDLE_DETECTED";

export type EventType =
  | SafetyEventType
  | LogisticsEventType
  | ProgressEventType;

export type ProductType = "water" | "juice" | "beer";

export type LogisticsZoneStatus = "FREE" | "OCCUPIED";

export type ProgressZoneStatus = "IN_PROGRESS" | "IDLE" | "COMPLETED";

export type SystemStatus = "ONLINE" | "WARNING" | "OFFLINE";

export type DataMode = "mock" | "hybrid" | "live";

export type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

export type EventIngestionPayload = {
  cameraExternalId: string;
  agentType: AgentType;
  eventType: EventType;
  severity: Severity;
  confidence: number;
  objectName: string;
  zone: string;
  description: string;
  assignedTo?: string;
  imageLabel?: string;
  imageUrl?: string;
  occurredAt: string;
  source?: string;
  rawPayload?: JsonValue;
};

export type EventIngestionResponse =
  | {
      ok: true;
      eventId: string;
      cameraLinked?: boolean;
      receivedAt?: string;
    }
  | {
      ok: false;
      error: string;
      details?: string[];
    };

export type SiteBrainCamera = {
  id: string;
  name: string;
  agentType: AgentType;
  status: CameraStatus;
  objectName: string;
  zone: string;
  locationLabel: string;
  lastActivity: string;
  streamLabel: string;
  fps: number;
  resolution: string;
  uptimePercent: number;
  isDemo: boolean;
};

export type SiteBrainEvent = {
  id: string;
  time: string;
  cameraId: string;
  cameraName: string;
  agentType: AgentType;
  objectName: string;
  zone: string;
  eventType: EventType;
  status: EventStatus;
  severity: Severity;
  description: string;
  confidence: number;
  assignedTo: string;
  imageLabel: string;
  isDemo: boolean;
};

export type AIAgent = {
  id: string;
  name: string;
  agentType: AgentType;
  status: SystemStatus;
  description: string;
  eventsToday: number;
  activeIssues: number;
  accuracyLabel: string;
  modelLabel: string;
};

export type LogisticsZone = {
  id: string;
  name: string;
  objectName: string;
  status: LogisticsZoneStatus;
  productType?: ProductType;
  palletId?: string;
  dwellTimeMinutes: number;
  lastEvent: string;
  cameraName: string;
};

export type ProgressZone = {
  id: string;
  name: string;
  objectName: string;
  status: ProgressZoneStatus;
  progressPercent: number;
  lastSnapshot: string;
  activityLabel: string;
  dailySummary: string;
};

export type DashboardMetrics = {
  totalCameras: number;
  onlineCameras: number;
  eventsToday: number;
  activeViolations: number;
  criticalEvents: number;
  systemStatus: SystemStatus;
};

export type ArchitectureStep = {
  id: string;
  title: string;
  description: string;
  technicalLabel: string;
};
