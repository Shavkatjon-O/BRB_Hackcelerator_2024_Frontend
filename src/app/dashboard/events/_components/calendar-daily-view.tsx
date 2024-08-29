import { format } from "date-fns";
import { EventType } from "../_types/event";

export default function CalendarDailyView({
  events,
  currentDate,
  onDateClick,
}: {
  events: EventType[];
  currentDate: Date;
  onDateClick: (date: Date) => void;
}) {
  const eventsByDate = events.filter(
    (event) => new Date(event.start_date).toDateString() === currentDate.toDateString()
  );

  return (
    <div className="h-28 border-b p-2 cursor-pointer">
      <div>{format(currentDate, "MMMM d, yyyy")}</div>
      <div className="relative">
        {eventsByDate.map((event) => (
          <div key={event.id} className="text-green-500">
            {event.title}
          </div>
        ))}
      </div>
    </div>
  );
}
