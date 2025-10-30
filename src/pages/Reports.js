import React from "react";
import { events as placeholderEvents } from "../data/events";

export default function Reports() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Privacy Reports</h1>
      <ul className="space-y-4">
        {placeholderEvents.map((r) => (
          <li key={r.id} className="bg-white p-4 shadow rounded">
            <div className="flex justify-between items-center mb-2">
              <p className="font-semibold">{r.type}</p>
              <span className={`text-sm px-2 py-1 rounded ${
                r.status === "Success" ? "bg-green-100 text-green-700" :
                r.status === "Failed" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"
              }`}>
                {r.status}
              </span>
            </div>
            <p className="text-sm text-gray-500">{r.user} • {r.timestamp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
