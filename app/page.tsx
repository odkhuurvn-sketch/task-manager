"use client";

import { useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { TaskForm, type TaskFormValues } from "@/components/TaskForm";
import { TaskStats, type Task } from "@/components/TaskStats";
import { TaskList } from "@/components/TaskList";

const initialTasks: Task[] = [
  {
   id: "1",
   title: "Complete chemistry lab report",
   description: "Finish the analysis and review the final summary before class tomorrow.",
   priority: "high",
   dueDate: "2026-08-31",
   completed: false,
  },
  {
   id: "2",
   title: "Review math exercises",
   description: "Practice derivatives and solve the last set of homework problems.",
   priority: "medium",
   dueDate: "2026-09-02",
   completed: true,
  },
  {
   id: "3",
   title: "Prepare reading notes",
   description: "Summarize key points from the assigned chapters and highlight questions.",
   priority: "low",
   dueDate: "2026-09-04",
   completed: false,
  },
];

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);

  const editingTask = useMemo(
   () => tasks.find((task) => task.id === editingTaskId) ?? null,
   [editingTaskId, tasks],
  );

  const handleSubmit = (values: TaskFormValues) => {
   if (editingTaskId) {
     setTasks((currentTasks) =>
       currentTasks.map((task) =>
         task.id === editingTaskId
           ? { ...task, ...values }
           : task,
       ),
     );
     setEditingTaskId(null);
     return;
   }

   setTasks((currentTasks) => [
     {
       id: crypto.randomUUID(),
       completed: false,
       ...values,
     },
     ...currentTasks,
   ]);
  };

  const handleDelete = (id: string) => {
   setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
   if (editingTaskId === id) {
     setEditingTaskId(null);
   }
  };

  const handleToggle = (id: string) => {
   setTasks((currentTasks) =>
     currentTasks.map((task) =>
       task.id === id ? { ...task, completed: !task.completed } : task,
     ),
   );
  };

  return (
   <main className="min-h-screen bg-slate-200 p-6">
     <div className="mx-auto max-w-3xl space-y-6">
       <Header title="Student Task Manager" subtitle="Manage your daily tasks and assignments." />
       <TaskForm
         onSubmit={handleSubmit}
         initialTask={
           editingTask
             ? {
                 title: editingTask.title,
                 description: editingTask.description,
                 priority: editingTask.priority,
                 dueDate: editingTask.dueDate,
               }
             : null
         }
         onCancelEdit={editingTaskId ? () => setEditingTaskId(null) : undefined}
         submitLabel={editingTaskId ? "Save Changes" : "Add Task"}
       />
       <TaskStats tasks={tasks} />
       <TaskList
         tasks={tasks}
         onDelete={handleDelete}
         onEdit={(task) => setEditingTaskId(task.id)}
         onToggle={handleToggle}
       />
     </div>
   </main>
  );
}