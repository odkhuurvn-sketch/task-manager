import type { Task } from "@/components/TaskStats";

type TaskItemProps = {
 task: Task;
 onDelete: (id: string) => void;
 onEdit: (task: Task) => void;
 onToggle: (id: string) => void;
};

const priorityStyles = {
 low: "bg-emerald-100 text-emerald-800",
 medium: "bg-amber-100 text-amber-800",
 high: "bg-rose-100 text-rose-700",
};

export function TaskItem({ task, onDelete, onEdit, onToggle }: TaskItemProps) {
 const dueDateText = task.dueDate
   ? new Intl.DateTimeFormat("en-US", {
       month: "short",
       day: "numeric",
       year: "numeric",
     }).format(new Date(`${task.dueDate}T00:00:00`))
   : "No due date";

 return (
   <article
     className={`rounded-xl border bg-white p-4 shadow-sm transition ${
       task.completed ? "border-emerald-200 bg-emerald-50/60" : "border-slate-200"
     }`}
   >
     <div className="flex items-start gap-3">
       <input
         type="checkbox"
         checked={task.completed}
         onChange={() => onToggle(task.id)}
         className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
         aria-label={`Mark ${task.title} as complete`}
       />

       <div className="min-w-0 flex-1">
         <div className="flex flex-wrap items-center justify-between gap-2">
           <h3
             className={`font-medium text-slate-900 ${
               task.completed ? "text-slate-500 line-through" : ""
             }`}
           >
             {task.title}
           </h3>
           <span className={`rounded-full px-2 py-1 text-[11px] font-medium capitalize ${priorityStyles[task.priority]}`}>
             {task.priority}
           </span>
         </div>

         {task.description ? (
           <p className={`mt-1 text-sm ${task.completed ? "text-slate-400" : "text-slate-600"}`}>
             {task.description}
           </p>
         ) : null}

         <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-500">
           <span>Due: {dueDateText}</span>
         </div>
       </div>
     </div>

     <div className="mt-4 flex gap-2">
       <button
         type="button"
         onClick={() => onEdit(task)}
         className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-100"
       >
         Edit
       </button>
       <button
         type="button"
         onClick={() => onDelete(task.id)}
         className="rounded-md border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition hover:bg-red-100"
       >
         Delete
       </button>
     </div>
   </article>
 );
}