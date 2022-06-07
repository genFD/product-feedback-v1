import React from 'react';

const Logo = () => {
  return (
    <figure className="hidden tablet:block relative">
      <img
        className="rounded-default"
        src="assets/suggestions/tablet/background-header.png"
        alt=""
      />
      <div className="absolute flex justify-center items-center h-full w-full top-0">
        <h1 className="text-white font-bold text-heading-2">Feedback Board</h1>
      </div>
    </figure>
  );
};

export default Logo;
