"use client";

import { format, startOfYear, endOfYear, eachMonthOfInterval, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";
import { EventType } from "../_types/event";

interface CalendarYearlyViewProps {
  events: EventType[];
  currentDate: Date;
  onDateClick: (date: Date) => void;
}

const CalendarYearlyView: React.FC<CalendarYearlyViewProps> = ({ events, currentDate, onDateClick }) => {
  const monthsInYear = eachMonthOfInterval({ start: startOfYear(currentDate), end: endOfYear(currentDate) });

  const eventsByMonth = monthsInYear.map((monthStart) => {
    const daysInMonth = eachDayOfInterval({ start: startOfMonth(monthStart), end: endOfMonth(monthStart) });

    return daysInMonth.reduce((acc, day) => {
      const dayString = day.toDateString();
      acc[dayString] = events.filter((event) => new Date(event.start_date).toDateString() === dayString);
      return acc;
    }, {} as Record<string, EventType[]>);
  });

  return (
    <div className="grid grid-cols-3 gap-4">
      {monthsInYear.map((month, index) => (
        <div key={month.toString()} className="border p-2 rounded-md">
          <div className="font-bold">{format(month, "MMMM yyyy")}</div>
          {Object.entries(eventsByMonth[index]).map(([date, events]) => (
            <div key={date} className="cursor-pointer" onClick={() => onDateClick(new Date(date))}>
              <div className="text-sm">{format(new Date(date), "d")}</div>
              {events.map((event) => (
                <div key={event.id} className="text-green-500">
                  {event.title}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CalendarYearlyView;
