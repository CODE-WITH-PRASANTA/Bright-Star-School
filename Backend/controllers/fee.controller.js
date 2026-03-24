const Fee = require("../models/fee.model");

/* CREATE */
exports.createFee = async (req, res) => {
  try {
    const { amount, paid } = req.body;

    const due = (amount || 0) - (paid || 0);

    const fee = new Fee({
      ...req.body,
      due,
    });

    await fee.save();

    res.json({ success: true, data: fee });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* GET ALL */
exports.getFees = async (req, res) => {
  const data = await Fee.find().sort({ createdAt: -1 });
  res.json({ success: true, data });
};

/* DELETE */
exports.deleteFee = async (req, res) => {
  await Fee.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};