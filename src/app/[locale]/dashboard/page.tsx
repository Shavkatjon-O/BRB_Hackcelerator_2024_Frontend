'use client';

import withAuth from "@/components/auth/withAuth";

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import { 
  User, 
  TrendingUp, 
  Calendar, 
  Bell 
} from 'lucide-react';

const DashboardPage = () => {
  return (
    <div className="flex flex-col h-screen bg-slate-50 dark:bg-slate-900">
      <div className="flex flex-1 p-6">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2 text-slate-900 dark:text-slate-100">
              <TrendingUp className="text-green-600" />
              <span>Performance Metrics</span>
            </h2>
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">Sales Targets</span>
                <span className="text-lg font-bold text-green-700">85%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">Customer Satisfaction</span>
                <span className="text-lg font-bold text-blue-700">92%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">New Accounts</span>
                <span className="text-lg font-bold text-yellow-700">120</span>
              </div>
            </div>
            <Button variant="outline" className="mt-4">View Detailed Report</Button>
          </Card>

          <Card className="p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2 text-slate-900 dark:text-slate-100">
              <Calendar className="text-blue-600" />
              <span>Upcoming Events</span>
            </h2>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <span className="text-slate-700 dark:text-slate-300">Quarterly Meeting</span>
                <span className="text-slate-500 dark:text-slate-400">Aug 30, 2024</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-slate-700 dark:text-slate-300">Team Building Activity</span>
                <span className="text-slate-500 dark:text-slate-400">Sep 5, 2024</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-slate-700 dark:text-slate-300">Training Session</span>
                <span className="text-slate-500 dark:text-slate-400">Sep 12, 2024</span>
              </li>
            </ul>
            <Button variant="outline" className="mt-4">See All Events</Button>
          </Card>

          <Card className="p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2 text-slate-900 dark:text-slate-100">
              <Bell className="text-red-600" />
              <span>Notifications</span>
            </h2>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <span className="text-slate-700 dark:text-slate-300">New HR Policy Update</span>
                <span className="text-slate-500 dark:text-slate-400">2 hours ago</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-slate-700 dark:text-slate-300">System Maintenance Scheduled</span>
                <span className="text-slate-500 dark:text-slate-400">1 day ago</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-slate-700 dark:text-slate-300">New Employee Onboarding</span>
                <span className="text-slate-500 dark:text-slate-400">3 days ago</span>
              </li>
            </ul>
            <Button variant="outline" className="mt-4">View All Notifications</Button>
          </Card>

          <Card className="p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2 text-slate-900 dark:text-slate-100">
              <User className="text-slate-800 dark:text-slate-200" />
              <span>Profile Summary</span>
            </h2>
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">Name</span>
                <span className="text-slate-800 dark:text-slate-200">John Doe</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">Department</span>
                <span className="text-slate-800 dark:text-slate-200">Finance</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">Employee ID</span>
                <span className="text-slate-800 dark:text-slate-200">123456</span>
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
