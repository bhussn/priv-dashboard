import React from "react";

export default function Sidebar({ selectedPage, setSelectedPage }) {
  const menuItems = [
    { name: "Dashboard", key: "dashboard" },
    { name: "Data Access", key: "dataAccess" },
    { name: "Settings", key: "settings" },
    { name: "Reports", key: "reports" },
  ];

  return (
    <aside className="w-64 bg-white shadow-md p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Privacy Panel</h2>
      <nav className="space-y-4">
        {menuItems.map((item) => (
          <button
            key={item.key}
            className={`block w-full text-left px-2 py-1 rounded ${
              selectedPage === item.key
                ? "bg-blue-100 text-blue-700 font-semibold"
                : "text-gray-700 hover:text-blue-600"
            }`}
            onClick={() => setSelectedPage(item.key)}
          >
            {item.name}
          </button>
        ))}
      </nav>
    </aside>
  );
}
