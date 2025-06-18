import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
// To serve image files
app.use("/uploads", express.static("uploads"));

// Global error handler (especially for multer errors)
app.use((err, req, res, next) => {
  if (err.message.includes("Only image files")) {
    return res.status(400).json({ error: err.message });
  }
  next(err);
});


app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

connectDB();
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});

