const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    image: String,
    date: String,
    title: String,
    description: String,
    buttonText: String,
    link: String,
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
    featured: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("News", newsSchema);