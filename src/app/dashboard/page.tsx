'use client';

import withAuth from "@/components/auth/withAuth";
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { User, Wallet, TrendingUp, Clock, Calendar, Bell } from 'lucide-react';
import { useState } from 'react';

const DashboardPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="flex flex-col h-screen bg-gray-200">
      <div className="flex flex-1 p-6">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Performance Metrics Card */}
          <Card className="p-6 bg-white border border-gray-200 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
              <TrendingUp className="text-green-600" />
              <span>Performance Metrics</span>
            </h2>
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Sales Targets</span>
                <span className="text-lg font-bold text-green-700">85%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Customer Satisfaction</span>
                <span className="text-lg font-bold text-blue-700">92%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">New Accounts</span>
                <span className="text-lg font-bold text-yellow-700">120</span>
              </div>
            </div>
            <Button variant="outline" className="mt-4">View Detailed Report</Button>
          </Card>

          {/* Upcoming Events Card */}
          <Card className="p-6 bg-white border border-gray-200 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
              <Calendar className="text-blue-600" />
              <span>Upcoming Events</span>
            </h2>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <span className="text-gray-700">Quarterly Meeting</span>
                <span className="text-gray-500">Aug 30, 2024</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-700">Team Building Activity</span>
                <span className="text-gray-500">Sep 5, 2024</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-700">Training Session</span>
                <span className="text-gray-500">Sep 12, 2024</span>
              </li>
            </ul>
            <Button variant="outline" className="mt-4">See All Events</Button>
          </Card>

          {/* Notifications Card */}
          <Card className="p-6 bg-white border border-gray-200 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
              <Bell className="text-red-600" />
              <span>Notifications</span>
            </h2>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <span className="text-gray-700">New HR Policy Update</span>
                <span className="text-gray-500">2 hours ago</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-700">System Maintenance Scheduled</span>
                <span className="text-gray-500">1 day ago</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-700">New Employee Onboarding</span>
                <span className="text-gray-500">3 days ago</span>
              </li>
            </ul>
            <Button variant="outline" className="mt-4">View All Notifications</Button>
          </Card>

          {/* Profile Summary Card */}
          <Card className="p-6 bg-white border border-gray-200 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
              <User className="text-gray-800" />
              <span>Profile Summary</span>
            </h2>
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Name</span>
                <span className="text-gray-800">John Doe</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Department</span>
                <span className="text-gray-800">Finance</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Employee ID</span>
                <span className="text-gray-800">123456</span>
              </div>
            </div>
            <Button variant="outline" className="mt-4">Edit Profile</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default withAuth(DashboardPage);
