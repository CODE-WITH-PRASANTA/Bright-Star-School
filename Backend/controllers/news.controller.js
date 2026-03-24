const News = require("../models/news.model");
const { deleteImageFile } = require("../middleware/upload");

/* ================= CREATE ================= */
exports.createNews = async (req, res) => {
  try {
    const data = {
      ...req.body,
      image: req.body.image || "",
    };

    const news = await News.create(data);

    res.json({
      success: true,
      data: news,
    });
  } catch (error) {
    console.error("CREATE ERROR:", error);
    res.status(500).json({ success: false });
  }
};

/* ================= GET ALL ================= */
exports.getNews = async (req, res) => {
  try {
    const data = await News.find().sort({ order: 1 });

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("GET ERROR:", error);
    res.status(500).json({ success: false });
  }
};

/* ================= UPDATE ================= */
exports.updateNews = async (req, res) => {
  try {
    const old = await News.findById(req.params.id);

    if (req.body.image && old.image) {
      deleteImageFile(old.image); // ✅ delete old image
    }

    const updated = await News.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      success: true,
      data: updated,
    });
  } catch (error) {
    console.error("UPDATE ERROR:", error);
    res.status(500).json({ success: false });
  }
};

/* ================= DELETE ================= */
exports.deleteNews = async (req, res) => {
  try {
    const data = await News.findById(req.params.id);

    if (data?.image) {
      deleteImageFile(data.image);
    }

    await News.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Deleted",
    });
  } catch (error) {
    console.error("DELETE ERROR:", error);
    res.status(500).json({ success: false });
  }
};

/* ================= TOGGLE STATUS ================= */
exports.toggleStatus = async (req, res) => {
  try {
    const item = await News.findById(req.params.id);

    item.status = item.status === "Active" ? "Inactive" : "Active";
    await item.save();

    res.json({ success: true, data: item });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};