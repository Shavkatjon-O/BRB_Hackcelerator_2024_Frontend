'use client';

import withAuth from "@/components/auth/withAuth";
import { Card } from '@/components/ui/card';
import { TrendingUp, BarChart, Activity, DollarSign, Smile, BarChart2 } from 'lucide-react';
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
  // Line Chart Data (Transaction Volume)
  const transactionVolumeData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Transaction Volume',
        data: [5000, 7000, 6000, 8000, 9500, 11000],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const transactionVolumeOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Monthly Transaction Volume' },
    },
  };

  // Bar Chart Data (Loan Approvals)
  const loanApprovalsData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Loan Approvals',
        data: [150, 200, 220, 250],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const loanApprovalsOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Quarterly Loan Approvals' },
    },
  };

  // Activity Chart Data (Account Activities)
  const accountActivityData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Active Accounts',
        data: [400, 450, 470, 500],
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
      },
      {
        label: 'Inactive Accounts',
        data: [50, 45, 30, 20],
        borderColor: 'rgba(255, 99, 132, 0.8)',
      },
    ],
  };

  const accountActivityOptions = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: { display: true, text: 'Weekly Account Activity' },
    },
  };

  // Bar Chart Data (Loan Repayments)
  const loanRepaymentsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Loan Repayments (in Thousands)',
        data: [3000, 3500, 2800, 3200, 4000, 4500],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };

  const loanRepaymentsOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Monthly Loan Repayments' },
    },
  };

  // Bar Chart Data (Employee Performance)
  const employeePerformanceData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Employee Performance',
        data: [80, 85, 90, 95],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
  };

  const employeePerformanceOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Quarterly Employee Performance' },
    },
  };

  // Horizontal Bar Chart Data (Customer Satisfaction)
  const customerSatisfactionData = {
    labels: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'],
    datasets: [
      {
        label: 'Customer Satisfaction',
        data: [60, 25, 10, 5],
        backgroundColor: ['rgba(75, 192, 192, 0.8)', 'rgba(54, 162, 235, 0.8)', 'rgba(255, 205, 86, 0.8)', 'rgba(255, 99, 132, 0.8)'],
      },
    ],
  };

  const customerSatisfactionOptions = {
    responsive: true,
    indexAxis: 'y' as const, // Fixed the type for `indexAxis`
    plugins: {
      legend: { display: true },
      title: { display: true, text: 'Customer Satisfaction Levels' },
    },
  };

  return (
    <div className="flex flex-col h-full overflow-y-scroll bg-slate-100 dark:bg-slate-900">
      <div className="flex flex-1 p-6">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Transaction Volume Line Chart */}
          <Card className="p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2 text-slate-900 dark:text-slate-100">
              <TrendingUp className="text-green-600" />
              <span>Transaction Volume</span>
            </h2>
            <Line data={transactionVolumeData} options={transactionVolumeOptions} />
          </Card>

          {/* Loan Approvals Bar Chart */}
          <Card className="p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2 text-slate-900 dark:text-slate-100">
              <BarChart className="text-blue-600" />
              <span>Loan Approvals</span>
            </h2>
            <Bar data={loanApprovalsData} options={loanApprovalsOptions} />
          </Card>

          {/* Weekly Account Activity Chart */}
          <Card className="p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2 text-slate-900 dark:text-slate-100">
              <Activity className="text-purple-600" />
              <span>Account Activity</span>
            </h2>
            <Line data={accountActivityData} options={accountActivityOptions} />
          </Card>

          {/* Loan Repayments Bar Chart */}
          <Card className="p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2 text-slate-900 dark:text-slate-100">
              <DollarSign className="text-green-600" />
              <span>Loan Repayments</span>
            </h2>
            <Bar data={loanRepaymentsData} options={loanRepaymentsOptions} />
          </Card>

          {/* Employee Performance Bar Chart */}
          <Card className="p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2 text-slate-900 dark:text-slate-100">
              <BarChart2 className="text-blue-600" />
              <span>Employee Performance</span>
            </h2>
            <Bar data={employeePerformanceData} options={employeePerformanceOptions} />
          </Card>

          {/* Customer Satisfaction Horizontal Bar Chart */}
          <Card className="p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2 text-slate-900 dark:text-slate-100">
              <Smile className="text-yellow-600" />
              <span>Employee of month</span>
            </h2>
            <Bar data={customerSatisfactionData} options={customerSatisfactionOptions} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default withAuth(DashboardPage);
