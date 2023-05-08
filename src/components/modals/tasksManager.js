import { Transition } from "@headlessui/react";

export default function TaskManager({ taskManager, openTaskManager }) {
  return (
    <>
      <Transition appear show={taskManager}>
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
                <div className="w-[50rem] text-gray-800 transform overflow-hidden rounded bg-white flex flex-row shadow-xl transition-all">
                  <div className="w-1/5 gap-24 p-4 flex flex-col justify-start">
                    <p className="text-sm w-max">Todays Tasks</p>
                    <p className="text-sm w-max">This weeks tasks</p>
                    <p className="text-sm w-max">Future tasks</p>
                    <p className="text-sm w-max">Completed</p>
                    <p className="text-sm w-max"> Overdue</p>
                  </div>
                  <div className="p-4 w-4/5 bg-gray-200 flex justify-between flex-row">
                    <div>
                      {" "}
                      <p>No Tasks</p>
                    </div>

                    <div>
                      <button onClick={() => openTaskManager(false)}> x</button>
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
