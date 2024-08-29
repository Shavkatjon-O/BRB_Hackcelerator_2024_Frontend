"use client";

import { format } from "date-fns";
import { useState, useEffect, FormEvent } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar as CalendarIcon } from "lucide-react";

import { getEventsList, createEvent } from "@/services/eventsServices";

interface Event {
  id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
}

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

  return (
    <div className="max-w-3xl mx-auto p-4">
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

      <div className="space-y-4 mt-4">
        {events.map((event) => (
          <div key={event.id} className="p-4 border rounded-md shadow">
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p className="text-gray-600">{format(new Date(event.start_date), "PPP p")}</p>
            <p className="text-gray-600">{format(new Date(event.end_date), "PPP p")}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
