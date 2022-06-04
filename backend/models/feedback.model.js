const mongoose = require("mongoose");

const feedbackSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter a title"],
    },
    category: {
      type: String,
      required: true,
      enum: ["Enhancement", "Feature", "Bug", "UX", "UI"],
    },
    upvotes: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["Suggestion", "Planned", "In-progress", "Live"],
      default: "suggestion",
    },
    description: {
      type: String,
      required: [true, "Please enter a description"],
    },
    comments: [
      {
        content: String,
        user: {
          image: String,
          name: String,
          username: String,
        },
        replies: [
          {
            content: String,
            replyingTo: String,
            user: {
              image: String,
              name: String,
              username: String,
            },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("Feedback", feedbackSchema);
