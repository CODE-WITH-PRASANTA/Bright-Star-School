const Testimonial = require("../models/testimonial.model");

/* ================= CREATE ================= */
exports.createTestimonial = async (req, res) => {
  try {
    const data = await Testimonial.create(req.body);

    res.json({
      success: true,
      data,
    });
  } catch (err) {
    console.error("CREATE ERROR:", err);
    res.status(500).json({ success: false });
  }
};

/* ================= GET ALL ================= */
exports.getTestimonials = async (req, res) => {
  try {
    const data = await Testimonial.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data,
    });
  } catch (err) {
    console.error("GET ERROR:", err);
    res.status(500).json({ success: false });
  }
};

/* ================= UPDATE ================= */
exports.updateTestimonial = async (req, res) => {
  try {
    const updated = await Testimonial.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      success: true,
      data: updated,
    });
  } catch (err) {
    console.error("UPDATE ERROR:", err);
    res.status(500).json({ success: false });
  }
};

/* ================= DELETE ================= */
exports.deleteTestimonial = async (req, res) => {
  try {
    await Testimonial.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (err) {
    console.error("DELETE ERROR:", err);
    res.status(500).json({ success: false });
  }
};

/* ================= TOGGLE STATUS ================= */
exports.toggleStatus = async (req, res) => {
  try {
    const item = await Testimonial.findById(req.params.id);

    item.status = item.status === "Active" ? "Inactive" : "Active";

    await item.save();

    res.json({
      success: true,
      data: item,
    });
  } catch (err) {
    res.status(500).json({ success: false });
  }
};