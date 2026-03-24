const mongoose = require("mongoose");

const feeSchema = new mongoose.Schema(
  {
    studentId: String,
    admissionNo: String,
    name: String,
    rollNumber: String,
    class: String,
    section: String,

    amount: Number,
    paid: Number,
    due: Number,

    discount: Number,
    paymentMethod: String,
    note: String,

    feeType: String,
    status: { type: String, default: "Paid" },

    date: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Fee", feeSchema);