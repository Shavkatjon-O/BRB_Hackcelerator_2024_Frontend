"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button"; 

import { useState, useEffect, FormEvent } from "react";
import {
  getEventsList,
  createEvent,
} from "@/services/eventsServices";

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const eventData = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      start_date: formData.get("start_date") as string,
      end_date: formData.get("end_date") as string,
    };

    createEvent(eventData).then((data) => {
      setEvents([...events, data]);
      setIsDialogOpen(false); // Close dialog on success
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

      {/* Dialog Trigger Button */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button className="mb-4">Create Event</Button>
        </DialogTrigger>

        {/* Dialog Content for Creating Event */}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Event</DialogTitle>
            <DialogDescription>
              Fill in the details to create a new event.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Event Title"
              className="w-full px-4 py-2 border rounded-md"
              required
            />
            <textarea
              name="description"
              id="description"
              placeholder="Event Description"
              className="w-full px-4 py-2 border rounded-md"
            />
            <input
              type="datetime-local"
              name="start_date"
              id="start_date"
              className="w-full px-4 py-2 border rounded-md"
              required
            />
            <input
              type="datetime-local"
              name="end_date"
              id="end_date"
              className="w-full px-4 py-2 border rounded-md"
              required
            />
            <Button type="submit" className="w-full">
              Create Event
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Events List */}
      <div className="space-y-4 mt-4">
        {events.map((event) => (
          <div key={event.id} className="p-4 border rounded-md shadow">
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p className="text-gray-600">{event.start_date}</p>
            <p className="text-gray-600">{event.end_date}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
