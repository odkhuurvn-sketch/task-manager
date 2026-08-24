import { TaskItem } from "@/components/TaskItem";
import type { Task } from "@/components/TaskStats";

type TaskListProps = {
  tasks: Task[];
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
  onToggle: (id: string) => void;
};

export function TaskList({ tasks, onDelete, onEdit, onToggle }: TaskListProps) {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">Tasks</h2>
        <span className="rounded-full bg-slate-200 px-2.5 py-1 text-xs font-medium text-slate-600">
          {tasks.length} total
        </span>
      </div>

      {tasks.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500 shadow-sm">
          No tasks yet. Add your first task above.
        </div>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onEdit={onEdit}
            onToggle={onToggle}
          />
        ))
      )}
    </section>
  );
}