"use client";

import { format } from "date-fns";
import { EventType } from "../_types/event";

interface CalendarListViewProps {
  events: EventType[];
  onDateClick: (date: Date) => void;
}

const CalendarListView: React.FC<CalendarListViewProps> = ({ events, onDateClick }) => {
  return (
    <div className="space-y-2">
      {events.map((event) => (
        <div
          key={event.id}
          className="border p-2 rounded-md cursor-pointer"
          onClick={() => onDateClick(new Date(event.start_date))}
        >
          <div className="font-bold">{event.title}</div>
          <div>{format(new Date(event.start_date), "MMMM d, yyyy")}</div>
          <div className="text-sm text-gray-500">{event.description}</div>
        </div>
      ))}
    </div>
  );
};

export default CalendarListView;
