const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
  {
    image: String,
    name: { type: String, required: true },
    role: { type: String, required: true },
    description: String,
    phone: String,
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
    tag: {
      type: String,
      default: "Teacher",
    },
    order: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Teacher", teacherSchema);