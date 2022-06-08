import React, { useState } from 'react';
import { ReplyInput } from '../components';

const Reply = ({ reply }) => {
  const [replyInput, toggleReplyInput] = useState(false);

  const {
    user: { image, name, username },
    content,
  } = reply;
  return (
    <div className="comment my-6">
      <header className="w-full flex justify-between mb-4">
        <div className="flex gap-x-4">
          <img src={image.slice(1)} alt="" className="h-10 w-10 rounded-full" />
          <div className="handle flex flex-col">
            <h3 className="text-Jewel-Cave text-body-3 font-bold">{name}</h3>
            <span className=" text-Ocean-Night text-body-3">@{username}</span>
          </div>
        </div>
        <button
          onClick={() => {
            toggleReplyInput(!replyInput);
          }}
          className=" text-The-Rainbow-Fish text-body-3 font-semibold hover:underline"
        >
          Reply
        </button>
      </header>
      <p className="text-Ocean-Night tablet:ml-14 text-body-3">{content}</p>
      {replyInput && <ReplyInput />}
    </div>
  );
};

export default Reply;
