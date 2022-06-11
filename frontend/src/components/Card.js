import React from 'react';

const Card = ({ request }) => {
  return (
    <div className="relative roadmap_card">
      <div
        className={`w-full border-The-Rainbow-Fish h-233 tablet:pb-6 tablet:h-251 pt-6 bg-white rounded-default after:content-[''] after:absolute after:w-full after:h-6 after:top-0 after:rounded-t-default ${
          request.status === 'planned'
            ? 'after:bg-Peach'
            : request.status === 'in-progress'
            ? 'after:bg-Singapore-Orchid'
            : request.status === 'live'
            ? 'after:bg-Blue-Mana'
            : null
        }
        ${
          request.status === 'planned'
            ? 'col-start-1'
            : request.status === 'in-progress'
            ? 'col-start-2 row-start-1 row-span-full'
            : request.status === 'live'
            ? 'col-start-3 row-start-1 row-span-full'
            : null
        }
        `}
      >
        <div className="flex gap-x-2 items-center pl-6 mb-4">
          <span
            className={`
          ${
            request.status === 'planned'
              ? 'bg-Peach'
              : request.status === 'in-progress'
              ? 'bg-Singapore-Orchid'
              : request.status === 'live'
              ? 'bg-Blue-Mana'
              : null
          }
          
          block  rounded-full w-2 h-2`}
          ></span>
          <span className=" text-Ocean-Night text-body-3 capitalize">
            {request.status}
          </span>
        </div>
        <div className="pl-6">
          <h2 className="text-body-3 mb-2 text-Jewel-Cave font-bold capitalize">
            {request.title}
          </h2>
          <div className="flex gap-y-3 flex-col mb-2 pr-6">
            <p className="roadmap_comm text-body-3 text-Ocean-Night">
              {request.description}
            </p>
            <div className="ux-tag h-8 rounded-default bg-Cotton-Ball text-center text-body-3 font-semibold text-The-Rainbow-Fish flex items-center justify-center hover:bg-Pale-Phthalo-Blue transition-colors duration-500 cursor-pointer active:bg-The-Rainbow-Fish capitalize">
              {request.category}
            </div>
          </div>
          <div className="flex justify-between pr-6">
            <div className="vote-tag tablet: bg-Cotton-Ball w-69  h-8 flex items-center justify-center gap-2 rounded-default hover:bg-Pale-Phthalo-Blue transition-colors duration-500 cursor-pointer active:bg-The-Rainbow-Fish">
              <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 6l4-4 4 4"
                  stroke="#4661E6"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
              <span className="text-body-3 text-Jewel-Cave text-center font-bold">
                {request.upvotes}
              </span>
            </div>

            <div className="flex gap-x-1 items-center comm_stats">
              <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z"
                  fill="#CDD2EE"
                  fillRule="nonzero"
                />
              </svg>
              <span className="text-heading-3 text-Raven-Night">
                {request.comments === undefined ? 0 : request.comments.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
