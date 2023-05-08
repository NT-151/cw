import React, { useState } from "react";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import Calendar from "@/components/calendar";

const Dashboard = () => {
  const [activity, setActivity] = useState(false);
  const [taskManager, openTaskManager] = useState(false);
  const [trash, openTrash] = useState(false);
  const [notifications, openNotifications] = useState(false);
  const [settings, openSettings] = useState(false);

  return (
    <div className="w-full overflow-hidden bg-white">
      <Navbar
        openNotifications={openNotifications}
        openSettings={openSettings}
      />
      <div className="flex flex-row">
        <Sidebar
          setActivity={setActivity}
          openTaskManager={openTaskManager}
          openTrash={openTrash}
        />
        <Calendar
          setActivity={setActivity}
          activity={activity}
          openTaskManager={openTaskManager}
          taskManager={taskManager}
          trash={trash}
          openTrash={openTrash}
          settings={settings}
          notifications={notifications}
          openNotifications={openNotifications}
          openSettings={openSettings}
        />
      </div>
    </div>
  );
};

export default Dashboard;
