import React from "react";
import { Link } from "react-router-dom";
const AddFeedbackButton = () => {
  return (
    <Link to="/feedbacknew">
      <button
        type="button"
        className=" flex items-center justify-center gap-2 bg-Singapore-Orchid rounded-default w-134 h-10 hover:bg-After-Party-Pink transition-all duration-500 text-heading-4 text-Cotton-Ball text-center"
      >
        <span>
          <svg width="9" height="9" xmlns="http://www.w3.org/2000/svg">
            <text
              transform="translate(-24 -20)"
              fill="#F2F4FE"
              fillRule="evenodd"
              fontFamily="Jost-Bold, Jost"
              fontSize="14"
              fontWeight="bold"
            >
              <tspan x="24" y="27.5">
                +
              </tspan>
            </text>
          </svg>
        </span>
        <span className=" text-Cotton-Ball text-body-3">Add Feedback</span>
      </button>
    </Link>
  );
};

export default AddFeedbackButton;
