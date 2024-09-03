import CalendarDailyView from "./calendar-daily-view";
import CalendarWeeklyView from "./calendar-weekly-view";
import CalendarMonthlyView from "./calendar-monthly-view";
import CalendarYearlyView from "./calendar-yearly-view";
import CalendarListView from "./calendar-list-view";

import { format } from "date-fns";
import { EventType } from "../_types/event";
import { Button } from "@/components/ui/button";

export default function Calendar({
  events,
  view,
  currentDate,
  onDateClick,
  onPrevClick,
  onNextClick,
}: {
  events: EventType[];
  view: string;
  currentDate: Date;
  onDateClick: (date: Date) => void;
  onPrevClick: () => void;
  onNextClick: () => void;
}) {
  return (
    <div className="calendar">
      <div className="flex justify-between items-center mb-4">
        <Button onClick={onPrevClick}>Previous</Button>
        <h2 className="text-xl">
          {format(
            currentDate,
            view === "daily"
              ? "MMMM d, yyyy"
              : view === "weekly"
              ? "MMMM yyyy"
              : view === "yearly"
              ? "yyyy"
              : "MMMM yyyy"
          )}
        </h2>
        <Button onClick={onNextClick}>Next</Button>
      </div>
      {view === "daily" && (
        <CalendarDailyView
          events={events}
          currentDate={currentDate}
          onDateClick={onDateClick}
        />
      )}
      {view === "weekly" && (
        <CalendarWeeklyView
          events={events}
          currentDate={currentDate}
          onDateClick={onDateClick}
        />
      )}
      {view === "monthly" && (
        <CalendarMonthlyView
          events={events}
          currentDate={currentDate}
          onDateClick={onDateClick}
        />
      )}
      {view === "yearly" && (
        <CalendarYearlyView
          events={events}
          currentDate={currentDate}
          onDateClick={onDateClick}
        />
      )}
      {view === "list" && (
        <CalendarListView events={events} onDateClick={onDateClick} />
      )}
    </div>
  );
}
