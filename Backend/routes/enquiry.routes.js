const express = require("express");
const router = express.Router();
const controller = require("../controllers/enquiry.controller");

/* USER + ADMIN */
router.post("/", controller.createEnquiry);

/* ADMIN */
router.get("/", controller.getEnquiries);
router.get("/:id", controller.getSingleEnquiry);

router.put("/:id", controller.updateEnquiry); // edit lead
router.put("/:id/status", controller.updateStatus);
router.put("/:id/feedback", controller.updateFeedback);

router.delete("/:id", controller.deleteEnquiry);

module.exports = router;