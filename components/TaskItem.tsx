type TaskItemProps = {
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  dueDate: string;
};

export function TaskItem({ title, description, priority, dueDate }: TaskItemProps) {
  return (
    <article className="bg-white rounded-lg p-4 shadow-sm text-slate-900">

    <h3 className="font-medium text-slate-900">{title}</h3>
<p className="mt-1 text-sm text-slate-600">{description}</p>
<div className="mt-2 flex gap-2 text-xs">
  <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full font-medium">{priority}</span>
  <span className="text-slate-500">Due: {dueDate}</span>
</div>
<div className="mt-2 flex gap-2">
  <button className="text-xs border border-slate-300 rounded-md px-3 py-1">Edit</button>
  <button className="text-xs border border-red-200 text-red-600 rounded-md px-3 py-1">Delete</button>
</div>
    
  </article>
  );
}