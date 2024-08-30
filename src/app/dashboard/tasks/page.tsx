"use client";

import { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Plus, Edit, Trash } from 'lucide-react';

export interface Task {
  id: number;
  title: string;
  dueDate: string;
  status: 'Pending' | 'Completed' | '';
  description: string;
  priority: 'Low' | 'Medium' | 'High' | '';
}

export interface TaskPageState {
  tasks: Task[];
  newTask: Omit<Task, 'id'>;
  showDialog: boolean;
  loading: boolean;
  editingTask: Task | null;
}

export default function TaskPage() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Task 1', dueDate: '2024-09-01', status: 'Pending', description: 'Complete the project report', priority: 'High' },
    { id: 2, title: 'Task 2', dueDate: '2024-09-05', status: 'Completed', description: 'Prepare presentation slides', priority: 'Medium' },
  ]);

  const [newTask, setNewTask] = useState<Omit<Task, 'id'>>({ title: '', dueDate: '', status: '', description: '', priority: '' });
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const handleAddTask = () => {
    setLoading(true);
    setTimeout(() => { // Simulating async operation
      if (editingTask) {
        // Update task
        setTasks(tasks.map(task =>
          task.id === editingTask.id
            ? { ...task, ...newTask }
            : task
        ));
        setEditingTask(null);
      } else {
        // Add new task
        setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
      }
      setNewTask({ title: '', dueDate: '', status: '', description: '', priority: '' });
      setShowDialog(false);
      setLoading(false);
    }, 500);
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setNewTask(task);
    setShowDialog(true);
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 h-full">
      <header className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold text-gray-800">Task Management</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex items-center space-x-2">
              <Plus />
              <span>{editingTask ? 'Edit Task' : 'Add Task'}</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>{editingTask ? 'Edit Task' : 'Add New Task'}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="Enter task title"
                value={newTask.title}
                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                className="bg-white border rounded-md"
              />
              <Input
                type="date"
                value={newTask.dueDate}
                onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                className="bg-white border rounded-md"
              />
              <Select
                value={newTask.status}
                onValueChange={(value) => setNewTask({ ...newTask, status: value as Task['status'] })}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              <Textarea
                placeholder="Enter task description"
                value={newTask.description}
                onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                className="bg-white border rounded-md"
              />
              <Select
                value={newTask.priority}
                onValueChange={(value) => setNewTask({ ...newTask, priority: value as Task['priority'] })}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Low">Low</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                </SelectContent>
              </Select>
              <Button
                onClick={handleAddTask}
                disabled={loading}
                className="w-full bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50"
              >
                {loading ? <Loader2 className="animate-spin mr-2" /> : (editingTask ? 'Save Changes' : 'Add Task')}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </header>

      <Table className="min-w-full bg-white shadow-md rounded-md overflow-hidden">
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-4 text-gray-600">No tasks available.</TableCell>
            </TableRow>
          ) : (
            tasks.map(task => (
              <TableRow key={task.id} className="hover:bg-gray-50">
                <TableCell>{task.title}</TableCell>
                <TableCell>{task.dueDate}</TableCell>
                <TableCell>
                  <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${task.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                    {task.status}
                  </span>
                </TableCell>
                <TableCell>{task.description}</TableCell>
                <TableCell>
                  <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${task.priority === 'High' ? 'bg-red-100 text-red-800' : task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                    {task.priority}
                  </span>
                </TableCell>
                <TableCell className="flex space-x-2">
                  <Button onClick={() => handleEditTask(task)}><Edit /></Button>
                  <Button onClick={() => handleDeleteTask(task.id)}><Trash /></Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
