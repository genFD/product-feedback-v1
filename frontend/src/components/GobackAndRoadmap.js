import React from 'react';
import { useNavigate } from 'react-router-dom';

const GobackAndRoadmap = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-start">
      <button
        onClick={() => navigate(-1)}
        type="button"
        className="flex items-center justify-center gap-x-1 hover:underline transition-all duration-500 decoration-Ocean-Night text-heading-4"
      >
        <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6 9L2 5l4-4"
            stroke="#CDD2EE"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
        <span className=" text-white font-bold text-body-3 capitalize tablet:text-heading-4">
          Go Back
        </span>
      </button>
      <h2 className="text-heading-3 text-white font-bold">Roadmap</h2>
    </div>
  );
};

export default GobackAndRoadmap;
