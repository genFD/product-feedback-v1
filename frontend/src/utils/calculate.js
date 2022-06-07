export const calculateNumberOfComments = (arr) => {
  let numberOfComments;
  let numberOfreplies;
  if (arr) {
    numberOfComments = arr.length;
    arr.map((comment) => {
      if (arr.replies) {
        numberOfreplies = comment.replies.length;
      }
    });
  }

  return numberOfComments + numberOfreplies;
};
