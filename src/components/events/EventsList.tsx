import { Card } from "@/components/ui/Card";
import type { SiteBrainEvent } from "@/types/sitebrain";
import { EventCard } from "./EventCard";

type EventsListProps = {
  events: SiteBrainEvent[];
};

export function EventsList({ events }: EventsListProps) {
  if (events.length === 0) {
    return (
      <Card className="border-amber-300/15 bg-amber-300/[0.04]">
        <p className="text-base font-semibold text-white">No events found</p>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          Try a broader filter combination. The mock journal is intentionally
          small for the stage demo.
        </p>
      </Card>
    );
  }

  return (
    <div className="space-y-3">
      {events.map((event) => (
        <EventCard event={event} key={event.id} />
      ))}
    </div>
  );
}
