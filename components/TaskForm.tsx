"use client";

import { useState, type FormEvent } from "react";
import type { Task } from "@/types/task";

type TaskFormProps = {
  onAddTask: (task: Task) => void;
  onUpdateTask: (task: Task) => void;
  editingTask: Task | null;
  onCancelEdit: () => void;
};

export function TaskForm({
  onAddTask,
  onUpdateTask,
  editingTask,
  onCancelEdit,
}: TaskFormProps) {
  const [title, setTitle] = useState(editingTask?.title ?? "");
  const [description, setDescription] = useState(editingTask?.description ?? "");
  const [priority, setPriority] = useState<"low" | "medium" | "high">(
    editingTask?.priority ?? "low"
  );
  const [dueDate, setDueDate] = useState(editingTask?.dueDate ?? "");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title.trim()) {
      setError("Task title is required.");
      return;
    }

    if (editingTask) {
      onUpdateTask({
        ...editingTask,
        title: title.trim(),
        description: description.trim(),
        priority,
        dueDate,
      });
    } else {
      onAddTask({
        id: crypto.randomUUID(),
        title: title.trim(),
        description: description.trim(),
        priority,
        dueDate,
        completed: false,
        createdAt: new Date().toISOString(),
      });
    }

    setTitle("");
    setDescription("");
    setPriority("low");
    setDueDate("");
    setError("");
  }

  function handleCancel() {
    onCancelEdit();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <label htmlFor="title" className="text-slate-900">Title</label>
      <input
        id="title"
        type="text"
        placeholder="..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="bg-white text-slate-900 w-full border border-slate-900 rounded-md px-3 py-2 text-sm"
      />
      <label htmlFor="description" className="text-slate-900">Description</label>
      <textarea
        id="description"
        rows={3}
        placeholder="..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="text-slate-900 w-full border border-slate-900 rounded-md px-3 py-2 text-sm bg-white"
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
        <div>
          <label htmlFor="priority" className="text-slate-900">Priority : </label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value as "low" | "medium" | "high")}
            className="text-slate-900 border border-slate-900 rounded-md bg-white"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div>
          <label htmlFor="dueDate" className="text-slate-900">Due date: </label>
          <input
            id="dueDate"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="text-slate-900"
          />
        </div>
      </div>
      <div className="flex gap-2">
        <button type="submit" className="text-slate-900 bg-white px-4 py-2 rounded-md border border-slate-300">
          {editingTask ? "Save Changes" : "Add Task"}
        </button>
        {editingTask && (
          <button
            type="button"
            onClick={handleCancel}
            className="text-slate-900 bg-slate-100 px-4 py-2 rounded-md border border-slate-300"
          >
            Cancel Edit
          </button>
        )}
      </div>
    </form>
  );
}