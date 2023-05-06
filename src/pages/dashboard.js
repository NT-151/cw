import React from "react";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import Calendar from "@/components/calendar";

const Dashboard = () => {
  return (
    <div className="w-full h-screen overflow-hidden bg-white">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <Calendar />
      </div>
    </div>
  );
};

export default Dashboard;
