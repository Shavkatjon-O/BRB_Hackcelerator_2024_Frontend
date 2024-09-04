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

export default CalendarYearlyView;