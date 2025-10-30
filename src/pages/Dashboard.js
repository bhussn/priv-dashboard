import React, { useState, useEffect } from "react";
import { events as placeholderEvents } from "../data/events";

export default function Dashboard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(placeholderEvents);
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {["ID", "User", "Type", "Timestamp", "Status"].map((h) => (
                <th key={h} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {events.map((e) => (
              <tr key={e.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{e.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{e.user}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{e.type}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{e.timestamp}</td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm font-semibold ${
                  e.status === "Success" ? "text-green-600" :
                  e.status === "Failed" ? "text-red-600" : "text-yellow-600"
                }`}>
                  {e.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
