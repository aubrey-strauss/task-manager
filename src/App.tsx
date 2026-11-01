import { useState } from "react";
import "./App.css";
import type { TaskStatus } from "./types";
import type { Task } from "./types";
import TaskList from "./components/TaskList/TaskList";
import TaskFilter from "./components/TaskFilter/TaskFilter";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Task 1",
      description: "This is the first task",
      status: "pending",
      priority: "medium",
      dueDate: "2023-12-31",
    },
    {
      id: "2",
      title: "Task 2",
      description: "This is the second task",
      status: "in-progress",
      priority: "high",
      dueDate: "2023-11-30",
    },
    {
      id: "3",
      title: "Task 3",
      description: "This is the third task",
      status: "completed",
      priority: "low",
      dueDate: "2023-10-15",
    },
  ]);

  const [filters, setFilters] = useState<{
    status?: TaskStatus;
    priority?: "low" | "medium" | "high";
  }>({});

  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task,
      ),
    );
  };

  const handleDelete = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks = tasks.filter((task) => {
    const statusMatch = filters.status ? task.status === filters.status : true;
    const priorityMatch = filters.priority
      ? task.priority === filters.priority
      : true;
    return statusMatch && priorityMatch;
  });

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskFilter onFilterChange={setFilters} />
      <TaskList
        tasks={filteredTasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </div>
  );
}
