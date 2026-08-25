type TaskStatsProps = {
  totalTasks: number;
  activeTasks: number;
  completedTasks: number;
  completionPercentage: number;
};

export function TaskStats({
  totalTasks,
  activeTasks,
  completedTasks,
  completionPercentage,
}: TaskStatsProps) {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 ">
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <p className="text-sm text-slate-500">Total</p>
        <p className="text-2xl font-bold text-slate-900">{totalTasks}</p>
      </div>
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <p className="text-sm text-slate-500">Active</p>
        <p className="text-2xl font-bold text-slate-900">{activeTasks}</p>
      </div>
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <p className="text-sm text-slate-500">Completed</p>
        <p className="text-2xl font-bold text-slate-900">{completedTasks}</p>
      </div>
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <p className="text-sm text-slate-500">Completion %</p>
        <p className="text-2xl font-bold text-slate-900">{completionPercentage}</p>
      </div>
    </section>
  );
}