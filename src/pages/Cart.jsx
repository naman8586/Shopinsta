import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../assets/images/emptycart.jpg";
import { FaTrashAlt } from "react-icons/fa";
import Modal from "../components/Modal";
import ChangeAddress from "../components/ChangeAddress";
import { addToCart, increaseQuantity, removeFromCart, decreaseQuantity } from "../redux/cartSlice";
import {useNavigate} from "react-router-dom"


const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("Main Street, 102");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-16 lg:px-24 py-12">
      <h2 className="text-3xl font-bold text-center text-red-500 mb-8">
        Your Shopping Cart 🛒
      </h2>

      {cart?.products?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 🛍️ Shopping Cart Section */}
          <div className="md:col-span-2 bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-red-500 mb-4">Shopping Cart</h3>

            {/* Header Row */}
            <div className="flex justify-between text-gray-400 text-sm border-b border-gray-700 pb-3">
              <p>PRODUCTS</p>
              <div className="flex gap-10">
                <p>PRICE</p>
                <p>QUANTITY</p>
                <p>SUBTOTAL</p>
                <p>REMOVE</p>
              </div>
            </div>

            {cart.products.map((product) => (
              <div
                key={product?.id}
                className="flex items-center justify-between py-4 border-b border-gray-800"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={product?.image}
                    alt={product?.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <p className="text-lg">{product?.name}</p>
                </div>
                <div className="flex gap-10 items-center">
                  <p className="text-gray-300">${product?.price?.toFixed(2)}</p>
                  <div className="flex items-center border border-gray-600 px-2 py-1 rounded-lg">
                    <button
                      className="px-2 text-red-500 hover:text-red-400 transition"
                      onClick={() => dispatch(decreaseQuantity(product.id))}
                    >
                      -
                    </button>
                    <p className="mx-2">{product?.quantity}</p>
                    <button
                      className="px-2 text-green-500 hover:text-green-400 transition"
                      onClick={() => dispatch(increaseQuantity(product.id))}
                    >
                      +
                    </button>
                  </div>
                  <p className="text-gray-300">
                    ${(product?.quantity * product?.price).toFixed(2)}
                  </p>
                  <button
                    className="text-red-500 hover:text-red-400 transition"
                    onClick={() => dispatch(removeFromCart(product.id))}
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-red-500 mb-4">Cart Total</h3>
            <div className="flex justify-between text-lg">
              <span className="text-gray-300">Total Items:</span>
              <span className="text-gray-200">{cart?.totalQuantity || 0}</span>
            </div>

            <div className="flex justify-between text-lg mt-2">
              <p className="text-gray-300">Shipping To:</p>
              <p className="text-gray-200">{address}</p>
            </div>
            <button
              className="mt-2 text-sm text-red-500 hover:underline"
              onClick={() => setIsModalOpen(true)}
            >
              Change Address
            </button>

            <div className="flex justify-between text-xl font-semibold mt-4">
              <span className="text-gray-300">Total Price:</span>
              <span className="text-red-500">${Number(cart?.totalPrice || 0).toFixed(2)}</span>
            </div>

            <button className="mt-6 w-full bg-red-500 text-black font-bold py-2 rounded-lg hover:bg-red-400 transition" onClick={()=> navigate('/checkout')}>
              Proceed to Checkout
            </button>
          </div>

          {/* Address Modal */}
          {isModalOpen && (
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
              <ChangeAddress setAddress={setAddress} setIsModalOpen={setIsModalOpen} />
            </Modal>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <img src={EmptyCart} className="h-80 object-contain opacity-75" alt="Empty Cart" />
          <p className="text-gray-400 mt-6 text-lg">
            Your cart is empty. Start shopping now! 🛍️
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
