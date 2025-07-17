import Sidebar from "./components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="h-full pb-3 w-64 bg-gray-100 dark:bg-gray-900 border-r border-gray-600 dark:border-gray-400">
        <Sidebar />
      </aside>

      {/* Main content area */}
      <main className="h-full flex-1 bg-white dark:bg-gray-800">
        {children}
      </main>
    </div>
  );
}
