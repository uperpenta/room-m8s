import { SharedBox } from "../_components/dashboard/SharedBox";

export default async function Dashboard() {
  return (
    <div className="flex flex-1">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 border-r">
        <SharedBox />
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-6">
        <h1 className="text-xl font-bold">plm</h1>
      </main>
    </div>
  );
}
