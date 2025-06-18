import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const [form, setForm] = useState({
        name: "",
        price: "",
        category: "",
    });
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("name", form.name);
            formData.append("price", form.price);
            formData.append("category", form.category);
            formData.append("image", image);

            await axios.post("http://localhost:5000/api/products", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            alert("✅ Product added successfully");
            navigate("/products");
        } catch (err) {
            alert("❌ Error adding product: " + err.response?.data?.error);
        }
    };

    return (
        // Inside the return:
        <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Add New Product</h2>
            <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
                <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={form.price}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={form.category}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                    className="w-full p-3 border rounded-lg shadow"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
                >
                    ➕ Add Product
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
