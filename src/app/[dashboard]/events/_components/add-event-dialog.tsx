"use client";

import { useState } from "react";

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

import { EventType } from "../_types/event";

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
      end_date: new Date(endDate + 'T' + endTime)
    });
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setIsDialogOpen(true)}>Create Event</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Event</DialogTitle>
          <DialogDescription>Fill in the details of your event.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleFormSubmit}>
          <div className="space-y-4">
            <Input type="text" placeholder="Event Title" required />
            <Textarea placeholder="Event Description" required />
            <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
            <Input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
            <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
            <Input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
          </div>
          <Button type="submit" className="mt-4">Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EventFormDialog;