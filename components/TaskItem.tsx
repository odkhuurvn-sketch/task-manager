import type { Task } from "@/types/task";
const priorityClasses: Record<"low" | "medium" | "high", string> = {
 low: "bg-sky-300 text-sky-900",
  medium: "bg-[#6ee7b7] text-[#1e2138]",
  high: "bg-rose-400 text-[#4a1b0c]",
};


type TaskItemProps = {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
};

export function TaskItem({ task, onToggle, onDelete, onEdit }: TaskItemProps) {
  const { id, title, description, priority, dueDate, completed } = task;

  function handleDelete() {
    const confirmed = window.confirm(`Delete "${title}"?`);
    if (confirmed) {
      onDelete(id);
    }
  }
  
  return (
    <article
      className={`bg-[#2a2e4a] rounded-lg p-4 shadow-sm text-white ${
        completed ? "opacity-60" : ""
      }`}
    >
      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
          className="mt-1 accent-[#6ee7b7]"
        />
        <div className="flex-1">
          <h3 className={`font-medium text-white ${completed ? "line-through" : ""}`}>
            {title}
          </h3>
          <p className={`mt-1 text-sm text-slate-300 ${completed ? "line-through" : ""}`}>
            {description}
          </p>
        </div>
      </div>
      <div className="mt-2 flex gap-2 text-xs">
        <span className={`px-2 py-1 rounded-full font-medium ${priorityClasses[priority]}`}>
  {priority}
</span>
        <span className="text-slate-400">Due: {dueDate}</span>
      </div>
      <div className="mt-2 flex gap-2">
        <button
  onClick={() => onEdit(id)}
  className="text-xs border border-[#3f4468] text-white rounded-md px-3 py-1"
>
  Edit
</button>
        <button
          onClick={handleDelete}
          className="text-xs border border-rose-400 text-rose-400 rounded-md px-3 py-1"
        >
          Delete
        </button>
      </div>
    </article>
  );
}