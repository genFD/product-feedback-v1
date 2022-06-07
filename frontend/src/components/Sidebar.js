import React from 'react';
import { Categories, OverviewRoadmap } from '.';
import { useGlobalContext } from '../context/context';

const Sidebar = () => {
  const { isSidebarOpen } = useGlobalContext();
  return (
    isSidebarOpen && (
      <aside className="tablet:hidden h-screen w-screen flex justify-end fixed bg-Overlay">
        <div className=" bg-Ghost-White h-full w-271 flex flex-col items-center gap-6 pt-6 relative shadow-md ">
          <Categories />
          <OverviewRoadmap />
        </div>
      </aside>
    )
  );
};

export default Sidebar;
