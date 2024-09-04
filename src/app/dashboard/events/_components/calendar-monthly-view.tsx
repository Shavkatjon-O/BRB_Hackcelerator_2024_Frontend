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

export default CalendarMonthlyView;