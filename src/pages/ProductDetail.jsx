import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import { FaShoppingCart, FaStar } from "react-icons/fa";

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const newProduct = products.find((p) => p.id === parseInt(id));
    if (newProduct) {
      setProduct(newProduct);
    }
    setLoading(false);
  }, [id, products]);

  if (loading) {
    return <div className="text-center text-white text-xl py-20">Loading...</div>;
  }

  if (!product) {
    return (
      <div className="text-center text-red-500 text-2xl py-20">
        Product Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="max-w-5xl mx-auto p-8 bg-gradient-to-b from-gray-900 to-black text-white rounded-lg shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Product Image with Enhanced Hover Effect */}
          <div className="relative group">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg shadow-md transform transition duration-500 group-hover:scale-105 group-hover:shadow-red-500"
            />
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-3 py-1 rounded-full uppercase shadow-md">
              {product.category}
            </span>
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-between">
            <h1 className="text-4xl font-extrabold text-red-400 tracking-wide">
              {product.name}
            </h1>

            {/* Ratings */}
            <div className="flex items-center mt-3">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`text-yellow-400 ${index < product.rating ? "opacity-100" : "opacity-30"}`}
                />
              ))}
              <span className="ml-2 text-gray-300">({product.rating}/5)</span>
            </div>

            {/* Price */}
            <p className="text-2xl font-semibold text-yellow-400 mt-3">
              ₹ {product.price}
            </p>

            {/* Stock Availability */}
            <p className={`text-sm font-semibold mt-2 ${product.stock > 0 ? "text-green-400" : "text-red-500"}`}>
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </p>

            {/* Description */}
            <p className="text-gray-300 text-md mt-5 leading-relaxed">
              {product.description}
            </p>

            {/* Buttons with Glow Effect */}
            <div className="flex space-x-4 mt-8">
              <button
                className="bg-red-600 hover:bg-red-500 px-6 py-3 rounded-full text-white font-semibold transition shadow-md hover:shadow-red-500"
                onClick={() => dispatch(addToCart(product))}
              >
                <FaShoppingCart className="inline-block mr-2" /> Add to Cart
              </button>

              <button className="bg-yellow-500 hover:bg-yellow-400 px-6 py-3 rounded-full text-black font-semibold transition shadow-md hover:shadow-yellow-400">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
