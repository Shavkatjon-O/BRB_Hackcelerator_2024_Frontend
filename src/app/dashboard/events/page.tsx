"use client";

import { createEvent, getEvent, getEventsList, updateEvent, deleteEvent } from "@/services/eventsServices";

import { useState, useEffect } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, startOfWeek, endOfWeek, eachDayOfInterval as eachWeekDayOfInterval, startOfYear, endOfYear, eachMonthOfInterval, isToday, isSameMonth } from "date-fns";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { EventType } from "./_types/event";

import CalendarDailyView from "./_components/calendar-daily-view";
import CalendarWeeklyView from "./_components/calendar-weekly-view";
import CalendarMonthlyView from "./_components/calendar-monthly-view";
import CalendarYearlyView from "./_components/calendar-yearly-view";
import CalendarListView from "./_components/calendar-list-view";
import EventFormDialog from "./_components/add-event-dialog";

const CalendarPage: React.FC = () => {
  const [events, setEvents] = useState<EventType[]>([]);
  const [view, setView] = useState("monthly");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getEventsList();
        const data: EventType[] = await response;
        setEvents(data);
      } catch (error) {
        console.error("Failed to fetch events", error);
      }
    };

    fetchEvents();
  }, []);

  // const handleAddEvent = async (e: React.FormEvent<HTMLFormElement>, eventData: Partial<EventType>) => {
  //   e.preventDefault();
  //   try {
  //     const response = await createEvent(eventData);
  //     const newEvent: EventType = await response;
  //     setEvents([...events, newEvent]);
  //     setIsDialogOpen(false);
  //   } catch (error) {
  //     console.error("Failed to create event", error);
  //   }
  // };

  const handlePrevClick = () => {
    if (view === "monthly") {
      setCurrentDate(prev => new Date(prev.setMonth(prev.getMonth() - 1)));
    } else if (view === "weekly") {
      setCurrentDate(prev => new Date(prev.setDate(prev.getDate() - 7)));
    } else if (view === "daily") {
      setCurrentDate(prev => new Date(prev.setDate(prev.getDate() - 1)));
    } else if (view === "yearly") {
      setCurrentDate(prev => new Date(prev.setFullYear(prev.getFullYear() - 1)));
    }
  };

  const handleNextClick = () => {
    if (view === "monthly") {
      setCurrentDate(prev => new Date(prev.setMonth(prev.getMonth() + 1)));
    } else if (view === "weekly") {
      setCurrentDate(prev => new Date(prev.setDate(prev.getDate() + 7)));
    } else if (view === "daily") {
      setCurrentDate(prev => new Date(prev.setDate(prev.getDate() + 1)));
    } else if (view === "yearly") {
      setCurrentDate(prev => new Date(prev.setFullYear(prev.getFullYear() + 1)));
    }
  };

  const handleDateClick = (date: Date) => {
    setCurrentDate(date);
    setView("daily");
  };

  return (
    <div className="p-4 space-y-4 h-full">
      <EventFormDialog
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />

      <div className="flex justify-between items-center mb-4">
        <Button onClick={handlePrevClick} variant="outline"><ChevronLeft /></Button>
        <h2 className="text-xl font-bold">
          {format(currentDate, view === "daily" ? "MMMM d, yyyy" : view === "weekly" ? "MMMM yyyy" : view === "monthly" ? "MMMM yyyy" : view === "yearly" ? "yyyy" : "MMMM yyyy")}
        </h2>
        <Button onClick={handleNextClick} variant="outline"><ChevronRight /></Button>
      </div>

      <div className="flex space-x-2 mb-4">
        <Button variant={view === "daily" ? "default" : "outline"} onClick={() => setView("daily")}>Day</Button>
        <Button variant={view === "weekly" ? "default" : "outline"} onClick={() => setView("weekly")}>Week</Button>
        <Button variant={view === "monthly" ? "default" : "outline"} onClick={() => setView("monthly")}>Month</Button>
        <Button variant={view === "yearly" ? "default" : "outline"} onClick={() => setView("yearly")}>Year</Button>
        <Button variant={view === "list" ? "default" : "outline"} onClick={() => setView("list")}>List</Button>
      </div>

      {view === "daily" && <CalendarDailyView events={events} currentDate={currentDate} onDateClick={handleDateClick} />}
      {view === "weekly" && <CalendarWeeklyView events={events} currentDate={currentDate} onDateClick={handleDateClick} />}
      {view === "monthly" && <CalendarMonthlyView events={events} currentDate={currentDate} onDateClick={handleDateClick} />}
      {view === "yearly" && <CalendarYearlyView events={events} currentDate={currentDate} onDateClick={handleDateClick} />}
      {view === "list" && <CalendarListView events={events} onDateClick={handleDateClick} />}
    </div>
  );
};

export default CalendarPage;
