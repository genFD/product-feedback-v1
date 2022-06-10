import React from 'react';
import { GobackAndRoadmap, AddFeedbackButton } from '../components';

const RoadmapHeader = () => {
  return (
    <div className="roadmapHeader w-full flex justify-center">
      <header className="h-100 w-full px-10 flex bg-Raven-Night items-center justify-between tablet:rounded-default">
        <GobackAndRoadmap />
        <AddFeedbackButton />
      </header>
    </div>
  );
};

export default RoadmapHeader;
