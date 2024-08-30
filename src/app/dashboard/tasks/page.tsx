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
    <div className="bg-gray-100 h-full">
      {/* Header Section */}
      <header className="flex justify-between items-center py-4 px-8 border-b">
        <h1 className="text-xl font-bold">Tasks</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex items-center space-x-2 text-gray-800 hover:bg-gray-100">
              <Plus />
              <span className="font-medium">{editingTask ? 'Edit Task' : 'Add Task'}</span>
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
                className="w-full bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? <Loader2 className="animate-spin mr-2" /> : (editingTask ? 'Save Changes' : 'Add Task')}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </header>

      {/* Creative Task Display Section */}
      <section className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map(task => (
          <div key={task.id} className="bg-white rounded-lg p-4 flex flex-col space-y-4 border border-gray-200">
            <h2 className="font-semibold text-gray-800">{task.title}</h2>
            <p className="text-gray-500">Due: {task.dueDate}</p>
            <div className="flex space-x-2">
              <span className={`inline-block px-2 text-sm py-1 font-semibold rounded-full ${task.status === 'Pending' ? 'bg-yellow-200 text-yellow-800' : 'bg-green-200 text-green-800'}`}>
                {task.status}
              </span>
              <span className={`inline-block px-2 text-sm py-1 font-semibold rounded-full ${task.priority === 'High' ? 'bg-red-200 text-red-800' : task.priority === 'Medium' ? 'bg-yellow-200 text-yellow-800' : 'bg-green-200 text-green-800'}`}>
                {task.priority}
              </span>
            </div>
            <p className="text-gray-700">{task.description}</p>
            <div className="mt-auto flex space-x-2">
              <Button variant="outline" onClick={() => handleEditTask(task)}><Edit /></Button>
              <Button variant="outline" onClick={() => handleDeleteTask(task.id)}><Trash /></Button>
            </div>
          </div>
        ))}
      </section>
      
      <div className='px-8'>
        <h1 className="text-xl font-bold">Tasks table</h1>
      </div>

      {/* Task List Section */}
      <section className="p-6">
        <Table className="min-w-full bg-white rounded-md overflow-hidden border border-gray-200">
          <TableHeader>
            <TableRow>
              <TableHead className="text-gray-600">Title</TableHead>
              <TableHead className="text-gray-600">Due Date</TableHead>
              <TableHead className="text-gray-600">Status</TableHead>
              <TableHead className="text-gray-600">Description</TableHead>
              <TableHead className="text-gray-600">Priority</TableHead>
              <TableHead className="text-gray-600">Actions</TableHead>
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
                    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${task.status === 'Pending' ? 'bg-yellow-200 text-yellow-800' : 'bg-green-200 text-green-800'}`}>
                      {task.status}
                    </span>
                  </TableCell>
                  <TableCell>{task.description}</TableCell>
                  <TableCell>
                    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${task.priority === 'High' ? 'bg-red-200 text-red-800' : task.priority === 'Medium' ? 'bg-yellow-200 text-yellow-800' : 'bg-green-200 text-green-800'}`}>
                      {task.priority}
                    </span>
                  </TableCell>
                  <TableCell className="flex space-x-2">
                    <Button variant="outline" onClick={() => handleEditTask(task)}><Edit /></Button>
                    <Button variant="outline" onClick={() => handleDeleteTask(task.id)}><Trash /></Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </section>
    </div>
  );
}
