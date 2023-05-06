import React from "react";
import { FiSettings, FiBell } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="bg-gray-200 h-20 shadow-sm items-center flex justify-between">
      <div className="p-4">
        <FiSettings className="text-gray-800 text-3xl" />
      </div>
      <div className="p-4">
        <FiBell className="text-gray-800 text-3xl" />
      </div>
    </nav>
  );
};

export default Navbar;
