import { Transition } from "@headlessui/react";

export default function Trash({ trash, openTrash }) {
  return (
    <>
      <Transition appear show={trash}>
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
                <div className="w-[55rem] h-[30rem] transform overflow-hidden rounded flex flex-row shadow-xl transition-all">
                  <div className="p-4 w-full bg-gray-200 flex flex-col">
                    <div className="flex flex-row justify-between w-full">
                      {" "}
                      <p>
                        All tasks in the trash will be automatically deleted in
                        30 days - you will not be able to recover them after
                        this
                      </p>
                      <p
                        className="cursor-pointer"
                        onClick={() => openTrash(false)}
                      >
                        x
                      </p>
                    </div>
                    <div className="flex flex-row mt-6 w-full ">
                      <div className="w-full flex flex-col gap-1">
                        <p>Task name</p>
                        <p className="text-xs">No tasks</p>
                      </div>
                      <div className="w-full flex flex-col gap-1">
                        <p>Date</p>
                        <p className="text-xs">No data</p>
                      </div>
                      <div className="w-full flex flex-col gap-1">
                        <p>Priority Level</p>
                        <p className="text-xs">No data</p>
                      </div>
                      <div className="w-full flex flex-col gap-1">
                        <p>Recover</p>
                        <input type="checkbox" />
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
