'use client';

import { Calendar as LucideCalendar, ChevronLeft, ChevronRight, Search, Tag, Plus } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

import { useState } from 'react';

const CalendarPage = () => {
  const [selectedMonth, setSelectedMonth] = useState('August 2024');

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/4 p-6 bg-white shadow-lg">
        <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
          <LucideCalendar className="text-gray-600" />
          <span>Events</span>
        </h2>
        <Button className="mb-4 w-full" variant="outline">
          <Plus className="mr-2" /> Create Event
        </Button>
        <Separator className="my-4" />
        <h3 className="text-lg font-semibold mb-2 flex items-center space-x-2">
          <Tag className="text-gray-600" />
          <span>Filter by Category</span>
        </h3>
        <Select placeholder="Select category" className="mb-4">
          <option value="meeting">Meeting</option>
          <option value="workshop">Workshop</option>
          <option value="social">Social</option>
        </Select>
        <Separator className="my-4" />
        <h3 className="text-lg font-semibold mb-2 flex items-center space-x-2">
          <Search className="text-gray-600" />
          <span>Search</span>
        </h3>
        <Textarea placeholder="Search events" rows={3} className="resize-none" />
      </div>
      <div className="flex-1 p-6">
        <Card className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Calendar</h1>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" aria-label="Previous month">
                <ChevronLeft />
              </Button>
              <span className="text-lg font-semibold">{selectedMonth}</span>
              <Button variant="outline" size="icon" aria-label="Next month">
                <ChevronRight />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-2">
            <div className="text-center font-semibold">Sun</div>
            <div className="text-center font-semibold">Mon</div>
            <div className="text-center font-semibold">Tue</div>
            <div className="text-center font-semibold">Wed</div>
            <div className="text-center font-semibold">Thu</div>
            <div className="text-center font-semibold">Fri</div>
            <div className="text-center font-semibold">Sat</div>
            {/* Sample Calendar Grid */}
            {Array.from({ length: 35 }).map((_, index) => (
              <div key={index} className="border border-gray-200 p-2 h-24 bg-white rounded-lg shadow-sm">
                <div className="text-center font-semibold text-lg">{index + 1}</div>
                <div className="text-sm text-gray-600 mt-1">
                  {index % 5 === 0 ? 'Meeting' : index % 7 === 0 ? 'Workshop' : ''}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default CalendarPage;
