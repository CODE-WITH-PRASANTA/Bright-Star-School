const Enquiry = require("../models/enquiry.model");

/* ================= CREATE (USER + ADMIN) ================= */
exports.createEnquiry = async (req, res) => {
  try {
    const { name, address, phone, message } = req.body;

    if (!name || !address || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields required",
      });
    }

    const enquiry = await Enquiry.create({
      name,
      address,
      phone,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Lead created successfully",
      data: enquiry,
    });
  } catch (error) {
    console.error("CREATE ERROR:", error);
    res.status(500).json({ success: false });
  }
};

/* ================= GET ALL (WITH FILTER 🔥) ================= */
exports.getEnquiries = async (req, res) => {
  try {
    const { name, address } = req.query;
    console.log("GET API HIT");

    let filter = {};

    if (name) {
      filter.name = { $regex: name, $options: "i" };
    }

    if (address) {
      filter.address = { $regex: address, $options: "i" };
    }

    const data = await Enquiry.find(filter).sort({ createdAt: -1 });

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("GET ERROR:", error);
    res.status(500).json({ success: false });
  }
};

/* ================= GET SINGLE ================= */
exports.getSingleEnquiry = async (req, res) => {
  try {
    const data = await Enquiry.findById(req.params.id);

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};

/* ================= UPDATE (EDIT LEAD) ================= */
exports.updateEnquiry = async (req, res) => {
  try {
    const { name, address, phone, message } = req.body;

    const updated = await Enquiry.findByIdAndUpdate(
      req.params.id,
      { name, address, phone, message },
      { new: true },
    );

    res.json({
      success: true,
      message: "Lead updated",
      data: updated,
    });
  } catch (error) {
    console.error("UPDATE ERROR:", error);
    res.status(500).json({ success: false });
  }
};

/* ================= DELETE ================= */
exports.deleteEnquiry = async (req, res) => {
  try {
    await Enquiry.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (error) {
    console.error("DELETE ERROR:", error);
    res.status(500).json({ success: false });
  }
};

/* ================= STATUS ================= */
exports.updateStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const updated = await Enquiry.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true },
    );

    res.json({
      success: true,
      data: updated,
    });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};

/* ================= FEEDBACK ================= */
exports.updateFeedback = async (req, res) => {
  try {
    const { feedback } = req.body;

    const updated = await Enquiry.findByIdAndUpdate(
      req.params.id,
      { feedback },
      { new: true },
    );

    res.json({
      success: true,
      data: updated,
    });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};
