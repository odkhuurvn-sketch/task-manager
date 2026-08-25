import { TaskItem } from "@/components/TaskItem";
import type { Task } from "@/types/task";

type TaskListProps = {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold text-slate-900">Tasks</h2>

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </section>
  );
}