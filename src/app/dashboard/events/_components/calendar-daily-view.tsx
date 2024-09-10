"use client";

import { useEffect, useRef } from "react";
import { format, isToday, differenceInMinutes, getHours, getMinutes } from "date-fns";
import { EventType } from "../_types/event";

interface CalendarDailyViewProps {
  events: EventType[];
  currentDate: Date;
}

const CalendarDailyView: React.FC<CalendarDailyViewProps> = ({ events, currentDate }) => {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const calendarRef = useRef<HTMLDivElement>(null);

  const getEventPositionStyle = (event: EventType) => {
    const eventStart = new Date(event.start_date);
    const eventEnd = new Date(event.end_date);
    const startMinutes = eventStart.getHours() * 60 + eventStart.getMinutes();
    const duration = differenceInMinutes(eventEnd, eventStart);

    return {
      top: `${(startMinutes / (24 * 60)) * 100}%`,
      height: `${(duration / (24 * 60)) * 100}%`,
    };
  };

  const eventsByDate = events.filter(
    (event) => new Date(event.start_date).toDateString() === currentDate.toDateString()
  );

  const currentTimePositionStyle = () => {
    const now = new Date();
    const minutesSinceMidnight = getHours(now) * 60 + getMinutes(now);
    return {
      top: `${(minutesSinceMidnight / (24 * 60)) * 100}%`,
    };
  };

  useEffect(() => {
    if (calendarRef.current && isToday(currentDate)) {
      const now = new Date();
      const minutesSinceMidnight = getHours(now) * 60 + getMinutes(now);
      const scrollToPosition = (minutesSinceMidnight / (24 * 60)) * calendarRef.current.scrollHeight;
      calendarRef.current.scrollTop = scrollToPosition - 100;
    }
  }, [currentDate]);

  return (
    <div className="relative border-l border-r" ref={calendarRef}>
      <h3 className="text-lg font-semibold mb-4">{format(currentDate, "MMMM d, yyyy")}</h3>
      <div className="relative grid grid-cols-1">
        {hours.map((hour) => (
          <div
            key={hour}
            className="relative h-32 border-t"
          >
            <div className="absolute top-2 left-2 text-xs text-gray-500">
              {format(new Date(currentDate.setHours(hour, 0, 0)), "HH:mm")}
            </div>
          </div>
        ))}

        {isToday(currentDate) && (
          <div
            className="absolute left-0 right-0 h-0.5 bg-red-500"
            style={currentTimePositionStyle()}
          >
            <div className="absolute left-2 -top-6 text-xs text-red-500">
              {format(new Date(), "HH:mm")}
            </div>
          </div>
        )}

        {eventsByDate.length > 0 ? (
          eventsByDate.map((event) => (
            <div
              key={event.id}
              className="absolute left-0 right-0 p-4 m-2 rounded-md bg-blue-500 text-white shadow-md"
              style={getEventPositionStyle(event)}
            >
              <div className="font-bold">{event.title}</div>
              <div className="text-xs">
                {format(new Date(event.start_date), "HH:mm")} - {format(new Date(event.end_date), "HH:mm")}
              </div>
              <div className="text-sm">{event.description}</div>
            </div>
          ))
        ) : (
          <div className="absolute inset-0 flex justify-center items-center text-gray-500">
            No events for today
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarDailyView;
