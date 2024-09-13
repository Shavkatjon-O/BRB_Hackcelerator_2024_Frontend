"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Panel from "../_components/Panel";
import { KanbanBoard } from "./KanbanBoard";

// Define a type for task data
interface TaskData {
  title: string;
  description: string;
  dueDate: string;
}

const CreateTaskDialog: React.FC = () => {
  const [taskData, setTaskData] = useState<TaskData>({
    title: "",
    description: "",
    dueDate: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = () => {
    // Handle task creation logic
    console.log("Task created:", taskData);
    setTaskData({ title: "", description: "", dueDate: "" });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Create Task</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Task</DialogTitle>
          <DialogDescription>
            Enter the details for the new task.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            name="title"
            placeholder="Task Title"
            value={taskData.title}
            onChange={handleInputChange}
          />
          <Textarea
            name="description"
            placeholder="Task Description"
            value={taskData.description}
            onChange={handleInputChange}
          />
          <Input
            name="dueDate"
            type="datetime-local"
            value={taskData.dueDate}
            onChange={handleInputChange}
          />
        </div>
        <DialogFooter>
          <Button variant="default" onClick={handleSubmit}>
            Create Task
          </Button>
          <Button variant="secondary" onClick={() => setTaskData({ title: "", description: "", dueDate: "" })}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const Page: React.FC = () => {
  return (
    <Panel title="Task Management" action={<CreateTaskDialog />}>
      <KanbanBoard />
    </Panel>
  );
};

export default Page;
