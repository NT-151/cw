import { Transition } from "@headlessui/react";

export default function ActivityModal({
  setTask,
  setTasks,
  setTime,
  times,
  task,
  time,
  setActivity,
  activity,
  setTaskdescription,
  tasks,
  taskDescription,
}) {
  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { task, time, taskDescription }]);
      setTask("");
      setTime("9:00");
      setTaskdescription("");
    }
  };

  return (
    <>
      <Transition appear show={activity}>
        <div className="relative z-10">
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="flex text-gray-800 gap-12 transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div>
                    <div className="flex items-center justify-center flex-col gap-4 z-50">
                      <div className="w-full">
                        <p className="text-sm">Task Name:</p>
                        <input
                          type="text"
                          value={task}
                          onChange={(e) => setTask(e.target.value)}
                          placeholder="Enter task"
                          className="border border-gray-400 rounded-lg p-1 text-sm bg-gray-50"
                        />
                      </div>
                      <div className="w-full">
                        <p className="text-sm">Task Description:</p>
                        <textarea
                          rows={4}
                          type="text"
                          value={taskDescription}
                          onChange={(e) => setTaskdescription(e.target.value)}
                          placeholder="Task description"
                          className="border border-gray-400 rounded-lg p-1 w-full text-sm bg-gray-50"
                        />
                      </div>
                      <div className="w-full">
                        <p className="text-sm"> Due date:</p>
                        <input
                          type="text"
                          placeholder="Enter Date"
                          className="border border-gray-400 rounded-lg p-1 text-sm bg-gray-50"
                        />
                      </div>
                      <div className="w-full flex flex-row gap-6">
                        <div>
                          <p className="text-sm">Start Time:</p>
                          <select
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="border border-gray-400 rounded-lg  text-sm p-1 w-full bg-gray-50"
                          >
                            {times.map((t, i) => (
                              <option key={i} value={t}>
                                {t}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <p className="text-sm">End Time:</p>
                          <select className="border border-gray-400 rounded-lg  text-sm p-1 w-full bg-gray-50">
                            <option>17:00</option>
                          </select>
                        </div>
                      </div>
                      <div className="w-full flex-col flex gap-1">
                        <p className="text-sm">Recieve notification:</p>
                        <div className="flex flex-row gap-8">
                          <div className="flex flex-row items-center gap-1">
                            <p className="text-sm">Yes</p>
                            <input
                              type="checkbox"
                              className="border border-gray-400 rounded-lg p-1 text-sm bg-gray-50"
                            />
                          </div>
                          <div className="flex flex-row items-center gap-1">
                            <p className="text-sm">No</p>
                            <input type="checkbox" />
                          </div>
                        </div>
                        <div className="flex flex-row gap-2">
                          <div className="flex flex-row items-center gap-1">
                            <p className="text-sm">Minutes</p>
                            <input
                              type="checkbox"
                              className="border border-gray-400 rounded-lg p-1 text-sm bg-gray-50"
                            />
                          </div>
                          <div className="flex flex-row items-center gap-1">
                            <p className="text-sm">3 hours</p>
                            <input type="checkbox" />
                          </div>
                          <div className="flex flex-row items-center gap-1">
                            <p className="text-sm">6 hours</p>
                            <input type="checkbox" />
                          </div>
                          <div className="flex flex-row items-center gap-1">
                            <p className="text-sm">1 day</p>
                            <input type="checkbox" />
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex-col flex gap-1">
                        <p className="text-sm">Repeat notification:</p>
                        <div className="flex flex-row gap-8">
                          <div className="flex flex-row items-center gap-1">
                            <p className="text-sm">Yes</p>
                            <input
                              type="checkbox"
                              className="border border-gray-400 rounded-lg p-1 text-sm bg-gray-50"
                            />
                          </div>
                          <div className="flex flex-row items-center gap-1">
                            <p className="text-sm">No</p>
                            <input type="checkbox" />
                          </div>
                        </div>
                        <div className="flex flex-row gap-2">
                          <div className="flex flex-row items-center gap-1">
                            <p className="text-sm">Minutes</p>
                            <input
                              type="checkbox"
                              className="border border-gray-400 rounded-lg p-1 text-sm bg-gray-50"
                            />
                          </div>
                          <div className="flex flex-row items-center gap-1">
                            <p className="text-sm">3 hours</p>
                            <input type="checkbox" />
                          </div>
                          <div className="flex flex-row items-center gap-1">
                            <p className="text-sm">6 hours</p>
                            <input type="checkbox" />
                          </div>
                          <div className="flex flex-row items-center gap-1">
                            <p className="text-sm">1 day</p>
                            <input type="checkbox" />
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex justify-between mt-2">
                        <button
                          onClick={handleAddTask}
                          className="text-gray-800 rounded-lg p-2 text-md"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      {" "}
                      <div className="flex flex-col w-full">
                        <div className="flex flex-none">
                          <p className="text-sm">Priority Level:</p>
                        </div>
                        <div className="flex flex-row gap-4">
                          <div className="flex flex-row gap-1">
                            <p className="text-sm">Urgent</p>
                            <input type="checkbox" />
                          </div>
                          <div className="flex flex-row gap-1">
                            <p className="text-sm">High</p>
                            <input type="checkbox" />
                          </div>
                          <div className="flex flex-row gap-1">
                            <p className="text-sm">Medium</p>
                            <input type="checkbox" />
                          </div>
                          <div className="flex flex-row gap-1">
                            <p className="text-sm">Low</p>
                            <input type="checkbox" />
                          </div>
                        </div>
                        <div className="flex flex-none mt-6">
                          <p className="text-sm">Send task to email:</p>
                        </div>
                        <div className="flex flex-row gap-4">
                          <div className="flex flex-row gap-1">
                            <p className="text-sm">Yes</p>
                            <input type="checkbox" />
                          </div>
                          <div className="flex flex-row gap-1">
                            <p className="text-sm">No</p>
                            <input type="checkbox" />
                          </div>
                        </div>
                        <div className="flex flex-none mt-6">
                          <p className="text-sm">Email:</p>
                        </div>
                        <div className="flex flex-row gap-4">
                          <div className="flex flex-row gap-1">
                            <input
                              type="text"
                              placeholder="Enter email address"
                              className="border bg-gray-50 rounded border-gray-400 text-sm p-1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button
                        onClick={() => setActivity(false)}
                        className="text-gray-800 rounded-lg p-2 text-md"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
}
