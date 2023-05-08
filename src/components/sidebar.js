import React from "react";
import { FaPencilAlt, FaTrashAlt, FaTasks, FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";

const Sidebar = ({ setActivity, openTaskManager, openTrash }) => {
  return (
    <div className="w-1/6 bg-gray-200 flex flex-col shadow-sm">
      <div className="flex gap-24 flex-col px-4 mt-6">
        <button
          onClick={() => setActivity(true)}
          className="flex flex-row gap-2 items-center"
        >
          <p className="text-gray-800 text-2xl">Create</p>
          <FaPencilAlt className="text-gray-800 text-2xl" />
        </button>
        <button
          onClick={() => openTrash(true)}
          className="flex flex-row gap-2 items-center"
        >
          <p className="text-gray-800 text-2xl">Trash</p>
          <FaTrashAlt className="text-gray-800 text-2xl" />
        </button>
        <button
          onClick={() => openTaskManager(true)}
          className="flex flex-row gap-2 items-center"
        >
          <p className="text-gray-800 text-2xl">Tasks</p>
          <FaTasks className="text-gray-800 text-2xl" />
        </button>
        <Link href="/">
          <button className="flex flex-row gap-2 items-center">
            <p className="text-gray-800 text-2xl">Log Out</p>
            <FaSignOutAlt className="text-gray-800 text-2xl" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
