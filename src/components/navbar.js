import React from "react";
import { FiSettings, FiBell } from "react-icons/fi";

const Navbar = ({ openNotifications, openSettings }) => {
  return (
    <nav className="bg-gray-200 h-20 shadow-sm items-center flex justify-between">
      <div className="p-4">
        <FiSettings
          onClick={() => openSettings(true)}
          className="text-gray-800 text-3xl cursor-pointer"
        />
      </div>
      <div className="p-4">
        <FiBell
          onClick={() => openNotifications(true)}
          className="text-gray-800 text-3xl cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
