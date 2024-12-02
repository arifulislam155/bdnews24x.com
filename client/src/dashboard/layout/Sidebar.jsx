import React from 'react';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <div className="w-[250px] h-screen fixed left-0 top-0 bg-black text-white">
      {/* Logo */}
      <div className="h-[70px] flex justify-center items-center border-b border-gray-700">
        <Link to="/">
          <img
            className="w-[190px] h-[35px]"
            src="https://amarlodge.com/app-logo.svg"
            alt="AmarLodge Logo"
          />
        </Link>
      </div>

      {/* Menu */}
      <ul className="mt-4 space-y-2 px-3 text-sm">
        <li>
          <Link to="/dashboard/admin" className="block py-2 px-4 rounded hover:bg-gray-700">
            Dashboard
          </Link>
        </li>
        {/* Add more menu items here */}
      </ul>
    </div>
  );
};
