const express = require("express");
const router = express.Router();

const {
  createFee,
  getFees,
  deleteFee,
} = require("../controllers/fee.controller");

router.post("/", createFee);
router.get("/", getFees);
router.delete("/:id", deleteFee);

module.exports = router;