import React from 'react';

const ReplyInput = () => {
  return (
    <div className="flex mt-3 tablet:mt-6 ml-5 w-80 tablet:ml-14 gap-x-4">
      <textarea
        type="text"
        id="title"
        className="p-2 h-11 tablet:h-20 w-full bg-Ghost-White rounded-md border-none text-Jewel-Cave text-body-3 active: border-The-Rainbow-Fish"
      />
      <button
        type="button"
        className=" bg-Singapore-Orchid rounded-default w-40 h-11 hover:bg-After-Party-Pink transition-all duration-500 text-heading-4 text-Cotton-Ball text-center"
      >
        Post reply
      </button>
    </div>
  );
};

export default ReplyInput;
