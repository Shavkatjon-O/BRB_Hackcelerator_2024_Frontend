"use client";

import { createEvent, getEvent, getEventsList, updateEvent, deleteEvent } from "@/services/eventsServices";

import { useState, useEffect } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, startOfWeek, endOfWeek, eachDayOfInterval as eachWeekDayOfInterval, startOfYear, endOfYear, eachMonthOfInterval, isToday, isSameMonth } from "date-fns";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { EventType } from "../_types/event";

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

export default CalendarDailyView;