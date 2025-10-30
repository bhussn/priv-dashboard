import React, { useState, useEffect } from "react";
import { events as placeholderEvents } from "../data/events";

export default function DataAccess() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // For demo, let's take a subset of events as "data access requests"
    setRequests(placeholderEvents.slice(0, 5));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Data Access Requests</h1>
      <ul className="space-y-2">
        {requests.map((req) => (
          <li key={req.id} className="bg-white p-4 shadow rounded">
            <p className="font-semibold">Request by {req.user}</p>
            <p className="text-gray-600">
              Event: {req.type} <br />
              Timestamp: {req.timestamp} <br />
              Status: {req.status}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
