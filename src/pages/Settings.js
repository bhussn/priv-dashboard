import React from "react";

export default function Settings() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Settings</h1>
      <div className="bg-white p-4 shadow rounded space-y-4">
        <div>
          <label className="block font-medium mb-1">Enable Two-Factor Authentication</label>
          <input type="checkbox" className="mr-2" /> Active
        </div>
        <div>
          <label className="block font-medium mb-1">Data Sharing Preferences</label>
          <select className="border border-gray-300 rounded p-2 w-full">
            <option>Share anonymized data</option>
            <option>Do not share</option>
          </select>
        </div>
      </div>
    </div>
  );
}
