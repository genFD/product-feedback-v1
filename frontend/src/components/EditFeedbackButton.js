import React from 'react';
import { Link } from 'react-router-dom';

const EditFeedbackButton = ({ id }) => {
  return (
    <Link to={`/editfeedback:${id}`}>
      <button
        type="button"
        className=" bg-The-Rainbow-Fish rounded-default w-40 h-11 hover:bg-Orchid transition-all duration-500 text-heading-4 text-Cotton-Ball text-center"
      >
        Edit Feedback
      </button>
    </Link>
  );
};

export default EditFeedbackButton;
