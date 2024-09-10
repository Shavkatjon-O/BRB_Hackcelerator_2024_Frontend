"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, FilePlus, CheckCircle2, XCircle } from "lucide-react";
import coreApi from "@/lib/coreApi";

import Panel from "../_components/Panel";

const statusColors: Record<string, string> = {
  PENDING: "bg-yellow-100 text-yellow-800",
  APPROVED: "bg-green-100 text-green-800",
  REJECTED: "bg-red-100 text-red-800",
  CANCELLED: "bg-gray-100 text-gray-800",
};

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
          <FilePlus className="mr-2" /> Create Request
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
              <SelectItem value="ABSENCE">Absence Request</SelectItem>
              <SelectItem value="MEETING_ROOM_BOOKING">Meeting Room Booking</SelectItem>
              <SelectItem value="PROJECT_EXTENSION">Project Extension</SelectItem>
              <SelectItem value="OVERTIME">Overtime Request</SelectItem>
              <SelectItem value="WORK_FROM_HOME">Work From Home Request</SelectItem>
              <SelectItem value="TRAINING">Training Request</SelectItem>
              <SelectItem value="SHIFT_CHANGE">Shift Change Request</SelectItem>
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
            {loading ? <Loader2 className="animate-spin mr-2" /> : 'Submit'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

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
              <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${statusColors[request.status]}`}>
                {request.status === 'APPROVED' ? <CheckCircle2 className="inline-block mr-1" /> : request.status === 'REJECTED' ? <XCircle className="inline-block mr-1" /> : null}
                {request.status}
              </span>
            </TableCell>
          </TableRow>
        ))
      )}
    </TableBody>
  </Table>
);

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

  if (loading) return <div className="flex justify-center items-center h-screen"><Loader2 className="animate-spin text-blue-500" /></div>;

  return (
    <Panel title="Requests & Approvals"
      action={<RequestFormDialog onSubmit={handleFormSubmit} />}
    >
      <RequestsTable requests={requests} />
    </Panel>
  );
};

export default Page;
