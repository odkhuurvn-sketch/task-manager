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
      <div className="bg-[#2a2e4a] rounded-lg p-4 shadow-sm">
        <p className="text-sm text-slate-400">Total</p>
        <p className="text-2xl font-bold text-white">{totalTasks}</p>
      </div>
      <div className="bg-[#2a2e4a] rounded-lg p-4 shadow-sm">
        <p className="text-sm text-slate-400">Active</p>
        <p className="text-2xl font-bold text-white">{activeTasks}</p>
      </div>
      <div className="bg-[#2a2e4a] rounded-lg p-4 shadow-sm">
        <p className="text-sm text-slate-400">Completed</p>
        <p className="text-2xl font-bold text-white">{completedTasks}</p>
      </div>
      <div className="bg-[#2a2e4a] rounded-lg p-4 shadow-sm">
        <p className="text-sm text-slate-400">Completion %</p>
        <p className="text-2xl font-bold text-[#6ee7b7]">{completionPercentage}</p>
      </div>
    </section>
  );
}