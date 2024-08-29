"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { XCircle, PlusCircle, Trash2 } from "lucide-react";

const RequestsPage = () => {
  const [requests, setRequests] = useState([
    { id: "#12345", requester: "John Doe", date: "2024-08-30", status: "Pending", type: "Leave" },
    { id: "#12346", requester: "Jane Smith", date: "2024-08-29", status: "Approved", type: "Vacation" },
  ]);

  const [newRequest, setNewRequest] = useState({ type: "", date: "" });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewRequest({ ...newRequest, [name]: value });
  };

  const handleSubmit = () => {
    if (newRequest.type && newRequest.date) {
      const newRequestEntry = {
        id: `#${requests.length + 1}`,
        requester: "Current User",
        date: newRequest.date,
        status: "Pending",
        type: newRequest.type,
      };
      setRequests([...requests, newRequestEntry]);
      setNewRequest({ type: "", date: "" });
    }
  };

  const handleDelete = (id: string) => {
    setRequests(requests.filter((request) => request.id !== id));
  };

  const handleCancel = (id: string) => {
    setRequests(
      requests.map((request) =>
        request.id === id ? { ...request, status: "Cancelled" } : request
      )
    );
  };

  return (
    <div className="p-6 space-y-6">
      {/* Dialog to submit a new request */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default">
            <PlusCircle className="w-4 h-4 mr-2" /> Create a New Request
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New Request</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              name="type"
              placeholder="Request Type (e.g., Leave, Vacation)"
              value={newRequest.type}
              onChange={handleInputChange}
              className="w-full"
            />
            <Input
              name="date"
              type="date"
              value={newRequest.date}
              onChange={handleInputChange}
              className="w-full"
            />
            <Button onClick={handleSubmit} variant="default" className="w-full">
              <PlusCircle className="w-4 h-4 mr-2" /> Submit Request
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* List of submitted requests */}
      <Card>
        <CardHeader>
          <CardTitle>Your Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Request ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell>{request.id}</TableCell>
                  <TableCell>{request.type}</TableCell>
                  <TableCell>{request.date}</TableCell>
                  <TableCell>
                    <Badge variant={request.status === "Approved" ? "default" : request.status === "Cancelled" ? "destructive" : "outline"}>
                      {request.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        onClick={() => handleCancel(request.id)}
                        className="bg-yellow-500 text-white hover:bg-yellow-600"
                        disabled={request.status !== "Pending"}
                      >
                        <XCircle className="w-4 h-4 mr-1" /> Cancel
                      </Button>
                      <Button
                        onClick={() => handleDelete(request.id)}
                        className="bg-red-500 text-white hover:bg-red-600"
                      >
                        <Trash2 className="w-4 h-4 mr-1" /> Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default RequestsPage;
