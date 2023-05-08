import { Transition } from "@headlessui/react";

export default function Settings({ settings, openSettings }) {
  return (
    <>
      <Transition appear show={settings}>
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
                <div className="w-[55rem] h-[26rem] text-gray-800 transform overflow-hidden rounded flex flex-row shadow-xl transition-all">
                  <div className="p-4 w-full bg-gray-200 flex flex-col">
                    <div className="flex flex-row justify-between w-full">
                      <p
                        className="cursor-pointer"
                        onClick={() => openSettings(false)}
                      >
                        x
                      </p>
                    </div>
                    <div className="flex flex-col mt-2 w-full">
                      <div className="flex flex-none">
                        <p>Notification settings</p>
                      </div>
                      <div className="flex flex-row gap-4">
                        <div className="flex flex-row gap-1">
                          <p>On</p>
                          <input type="checkbox" />
                        </div>
                        <div className="flex flex-row gap-1">
                          <p>Off</p>
                          <input type="checkbox" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col mt-2 w-full">
                      <div className="flex flex-none">
                        <p>Notify me when:</p>
                      </div>
                      <div className="flex flex-row gap-4">
                        <div className="flex flex-row gap-1">
                          <p>Task Overdue</p>
                          <input type="checkbox" />
                        </div>
                        <div className="flex flex-row gap-1">
                          <p>Task Completed</p>
                          <input type="checkbox" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col mt-2 w-full">
                      <div className="flex flex-none">
                        <p>Trash Settings:</p>
                      </div>
                      <div className="flex flex-none">
                        <p>Auto delete completed tasks ater 30 days:</p>
                      </div>
                      <div className="flex flex-row gap-4">
                        <div className="flex flex-row gap-1">
                          <p>Yes</p>
                          <input type="checkbox" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col mt-2 w-full">
                      <div className="flex flex-none">
                        <p>Account Settings:</p>
                      </div>

                      <div className="flex flex-row gap-4 mb-4">
                        {" "}
                        <p>Change email:</p>
                        <input type="text" className="bg-white" />
                      </div>

                      <div className="flex flex-row gap-4">
                        {" "}
                        <p>Change password:</p>
                        <input type="text" className="bg-white" />
                      </div>
                    </div>
                    <div className="flex flex-col mt-4 w-full">
                      <div className="flex flex-none">
                        <p>Calendar view (default view is daily)</p>
                      </div>
                      <div className="flex flex-row gap-4 mt-1">
                        <div className="flex flex-row gap-1">
                          <p>Daily</p>
                          <input type="checkbox" />
                        </div>
                        <div className="flex flex-row gap-1">
                          <p>Weekly</p>
                          <input type="checkbox" />
                        </div>
                        <div className="flex flex-row gap-1">
                          <p>Monthly</p>
                          <input type="checkbox" />
                        </div>
                      </div>
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
