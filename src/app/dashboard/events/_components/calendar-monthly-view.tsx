"use client";

import { format, startOfMonth, endOfMonth, eachDayOfInterval, isToday, isSameMonth } from "date-fns";
import { EventType } from "../_types/event";

interface CalendarMonthlyViewProps {
  events: EventType[];
  currentDate: Date;
  onDateClick: (date: Date) => void;
}

const MAX_EVENTS_TO_SHOW = 3; // Limit for event titles to show per square

const CalendarMonthlyView: React.FC<CalendarMonthlyViewProps> = ({ events, currentDate, onDateClick }) => {
  const daysInMonth = eachDayOfInterval({ start: startOfMonth(currentDate), end: endOfMonth(currentDate) });

  const eventsByDate = events.reduce((acc, event) => {
    const eventDate = new Date(event.start_date).toDateString();
    acc[eventDate] = acc[eventDate] ? [...acc[eventDate], event] : [event];
    return acc;
  }, {} as Record<string, EventType[]>);

  return (
    <div className="grid grid-cols-7 gap-2 p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      {daysInMonth.map((day) => {
        const dayEvents = eventsByDate[day.toDateString()] || [];
        const visibleEvents = dayEvents.slice(0, MAX_EVENTS_TO_SHOW); // Events to show
        const extraEventCount = dayEvents.length - MAX_EVENTS_TO_SHOW; // Count of extra events

        return (
          <div
            key={day.toString()}
            className={`flex flex-col justify-between p-2 border border-transparent rounded-lg cursor-pointer transition-all duration-200 
              h-32
              ${isToday(day) ? "bg-blue-50 dark:bg-gray-700" : "bg-gray-50 dark:bg-gray-900"}
              ${isSameMonth(day, currentDate) ? "text-black dark:text-white" : "text-gray-400 dark:text-gray-600"}
              hover:border-gray-300 hover:shadow-md dark:hover:border-gray-600`}
            onClick={() => onDateClick(day)}
          >
            <div className="text-sm font-semibold mb-1">{format(day, "d")}</div>
            <div className="flex flex-col space-y-1 text-xs">
              {visibleEvents.map((event) => (
                <div
                  key={event.id}
                  className="truncate text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200 bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded-md"
                >
                  {event.title}
                </div>
              ))}
              {extraEventCount > 0 && (
                <div className="text-xs text-gray-500 dark:text-gray-400">+{extraEventCount} more</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CalendarMonthlyView;
