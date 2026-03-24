const express = require("express");
const router = express.Router();
const controller = require("../controllers/testimonial.controller");

/* CREATE */
router.post("/", controller.createTestimonial);

/* GET ALL */
router.get("/", controller.getTestimonials);

/* UPDATE */
router.put("/:id", controller.updateTestimonial);

/* DELETE */
router.delete("/:id", controller.deleteTestimonial);

/* STATUS */
router.put("/:id/status", controller.toggleStatus);

module.exports = router;