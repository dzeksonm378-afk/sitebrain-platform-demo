import {
  mockCameras,
  mockEvents,
  mockLogisticsZones,
  mockProgressZones,
} from "@/data/mock";
import type {
  AgentType,
  LogisticsEventType,
  LogisticsZone,
  ProgressEventType,
  ProgressZone,
  SafetyEventType,
  SiteBrainEvent,
} from "@/types/sitebrain";

const events: SiteBrainEvent[] = mockEvents;

export function getEventsByAgent(agentType: AgentType): SiteBrainEvent[] {
  return events.filter((event) => event.agentType === agentType);
}

export function getSafetyEvents(): SiteBrainEvent[] {
  return getEventsByAgent("SAFETY").filter(
    (event) =>
      event.eventType === "NO_HELMET" ||
      event.eventType === "NO_VEST" ||
      event.eventType === "DANGER_ZONE_ENTRY",
  );
}

export function getSafetyEventsByType(
  type: SafetyEventType,
): SiteBrainEvent[] {
  return getSafetyEvents().filter((event) => event.eventType === type);
}

export function getActiveSafetyViolations(): SiteBrainEvent[] {
  return getSafetyEvents().filter(
    (event) =>
      (event.status === "NEW" || event.status === "CONFIRMED"),
  );
}

export function getLogisticsEvents(): SiteBrainEvent[] {
  return getEventsByAgent("LOGISTICS").filter(
    (event) =>
      event.eventType === "PALLET_ARRIVED" ||
      event.eventType === "PALLET_REMOVED" ||
      event.eventType === "ZONE_OCCUPIED" ||
      event.eventType === "LONG_STAY",
  );
}

export function getLogisticsEventsByType(
  type: LogisticsEventType,
): SiteBrainEvent[] {
  return getLogisticsEvents().filter((event) => event.eventType === type);
}

export function getOccupiedLogisticsZones(): LogisticsZone[] {
  return mockLogisticsZones.filter((zone) => zone.status === "OCCUPIED");
}

export function getFreeLogisticsZones(): LogisticsZone[] {
  return mockLogisticsZones.filter((zone) => zone.status === "FREE");
}

export function getLongStayEvents(): SiteBrainEvent[] {
  return getLogisticsEventsByType("LONG_STAY");
}

export function getProgressEvents(): SiteBrainEvent[] {
  return getEventsByAgent("PROGRESS").filter(
    (event) =>
      event.eventType === "PROGRESS_SNAPSHOT_CREATED" ||
      event.eventType === "DAILY_REPORT_CREATED" ||
      event.eventType === "ZONE_IDLE_DETECTED",
  );
}

export function getProgressEventsByType(
  type: ProgressEventType,
): SiteBrainEvent[] {
  return getProgressEvents().filter((event) => event.eventType === type);
}

export function getActiveProgressZones(): ProgressZone[] {
  return mockProgressZones.filter((zone) => zone.status === "IN_PROGRESS");
}

export function getIdleProgressZones(): ProgressZone[] {
  return mockProgressZones.filter((zone) => zone.status === "IDLE");
}

export function getCompletedProgressZones(): ProgressZone[] {
  return mockProgressZones.filter((zone) => zone.status === "COMPLETED");
}

export function getProgressSummary() {
  const progressTotal = mockProgressZones.reduce(
    (total, zone) => total + zone.progressPercent,
    0,
  );

  return {
    overallProgress:
      mockProgressZones.length > 0
        ? Math.round(progressTotal / mockProgressZones.length)
        : 0,
    activeZones: getActiveProgressZones().length,
    idleZones: getIdleProgressZones().length,
    completedZones: getCompletedProgressZones().length,
    snapshotsToday: getProgressEventsByType("PROGRESS_SNAPSHOT_CREATED").length,
    dailyReports: getProgressEventsByType("DAILY_REPORT_CREATED").length,
  };
}

export function getLogisticsSummary() {
  const logisticsEvents = getLogisticsEvents();

  return {
    totalZones: mockLogisticsZones.length,
    occupiedZones: getOccupiedLogisticsZones().length,
    freeZones: getFreeLogisticsZones().length,
    palletEventsToday: logisticsEvents.filter(
      (event) =>
        event.eventType === "PALLET_ARRIVED" ||
        event.eventType === "PALLET_REMOVED",
    ).length,
    longStayAlerts: getLongStayEvents().filter(
      (event) => event.status === "NEW" || event.status === "CONFIRMED",
    ).length,
    activeLogisticsEvents: logisticsEvents.filter(
      (event) => event.status === "NEW" || event.status === "CONFIRMED",
    ).length,
  };
}

export function getSafetySummary() {
  const safetyEvents = getSafetyEvents();
  const confidenceTotal = safetyEvents.reduce(
    (total, event) => total + event.confidence,
    0,
  );

  return {
    activeViolations: getActiveSafetyViolations().length,
    noHelmetEvents: getSafetyEventsByType("NO_HELMET").length,
    noVestEvents: getSafetyEventsByType("NO_VEST").length,
    dangerZoneEntries: getSafetyEventsByType("DANGER_ZONE_ENTRY").length,
    criticalOrHighSeverity: safetyEvents.filter(
      (event) => event.severity === "CRITICAL" || event.severity === "HIGH",
    ).length,
    averageConfidence:
      safetyEvents.length > 0 ? confidenceTotal / safetyEvents.length : 0,
  };
}

export function getLatestEvents(limit = 5): SiteBrainEvent[] {
  return [...events]
    .sort((first, second) => second.time.localeCompare(first.time))
    .slice(0, limit);
}

export function getEventsTodayCount(): number {
  return events.length;
}

export function getOnlineCamerasCount(): number {
  return mockCameras.filter((camera) => camera.status === "ONLINE").length;
}
