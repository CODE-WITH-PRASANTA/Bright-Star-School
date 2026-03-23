const express = require("express");
const router = express.Router();

const controller = require("../controllers/news.controller");
const { upload, convertToWebp } = require("../middleware/upload");

/* ================= CREATE ================= */
router.post(
  "/",
  upload.single("image"),
  convertToWebp,
  controller.createNews
);

/* ================= GET ================= */
router.get("/", controller.getNews);

/* ================= UPDATE ================= */
router.put(
  "/:id",
  upload.single("image"),
  convertToWebp,
  controller.updateNews
);

/* ================= DELETE ================= */
router.delete("/:id", controller.deleteNews);

/* ================= STATUS ================= */
router.put("/:id/status", controller.toggleStatus);

module.exports = router;