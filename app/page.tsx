export default function Home() {
  return (
    <main className="min-h-screen bg-slate-200 p-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-900">
          Student Task Manager
        </h1>

        <p className="mt-2 text-slate-600">
          Manage your daily tasks and assignments.
        </p>
      <form className="space-y-4 mb-6">
        <label htmlFor="title" className="text-slate-900">Title</label>
<input id="title" type="text" placeholder="..." className="bg-white text-slate-900 w-full border border-slate-900 rounded-md px-3 py-2 text-sm" />

<label htmlFor="description" className="text-slate-900">Description</label>
<textarea id="description" rows={3} placeholder="..." className="text-slate-900 w-full border border-slate-900 rounded-md px-3 py-2 text-sm bg-white" />

<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
  <div>
    <label htmlFor="priority" className="text-slate-900">Priority : </label>
      <select id="priority" className="text-slate-900 border border-slate-900 rounded-md bg-white ">
        <option value="low">Low</option>
<option value="medium">Medium</option>
<option value="high">High</option>
      </select>
  </div>
  <div>
      <label htmlFor="dueDate" className="text-slate-900">Due date: </label>
      <input id="dueDate" type="date" className="text-slate-900" />
    </div>
</div>
  <button type="submit" className="text-slate-900 bg-white px-4 py-2 rounded-md ">Add Task</button>

      </form>
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 ">
        <div className="bg-white rounded-lg p-4 shadow-sm">
  <p className="text-sm text-slate-500">Total</p>
  <p className="text-2xl font-bold text-slate-900">3</p>
</div>
<div className="bg-white rounded-lg p-4 shadow-sm">
  <p className="text-sm text-slate-500">Active</p>
  <p className="text-2xl font-bold text-slate-900">2</p>
</div>
<div className="bg-white rounded-lg p-4 shadow-sm">
  <p className="text-sm text-slate-500">Completed</p>
  <p className="text-2xl font-bold text-slate-900">1</p>
</div>
<div className="bg-white rounded-lg p-4 shadow-sm">
  <p className="text-sm text-slate-500">Completion %</p>
  <p className="text-2xl font-bold text-slate-900">10</p>
</div>
      </section>

      <section className="space-y-3">
  <h2 className="text-lg font-semibold text-slate-900">Tasks</h2>

  <article className="bg-white rounded-lg p-4 shadow-sm text-slate-900">

    <h3 className="font-medium text-slate-900">Даалгавар</h3>
<p className="mt-1 text-sm text-slate-600">Complete the useState and useEffect exercises.</p>
<div className="mt-2 flex gap-2 text-xs">
  <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full font-medium">Medium</span>
  <span className="text-slate-500">Due: 2026-08-10</span>
</div>
<div className="mt-2 flex gap-2">
  <button className="text-xs border border-slate-300 rounded-md px-3 py-1">Edit</button>
  <button className="text-xs border border-red-200 text-red-600 rounded-md px-3 py-1">Delete</button>
</div>
    
  </article>

  <article className="bg-white rounded-lg p-4 shadow-sm text-slate-900 ">

   <h3 className="font-medium text-slate-900">Gym</h3>
<p className="mt-1 text-sm text-slate-600">Явсан</p>
<div className="mt-2 flex gap-2 text-xs">
  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">Low</span>
  <span className="text-slate-500">Due: 2026-08-11</span>
</div>
<div className="mt-2 flex gap-2">
  <button className="text-xs border border-slate-300 rounded-md px-3 py-1">Edit</button>
  <button className="text-xs border border-red-200 text-red-600 rounded-md px-3 py-1">Delete</button>
</div>

  </article>
   <article className="bg-white rounded-lg p-4 shadow-sm text-slate-900 ">

   <h3 className="font-medium text-slate-900">Гэрээ цэвэрлэх</h3>
<p className="mt-1 text-sm text-slate-600">Complete</p>
<div className="mt-2 flex gap-2 text-xs">
  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full font-medium">High</span>
  <span className="text-slate-500">Due: 2026-08-13</span>
</div>
<div className="mt-2 flex gap-2">
  <button className="text-xs border border-slate-300 rounded-md px-3 py-1">Edit</button>
  <button className="text-xs border border-red-200 text-red-600 rounded-md px-3 py-1">Delete</button>
</div>

  </article>

</section>

      </div>
    </main>
  );
}