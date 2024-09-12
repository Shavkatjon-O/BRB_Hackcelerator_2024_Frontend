"use client";

import { format, startOfWeek, endOfWeek, eachDayOfInterval, isToday } from "date-fns";
import { EventType } from "../_types/event";

interface CalendarWeeklyViewProps {
  events: EventType[];
  currentDate: Date;
  onDateClick: (date: Date) => void;
}

const CalendarWeeklyView: React.FC<CalendarWeeklyViewProps> = ({ events, currentDate, onDateClick }) => {
  const weekDays = eachDayOfInterval({ start: startOfWeek(currentDate), end: endOfWeek(currentDate) });

  const eventsByDate = events.reduce((acc, event) => {
    const eventDate = new Date(event.start_date).toDateString();
    acc[eventDate] = acc[eventDate] ? [...acc[eventDate], event] : [event];
    return acc;
  }, {} as Record<string, EventType[]>);

  return (
    <div className="grid grid-cols-7 size-full">
      {weekDays.map((day) => (
        <div
          key={day.toString()}
          className={`border h-full cursor-pointer ${isToday(day) ? "bg-blue-100" : ""}`}
          onClick={() => onDateClick(day)}
        >
          <div className="font-semibold">{format(day, "d")}</div>
          <div className="text-sm">
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
};

export default CalendarWeeklyView;
