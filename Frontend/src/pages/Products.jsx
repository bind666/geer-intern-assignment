import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    const fetchProducts = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/products?search=${search}`);
            setProducts(res.data);
        } catch (error) {
            console.error("Failed to fetch products:", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [search]);

    // ✅ Called after deletion
    const handleDelete = (id) => {
        setProducts((prevProducts) => prevProducts.filter((p) => p._id !== id));
    };

    return (
        <div className="p-4 max-w-7xl mx-auto">
            <Link
                to="/add-product"
                className="inline-block mb-6 px-5 py-2.5 bg-green-600 text-white font-semibold rounded-md shadow hover:bg-green-700 transition-transform transform hover:scale-105"
            >
                ➕ Add Product
            </Link>
            <h1 className="text-3xl font-bold mb-4 text-blue-700">All Products</h1>
            <SearchBar search={search} setSearch={setSearch} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard key={product._id} {...product} onDelete={handleDelete} />
                ))}
            </div>
        </div>

    );
};

export default Products;
