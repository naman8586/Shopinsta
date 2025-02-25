import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import Register from "./Register";
import Modal from "../components/Modal";
import { setSearchTerm } from "../redux/productSlice";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [search, setSearch] = useState(""); // ✅ Prevents uninitialized state
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    
    dispatch(setSearchTerm(search.trim()));
    
    // Ensures Redux state updates before navigating
    setTimeout(() => {
      navigate("/filter-data");
    }, 100);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide">
          <Link to="/" className="text-red-500">Shopinsta</Link>
        </div>

        {/* Search Bar */}
        <div className="relative flex-1 mx-6 hidden md:block">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              className="w-full bg-gray-700 text-white border-none py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Search for products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="absolute top-2.5 right-4">
              <FaSearch className="text-red-400 cursor-pointer" />
            </button>
          </form>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-6">
          
          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-2xl text-gray-300 hover:text-white transition" />
            {products.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow-lg">
                {products.length}
              </span>
            )}
          </Link>

          {/* Login/Register Button */}
          <button
            className="hidden md:block bg-red-600 px-5 py-2 rounded-full font-semibold hover:bg-red-500 transition"
            onClick={() => setIsModalOpen(true)}
          >
            Login | Register
          </button>

          {/* Mobile User Icon */}
          <button className="block md:hidden" onClick={() => setIsModalOpen(true)}>
            <FaUser className="text-2xl text-gray-300 hover:text-white transition" />
          </button>
        </div>
      </div>

      {/* Bottom Navbar (Links) */}
      <div className="flex justify-center items-center space-x-10 py-4 text-sm font-semibold uppercase tracking-wide border-t border-gray-700">
        {["Home", "Shop", "Contact", "About"].map((item, index) => (
          <Link
            key={index}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className="text-gray-400 hover:text-red-600 transition duration-300"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Modal for Login/Register */}
      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
          {isLogin ? (
            <Login toggle={() => setIsLogin(false)} />
          ) : (
            <Register toggle={() => setIsLogin(true)} />
          )}
        </Modal>
      )}
    </nav>
  );
};

export default Navbar;
