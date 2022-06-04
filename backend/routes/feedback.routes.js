const express = require('express');
const router = express.Router();
const {
  createFeedback,
  getFeedbacks,
  getFeedback,
  // createComment,
  editFeedback,
  deleteFeedback,
} = require('../controllers/feedback.controller');

router.route('/').get(getFeedbacks).post(createFeedback);

router.route('/:id').get(getFeedback).delete(deleteFeedback).put(editFeedback);

module.exports = router;
