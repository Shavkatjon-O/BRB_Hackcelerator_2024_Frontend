"use client";

import { useState } from "react";
import { EventType } from "./_types/event";
import EventFormDialog from "./_components/add-event-dialog";
import Calendar from "./_components/calendar";

const CalendarPage = () => {
  const [events, setEvents] = useState<EventType[]>([]); // State to manage events
  const [view, setView] = useState("monthly"); // State to manage the current view
  const [currentDate, setCurrentDate] = useState(new Date()); // State to manage the current date
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State to manage dialog visibility

  const handleAddEvent = (e: React.FormEvent<HTMLFormElement>, eventData: Partial<EventType>) => {
    setEvents([...events, { ...eventData, id: events.length + 1 } as EventType]);
    setIsDialogOpen(false);
  };

  const handlePrevClick = () => {
    if (view === "monthly") {
      setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
    } else if (view === "weekly") {
      setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 7)));
    } else if (view === "daily") {
      setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 1)));
    } else if (view === "yearly") {
      setCurrentDate(new Date(currentDate.setFullYear(currentDate.getFullYear() - 1)));
    }
  };

  const handleNextClick = () => {
    if (view === "monthly") {
      setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
    } else if (view === "weekly") {
      setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 7)));
    } else if (view === "daily") {
      setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 1)));
    } else if (view === "yearly") {
      setCurrentDate(new Date(currentDate.setFullYear(currentDate.getFullYear() + 1)));
    }
  };

  const handleDateClick = (date: Date) => {
    setCurrentDate(date);
    setView("daily");
  };

  return (
    <div className="p-4">
      <EventFormDialog
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        handleSubmit={handleAddEvent}
      />

      <div className="flex justify-around mb-4">
        <button className={`btn ${view === "daily" ? "btn-primary" : ""}`} onClick={() => setView("daily")}>Day</button>
        <button className={`btn ${view === "weekly" ? "btn-primary" : ""}`} onClick={() => setView("weekly")}>Week</button>
        <button className={`btn ${view === "monthly" ? "btn-primary" : ""}`} onClick={() => setView("monthly")}>Month</button>
        <button className={`btn ${view === "yearly" ? "btn-primary" : ""}`} onClick={() => setView("yearly")}>Year</button>
        <button className={`btn ${view === "list" ? "btn-primary" : ""}`} onClick={() => setView("list")}>List</button>
      </div>

      <Calendar
        events={events}
        view={view}
        currentDate={currentDate}
        onDateClick={handleDateClick}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
      />
    </div>
  );
};

export default CalendarPage;
