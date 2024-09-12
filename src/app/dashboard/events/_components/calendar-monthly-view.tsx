"use client";

import { format, startOfMonth, endOfMonth, eachDayOfInterval, isToday, isSameMonth } from "date-fns";
import { EventType } from "../_types/event";

interface CalendarMonthlyViewProps {
  events: EventType[];
  currentDate: Date;
  onDateClick: (date: Date) => void;
}

const CalendarMonthlyView: React.FC<CalendarMonthlyViewProps> = ({ events, currentDate, onDateClick }) => {
  const daysInMonth = eachDayOfInterval({ start: startOfMonth(currentDate), end: endOfMonth(currentDate) });

  const eventsByDate = events.reduce((acc, event) => {
    const eventDate = new Date(event.start_date).toDateString();
    acc[eventDate] = acc[eventDate] ? [...acc[eventDate], event] : [event];
    return acc;
  }, {} as Record<string, EventType[]>);

  return (
    <div className="grid grid-cols-7 gap-2">
      {daysInMonth.map((day) => (
        <div
          key={day.toString()}
          className={`border p-2 rounded-md cursor-pointer ${
            isToday(day) ? "bg-blue-100" : ""
          } ${isSameMonth(day, currentDate) ? "text-black" : "text-gray-400"}`}
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

export default CalendarMonthlyView;
