import React from 'react';

const CommentsInput = () => {
  return (
    <div
      className="bg-white h-234 rounded-default py-6 px-6 
    w-327 mb-6 tablet:w-689 tablet:px-8 desktop:w-825
    "
    >
      <header className="mb-6">
        <h2 className=" text-heading-3 text-Jewel-Cave font-bold">
          Add Comment
        </h2>
      </header>
      <textarea
        className="w-full bg-Ghost-White pt-4 pl-4 mb-4 rounded-md"
        placeholder="Type your comment here"
        id=""
        maxLength="250"
      ></textarea>
      <footer className="flex justify-between items-center">
        <span className="text-Ocean-Night">250 Characters left</span>
        <button
          type="button"
          className=" bg-Singapore-Orchid rounded-default w-40 h-11 hover:bg-After-Party-Pink transition-all duration-500 text-heading-4 text-Cotton-Ball text-center"
        >
          Post comment
        </button>
      </footer>
    </div>
  );
};

export default CommentsInput;
