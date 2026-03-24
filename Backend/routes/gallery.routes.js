const express = require("express");
const router = express.Router();
const controller = require("../controllers/gallery.controller");

const { upload, convertToWebp } = require("../middleware/upload"); // ✅ your multer

/* CREATE */
router.post(
  "/",
  upload.single("image"),
  convertToWebp,
  controller.createGallery
);

/* GET ALL */
router.get("/", controller.getGallery);

/* UPDATE */
router.put(
  "/:id",
  upload.single("image"),
  convertToWebp,
  controller.updateGallery
);

/* DELETE */
router.delete("/:id", controller.deleteGallery);

module.exports = router;