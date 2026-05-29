"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { AgentType, EventStatus, Severity } from "@/types/sitebrain";

export type AgentFilter = "ALL" | AgentType;
export type StatusFilter = "ALL" | EventStatus;
export type SeverityFilter = "ALL" | Severity;

type EventFiltersProps = {
  agentFilter: AgentFilter;
  onAgentFilterChange: (value: AgentFilter) => void;
  statusFilter: StatusFilter;
  onStatusFilterChange: (value: StatusFilter) => void;
  severityFilter: SeverityFilter;
  onSeverityFilterChange: (value: SeverityFilter) => void;
};

const agentOptions = [
  "ALL",
  "SAFETY",
  "LOGISTICS",
  "PROGRESS",
] satisfies AgentFilter[];

const statusOptions = [
  "ALL",
  "NEW",
  "CONFIRMED",
  "FALSE_POSITIVE",
  "RESOLVED",
] satisfies StatusFilter[];

const severityOptions = [
  "ALL",
  "LOW",
  "MEDIUM",
  "HIGH",
  "CRITICAL",
] satisfies SeverityFilter[];

function getOptionLabel(value: string) {
  return value
    .toLowerCase()
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function FilterGroup<TValue extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly TValue[];
  value: TValue;
  onChange: (value: TValue) => void;
}) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isActive = value === option;

          return (
            <Button
              aria-pressed={isActive}
              className={cn(
                "min-h-9 rounded-full px-3 text-xs",
                isActive
                  ? "border-cyan-300/30 bg-cyan-300/15 text-cyan-100"
                  : "border-white/10 bg-white/[0.03] text-slate-300",
              )}
              key={option}
              onClick={() => onChange(option)}
              variant="ghost"
            >
              {option === "ALL" ? "All" : getOptionLabel(option)}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export function EventFilters({
  agentFilter,
  onAgentFilterChange,
  statusFilter,
  onStatusFilterChange,
  severityFilter,
  onSeverityFilterChange,
}: EventFiltersProps) {
  return (
    <div className="grid gap-5 xl:grid-cols-3">
      <FilterGroup
        label="Agent"
        onChange={onAgentFilterChange}
        options={agentOptions}
        value={agentFilter}
      />
      <FilterGroup
        label="Status"
        onChange={onStatusFilterChange}
        options={statusOptions}
        value={statusFilter}
      />
      <FilterGroup
        label="Severity"
        onChange={onSeverityFilterChange}
        options={severityOptions}
        value={severityFilter}
      />
    </div>
  );
}
