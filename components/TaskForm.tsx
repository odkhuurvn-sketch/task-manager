"use client";

import { useEffect, useState, type FormEvent } from "react";

export type Priority = "low" | "medium" | "high";

export type TaskFormValues = {
 title: string;
 description: string;
 priority: Priority;
 dueDate: string;
};

type TaskFormProps = {
 onSubmit: (values: TaskFormValues) => void;
 initialTask?: TaskFormValues | null;
 submitLabel?: string;
 onCancelEdit?: () => void;
};

const emptyForm: TaskFormValues = {
 title: "",
 description: "",
 priority: "medium",
 dueDate: "",
};

export function TaskForm({
 onSubmit,
 initialTask,
 onCancelEdit,
 submitLabel = "Add Task",
}: TaskFormProps) {
 const [formValues, setFormValues] = useState<TaskFormValues>(emptyForm);

 useEffect(() => {
   setFormValues(initialTask ?? emptyForm);
 }, [initialTask]);

 const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
   event.preventDefault();
   const trimmedTitle = formValues.title.trim();

   if (!trimmedTitle) {
     return;
   }

   onSubmit({
     ...formValues,
     title: trimmedTitle,
     description: formValues.description.trim(),
   });

   if (!initialTask) {
     setFormValues(emptyForm);
   }
 };

 const updateField = <K extends keyof TaskFormValues>(field: K, value: TaskFormValues[K]) => {
   setFormValues((current) => ({ ...current, [field]: value }));
 };

 return (
   <form className="mb-6 space-y-4 rounded-xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200" onSubmit={handleSubmit}>
     <div className="space-y-2">
       <label htmlFor="title" className="block text-sm font-medium text-slate-700">
         Title
       </label>
       <input
         id="title"
         type="text"
         value={formValues.title}
         onChange={(event) => updateField("title", event.target.value)}
         placeholder="Enter a task title"
         className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
       />
     </div>

     <div className="space-y-2">
       <label htmlFor="description" className="block text-sm font-medium text-slate-700">
         Description
       </label>
       <textarea
         id="description"
         rows={3}
         value={formValues.description}
         onChange={(event) => updateField("description", event.target.value)}
         placeholder="Add task details"
         className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
       />
     </div>

     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
       <div className="space-y-2">
         <label htmlFor="priority" className="block text-sm font-medium text-slate-700">
           Priority
         </label>
         <select
           id="priority"
           value={formValues.priority}
           onChange={(event) => updateField("priority", event.target.value as Priority)}
           className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
         >
           <option value="low">Low</option>
           <option value="medium">Medium</option>
           <option value="high">High</option>
         </select>
       </div>

       <div className="space-y-2">
         <label htmlFor="dueDate" className="block text-sm font-medium text-slate-700">
           Due date
         </label>
         <input
           id="dueDate"
           type="date"
           value={formValues.dueDate}
           onChange={(event) => updateField("dueDate", event.target.value)}
           className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
         />
       </div>
     </div>

     <div className="flex flex-wrap items-center gap-3">
       <button
         type="submit"
         className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-500"
       >
         {submitLabel}
       </button>

       {onCancelEdit && (
         <button
           type="button"
           onClick={onCancelEdit}
           className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
         >
           Cancel
         </button>
       )}
     </div>
   </form>
 );
}