import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import DataAccess from "./pages/DataAccess";
import Settings from "./pages/Settings";
import Reports from "./pages/Reports";

function App() {
  const [selectedPage, setSelectedPage] = useState("dashboard");

  const renderPage = () => {
    switch (selectedPage) {
      case "dashboard":
        return <Dashboard />;
      case "dataAccess":
        return <DataAccess />;
      case "settings":
        return <Settings />;
      case "reports":
        return <Reports />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className="flex-1">{renderPage()}</div>
    </div>
  );
}

export default App;

