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

useEffect(() => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
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
  return (
    <main className="min-h-screen bg-slate-200 p-6">
      <div className="mx-auto max-w-3xl">
        <Header title="Student Task Manager" subtitle="Manage your daily tasks and assignments." />
      <TaskForm
       key={editingTask?.id ?? "new"}
  onAddTask={addTask}
  onUpdateTask={updateTask}
  editingTask={editingTask}
  onCancelEdit={cancelEditingTask}
/>
      <TaskStats />
     <TaskList
  tasks={tasks}
  onToggle={toggleTask}
  onDelete={deleteTask}
  onEdit={startEditingTask}
/>
      </div>
    </main>
  );
}