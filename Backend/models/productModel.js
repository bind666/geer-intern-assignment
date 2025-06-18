import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Product name is required"],
        },
        price: {
            type: Number,
            required: [true, "Product price is required"],
        },
        imageUrl: {
            type: String,
            required: [true, "Image URL is required"],
        },
        category: {
            type: String,
            default: "General",
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
