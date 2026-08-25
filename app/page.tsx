"use client";
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { TaskForm } from "@/components/TaskForm";
import { TaskStats } from "@/components/TaskStats";
import { TaskList } from "@/components/TaskList";
import type { Task } from "@/types/task";
const STORAGE_KEY = "student-task-manager-tasks";
export default function Home() {
   const [tasks, setTasks] = useState<Task[]>([        
    {
      id: "1",
      title: "Даалгавар",
      description: "Complete the useState and useEffect exercises.",
      priority: "medium",
      dueDate: "2026-08-10",
      completed: false,
      createdAt: "2026-08-07T09:00:00.000Z",
    },
    {
      id: "2",
      title: "Gym",
      description: "Явсан",
      priority: "low",
      dueDate: "2026-08-11",
      completed: true,
      createdAt: "2026-08-07T09:05:00.000Z",
    },
    {
      id: "3",
      title: "Гэрээ цэвэрлэх",
      description: "Complete",
      priority: "high",
      dueDate: "2026-08-13",
      completed: false,
      createdAt: "2026-08-07T09:10:00.000Z",
    },
  ]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

useEffect(() => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- loading persisted data from localStorage on initial mount is the intended use case for this pattern
      setTasks(JSON.parse(saved));
    }
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  } finally {
    setIsLoaded(true);
  }
}, []);

useEffect(() => {
  if (!isLoaded) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}, [tasks, isLoaded]);
  function addTask(task: Task) {
    setTasks((current) => [task, ...current]);
  }

    function toggleTask(taskId: string) {
    setTasks((current) =>
      current.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(taskId: string) {
    setTasks((current) => current.filter((task) => task.id !== taskId));
  }
  function updateTask(updatedTask: Task) {
  setTasks((current) =>
    current.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    )
  );
  setEditingTaskId(null);
}

function startEditingTask(taskId: string) {
  setEditingTaskId(taskId);
}

function cancelEditingTask() {
  setEditingTaskId(null);
}
const editingTask = tasks.find((task) => task.id === editingTaskId) ?? null;

const normalizedQuery = searchQuery.trim().toLowerCase();
const searchedTasks = tasks.filter((task) => {
  if (!normalizedQuery) return true;


  return (
    task.title.toLowerCase().includes(normalizedQuery) ||
    task.description.toLowerCase().includes(normalizedQuery)
  );

});
  type StatusFilter = "all" | "active" | "completed";
type PriorityFilter = "all" | "low" | "medium" | "high";

const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
const [priorityFilter, setPriorityFilter] = useState<PriorityFilter>("all");
const visibleTasks = searchedTasks.filter((task) => {
  const statusMatches =
    statusFilter === "all" ||
    (statusFilter === "active" && !task.completed) ||
    (statusFilter === "completed" && task.completed);
  const priorityMatches =
    priorityFilter === "all" || task.priority === priorityFilter;
  return statusMatches && priorityMatches;
});
const totalTasks = tasks.length;
const completedTasks = tasks.filter((task) => task.completed).length;
const activeTasks = totalTasks - completedTasks;
const completionPercentage =
  totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
  return (
    <main className="min-h-screen bg-[#1e2138] p-6">
      <div className="mx-auto max-w-3xl">
        <Header title="Student Task Manager" subtitle="Manage your daily tasks and assignments." />
      <TaskForm
       key={editingTask?.id ?? "new"}
  onAddTask={addTask}
  onUpdateTask={updateTask}
  editingTask={editingTask}
  onCancelEdit={cancelEditingTask}
/>
      <TaskStats
  totalTasks={totalTasks}
  activeTasks={activeTasks}
  completedTasks={completedTasks}
  completionPercentage={completionPercentage}
/>
      <div className="mb-4">
  <label htmlFor="search" className="text-white">Search</label>
  <input
    id="search"
    type="text"
    placeholder="Search by title or description..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className="bg-white text-slate-900 w-full border border-slate-900 rounded-md px-3 py-2 text-sm"
  />
  {searchQuery && (
    <button
      onClick={() => setSearchQuery("")}
      className="mt-1 text-xs text-slate-500 underline text-bold"
    >
      Clear Search
    </button>
  )}
</div>
<div className="mb-4 flex gap-4">
  <div>
    <label htmlFor="statusFilter" className="text-white">Status: </label>
    <select
      id="statusFilter"
      value={statusFilter}
      onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
      className="text-slate-900 border border-slate-900 rounded-md bg-white"
    >
      <option value="all">All</option>
      <option value="active">Active</option>
      <option value="completed">Completed</option>
    </select>
  </div>
  <div>
    <label htmlFor="priorityFilter" className="text-white">Priority: </label>
    <select
      id="priorityFilter"
      value={priorityFilter}
      onChange={(e) => setPriorityFilter(e.target.value as PriorityFilter)}
      className="text-slate-900 border border-slate-900 rounded-md bg-white"
    >
      <option value="all">All</option>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
  </div>
  <button
    onClick={() => {
      setStatusFilter("all");
      setPriorityFilter("all");
      setSearchQuery("");
    }}
    className="self-end text-xs border border-slate-300 rounded-md px-3 py-1 bg-white text-slate-900"
  >
    Reset Filters
  </button>
</div>
<p className="mb-2 text-sm text-slate-200">{visibleTasks.length} task(s) match</p>
     <TaskList
  tasks={visibleTasks}
  onToggle={toggleTask}
  onDelete={deleteTask}
  onEdit={startEditingTask}
/>
      </div>
    </main>
  );
}