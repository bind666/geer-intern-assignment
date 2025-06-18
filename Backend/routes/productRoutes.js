import express from "express";
import {
    getAllProducts,
    addProduct,
    deleteProduct,
} from "../controllers/productController.js";
import upload from "../middlewares/multerConfig.js"; 

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", upload.single("image"), addProduct);
router.delete("/:id", deleteProduct);

export default router;
