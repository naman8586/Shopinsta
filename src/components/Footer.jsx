import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-14">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center md:text-left">
          
          <div>
            <h2 className="text-3xl font-extrabold text-red-500 tracking-wide">ShopInsta</h2>
            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              Your go-to destination for trendy fashion & lifestyle essentials. Shop smart, shop fast!
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-red-500 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition">Shop</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition">New Arrivals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition">Offers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-red-500 mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-red-500 mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-6 mt-2">
              <a href="#" className="text-gray-400 hover:text-red-500 transition text-2xl"><FaFacebookF /></a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition text-2xl"><FaInstagram /></a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition text-2xl"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition text-2xl"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} ShopInsta. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
