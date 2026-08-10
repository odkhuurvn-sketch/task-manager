import { Header } from "@/components/Header";
import { TaskForm } from "@/components/TaskForm";
import { TaskStats } from "@/components/TaskStats";
import { TaskList } from "@/components/TaskList";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-200 p-6">
      <div className="mx-auto max-w-3xl">
        <Header title="Student Task Manager" subtitle="Manage your daily tasks and assignments." />
      <TaskForm />
      <TaskStats />
      <TaskList />
      </div>
    </main>
  );
}