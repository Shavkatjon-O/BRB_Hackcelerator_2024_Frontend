"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FilePlus, CheckCircle2, XCircle, Clock, BarChart2, PieChart, PlusCircle, Edit3 } from "lucide-react";
import coreApi from "@/lib/coreApi";
import Loader from "../_components/Loader";
import Panel from "../_components/Panel";
import { Chart } from "react-google-charts";  // Assuming you use a charting library

// Add status colors for requests
const statusColors: Record<string, string> = {
  PENDING: "bg-yellow-300 text-yellow-800",
  APPROVED: "bg-green-300 text-green-800",
  REJECTED: "bg-red-300 text-red-800",
};

// Request form dialog
const RequestFormDialog = ({ onSubmit }: { onSubmit: (formData: any) => void }) => {
  const [requestType, setRequestType] = useState<string>("");
  const [requestDetails, setRequestDetails] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const handleSubmit = async () => {
    setLoading(true);
    const formData = {
      request_type: requestType,
      description: requestDetails,
      start_date: startDate,
      end_date: endDate,
    };

    try {
      const response = await coreApi.post("/approvals/create/", formData);
      onSubmit(response.data);
      setOpen(false); // Automatically close dialog after submission
    } catch (error) {
      console.error("Failed to create request:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-slate-900 hover:bg-slate-50 border-slate-300 dark:bg-slate-800 dark:text-white dark:border-slate-700 dark:hover:bg-slate-700">
          <PlusCircle className="mr-2" /> Create Request
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg bg-slate-50 text-slate-900 border-slate-300 dark:bg-slate-900 dark:text-white dark:border-slate-700">
        <DialogHeader>
          <DialogTitle>Create a New Request</DialogTitle>
          <DialogDescription>Select the type of request and provide details.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <Select value={requestType} onValueChange={setRequestType}>
            <SelectTrigger className="bg-slate-50 border-slate-300 dark:bg-slate-800 dark:border-slate-700 dark:text-white">
              <SelectValue placeholder="Select Request Type" />
            </SelectTrigger>
            <SelectContent className="bg-slate-50 border-slate-300 dark:bg-slate-800 dark:border-slate-700 dark:text-white">
              <SelectItem value="LEAVE">Leave Request</SelectItem>
              <SelectItem value="EXPENSE">Expense Request</SelectItem>
              <SelectItem value="TRAVEL">Travel Request</SelectItem>
              <SelectItem value="PROJECT_EXTENSION">Project Extension</SelectItem>
              <SelectItem value="EQUIPMENT">Equipment Request</SelectItem>
              <SelectItem value="SICK_LEAVE">Sick Leave Request</SelectItem>
            </SelectContent>
          </Select>
          <Textarea
            placeholder="Request Details"
            value={requestDetails}
            onChange={(e) => setRequestDetails(e.target.value)}
            className="bg-slate-50 border-slate-300 text-slate-900 rounded-md dark:bg-slate-800 dark:border-slate-700 dark:text-white"
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="date"
              placeholder="Start Date"
              value={startDate || ""}
              onChange={(e) => setStartDate(e.target.value)}
              className="bg-slate-50 border-slate-300 text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
            />
            <Input
              type="date"
              placeholder="End Date"
              value={endDate || ""}
              onChange={(e) => setEndDate(e.target.value)}
              className="bg-slate-50 border-slate-300 text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
            />
          </div>
          <Button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? <Loader /> : 'Submit'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Requests Table with added columns
const RequestsTable = ({ requests }: { requests: any[] }) => (
  <Table className="min-w-full bg-white shadow-lg rounded-md overflow-hidden text-slate-900 dark:bg-slate-800 dark:text-white">
    <TableHeader>
      <TableRow className="dark:bg-slate-800">
        <TableHead>Type</TableHead>
        <TableHead>Details</TableHead>
        <TableHead>Start Date</TableHead>
        <TableHead>End Date</TableHead>
        <TableHead>Status</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {requests.length === 0 ? (
        <TableRow>
          <TableCell colSpan={5} className="text-center py-4 text-slate-500 dark:text-slate-400">No requests available.</TableCell>
        </TableRow>
      ) : (
        requests.map((request, index) => (
          <TableRow key={index} className="hover:bg-slate-50 dark:hover:bg-slate-700">
            <TableCell>{request.request_type}</TableCell>
            <TableCell>{request.description}</TableCell>
            <TableCell>{request.start_date}</TableCell>
            <TableCell>{request.end_date}</TableCell>
            <TableCell>
              <span className={`flex items-center w-max px-2 py-1 text-xs font-semibold rounded-full ${statusColors[request.status]}`}>
                {request.status === 'APPROVED' ? <CheckCircle2 className="size-4 mr-1" />
                  : request.status === 'REJECTED' ? <XCircle className="size-4 mr-1" />
                    : <Clock className="size-4 mr-1" />}
                {request.status}
              </span>
            </TableCell>
          </TableRow>
        ))
      )}
    </TableBody>
  </Table>
);

// Sample statistics data
const statisticsData = [
  { label: "Total Requests", value: 120 },
  { label: "Approved", value: 80 },
  { label: "Pending", value: 30 },
  { label: "Rejected", value: 10 },
];

// Simple statistics panel
const StatisticsPanel = () => (
  <Panel title="Requests Statistics" className="grid grid-cols-4 gap-4">
    {statisticsData.map((stat, index) => (
      <div key={index} className="p-4 bg-slate-100 dark:bg-slate-800 rounded-md text-center">
        <div className="text-xl font-semibold">{stat.value}</div>
        <div className="text-slate-500 dark:text-slate-400">{stat.label}</div>
      </div>
    ))}
  </Panel>
);

// Updated ChartPanel with better design
const ChartPanel = () => {
  const chartData = [
    ["Status", "Requests"],
    ["Approved", 80],
    ["Pending", 30],
    ["Rejected", 10],
  ];

  const chartOptions = {
    title: "Request Status Breakdown",
    pieHole: 0.4,
    is3D: false,
    backgroundColor: "transparent",
    legend: {
      position: 'bottom',
      textStyle: {
        color: '#ffffff', // White text for contrast in dark mode
        fontSize: 14
      }
    },
    slices: {
      0: { color: '#4285F4' },  // Approved color
      1: { color: '#FBBC05' },  // Pending color
      2: { color: '#EA4335' },  // Rejected color
    },
    chartArea: { width: '80%', height: '80%' },
    pieSliceTextStyle: {
      color: '#fff' // Pie chart text color
    },
  };

  return (
    <Panel title="Request Analytics" className="p-6 bg-slate-800 rounded-lg">
      <Chart
        chartType="PieChart"
        data={chartData}
        options={chartOptions}
        width="100%"
        height="400px"  // Increased height for better view
      />
    </Panel>
  );
};

const Page = () => {
  const [requests, setRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const response = await coreApi.get("/approvals/");
      setRequests(response.data);
    } catch (error) {
      console.error("Failed to fetch requests:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = (newRequest: any) => {
    setRequests((prevRequests) => [...prevRequests, { ...newRequest, status: 'PENDING' }]);
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <StatisticsPanel />

      <Panel title="Quick Actions" className="grid grid-cols-4 gap-4">
        <Button variant="outline" className="w-full h-20 text-slate-900 hover:bg-slate-50 border-slate-300 dark:bg-slate-800 dark:text-white dark:border-slate-700 dark:hover:bg-slate-700">
          <FilePlus className="mr-2" /> New Leave Request
        </Button>
        <Button variant="outline" className="w-full h-20 text-slate-900 hover:bg-slate-50 border-slate-300 dark:bg-slate-800 dark:text-white dark:border-slate-700 dark:hover:bg-slate-700">
          <Edit3 className="mr-2" /> Modify Request
        </Button>
        <Button variant="outline" className="w-full h-20 text-slate-900 hover:bg-slate-50 border-slate-300 dark:bg-slate-800 dark:text-white dark:border-slate-700 dark:hover:bg-slate-700">
          <BarChart2 className="mr-2" /> View Reports
        </Button>
        <Button variant="outline" className="w-full h-20 text-slate-900 hover:bg-slate-50 border-slate-300 dark:bg-slate-800 dark:text-white dark:border-slate-700 dark:hover:bg-slate-700">
          <PieChart className="mr-2" /> Analytics
        </Button>
      </Panel>

      {/* Requests Table */}
      <Panel title="Requests & Approvals"
        action={<RequestFormDialog onSubmit={handleFormSubmit} />}
      >
        <RequestsTable requests={requests} />
      </Panel>
    </>
  );
};

export default Page;
