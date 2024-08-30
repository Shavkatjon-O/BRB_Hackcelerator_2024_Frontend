"use client";
import { useState, useEffect } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CalendarIcon } from "lucide-react";
import coreApi from "@/lib/coreApi";

const RequestFormDialog = ({ onSubmit }: { onSubmit: (formData: any) => void }) => {
  const [requestType, setRequestType] = useState<any>('');
  const [requestDetails, setRequestDetails] = useState<any>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const handleSubmit = async () => {
    const formData = {
      request_type: requestType,
      description: requestDetails,
      start_date: startDate,
      end_date: endDate,
    };

    try {
      const response = await coreApi.post("/approvals/create/", formData);
      onSubmit(response.data); // Assuming the API returns the created request
    } catch (error) {
      console.error("Failed to create request:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="my-4">Create Request</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a New Request</DialogTitle>
          <DialogDescription>Select the type of request and provide details.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <Select value={requestType} onValueChange={setRequestType}>
            <SelectTrigger>
              <SelectValue placeholder="Select Request Type" />
            </SelectTrigger>
            <SelectContent>
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
          <Input
            placeholder="Request Details"
            value={requestDetails}
            onChange={(e) => setRequestDetails(e.target.value)}
          />
          <Input
            type="date"
            placeholder="Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <Input
            type="date"
            placeholder="End Date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const RequestsTable = ({ requests }: { requests: any[] }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableHeader>Type</TableHeader>
        <TableHeader>Details</TableHeader>
        <TableHeader>Start Date</TableHeader>
        <TableHeader>End Date</TableHeader>
        <TableHeader>Status</TableHeader>
      </TableRow>
    </TableHead>
    <TableBody>
      {requests.map((request, index) => (
        <TableRow key={index}>
          <TableCell>{request.request_type}</TableCell>
          <TableCell>{request.description}</TableCell>
          <TableCell>{request.start_date}</TableCell>
          <TableCell>{request.end_date}</TableCell>
          <TableCell>{request.status}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const Page = () => {
  const [requests, setRequests] = useState<any>([]);

  const fetchRequests = async () => {
    try {
      const response = await coreApi.get("/approvals/");
      setRequests(response.data);
    } catch (error) {
      console.error("Failed to fetch requests:", error);
    }
  };

  const handleFormSubmit = (newRequest: any) => {
    setRequests([...requests, newRequest]);
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Requests & Approvals</h1>
      <RequestFormDialog onSubmit={handleFormSubmit} />
      <RequestsTable requests={requests} />
    </div>
  );
};

export default Page;
