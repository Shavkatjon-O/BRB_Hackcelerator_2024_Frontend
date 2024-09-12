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

  // Group events by the day
  const eventsByDate = events.reduce((acc, event) => {
    const eventDate = new Date(event.start_date).toDateString();
    acc[eventDate] = acc[eventDate] ? [...acc[eventDate], event] : [event];
    return acc;
  }, {} as Record<string, EventType[]>);

  return (
    <div className="grid grid-cols-7 gap-2 h-full">
      {weekDays.map((day) => (
        <div
          key={day.toString()}
          className={`border h-full p-2 cursor-pointer transition-all flex flex-col justify-between
            ${isToday(day) ? "bg-blue-100 dark:bg-blue-600 dark:text-white" : "bg-white dark:bg-slate-800"}
            hover:bg-blue-50 dark:hover:bg-slate-700`}
          onClick={() => onDateClick(day)}
        >
          <div className="font-semibold text-center mb-2">
            {format(day, "EEE d")}
          </div>
          <div className="text-sm flex-grow">
            {eventsByDate[day.toDateString()]?.map((event) => (
              <div key={event.id} className="bg-green-100 dark:bg-green-600 text-green-800 dark:text-white rounded-md p-1 mb-1">
                {event.title}
              </div>
            )) || (
              <div className="text-gray-400 dark:text-gray-500 text-center">No events</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CalendarWeeklyView;
