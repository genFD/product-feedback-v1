import React, { useState } from 'react';
import { useGlobalContext } from '../context/context';

const MobileHeader = ({ showComponent }) => {
  const { requests, planned, inProgress, live } = useGlobalContext();
  const [value, setValue] = useState(0);

  const statuses = [
    ...new Set(
      requests
        .map((item) => item.status)
        .filter((status) => status !== 'suggestion')
    ),
  ];

  return (
    <header className="tab-header-mobile h-20 border-b border-b-Fresh-Lavender flex relative transition-all duration-500 mb-6 tablet:hidden">
      {statuses.map((item, index) => (
        <button
          key={index}
          onClick={() => {
            showComponent(item);
            setValue(index);
          }}
          className={`flex basis-1/3 justify-center items-center text-center text-body-3 font-bold capitalize text-opacity-50 text-Jewel-Cave 
          ${value === 0 && item === 'planned' && 'active-btn-planned'}
          ${value === 1 && item === 'in-progress' && 'active-btn-inprogress'}
          ${value === 2 && item === 'live' && 'active-btn-live'}
          `}
        >
          {item} (
          {item === 'planned'
            ? planned.length
            : item === 'in-progress'
            ? inProgress.length
            : live.length}
          )
        </button>
      ))}
    </header>
  );
};

export default MobileHeader;
