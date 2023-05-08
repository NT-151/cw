import React, { useState } from "react";
import ActivityModal from "./modals/inputActiviy";
import TaskManager from "./modals/tasksManager";
import Trash from "./modals/trash";
import Notification from "./modals/notifications";
import Settings from "./modals/settings";

const Grid = ({
  activity,
  setActivity,
  openTaskManager,
  taskManager,
  openTrash,
  trash,
  notifications,
  openNotifications,
  settings,
  openSettings,
}) => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [time, setTime] = useState("10:00");
  const [taskDescription, setTaskdescription] = useState("");

  // generate an array of times from 9am to 6pm
  const times = Array.from({ length: 10 }, (_, i) => `${i + 9}:00`);

  return (
    <div className="flex flex-row h-full w-full">
      <div className="flex flex-col gap-10 ml-6 mt-8 w-full">
        {times.map((t, i) => (
          <div className="w-full" key={t}>
            <div className="flex flex-row items-center gap-3">
              <p className="text-gray-500">{t}</p>
              <hr className="w-full" />
            </div>
            <div>
              {tasks
                .filter((task) => task.time === t)
                .map((task, j) => (
                  <div
                    key={j}
                    className="bg-gray-200 w-1/3 rounded-lg p-2 mt-2"
                  >
                    <p className="text-xl">{task.task}</p>
                    <p className="text-sm">{task.taskDescription}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
      <ActivityModal
        activity={activity}
        setActivity={setActivity}
        times={times}
        task={task}
        time={time}
        tasks={tasks}
        setTasks={setTasks}
        setTask={setTask}
        setTime={setTime}
        taskDescription={taskDescription}
        setTaskdescription={setTaskdescription}
      />
      <TaskManager
        openTaskManager={openTaskManager}
        taskManager={taskManager}
      />
      <Trash trash={trash} openTrash={openTrash} />
      <Notification
        notifications={notifications}
        openNotifications={openNotifications}
      />
      <Settings settings={settings} openSettings={openSettings} />
    </div>
  );
};

export default Grid;
