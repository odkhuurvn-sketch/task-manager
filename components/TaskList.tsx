import { TaskItem } from "@/components/TaskItem";

export function TaskList() {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold text-slate-900">Tasks</h2>

      <TaskItem
        title="Даалгавар"
        description="Complete the useState and useEffect exercises."
        priority="medium"
        dueDate="2026-08-10"
      />

      <TaskItem
        title="Gym"
        description="Явсан"
        priority="low"
        dueDate="2026-08-11"
      />

      <TaskItem
        title="Гэрээ цэвэрлэх"
        description="Complete"
        priority="high"
        dueDate="2026-08-13"
      />
    </section>
  );
}