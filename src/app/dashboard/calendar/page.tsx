'use client';

import { 
  Calendar as LucideCalendar, 
  ChevronLeft, 
  CalendarIcon, 
  ChevronRight, 
  Search, 
  Tag, 
  Plus 
} from 'lucide-react';

import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

import { useState } from 'react';

const CalendarPage = () => {
  const [selectedMonth] = useState('August 2024');

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      <div className="w-full md:w-1/4 p-6 bg-white shadow-lg md:sticky top-0 border-r border-gray-200">
        <h2 className="text-2xl font-semibold mb-6 flex items-center space-x-2">
          <LucideCalendar className="text-gray-700" />
          <span>Events</span>
        </h2>
        <Button className="mb-6 w-full" variant="outline" size="lg">
          <Plus className="mr-2" /> Create Event
        </Button>
        <Separator className="my-6" />
        <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
          <Tag className="text-gray-700" />
          <span>Filter by Category</span>
        </h3>
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Meeting</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Workshop</span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Social</span>
          </div>
        </div>
        <Separator className="my-6" />
        <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
          <Search className="text-gray-700" />
          <span>Search</span>
        </h3>
        <Textarea placeholder="Search events" rows={3} className="resize-none border-gray-300 rounded-md shadow-sm" />
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
          <div className="grid grid-cols-7 gap-2 text-center">
            <div className="font-semibold text-gray-600">Sun</div>
            <div className="font-semibold text-gray-600">Mon</div>
            <div className="font-semibold text-gray-600">Tue</div>
            <div className="font-semibold text-gray-600">Wed</div>
            <div className="font-semibold text-gray-600">Thu</div>
            <div className="font-semibold text-gray-600">Fri</div>
            <div className="font-semibold text-gray-600">Sat</div>

            {Array.from({ length: 35 }).map((_, index) => (
              <div
                key={index}
                className="relative border border-gray-200 p-2 h-24 bg-white rounded-lg shadow-sm"
              >
                <div className="text-center font-semibold text-lg">{index + 1}</div>
                {index % 5 === 0 && (
                  <div className="absolute bottom-2 left-2 bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs shadow-md">
                    <div className="flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-1" /> Meeting
                    </div>
                  </div>
                )}
                {index % 7 === 0 && (
                  <div className="absolute bottom-2 left-2 bg-green-100 text-green-800 px-2 py-1 rounded text-xs shadow-md">
                    <div className="flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-1" /> Workshop
                    </div>
                  </div>
                )}
              </div>
            ))}
            
          </div>
        </Card>
      </div>
    </div>
  );
}

export default CalendarPage;
