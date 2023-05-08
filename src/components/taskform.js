import React, { useState } from "react";

export const TaskForm = ({ onSubmit }) => {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("9:00");

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ task, time });
    setTask("");
  };

  // generate an array of times from 9am to 6pm
  const times = Array.from({ length: 10 }, (_, i) => `${i + 9}:00`);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center mb-2">
        <label htmlFor="task" className="mr-2">
          Task:
        </label>
        <input
          type="text"
          id="task"
          value={task}
          onChange={handleTaskChange}
          className="border border-gray-400 p-1"
        />
      </div>
      <div className="flex items-center">
        <label htmlFor="time" className="mr-2">
          Time:
        </label>
        <select
          id="time"
          value={time}
          onChange={handleTimeChange}
          className="border border-gray-400 p-1"
        >
          {times.map((t, i) => (
            <option key={i} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="mt-2 bg-blue-500 text-white p-2">
        Add Task
      </button>
    </form>
  );
};

export const TaskList = ({ tasks }) => {
  return (
    <div className="mt-4">
      {tasks.map((task, i) => (
        <div key={i} className="border border-gray-400 p-2 mb-2">
          <div className="font-bold">{task.task}</div>
          <div>{task.time}</div>
        </div>
      ))}
    </div>
  );
};
