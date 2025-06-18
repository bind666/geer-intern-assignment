import Product from "../models/productModel.js";

// GET: Fetch all products with optional search/category
export const getAllProducts = async (req, res) => {
    try {
        const { search, category } = req.query;
        const filter = {};
        if (search) filter.name = { $regex: search, $options: "i" };
        if (category) filter.category = category;

        const products = await Product.find(filter);
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
};

// POST: Add new product with image file
export const addProduct = async (req, res) => {
    try {
        const { name, price, category } = req.body;

        if (!req.file) {
            return res.status(400).json({ error: "Image file is required" });
        }

        const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

        const product = await Product.create({
            name,
            price,
            imageUrl,
            category,
        });

        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// DELETE: Delete product by ID
export const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
