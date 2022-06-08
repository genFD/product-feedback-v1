import React from 'react';
import { useNavigate } from 'react-router-dom';

const GobackHome = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      type="button"
      className="flex items-center justify-center gap-x-1 hover:underline transition-all duration-500 decoration-Ocean-Night text-heading-4 h-fit"
    >
      <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 9L2 5l4-4"
          stroke="#4661E6"
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
      <span className="text-Ocean-Night font-bold text-body-3 capitalize tablet:text-heading-4">
        Go Home
      </span>
    </button>
  );
};

export default GobackHome;
