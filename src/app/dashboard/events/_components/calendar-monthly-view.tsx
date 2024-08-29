import { 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  eachDayOfInterval, 
  format, 
  isSameMonth, 
  isToday 
} from "date-fns";

import { EventType } from "../_types/event";

export default function CalendarMonthlyView({
  events,
  currentDate,
  onDateClick,
}: {
  events: EventType[];
  currentDate: Date;
  onDateClick: (date: Date) => void;
}) {
  const start = startOfMonth(currentDate);
  const end = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: startOfWeek(start), end: endOfWeek(end) });

  const eventsByDate = events.reduce((acc, event) => {
    const date = new Date(event.start_date).toDateString();
    if (!acc[date]) acc[date] = [];
    acc[date].push(event);
    return acc;
  }, {} as Record<string, EventType[]>);

  return (
    <div className="grid grid-cols-7 border-l border-t">
      {days.map((day) => (
        <div
          key={day.toString()}
          className={`h-28 border-r border-b p-2 cursor-pointer ${
            isToday(day) ? "bg-blue-100" : ""
          } ${isSameMonth(day, currentDate) ? "text-black" : "text-gray-400"}`}
          onClick={() => onDateClick(day)}
        >
          <div>{format(day, "d")}</div>
          <div className="relative">
            {eventsByDate[day.toDateString()]?.map((event) => (
              <div key={event.id} className="text-green-500">
                {event.title}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
