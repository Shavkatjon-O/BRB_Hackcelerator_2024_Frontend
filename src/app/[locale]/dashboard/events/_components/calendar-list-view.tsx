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

export default CalendarListView;