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

interface EventFormDialogProps {
  isDialogOpen: boolean;
  setIsDialogOpen: (isOpen: boolean) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, eventData: Partial<EventType>) => void;
}

const EventFormDialog: React.FC<EventFormDialogProps> = ({ isDialogOpen, setIsDialogOpen, handleSubmit }) => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e, {
      title: "Event Title",
      description: "Event Description",
      start_date: new Date(startDate + 'T' + startTime),
      end_date: new Date(endDate + 'T' + endTime),
    });
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setIsDialogOpen(true)}><CalendarIcon /> Add Event</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Event</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <Input type="text" placeholder="Event Title" required />  
          <Textarea placeholder="Event Description" required />
          <div className="flex space-x-4">
            <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
            <Input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
          </div>
          <div className="flex space-x-4">
            <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
            <Input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
          </div>
          <Button type="submit" className="mt-4">Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const CalendarDailyView: React.FC<{ events: EventType[], currentDate: Date, onDateClick: (date: Date) => void }> = ({ events, currentDate, onDateClick }) => {
  const eventsByDate = events.filter(event => new Date(event.start_date).toDateString() === currentDate.toDateString());
  return (
    <div className="grid grid-cols-1 gap-4">
      <h3 className="text-lg font-semibold">{format(currentDate, "MMMM d, yyyy")}</h3>
      {eventsByDate.length ? (
        eventsByDate.map(event => (
          <div key={event.id} className="border p-2 rounded-md bg-white shadow-md">
            <div className="font-bold">{event.title}</div>
            <div>{format(new Date(event.start_date), "h:mm a")} - {format(new Date(event.end_date), "h:mm a")}</div>
            <div className="text-sm text-gray-500">{event.description}</div>
          </div>
        ))
      ) : (
        <div className="text-center text-gray-500">No events for today</div>
      )}
    </div>
  );
};

const CalendarWeeklyView: React.FC<{ events: EventType[], currentDate: Date, onDateClick: (date: Date) => void }> = ({ events, currentDate, onDateClick }) => {
  const start = startOfWeek(currentDate);
  const days = eachWeekDayOfInterval({ start, end: endOfWeek(start) });
  const eventsByDate = events.reduce((acc, event) => {
    const date = new Date(event.start_date).toDateString();
    if (!acc[date]) acc[date] = [];
    acc[date].push(event);
    return acc;
  }, {} as Record<string, EventType[]>);

  return (
    <div className="grid grid-cols-7 size-full">
      {days.map(day => (
        <div
          key={day.toString()}
          className={`border h-full cursor-pointer ${isToday(day) ? "bg-blue-100" : ""}`}
          onClick={() => onDateClick(day)}
        >
          <div className="font-semibold">{format(day, "d")}</div>
          <div className="text-sm">{eventsByDate[day.toDateString()]?.map(event => (
            <div key={event.id} className="text-green-500">{event.title}</div>
          ))}</div>
        </div>
      ))}
    </div>
  );
};

const CalendarMonthlyView: React.FC<{ events: EventType[], currentDate: Date, onDateClick: (date: Date) => void }> = ({ events, currentDate, onDateClick }) => {
  const start = startOfMonth(currentDate);
  const end = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start, end });
  const eventsByDate = events.reduce((acc, event) => {
    const date = new Date(event.start_date).toDateString();
    if (!acc[date]) acc[date] = [];
    acc[date].push(event);
    return acc;
  }, {} as Record<string, EventType[]>);

  return (
    <div className="grid grid-cols-7 gap-2">
      {days.map(day => (
        <div
          key={day.toString()}
          className={`border p-2 rounded-md cursor-pointer ${isToday(day) ? "bg-blue-100" : ""} ${isSameMonth(day, currentDate) ? "text-black" : "text-gray-400"}`}
          onClick={() => onDateClick(day)}
        >
          <div className="font-semibold">{format(day, "d")}</div>
          <div className="text-sm">{eventsByDate[day.toDateString()]?.map(event => (
            <div key={event.id} className="text-green-500">{event.title}</div>
          ))}</div>
        </div>
      ))}
    </div>
  );
};

const CalendarYearlyView: React.FC<{ events: EventType[], currentDate: Date, onDateClick: (date: Date) => void }> = ({ events, currentDate, onDateClick }) => {
  const start = startOfYear(currentDate);
  const months = eachMonthOfInterval({ start, end: endOfYear(currentDate) });
  const eventsByMonth = months.map(monthStart => {
    const days = eachDayOfInterval({ start: startOfMonth(monthStart), end: endOfMonth(monthStart) });
    return days.reduce((acc, day) => {
      const date = day.toDateString();
      acc[date] = events.filter(event => new Date(event.start_date).toDateString() === date);
      return acc;
    }, {} as Record<string, EventType[]>);
  });

  return (
    <div className="grid grid-cols-3 gap-4">
      {months.map((month, index) => (
        <div key={month.toString()} className="border p-2 rounded-md">
          <div className="font-bold">{format(month, "MMMM yyyy")}</div>
          {Object.entries(eventsByMonth[index]).map(([date, events]) => (
            <div key={date} className="cursor-pointer" onClick={() => onDateClick(new Date(date))}>
              <div className="text-sm">{format(new Date(date), "d")}</div>
              {events.map(event => (
                <div key={event.id} className="text-green-500">{event.title}</div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const CalendarListView: React.FC<{ events: EventType[], onDateClick: (date: Date) => void }> = ({ events, onDateClick }) => (
  <div className="space-y-2">
    {events.map(event => (
      <div key={event.id} className="border p-2 rounded-md cursor-pointer" onClick={() => onDateClick(new Date(event.start_date))}>
        <div className="font-bold">{event.title}</div>
        <div>{format(new Date(event.start_date), "MMMM d, yyyy")}</div>
        <div className="text-sm text-gray-500">{event.description}</div>
      </div>
    ))}
  </div>
);

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

  const handleAddEvent = async (e: React.FormEvent<HTMLFormElement>, eventData: Partial<EventType>) => {
    e.preventDefault();
    try {
      const response = await createEvent(eventData);
      const newEvent: EventType = await response;
      setEvents([...events, newEvent]);
      setIsDialogOpen(false);
    } catch (error) {
      console.error("Failed to create event", error);
    }
  };

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
        handleSubmit={handleAddEvent}
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
