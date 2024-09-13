"use client";

import { format, startOfMonth, endOfMonth, eachDayOfInterval, isToday, isSameMonth, startOfWeek, addDays } from "date-fns";
import { EventType } from "../_types/event";
import { cn } from "@/lib/utils";

interface CalendarMonthlyViewProps {
  events: EventType[];
  currentDate: Date;
  onDateClick: (date: Date) => void;
}

const MAX_EVENTS_TO_SHOW = 3;

const CalendarMonthlyView: React.FC<CalendarMonthlyViewProps> = ({ events, currentDate, onDateClick }) => {
  const daysInMonth = eachDayOfInterval({ start: startOfMonth(currentDate), end: endOfMonth(currentDate) });
  const startWeek = startOfWeek(currentDate);
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(startWeek, i));

  const eventsByDate = events.reduce((acc, event) => {
    const eventDate = new Date(event.start_date).toDateString();
    acc[eventDate] = acc[eventDate] ? [...acc[eventDate], event] : [event];
    return acc;
  }, {} as Record<string, EventType[]>);

  return (
    <div className="w-full">
      <div className="grid grid-cols-7 mb-2 text-center text-sm font-medium text-muted-foreground">
        {weekDays.map((day) => (
          <div key={day.toString()} className="p-2">
            <div className="inline-flex items-center justify-center rounded-full bg-muted py-2 px-3 font-semibold text-primary dark:text-primary-light">
              {format(day, 'EEEEE')}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 grid-rows-5 auto-rows-fr w-full h-full border-t border-l">
        {daysInMonth.map((day) => {
          const dayEvents = eventsByDate[day.toDateString()] || [];
          const visibleEvents = dayEvents.slice(0, MAX_EVENTS_TO_SHOW);
          const extraEventCount = dayEvents.length - MAX_EVENTS_TO_SHOW;

          return (
            <div
              key={day.toString()}
              className={cn(
                "relative flex flex-col justify-between p-2 border-b border-r transition-all duration-200",
                isToday(day)
                  ? "bg-blue-50 dark:bg-blue-600 border-blue-300 dark:border-blue-400 text-blue-800 dark:text-blue-200"
                  : "bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-700",
                !isSameMonth(day, currentDate) && "text-slate-400 dark:text-slate-500",
                "hover:bg-blue-100 dark:hover:bg-slate-700"
              )}
              style={{ aspectRatio: '1 / 1' }}
              onClick={() => onDateClick(day)}
            >
              <div className="text-sm font-semibold">{format(day, "d")}</div>
              <div className="flex flex-col space-y-1 text-xs overflow-hidden">
                {visibleEvents.map((event) => (
                  <div
                    key={event.id}
                    className="truncate text-white px-2 py-1 rounded-sm bg-green-600 dark:bg-green-700 opacity-70 shadow-lg"
                  >
                    {event.title}
                  </div>
                ))}
                {extraEventCount > 0 && (
                  <div className="text-xs text-slate-500 dark:text-slate-400">+{extraEventCount} more</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarMonthlyView;
