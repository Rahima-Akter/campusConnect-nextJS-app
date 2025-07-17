import Sidebar from "./components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 dark:bg-gray-900 border-r border-gray-300 dark:border-gray-700 flex-shrink-0">
        <div className="h-full overflow-hidden">
          <Sidebar />
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto bg-white dark:bg-gray-800 p-4">
        {children}
      </main>
    </div>
  );
}
