"use client";
import { useState } from "react";
import { Header } from "@/components/Header";
import { TaskForm } from "@/components/TaskForm";
import { TaskStats } from "@/components/TaskStats";
import { TaskList } from "@/components/TaskList";
import type { Task } from "@/types/task";
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
  function addTask(task: Task) {
    setTasks((current) => [task, ...current]);
  }

  return (
    <main className="min-h-screen bg-slate-200 p-6">
      <div className="mx-auto max-w-3xl">
        <Header title="Student Task Manager" subtitle="Manage your daily tasks and assignments." />
      <TaskForm onAddTask={addTask} />
      <TaskStats />
      <TaskList  tasks={tasks} />
      </div>
    </main>
  );
}