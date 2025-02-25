import React from 'react';
import { FaStar } from 'react-icons/fa';
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductCart = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    
    dispatch(addToCart(product));
    
    setTimeout(() => alert("Product added!"), 100);
  };

  if (!product) return null;

  return (

    <Link to={`/product/${product.id}`}>
    <div className="bg-gray-900/80 backdrop-blur-md transform transition-transform duration-300 hover:scale-105 
      p-6 shadow-lg relative rounded-xl border border-gray-700 hover:border-red-500 text-white">
      
     
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain mb-4 rounded-lg"
      />

      
      <h3 className="text-lg font-semibold">{product.name}</h3>

    
      <p className="text-red-400 text-lg font-bold">${product.price}</p>

      
      <div className="flex items-center mt-2 space-x-1">
        {Array.from({ length: 5 }, (_, index) => (
          <FaStar
            key={index}
            className={`text-yellow-500 ${index < product.rating ? 'opacity-100' : 'opacity-30'}`}
          />
        ))}
      </div>

     
      <div 
        className="absolute bottom-4 right-4 flex items-center justify-center w-10 h-10 bg-red-600 
          group text-white text-sm rounded-full hover:w-36 hover:bg-red-500 transition-all overflow-hidden shadow-md cursor-pointer" 
        onClick={(e) => handleAddToCart(e, product)}
      >
        <span className="group-hover:hidden">+</span>
        <span className="hidden group-hover:flex items-center">Add to Cart</span>
      </div>
      
    </div>
    </Link>
  );
};

export default ProductCart;
