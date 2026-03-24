const Teacher = require("../models/teacher.model"); // ✅ updated
const { deleteImageFile } = require("../middleware/upload");

/* ================= CREATE ================= */
exports.createTeacher = async (req, res) => {
  try {
    const teacher = new Teacher({
      ...req.body,
      image: req.body.image || "",
    });

    await teacher.save();

    res.status(201).json({
      success: true,
      data: teacher,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= GET ALL ================= */
exports.getTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find().sort({ order: 1 });

    res.json({
      success: true,
      data: teachers,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ================= GET SINGLE ================= */
exports.getTeacherById = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);

    res.json({
      success: true,
      data: teacher,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ================= UPDATE ================= */
exports.updateTeacher = async (req, res) => {
  try {
    const existing = await Teacher.findById(req.params.id);

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Teacher not found",
      });
    }

    // delete old image if new uploaded
    if (req.body.image && existing.image) {
      deleteImageFile(existing.image);
    }

    const updated = await Teacher.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );

    res.json({
      success: true,
      data: updated,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= DELETE ================= */
exports.deleteTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);

    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "Teacher not found",
      });
    }

    if (teacher.image) {
      deleteImageFile(teacher.image);
    }

    await Teacher.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Teacher deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};