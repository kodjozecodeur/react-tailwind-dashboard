import React from "react";
import { FaCog, FaTachometerAlt, FaUserAlt } from "react-icons/fa";
import { FaBox, FaUser, FaUsers } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="bg-gray-100 text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300">
      <h1 className="text-2xl font-bold hidden md:block">Bat Console</h1>
      <ul className="flex flex-col mt-5 text-xl">
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
          <FaTachometerAlt />
          <span className="hidden md:inline">Dashboard</span>
        </li>
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
          <FaUsers />
          <span className="hidden md:inline">Customers</span>
        </li>
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
          <FaUser />
          <span className="hidden md:inline">Manage Users</span>
        </li>
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
          <FaBox />
          <span className="hidden md:inline">Products</span>
        </li>
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
          <FaCog />
          <span className="hidden md:inline">Settings</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
