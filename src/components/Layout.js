import { useState } from "react";
import Sidebar from "./Sidebar";
import { Menu, X } from "lucide-react";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">

        {/* toggle */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="md:hidden absolute top-4 left-4 z-20 p-2 bg-white rounded-md shadow"
      >
        <Menu className="w-6 h-6 text-gray-700" />
      </button>

      {/* sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white shadow-lg transition-transform duration-300 md:static md:translate-x-0 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close x */}
        <div className="flex justify-end md:hidden p-4">
          <button onClick={() => setSidebarOpen(false)}>
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>
        <Sidebar />
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="flex-1 bg-gray-50 p-6">{children}</main>
    </div>
  );
}
