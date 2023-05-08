import { Transition } from "@headlessui/react";

export default function Notification({ notifications, openNotifications }) {
  return (
    <>
      <Transition appear show={notifications}>
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
                <div className="w-[35rem] text-gray-800 h-[14rem] bg-gray-200 p-4 transform overflow-hidden rounded flex flex-col shadow-xl transition-all">
                  <div className="flex w-full justify-between">
                    {" "}
                    <p>Upcoming tasks</p>
                    <button onClick={() => openNotifications(false)}>x</button>
                  </div>
                  <div className="w-full flex justify-center items-center h-full">
                    <p>No Upcoming tasks</p>
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
