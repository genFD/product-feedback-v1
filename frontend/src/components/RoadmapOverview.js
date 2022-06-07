import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/context';

const OverviewRoadmap = () => {
  const { planned, live, inProgress } = useGlobalContext();
  return (
    <article className="w-223 h-178  bg-white text-Raven-Night pt-5 px-6 rounded-default pb-6">
      <header className="flex justify-between mb-6">
        <h2 className="font-bold text-heading-3 text-Jewel-Cave text">
          Roadmap
        </h2>
        <Link
          className="cursor-pointer hover:underline text-The-Rainbow-Fish hover:text-Periwinkle-Blue underline text-body-3"
          to="/roadmap"
        >
          View
        </Link>
      </header>
      <ul className="list-disc overviewRoadmap">
        <li className="flex justify-between">
          <div className="flex items-center gap-4">
            <span className="block h-2 w-2 bg-Peach rounded-full"></span>
            <span className="block text-Ocean-Night text-body-1">Planned</span>
          </div>
          <span className="text-Ocean-Night text-body-1 font-bold">
            {planned.length}
          </span>
        </li>

        <li className="flex justify-between">
          <div className="flex items-center gap-4">
            <span className="block h-2 w-2 bg-Singapore-Orchid rounded-full"></span>
            <span className="block text-Ocean-Night text-body-1">
              In-progress
            </span>
          </div>
          <span className="text-Ocean-Night text-body-1 font-bold">
            {inProgress.length}
          </span>
        </li>

        <li className="flex justify-between">
          <div className="flex items-center gap-4">
            <span className="block h-2 w-2 bg-Blue-Mana rounded-full"></span>
            <span className="block text-Ocean-Night text-body-1">Live</span>
          </div>
          <span className="text-Ocean-Night text-body-1 font-bold">
            {live.length}
          </span>
        </li>
      </ul>
    </article>
  );
};

export default OverviewRoadmap;
