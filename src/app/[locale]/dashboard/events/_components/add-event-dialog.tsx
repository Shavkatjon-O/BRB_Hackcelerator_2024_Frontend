"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar as CalendarIcon } from 'lucide-react';
import { EventType } from "../_types/event";
import { createEvent } from "@/services/eventsServices"; // Importing createEvent function

interface EventFormDialogProps {
  isDialogOpen: boolean;
  setIsDialogOpen: (isOpen: boolean) => void;
}

const EventFormDialog: React.FC<EventFormDialogProps> = ({ isDialogOpen, setIsDialogOpen }) => {
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEventData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const newEvent = {
        title: eventData.title,
        description: eventData.description,
        start_date: new Date(`${eventData.startDate}T${eventData.startTime}`),
        end_date: new Date(`${eventData.endDate}T${eventData.endTime}`)
      };

      await createEvent(newEvent); // Making the backend request to create the event
      setIsDialogOpen(false);
      
      // Optionally, add a success notification or refresh the event list here
    } catch (error) {
      console.error("Failed to create event:", error);
      // Optionally, handle errors (e.g., show an error message)
    }
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
          <Input 
            type="text" 
            name="title" 
            placeholder="Event Title" 
            value={eventData.title} 
            onChange={handleChange} 
            required 
          />
          <Textarea 
            name="description" 
            placeholder="Event Description" 
            value={eventData.description} 
            onChange={handleChange} 
            required 
          />
          <div className="flex space-x-4">
            <Input 
              type="date" 
              name="startDate" 
              value={eventData.startDate} 
              onChange={handleChange} 
              required 
            />
            <Input 
              type="time" 
              name="startTime" 
              value={eventData.startTime} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="flex space-x-4">
            <Input 
              type="date" 
              name="endDate" 
              value={eventData.endDate} 
              onChange={handleChange} 
              required 
            />
            <Input 
              type="time" 
              name="endTime" 
              value={eventData.endTime} 
              onChange={handleChange} 
              required 
            />
          </div>
          <Button type="submit" className="mt-4">Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EventFormDialog;
