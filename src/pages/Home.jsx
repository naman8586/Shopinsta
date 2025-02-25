import React, { useEffect } from "react";
import { categories, mockData } from "../assets/MockDate.jsx";
import HeroImage from "../assets/images/hero-page.jpg";
import InfoSec from "../components/Infosec.jsx";
import Categories from "../components/Categories.jsx";
import { setProducts } from "../redux/productSlice.js";
import { useDispatch, useSelector } from "react-redux";
import ProductCart from "../components/ProductCart";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(setProducts(mockData));
  }, [dispatch]);

  return (
    <div className="bg-black text-white px-4 md:px-16 lg:px-24">
      {/* Hero Section */}
      <div className="container mx-auto py-8 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        {/* Categories Sidebar */}
        <div className="w-full md:w-3/12">
          <div className="bg-red-500 text-black text-sm font-semibold px-3 py-3 rounded-t-lg">
            SHOP BY CATEGORY
          </div>
          <ul className="space-y-3 bg-gray-900 p-4 border border-gray-800 rounded-b-lg shadow-lg">
            {categories.map((category, index) => (
              <li
                key={index}
                className="flex items-center text-sm font-medium text-gray-300 hover:text-red-500 transition duration-300"
              >
                <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-9/12 relative h-96">
          
          <div className="absolute top-16 left-8 bg-black bg-opacity-70 p-8 rounded-lg shadow-lg">
            <p className="text-red-400 text-sm uppercase tracking-widest">Exclusive Deals</p>
            <h2 className="text-4xl font-extrabold text-white mt-2">
              Welcome to <span className="text-red-500">Shopinsta</span>
            </h2>
            <p className="text-lg mt-3 font-semibold text-gray-300">
              Over a Million Products Just for You!
            </p>
            <button className="bg-red-500 px-8 py-3 text-black mt-5 font-bold rounded-md hover:bg-white transition-transform transform duration-300 hover:scale-105 shadow-lg">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      {/* Information Section */}
      <InfoSec />
      <Categories />

      {/* Top Products Section */}
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-red-500 uppercase tracking-wider">
          Top Picks For You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.slice(0, 8).map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
