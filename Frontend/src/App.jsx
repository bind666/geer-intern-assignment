import { Routes, Route, Navigate } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import AddProduct from "./pages/AddProduct"; // ✅

const App = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/products" />} />
    <Route path="/products" element={<Products />} />
    <Route path="/products/:id" element={<ProductDetail />} />
    <Route path="/add-product" element={<AddProduct />} /> {/* ✅ */}
  </Routes>
);

export default App;
