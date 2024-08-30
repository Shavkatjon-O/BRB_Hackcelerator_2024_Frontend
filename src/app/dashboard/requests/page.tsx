"use client";
import { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CalendarIcon } from "lucide-react"

const RequestFormDialog = ({ onSubmit }: { onSubmit: (formData: any) => void }) => {
  const [requestType, setRequestType] = useState<any>('');
  const [requestDetails, setRequestDetails] = useState<any>('');

  const handleSubmit = () => {
    const formData = {
      type: requestType,
      details: requestDetails,
      date: new Date().toLocaleDateString(),
      status: 'Pending',
    };
    onSubmit(formData);
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
              <SelectItem value="absence">Absence Request</SelectItem>
              <SelectItem value="leave">Leave Request</SelectItem>
              <SelectItem value="report">Report Request</SelectItem>
            </SelectContent>
          </Select>
          <Input
            placeholder="Request Details"
            value={requestDetails}
            onChange={(e) => setRequestDetails(e.target.value)}
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
        <TableHead>Type</TableHead>
        <TableHead>Details</TableHead>
        <TableHead>Date</TableHead>
        <TableHead>Status</TableHead>
      </TableRow>
    </TableHead>
    <TableBody>
      {requests.map((request, index) => (
        <TableRow key={index}>
          <TableCell>{request.type}</TableCell>
          <TableCell>{request.details}</TableCell>
          <TableCell>{request.date}</TableCell>
          <TableCell>{request.status}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const Page = () => {
  const [requests, setRequests] = useState<any>([]);

  const handleFormSubmit = (newRequest: any) => {
    setRequests([...requests, newRequest]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Requests & Approvals</h1>
      <RequestFormDialog onSubmit={handleFormSubmit} />
      <RequestsTable requests={requests} />
    </div>
  );
};

export default Page;
