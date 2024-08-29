"use client";

import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, startOfYear, endOfYear, startOfDay, endOfDay, eachDayOfInterval, eachWeekOfInterval, eachMonthOfInterval, eachYearOfInterval, isToday, isSameDay, isSameMonth, isSameYear, isSameWeek, addMonths, subMonths, addWeeks, subWeeks, addDays, addYears, subDays, subYears } from "date-fns";
import { useState, useEffect, FormEvent } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getEventsList, createEvent } from "@/services/eventsServices";

interface Event {
  id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
}

const Calendar = ({ events, view, currentDate, onDateClick, onPrevClick, onNextClick }: { events: Event[], view: string, currentDate: Date, onDateClick: (date: Date) => void, onPrevClick: () => void, onNextClick: () => void }) => {
  let start: Date, end: Date, days: Date[];

  switch (view) {
    case "daily":
      start = startOfDay(currentDate);
      end = endOfDay(currentDate);
      days = [currentDate];
      break;
    case "weekly":
      start = startOfWeek(currentDate);
      end = endOfWeek(currentDate);
      days = eachDayOfInterval({ start, end });
      break;
    case "monthly":
      start = startOfMonth(currentDate);
      end = endOfMonth(currentDate);
      days = eachDayOfInterval({ start: startOfWeek(start), end: endOfWeek(end) });
      break;
    case "yearly":
      start = startOfYear(currentDate);
      end = endOfYear(currentDate);
      days = eachMonthOfInterval({ start, end }).flatMap(monthStart => eachDayOfInterval({ start: startOfMonth(monthStart), end: endOfMonth(monthStart) }));
      break;
    case "list":
      days = events.map(event => new Date(event.start_date));
      break;
    default:
      start = startOfMonth(currentDate);
      end = endOfMonth(currentDate);
      days = eachDayOfInterval({ start: startOfWeek(start), end: endOfWeek(end) });
      break;
  }

  const eventsByDate = events.reduce((acc, event) => {
    const date = new Date(event.start_date).toDateString();
    if (!acc[date]) acc[date] = [];
    acc[date].push(event);
    return acc;
  }, {} as Record<string, Event[]>);

  return (
    <div className="calendar">
      <div className="flex justify-between items-center mb-4">
        <Button onClick={onPrevClick}>Previous</Button>
        <h2 className="text-xl">{format(currentDate, view === "daily" ? "MMMM d, yyyy" : view === "weekly" ? "MMMM yyyy" : view === "yearly" ? "yyyy" : "MMMM yyyy")}</h2>
        <Button onClick={onNextClick}>Next</Button>
      </div>
      <div className={`grid ${view === "list" ? "grid-cols-1" : "grid-cols-7"} border-l border-t my-4`}>
        {days.map(day => (
          <div
            key={day.toString()}
            className={`h-28 border-r border-b p-2 ${isToday(day) ? 'bg-blue-100' : ''} ${view === "list" ? "" : isSameMonth(day, currentDate) ? 'text-black' : 'text-gray-400'} cursor-pointer`}
            onClick={() => onDateClick(day)}
          >
            {view !== "list" && (
              <>
                <div>{format(day, view === "daily" ? "d" : view === "weekly" ? "d" : view === "yearly" ? "MMM d" : "d")}</div>
                <div className="relative">
                  {eventsByDate[day.toDateString()]?.map(event => (
                    <div key={event.id} className="text-green-500 ">{event.title}</div>
                  ))}
                </div>
              </>
            )}
            {view === "list" && (
              <div className="relative">
                {eventsByDate[day.toDateString()]?.map(event => (
                  <div key={event.id} className="text-green-500 ">{event.title}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const EventsPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [view, setView] = useState("monthly");
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!startDate || !endDate) return;

    const formData = new FormData(e.currentTarget);
    const eventData = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      start_date: `${startDate}T${startTime}:00`,
      end_date: `${endDate}T${endTime}:00`,
    };

    createEvent(eventData).then((data) => {
      setEvents([...events, data]);
      setIsDialogOpen(false);
    });
  };

  useEffect(() => {
    getEventsList().then((data) => {
      setEvents(data);
    });
  }, []);

  const handleDateClick = (date: Date) => {
    // Handle date click if needed
    console.log(date);
  };

  const handlePrevClick = () => {
    switch (view) {
      case "daily":
        setCurrentDate(subDays(currentDate, 1));
        break;
      case "weekly":
        setCurrentDate(subWeeks(currentDate, 1));
        break;
      case "monthly":
        setCurrentDate(subMonths(currentDate, 1));
        break;
      case "yearly":
        setCurrentDate(subYears(currentDate, 1));
        break;
      case "list":
        // Optional: handle list view navigation
        break;
      default:
        setCurrentDate(subMonths(currentDate, 1));
        break;
    }
  };

  const handleNextClick = () => {
    switch (view) {
      case "daily":
        setCurrentDate(addDays(currentDate, 1));
        break;
      case "weekly":
        setCurrentDate(addWeeks(currentDate, 1));
        break;
      case "monthly":
        setCurrentDate(addMonths(currentDate, 1));
        break;
      case "yearly":
        setCurrentDate(addYears(currentDate, 1));
        break;
      case "list":
        // Optional: handle list view navigation
        break;
      default:
        setCurrentDate(addMonths(currentDate, 1));
        break;
    }
  };

  return (
    <div className="h-full mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Events</h1>

      <div className="flex space-x-2 mb-4">
        <Button onClick={() => setView("daily")}>Day</Button>
        <Button onClick={() => setView("weekly")}>Week</Button>
        <Button onClick={() => setView("monthly")}>Month</Button>
        <Button onClick={() => setView("yearly")}>Year</Button>
        <Button onClick={() => setView("list")}>List</Button>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button className="mb-4">Create Event</Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Event</DialogTitle>
            <DialogDescription>
              Fill in the details to create a new event.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              name="title"
              id="title"
              placeholder="Event Title"
              className="w-full"
              required
            />
            <Textarea
              name="description"
              id="description"
              placeholder="Event Description"
              className="w-full"
            />

            <div className="flex items-center space-x-2">
              <Input
                type="date"
                name="start_date"
                id="start_date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full"
                required
              />
              <Input
                type="time"
                name="start_time"
                id="start_time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="w-full"
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <Input
                type="date"
                name="end_date"
                id="end_date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full"
                required
              />
              <Input
                type="time"
                name="end_time"
                id="end_time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="w-full"
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Create Event
            </Button>
          </form>
        </DialogContent>
      </Dialog>

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

export default EventsPage;
