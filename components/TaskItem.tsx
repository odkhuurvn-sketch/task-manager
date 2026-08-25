import type { Task } from "@/types/task";

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
      className={`bg-white rounded-lg p-4 shadow-sm text-slate-900 ${
        completed ? "opacity-60" : ""
      }`}
    >
      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
          className="mt-1"
        />
        <div className="flex-1">
          <h3 className={`font-medium text-slate-900 ${completed ? "line-through" : ""}`}>
            {title}
          </h3>
          <p className={`mt-1 text-sm text-slate-600 ${completed ? "line-through" : ""}`}>
            {description}
          </p>
        </div>
      </div>
      <div className="mt-2 flex gap-2 text-xs">
        <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full font-medium">{priority}</span>
        <span className="text-slate-500">Due: {dueDate}</span>
      </div>
      <div className="mt-2 flex gap-2">
        <button
  onClick={() => onEdit(id)}
  className="text-xs border border-slate-300 rounded-md px-3 py-1"
>
  Edit
</button>
        <button
          onClick={handleDelete}
          className="text-xs border border-red-200 text-red-600 rounded-md px-3 py-1"
        >
          Delete
        </button>
      </div>
    </article>
  );
}
