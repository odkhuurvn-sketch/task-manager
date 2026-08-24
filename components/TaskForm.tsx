"use client";

import { useState, type FormEvent } from "react";
export function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("low");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState("");

  return (
    <form className="space-y-4 mb-6">
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
  <button type="submit" className="text-slate-900 bg-white px-4 py-2 rounded-md ">Add Task</button>

      </form>
  );
}