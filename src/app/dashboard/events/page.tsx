"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";
import { getEventsList } from "@/services/eventsServices";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
        setCurrentDate((prev) => new Date(prev.setMonth(prev.getMonth() - 1)));
        break;
      case "weekly":
        setCurrentDate((prev) => new Date(prev.setDate(prev.getDate() - 7)));
        break;
      case "daily":
        setCurrentDate((prev) => new Date(prev.setDate(prev.getDate() - 1)));
        break;
      case "yearly":
        setCurrentDate((prev) => new Date(prev.setFullYear(prev.getFullYear() - 1)));
        break;
    }
  };

  const handleNextClick = () => {
    switch (view) {
      case "monthly":
        setCurrentDate((prev) => new Date(prev.setMonth(prev.getMonth() + 1)));
        break;
      case "weekly":
        setCurrentDate((prev) => new Date(prev.setDate(prev.getDate() + 7)));
        break;
      case "daily":
        setCurrentDate((prev) => new Date(prev.setDate(prev.getDate() + 1)));
        break;
      case "yearly":
        setCurrentDate((prev) => new Date(prev.setFullYear(prev.getFullYear() + 1)));
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

  const renderAction = () => (
    <div className="flex items-center space-x-4">
      <Tabs defaultValue="monthly" onValueChange={(v) => setView(v)}>
        <TabsList className="space-x-2">
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="yearly">Yearly</TabsTrigger>
          <TabsTrigger value="list">List</TabsTrigger>
        </TabsList>
      </Tabs>

      <Button variant="default" onClick={() => setIsDialogOpen(true)}>
        <CalendarIcon className="w-4 h-4 mr-2" />
        Add Event
      </Button>
    </div>
  );

  return (
    <Panel title="Calendar" action={renderAction()}>
      <div className="flex justify-between items-center mb-6">
        <Button variant="ghost" onClick={handlePrevClick} size="icon">
          <ChevronLeft className="w-5 h-5 text-gray-800 dark:text-gray-300" />
        </Button>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-300">
          {format(currentDate, view === "yearly" ? "yyyy" : "MMMM yyyy")}
        </h2>
        <Button variant="ghost" onClick={handleNextClick} size="icon">
          <ChevronRight className="w-5 h-5 text-gray-800 dark:text-gray-300" />
        </Button>
      </div>

      {renderCalendarView()}
    </Panel>
  );
};

export default CalendarPage;
