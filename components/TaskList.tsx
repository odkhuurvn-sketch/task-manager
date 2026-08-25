import { TaskItem } from "@/components/TaskItem";
import type { Task } from "@/types/task";

type TaskListProps = {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
};

export function TaskList({ tasks, onToggle, onDelete, onEdit }: TaskListProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold text-slate-900">Tasks</h2>

{tasks.length === 0 && (
  <p className="text-slate-500 text-sm bg-white rounded-lg p-4 shadow-sm">
    No matching tasks. Try adjusting your search or filters.
  </p>
)}

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </section>
  );
}