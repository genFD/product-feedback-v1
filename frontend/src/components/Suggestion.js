import React from 'react';
import { Link } from 'react-router-dom';

const Suggestion = ({ suggestion }) => {
  const { _id, title, category, description, upvotes, comments } = suggestion;
  return (
    <article className="mb-4 desktop:mb-5">
      <Link to={`/feedbackdetail/${_id}`}>
        <div className="bg-white feedback_cont w-327 h-200 tablet:h-151 tablet:w-689 laptop:w-689 desktop:w-825 rounded-default p-6">
          <div className="content area-b">
            <header className="mb-2">
              <h2 className="text-body-3 text-Raven-Night font-bold">
                {title}
              </h2>
            </header>
            <p className="text-body-3 text-Ocean-Night mb-2">{description}</p>
          </div>
          <div className="area-a hidden tablet:block ">
            <div className="vote-tag bg-Cotton-Ball w-69 tablet:w-10 h-8 tablet:h-53 flex tablet:flex-col items-center justify-center gap-2 rounded-default hover:bg-Pale-Phthalo-Blue transition-colors duration-500 cursor-pointer active:bg-The-Rainbow-Fish">
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
                {upvotes}
              </span>
            </div>
          </div>
          <div className="area-c hidden tablet:block ">
            <div className=" flex gap-x-2 items-center comm_stats">
              <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z"
                  fill="#CDD2EE"
                  fillRule="nonzero"
                />
              </svg>
              <span className="text-heading-3 text-Raven-Night">
                {comments.length}
              </span>
            </div>
          </div>
          <div className="area-c-a-cont flex tablet:hidden">
            <div className="area-a">
              <div className="vote-tag bg-Cotton-Ball w-69 tablet:w-10 h-8 tablet:h-53 flex tablet:flex-col items-center justify-center gap-2 rounded-default hover:bg-Pale-Phthalo-Blue transition-colors duration-500 cursor-pointer active:bg-The-Rainbow-Fish">
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
                  {upvotes}
                </span>
              </div>
            </div>
            <div className="area-c">
              <div className=" flex gap-x-2 items-center comm_stats">
                <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z"
                    fill="#CDD2EE"
                    fillRule="nonzero"
                  />
                </svg>
                <span className="text-heading-3 text-Raven-Night">
                  {comments.length}
                </span>
              </div>
            </div>
          </div>
          <div className="area-d">
            <div
              className="ux-tag h-30p rounded-default bg-Cotton-Ball text-center text-body-3 font-semibold text-The-Rainbow-Fish flex items-center justify-center hover:bg-Pale-Phthalo-Blue transition-colors duration-500 cursor-pointer active:bg-The-Rainbow-Fish mb-4 capitalize
        "
            >
              {category}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Suggestion;
