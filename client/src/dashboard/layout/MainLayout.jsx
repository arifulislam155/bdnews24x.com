import React from 'react';
import { Sidebar } from './Sidebar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="min-w-screen min-h-screen bg-slate-100 flex">
      {/* Sidebar */}
      <Sidebar />
      {/* Main content area */}
      <div className="flex-1 ml-[250px] p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
