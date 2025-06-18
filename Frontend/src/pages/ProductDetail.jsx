import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/products`).then((res) => {
            const prod = res.data.find((p) => p._id === id);
            setProduct(prod);
        });
    }, [id]);

    if (!product) return <p className="p-4">Loading...</p>;

    return (
        <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md animate-fade-in">
            <img src={product.imageUrl} className="w-full h-64 object-cover rounded-lg mb-4" />
            <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
            <p className="text-2xl text-green-600 font-semibold my-2">₹{product.price}</p>
            <p className="text-sm text-gray-600">Category: {product.category}</p>
            <p className="text-xs text-gray-400 mt-2">
                Added: {new Date(product.createdAt).toLocaleString()}
            </p>
        </div>

    );
};

export default ProductDetail;
