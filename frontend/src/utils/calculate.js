export const calculateNumberOfComments = (arr) => {
  let numberOfComments;
  let arrOfreplies;
  let numberOfreplies;
  let totalComments;
  if (arr.length > 0) {
    numberOfComments = arr.length;
    numberOfreplies = arr
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
