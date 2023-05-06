import React, { useState } from "react";

const Grid = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [time, setTime] = useState("10:00");

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { task, time }]);
      setTask("");
      setTime("9:00");
    }
  };

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
                  <div key={j} className="bg-gray-200 rounded-lg p-2 mt-2">
                    {task.task}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4 ml-6 mt-8">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
          className="border border-gray-400 rounded-lg p-2"
        />
        <select
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="border border-gray-400 rounded-lg p-2"
        >
          {times.map((t, i) => (
            <option key={i} value={t}>
              {t}
            </option>
          ))}
        </select>
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white rounded-lg p-2"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default Grid;
