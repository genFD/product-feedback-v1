import React from 'react';
import { useGlobalContext } from '../context/context';

const Navbar = () => {
  const { isSidebarOpen, toggleSidebar } = useGlobalContext();

  return (
    <nav className="nav border h-72 tablet:hidden">
      <figure className="background_nav relative overflow-hidden h-full">
        <img
          className="w-screen h-full"
          src="assets/suggestions/mobile/background-header.png"
          alt="gradient"
        />
        <div className="absolute flex justify-between items-center h-full w-full top-0 px-6">
          <h1 className="font-bold text-body-2 text-white">Feedback Board</h1>
          <button onClick={toggleSidebar} className="cursor-pointer">
            {isSidebarOpen ? (
              <svg width="18" height="17" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
                  fill="#FFF"
                  fillRule="evenodd"
                />
              </svg>
            ) : (
              <svg width="20" height="17" xmlns="http://www.w3.org/2000/svg">
                <g fill="#FFF" fillRule="evenodd">
                  <path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z" />
                </g>
              </svg>
            )}
          </button>
        </div>
      </figure>
    </nav>
  );
};

export default Navbar;
