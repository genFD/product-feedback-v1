import React, { useState } from 'react';
import { Comment } from '../components';
import { calculateNumberOfComments } from '../utils/calculate';

const Comments = ({ comments }) => {
  const calculateNumberOfComments = () => {
    let numberOfComments;
    let arrOfreplies;
    let numberOfreplies;
    let totalComments;
    if (comments.length > 0) {
      numberOfComments = comments.length;
      numberOfreplies = comments
        .map((comment) => {
          if (comment.replies) {
            arrOfreplies = comment.replies.length;
            return arrOfreplies;
          }
        })
        .reduce((a, b) => a + b);
      totalComments = numberOfComments + numberOfreplies;
    } else {
      totalComments = 0;
    }

    return totalComments;
  };

  return (
    <div className="bg-white w-327 rounded-default py-6 px-6 mb-6 tablet:px-8">
      <div className="comments_numb mb-6">
        <h2 className=" text-heading-3  text-Jewel-Cave font-bold">
          {calculateNumberOfComments(comments)} Comments
        </h2>
      </div>
      {comments &&
        comments.map((comment, index) => {
          return <Comment key={index} comment={comment} />;
        })}
    </div>
  );
};

export default Comments;
