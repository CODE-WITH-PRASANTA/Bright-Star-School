const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const connectDB = require("./config/db");
const enquiryRoutes = require("./routes/enquiry.routes");
const newsRoutes = require("./routes/news.routes");
const testimonialRoutes = require("./routes/testimonial.routes");
const galleryRoutes = require("./routes/gallery.routes");




const app = express();

const PORT = process.env.PORT || 5000;



/* ================= MIDDLEWARE ================= */
app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/* ================= ROUTES ================= */
app.use("/api/enquiries", enquiryRoutes); // ✅ FIXED
app.use("/api/news", newsRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/gallery", galleryRoutes);

/* ================= DB CONNECT ================= */
connectDB();

/* ================= SERVER ================= */
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});