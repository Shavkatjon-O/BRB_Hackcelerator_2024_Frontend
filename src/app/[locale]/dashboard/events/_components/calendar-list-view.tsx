"use client";

import { format } from "date-fns";
import { EventType } from "../_types/event";

interface CalendarListViewProps {
  events: EventType[];
  onDateClick: (date: Date) => void;
}

const CalendarListView: React.FC<CalendarListViewProps> = ({ events, onDateClick }) => {
  return (
    <div className="space-y-4 p-4">
      {events.map((event) => (
        <div
          key={event.id}
          className="p-4 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition duration-300 ease-in-out rounded-sm bg-white dark:bg-slate-800"
          onClick={() => onDateClick(new Date(event.start_date))}
        >
          <div className="font-semibold text-slate-900 dark:text-slate-100 text-xl mb-1">{event.title}</div>
          <div className="text-slate-500 dark:text-slate-400">{format(new Date(event.start_date), "MMMM d, yyyy")}</div>
          {event.description && (
            <div className="text-sm text-slate-400 dark:text-slate-500 mt-1">{event.description}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CalendarListView;
