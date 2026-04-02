const express = require("express");
const router = express.Router();

const teacherController = require("../controllers/teacher.controller");
const { upload, convertToWebp } = require("../middleware/upload");

/* CREATE */
router.post(
  "/teachers",
  upload.single("image"),
  convertToWebp,
  teacherController.createTeacher
);

/* GET ALL */
router.get("/teachers", teacherController.getTeachers);

/* GET ONE */
router.get("/teachers/:id", teacherController.getTeacherById);

/* UPDATE */
router.put(
  "/teachers/:id",
  upload.single("image"),
  convertToWebp,
  teacherController.updateTeacher
);

/* DELETE */
router.delete("/teachers/:id", teacherController.deleteTeacher);

module.exports = router;