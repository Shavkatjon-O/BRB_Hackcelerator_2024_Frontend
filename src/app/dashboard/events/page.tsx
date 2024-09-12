"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getEventsList } from "@/services/eventsServices";

import CalendarDailyView from "./_components/calendar-daily-view";
import CalendarWeeklyView from "./_components/calendar-weekly-view";
import CalendarMonthlyView from "./_components/calendar-monthly-view";
import CalendarYearlyView from "./_components/calendar-yearly-view";
import CalendarListView from "./_components/calendar-list-view";
import EventFormDialog from "./_components/add-event-dialog";
import Panel from "../_components/Panel";
import { EventType } from "./_types/event";

const CalendarPage: React.FC = () => {
  const [events, setEvents] = useState<EventType[]>([]);
  const [view, setView] = useState("monthly");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getEventsList();
        setEvents(await response);
      } catch (error) {
        console.error("Failed to fetch events", error);
      }
    };
    fetchEvents();
  }, []);

  const handlePrevClick = () => {
    switch (view) {
      case "monthly":
        setCurrentDate(prev => new Date(prev.setMonth(prev.getMonth() - 1)));
        break;
      case "weekly":
        setCurrentDate(prev => new Date(prev.setDate(prev.getDate() - 7)));
        break;
      case "daily":
        setCurrentDate(prev => new Date(prev.setDate(prev.getDate() - 1)));
        break;
      case "yearly":
        setCurrentDate(prev => new Date(prev.setFullYear(prev.getFullYear() - 1)));
        break;
    }
  };

  const handleNextClick = () => {
    switch (view) {
      case "monthly":
        setCurrentDate(prev => new Date(prev.setMonth(prev.getMonth() + 1)));
        break;
      case "weekly":
        setCurrentDate(prev => new Date(prev.setDate(prev.getDate() + 7)));
        break;
      case "daily":
        setCurrentDate(prev => new Date(prev.setDate(prev.getDate() + 1)));
        break;
      case "yearly":
        setCurrentDate(prev => new Date(prev.setFullYear(prev.getFullYear() + 1)));
        break;
    }
  };

  const handleDateClick = (date: Date) => {
    setCurrentDate(date);
    setView("daily");
  };

  const renderCalendarView = () => {
    switch (view) {
      case "daily":
        return <CalendarDailyView events={events} currentDate={currentDate} />;
      case "weekly":
        return <CalendarWeeklyView events={events} currentDate={currentDate} onDateClick={handleDateClick} />;
      case "monthly":
        return <CalendarMonthlyView events={events} currentDate={currentDate} onDateClick={handleDateClick} />;
      case "yearly":
        return <CalendarYearlyView events={events} currentDate={currentDate} onDateClick={handleDateClick} />;
      case "list":
        return <CalendarListView events={events} onDateClick={handleDateClick} />;
    }
  };

  return (
    <Panel title="Calendar" action={<EventFormDialog isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />}>
      <div className="flex justify-between items-center mb-4">
        <Button onClick={handlePrevClick} variant="outline">
          <ChevronLeft />
        </Button>
        <h2 className="text-xl font-bold">
          {format(currentDate, view === "yearly" ? "yyyy" : "MMMM yyyy")}
        </h2>
        <Button onClick={handleNextClick} variant="outline">
          <ChevronRight />
        </Button>
      </div>

      <div className="flex space-x-2 mb-4">
        {["daily", "weekly", "monthly", "yearly", "list"].map((v) => (
          <Button
            key={v}
            variant={view === v ? "default" : "outline"}
            onClick={() => setView(v)}
          >
            {v.charAt(0).toUpperCase() + v.slice(1)}
          </Button>
        ))}
      </div>

      {renderCalendarView()}
    </Panel>
  );
};

export default CalendarPage;
