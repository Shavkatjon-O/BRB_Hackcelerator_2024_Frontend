"use client";

import * as React from "react";
import { format, startOfYear, endOfYear, eachMonthOfInterval, isSameDay } from "date-fns";
import { DayPicker } from "react-day-picker";
import { EventType } from "../_types/event";
import "react-day-picker/dist/style.css";

interface CalendarYearlyViewProps {
  events: EventType[];
  currentDate: Date;
  onDateClick: (date: Date) => void;
}

const CalendarYearlyView: React.FC<CalendarYearlyViewProps> = ({ events, currentDate, onDateClick }) => {
  const monthsInYear = eachMonthOfInterval({ start: startOfYear(currentDate), end: endOfYear(currentDate) });

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      onDateClick(date);
    }
  };

  const eventDates = events.map((event) => new Date(event.start_date));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {monthsInYear.map((month) => (
        <div key={month.toString()} className="max-w-full bg-slate-100 dark:bg-slate-800 rounded-lg p-4">
          <div className="flex justify-center">
            <DayPicker
              mode="single"
              selected={currentDate}
              onSelect={handleDateSelect}
              month={month}
              modifiers={{ event: eventDates }}
              modifiersClassNames={{ event: "bg-blue-500 text-white rounded-full" }}
              className="rounded-md border-none"
              fromMonth={startOfYear(currentDate)}
              toMonth={endOfYear(currentDate)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CalendarYearlyView;
