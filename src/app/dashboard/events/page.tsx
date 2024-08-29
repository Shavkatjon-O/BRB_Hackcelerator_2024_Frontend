"use client";

import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addMonths, subMonths, eachDayOfInterval, isToday, isSameDay, isSameMonth } from "date-fns";
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

const Calendar = ({ events, onDateClick }: { events: Event[], onDateClick: (date: Date) => void }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePreviousMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  const start = startOfMonth(currentDate);
  const end = endOfMonth(currentDate);

  const days = eachDayOfInterval({
    start: startOfWeek(start),
    end: endOfWeek(end)
  });

  const eventsByDate = events.reduce((acc, event) => {
    const date = new Date(event.start_date).toDateString();
    if (!acc[date]) acc[date] = [];
    acc[date].push(event);
    return acc;
  }, {} as Record<string, Event[]>);

  return (
    <div className="calendar">
      <div className="flex justify-between items-center mb-4">
        <Button onClick={handlePreviousMonth}>Previous</Button>
        <h2 className="text-xl">{format(currentDate, "MMMM yyyy")}</h2>
        <Button onClick={handleNextMonth}>Next</Button>
      </div>
      <div className="grid grid-cols-7 border-l border-t my-4">
        {days.map(day => (
          <div
            key={day.toString()}
            className={`h-28 border-r border-b p-2 ${isToday(day) ? 'bg-blue-100' : ''} ${isSameMonth(day, currentDate) ? 'text-black' : 'text-gray-400'} cursor-pointer`}
            onClick={() => onDateClick(day)}
          >
            <div>{format(day, "d")}</div>
            <div className="relative">
              {eventsByDate[day.toDateString()]?.map(event => (
                <div key={event.id} className="text-green-500 ">{event.title}</div>
              ))}
            </div>
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

  return (
    <div className="h-full mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Events</h1>

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

      <Calendar events={events} onDateClick={handleDateClick} />
    </div>
  );
};

export default EventsPage;
