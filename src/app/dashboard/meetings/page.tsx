'use client';

import { useRouter } from "next/navigation";
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Video, ChevronLeft, ChevronRight, Plus, Edit, Trash, Link, Phone } from 'lucide-react';
import useUser from "@/hooks/useUser";

const MeetingsPage = () => {
  const { user } = useUser();
  const router = useRouter();
  const [selectedMonth, setSelectedMonth] = useState('August 2024');
  const [disabled, setDisabled] = useState(false);

  if (!user?.id) return null;

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/meetings/${user.id}?personal=true`;

  const redirectToMeeting = () => {
    setDisabled(true);
    router.push(meetingLink);
  };

  return (
    <div className="flex flex-col h-screen dark:bg-gray-900 bg-gray-100">
      <div className="p-4">
        <Button
          onClick={redirectToMeeting}
          disabled={disabled}
          className="dark:bg-blue-600 bg-blue-500 text-white w-full"
        >
          Create and Join Meeting Room
        </Button>
      </div>

      <div className="flex-1 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Upcoming Video Meetings Card */}
          <Card className="p-6 dark:bg-gray-800 bg-white dark:border-gray-700 border-gray-200 shadow-lg rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center space-x-2 dark:text-white text-gray-900">
                <Video className="text-blue-600" />
                <span>Upcoming Video Meetings</span>
              </h2>
              <Button variant="outline" className="w-8 h-8 p-0" aria-label="Add meeting">
                <Plus className="text-blue-600" />
              </Button>
            </div>
            <div className="flex items-center justify-between mb-4">
              <Button variant="outline" size="icon" aria-label="Previous month">
                <ChevronLeft />
              </Button>
              <span className="text-lg font-semibold dark:text-white text-gray-900">{selectedMonth}</span>
              <Button variant="outline" size="icon" aria-label="Next month">
                <ChevronRight />
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <Card key={index} className="p-4 dark:bg-gray-700 bg-gray-50 dark:border-gray-600 border-gray-200 shadow-sm rounded-lg">
                  <div className="flex justify-between items-center">
                    <div className="dark:text-white text-gray-700">Meeting with Team {index + 1}</div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="icon" aria-label="Join meeting">
                        <Link className="text-green-600" />
                      </Button>
                      <Button variant="outline" size="icon" aria-label="Edit meeting">
                        <Edit className="text-blue-600" />
                      </Button>
                      <Button variant="outline" size="icon" aria-label="Delete meeting">
                        <Trash className="text-red-600" />
                      </Button>
                    </div>
                  </div>
                  <div className="dark:text-gray-300 text-gray-500 text-sm">Aug {10 + index}, 2024 | 2:00 PM - 3:00 PM</div>
                </Card>
              ))}
            </div>
          </Card>

          {/* Schedule Video Meeting Card */}
          <Card className="p-6 dark:bg-gray-800 bg-white dark:border-gray-700 border-gray-200 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2 dark:text-white text-gray-900">
              <Plus className="text-gray-600" />
              <span>Schedule a Video Meeting</span>
            </h2>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-2">
                <label className="dark:text-gray-300 text-gray-700">Meeting Title</label>
                <Textarea placeholder="Enter meeting title" rows={2} className="resize-none" />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="dark:text-gray-300 text-gray-700">Description</label>
                <Textarea placeholder="Enter meeting description" rows={4} className="resize-none" />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="dark:text-gray-300 text-gray-700">Date and Time</label>
                <Select>
                  <option>Aug 30, 2024 | 2:00 PM - 3:00 PM</option>
                  <option>Sep 5, 2024 | 10:00 AM - 11:00 AM</option>
                </Select>
              </div>
              <div className="flex flex-col space-y-2">
                <label className="dark:text-gray-300 text-gray-700">Meeting Link</label>
                <Textarea placeholder="Enter meeting link" rows={2} className="resize-none" />
              </div>
              <Button variant="outline" className="w-full">Save Meeting</Button>
            </div>
          </Card>

          {/* Recent Calls Card */}
          <Card className="p-6 dark:bg-gray-800 bg-white dark:border-gray-700 border-gray-200 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2 dark:text-white text-gray-900">
              <Phone className="text-purple-600" />
              <span>Recent Calls</span>
            </h2>
            <ul className="space-y-3">
              <li className="flex justify-between items-center dark:text-gray-300 text-gray-700">
                <span>Call with Client A - Aug 15, 2024</span>
                <Button variant="outline" size="icon" aria-label="View details">
                  <Link className="text-gray-600" />
                </Button>
              </li>
              <li className="flex justify-between items-center dark:text-gray-300 text-gray-700">
                <span>Team Sync - Aug 8, 2024</span>
                <Button variant="outline" size="icon" aria-label="View details">
                  <Link className="text-gray-600" />
                </Button>
              </li>
              <li className="flex justify-between items-center dark:text-gray-300 text-gray-700">
                <span>Project Update - Jul 30, 2024</span>
                <Button variant="outline" size="icon" aria-label="View details">
                  <Link className="text-gray-600" />
                </Button>
              </li>
            </ul>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default MeetingsPage;
