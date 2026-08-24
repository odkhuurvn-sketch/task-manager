export type Task = {
  id: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  dueDate: string;
  completed: boolean;
};

type TaskStatsProps = {
  tasks: Task[];
};

export function TaskStats({ tasks }: TaskStatsProps) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const activeTasks = totalTasks - completedTasks;
  const completionRate = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  return (
    <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <p className="text-sm text-slate-500">Total</p>
        <p className="text-2xl font-bold text-slate-900">{totalTasks}</p>
      </div>
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <p className="text-sm text-slate-500">Active</p>
        <p className="text-2xl font-bold text-slate-900">{activeTasks}</p>
      </div>
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <p className="text-sm text-slate-500">Completed</p>
        <p className="text-2xl font-bold text-slate-900">{completedTasks}</p>
      </div>
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <p className="text-sm text-slate-500">Completion %</p>
        <p className="text-2xl font-bold text-slate-900">{completionRate}%</p>
      </div>
    </section>
  );
}