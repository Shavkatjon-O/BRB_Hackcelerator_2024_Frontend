"use client";

import { format, startOfMonth, endOfMonth, eachDayOfInterval, isToday, isSameMonth } from "date-fns";
import { EventType } from "../_types/event";
import { cn } from "@/lib/utils"; // A utility function from shadcn for conditional classNames

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
    <div className="grid grid-cols-7 gap-1 sm:gap-2 p-2 sm:p-4 bg-gray-50 dark:bg-gray-900">
      {daysInMonth.map((day) => {
        const dayEvents = eventsByDate[day.toDateString()] || [];
        const visibleEvents = dayEvents.slice(0, MAX_EVENTS_TO_SHOW); // Events to show
        const extraEventCount = dayEvents.length - MAX_EVENTS_TO_SHOW; // Count of extra events

        return (
          <div
            key={day.toString()}
            className={cn(
              "flex flex-col justify-between p-2 rounded-lg transition-all duration-200",
              "h-32 border bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700",
              isToday(day)
                ? "bg-blue-100 dark:bg-blue-600 border-blue-300 dark:border-blue-400 text-blue-700 dark:text-blue-200"
                : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700",
              !isSameMonth(day, currentDate) && "text-gray-400 dark:text-gray-500",
              "hover:bg-gray-100 dark:hover:bg-gray-700"
            )}
            onClick={() => onDateClick(day)}
          >
            <div className="text-sm font-semibold mb-1">{format(day, "d")}</div>
            <div className="flex flex-col space-y-1 text-xs overflow-hidden">
              {visibleEvents.map((event) => (
                <div
                  key={event.id}
                  className="truncate bg-green-200 dark:bg-green-700 text-green-700 dark:text-green-200 px-2 py-1 rounded-md"
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
