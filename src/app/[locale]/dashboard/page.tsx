'use client';

import withAuth from "@/components/auth/withAuth";
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, TrendingUp, Calendar, BarChart, Bell, Activity } from 'lucide-react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DashboardPage = () => {
  // Line Chart Data (Sales)
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [50, 75, 60, 80, 95, 110],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Sales Performance (Line Chart)' },
    },
  };

  // Bar Chart Data (Revenue)
  const barChartData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Revenue',
        data: [15000, 20000, 22000, 25000],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Quarterly Revenue (Bar Chart)' },
    },
  };

  // Cartesian Chart Data (Activity)
  const cartesianChartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Activity Hours',
        data: [5, 7, 9, 12],
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
      },
      {
        label: 'Target Hours',
        data: [6, 6, 6, 6],
        borderColor: 'rgba(75, 192, 192, 0.8)',
      },
    ],
  };

  const cartesianChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: { display: true, text: 'Weekly Activity vs Target (Cartesian Chart)' },
    },
  };

  return (
    <div className="flex flex-col h-screen bg-slate-50 dark:bg-slate-900">
      <div className="flex flex-1 p-6">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Performance Metrics with Line Chart */}
          <Card className="p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2 text-slate-900 dark:text-slate-100">
              <TrendingUp className="text-green-600" />
              <span>Sales Performance</span>
            </h2>
            <Line data={lineChartData} options={lineChartOptions} />
            <Button variant="outline" className="mt-4">View Detailed Report</Button>
          </Card>

          {/* Revenue Metrics with Bar Chart */}
          <Card className="p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2 text-slate-900 dark:text-slate-100">
              <BarChart className="text-blue-600" />
              <span>Revenue Performance</span>
            </h2>
            <Bar data={barChartData} options={barChartOptions} />
            <Button variant="outline" className="mt-4">View Detailed Revenue</Button>
          </Card>

          {/* Weekly Activity with Cartesian Chart */}
          <Card className="p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2 text-slate-900 dark:text-slate-100">
              <Activity className="text-purple-600" />
              <span>Weekly Activity</span>
            </h2>
            <Line data={cartesianChartData} options={cartesianChartOptions} />
            <Button variant="outline" className="mt-4">View Activity Insights</Button>
          </Card>

          {/* Other cards remain the same */}
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

          {/* Notifications */}
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

          {/* Profile Summary */}
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
