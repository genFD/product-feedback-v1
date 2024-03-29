const handleAsync = require('express-async-handler');
const Feedback = require('../models/feedback.model');
const { StatusCodes } = require('http-status-codes');

const getFeedbacks = handleAsync(async (req, res) => {
  const { sort } = req.query;
  const queryObject = {};

  let results = Feedback.find(queryObject);
  if (sort === 'Least Upvotes') {
    results.sort('upvotes');
  }
  if (sort === 'Most Upvotes') {
    results.sort('-upvotes');
  }

  const feedbacks = await results;

  res.status(StatusCodes.OK).json(feedbacks);
});

const getFeedback = handleAsync(async (req, res) => {
  const feedback = await Feedback.findById(req.params.id);
  if (feedback) {
    res.status(StatusCodes.OK).json(feedback);
  } else {
    res.status(StatusCodes.NOT_FOUND);
    throw new Error('feedback not found');
  }
});

const createFeedback = handleAsync(async (req, res) => {
  const { title, category, description } = req.body;
  console.log(req.body);
  if (!title || !category || !description) {
    res.status(StatusCodes.BAD_REQUEST);
    throw new Error('Please complete the required fields');
  }
  const feedback = await Feedback.create({
    title,
    category,
    description,
  });
  res.status(StatusCodes.CREATED).json(feedback);
});

const editFeedback = handleAsync(async (req, res) => {
  const feedback = await Feedback.findById(req.params.id);
  if (!feedback) {
    res.status(StatusCodes.NOT_FOUND);
    throw new Error('feedback not found');
  }
  const updatedFeedback = await Feedback.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(StatusCodes.OK).json(updatedFeedback);
});

const deleteFeedback = handleAsync(async (req, res) => {
  const feedback = await Feedback.findById(req.params.id);
  if (!feedback) {
    res.status(StatusCodes.NOT_FOUND);
    throw new Error('feedback not found');
  } else {
    await feedback.remove();
    res.status(StatusCodes.OK).json({ message: 'Feedback removed' });
  }
});

const createComment = handleAsync(async (req, res) => {
  // res.json({ message: 'add comment' });
  const { comment } = req.body;
  const feedback = await Feedback.findById(req.params.id);
  if (feedback) {
    xw;
    feedback.comments.push(comment);
    const updatedFeedback = await feedback.save();
    res.json(updatedFeedback);
  } else {
    res.status(StatusCodes.NOT_FOUND);
    throw new Error('feedback not found');
  }
});

module.exports = {
  getFeedbacks,
  getFeedback,
  createFeedback,
  editFeedback,
  deleteFeedback,
  createComment,
};
