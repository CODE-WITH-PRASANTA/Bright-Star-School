const Gallery = require("../models/gallery.model");

/* ================= CREATE ================= */
exports.createGallery = async (req, res) => {
  try {
    const image = req.body.image;

    if (!image) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }

    const data = await Gallery.create({ image });

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
exports.getGallery = async (req, res) => {
  try {
    const data = await Gallery.find().sort({ createdAt: -1 });

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
exports.updateGallery = async (req, res) => {
  try {
    const updated = await Gallery.findByIdAndUpdate(
      req.params.id,
      { image: req.body.image },
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
exports.deleteGallery = async (req, res) => {
  try {
    await Gallery.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (err) {
    console.error("DELETE ERROR:", err);
    res.status(500).json({ success: false });
  }
};