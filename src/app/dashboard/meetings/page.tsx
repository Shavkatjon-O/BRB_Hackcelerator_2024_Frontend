'use client';

import { Calendar as LucideCalendar, ChevronLeft, ChevronRight, Plus, Edit, Trash, Video, Phone, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const MeetingsPage = () => {
  const [selectedMonth, setSelectedMonth] = useState('August 2024');

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex-1 p-6 overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Upcoming Video Meetings Card */}
          <Card className="p-6 bg-white border border-gray-200 shadow-md rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center space-x-2">
                <Video className="text-blue-600 w-6 h-6" />
                <span>Upcoming Video Meetings</span>
              </h2>
              <Button variant="outline" className="p-2" aria-label="Add meeting">
                <Plus className="text-blue-600 w-6 h-6" />
              </Button>
            </div>
            <div className="flex items-center justify-between mb-4">
              <Button variant="outline" size="icon" aria-label="Previous month">
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <span className="text-lg font-semibold">{selectedMonth}</span>
              <Button variant="outline" size="icon" aria-label="Next month">
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <Card key={index} className="p-4 bg-gray-50 border border-gray-200 shadow-sm rounded-lg">
                  <div className="flex justify-between items-center">
                    <div className="text-gray-700 font-medium">Meeting with Team {index + 1}</div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="icon" aria-label="Join meeting">
                        <Link className="text-green-600 w-5 h-5" />
                      </Button>
                      <Button variant="outline" size="icon" aria-label="Edit meeting">
                        <Edit className="text-blue-600 w-5 h-5" />
                      </Button>
                      <Button variant="outline" size="icon" aria-label="Delete meeting">
                        <Trash className="text-red-600 w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                  <div className="text-gray-500 text-sm">Aug {10 + index}, 2024 | 2:00 PM - 3:00 PM</div>
                </Card>
              ))}
            </div>
          </Card>

          {/* Schedule Video Meeting Card */}
          <Card className="p-6 bg-white border border-gray-200 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
              <Plus className="text-gray-600 w-6 h-6" />
              <span>Schedule a Video Meeting</span>
            </h2>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-2">
                <label className="text-gray-700">Meeting Title</label>
                <Textarea placeholder="Enter meeting title" rows={2} className="resize-none" />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-gray-700">Description</label>
                <Textarea placeholder="Enter meeting description" rows={4} className="resize-none" />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-gray-700">Date and Time</label>
                <Select className="w-full">
                  <option>Aug 30, 2024 | 2:00 PM - 3:00 PM</option>
                  <option>Sep 5, 2024 | 10:00 AM - 11:00 AM</option>
                </Select>
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-gray-700">Meeting Link</label>
                <Textarea placeholder="Enter meeting link" rows={2} className="resize-none" />
              </div>
              <Button variant="outline" className="w-full">Save Meeting</Button>
            </div>
          </Card>

          {/* Recent Calls Card */}
          <Card className="p-6 bg-white border border-gray-200 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
              <Phone className="text-purple-600 w-6 h-6" />
              <span>Recent Calls</span>
            </h2>
            <ul className="space-y-3">
              <li className="flex justify-between items-center text-gray-700">
                <span>Call with Client A - Aug 15, 2024</span>
                <Button variant="outline" size="icon" aria-label="View details">
                  <Link className="text-gray-600 w-5 h-5" />
                </Button>
              </li>
              <li className="flex justify-between items-center text-gray-700">
                <span>Team Sync - Aug 8, 2024</span>
                <Button variant="outline" size="icon" aria-label="View details">
                  <Link className="text-gray-600 w-5 h-5" />
                </Button>
              </li>
              <li className="flex justify-between items-center text-gray-700">
                <span>Project Update - Jul 30, 2024</span>
                <Button variant="outline" size="icon" aria-label="View details">
                  <Link className="text-gray-600 w-5 h-5" />
                </Button>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default MeetingsPage;
