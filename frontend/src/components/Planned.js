import React from 'react';
import { Card } from '../components';
import { useGlobalContext } from '../context/context';

const Planned = () => {
  const { planned } = useGlobalContext();
  return (
    <div className="w-327 tablet:mt-8 desktop:w-350">
      <header className="mb-6">
        <h2 className="text-heading-3 text-Jewel-Cave font-bold">
          Planned ({planned.length})
        </h2>
        <small className="text-body-3 text-Ocean-Night">
          Ideas prioritized for research
        </small>
      </header>
      <div className="flex flex-col gap-y-4 tablet:gap-y-4 border-Singapore-Orchid">
        {planned.map((request) => {
          return <Card key={request._id} request={request} />;
        })}
      </div>
    </div>
  );
};

export default Planned;
