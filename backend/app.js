const express = require('express');

const feedbackRoutes = require('./routes/feedback.routes');

const { handleError } = require('./middleware/error');

const app = express();

app.use(express.json());

app.use('/api/feedbacks', feedbackRoutes);

app.use(handleError);

module.exports = app;
