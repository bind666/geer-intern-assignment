import { Link } from "react-router-dom";
import axios from "axios";

const ProductCard = ({ _id, name, price, imageUrl, onDelete }) => {
    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this product?")) return;
        try {
            await axios.delete(`http://localhost:5000/api/products/${_id}`);
            onDelete(_id);
        } catch (err) {
            alert("❌ Failed to delete product");
        }
    };

    return (
        <div className="relative group bg-white border p-4 rounded-xl shadow hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300">
            <Link to={`/products/${_id}`}>
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-48 object-cover rounded-lg transition-all group-hover:scale-105"
                />
                <h3 className="mt-3 text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                    {name}
                </h3>
                <p className="text-green-600 font-bold text-lg">₹{price}</p>
            </Link>
            <button
                onClick={handleDelete}
                className="bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1 rounded-full transition-all shadow-md"
            >
                Delete
            </button>
        </div>
    );
};

export default ProductCard;
