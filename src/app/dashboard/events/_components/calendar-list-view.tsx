import { format } from "date-fns";
import { EventType } from "../_types/event";

export default function CalendarListView({
  events,
  onDateClick,
}: {
  events: EventType[];
  onDateClick: (date: Date) => void;
}) {
  return (
    <div className="space-y-2">
      {events.map((event) => (
        <div
          key={event.id}
          className="border p-2 cursor-pointer"
          onClick={() => onDateClick(new Date(event.start_date))}
        >
          <div className="text-lg font-bold">{event.title}</div>
          <div>{format(new Date(event.start_date), "MMMM d, yyyy - h:mm a")}</div>
          <div className="text-sm text-gray-500">{event.description}</div>
        </div>
      ))}
    </div>
  );
}
