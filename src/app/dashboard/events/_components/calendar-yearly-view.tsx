import { 
  startOfYear, 
  endOfYear, 
  eachMonthOfInterval, 
  format, 
  startOfMonth, 
  endOfMonth, 
  eachDayOfInterval
} from "date-fns";

import { EventType } from "../_types/event";

export default function CalendarYearlyView({
  events,
  currentDate,
  onDateClick,
}: {
  events: EventType[];
  currentDate: Date;
  onDateClick: (date: Date) => void;
}) {
  const start = startOfYear(currentDate);
  const months = eachMonthOfInterval({ start, end: endOfYear(currentDate) });

  const eventsByMonth = months.map(monthStart => {
    
    const days = eachDayOfInterval({
      start: startOfMonth(monthStart), 
      end: endOfMonth(monthStart) ,
    });
    
    return days.reduce((acc, day) => {
      const date = day.toDateString();
      
      acc[date] = events.filter(event => new Date(event.start_date).toDateString() === date);
      return acc;
      
    }, {} as Record<string, EventType[]>);
  });

  return (
    <div className="grid grid-cols-3 border-l border-t">
      {months.map((month, index) => (
        <div key={month.toString()} className="border-r border-b p-2">
          <div className="font-bold">{format(month, "MMMM yyyy")}</div>
          {Object.entries(eventsByMonth[index]).map(([date, events]) => (
            <div key={date} className="relative cursor-pointer" onClick={() => onDateClick(new Date(date))}>
              <div>{format(new Date(date), "d")}</div>
              {events.map(event => (
                <div key={event.id} className="text-green-500">{event.title}</div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
