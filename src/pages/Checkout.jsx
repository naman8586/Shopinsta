import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkout } from "../redux/cartSlice";
import Modal from "../components/Modal";
import ChangeAddress from "../components/ChangeAddress";
import EmptyCart from "../assets/images/emptycart.jpg";

const Checkout = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("Main Street, 102");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    if (cart.products.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    if (!address) {
      alert("Please select a shipping address.");
      return;
    }

    dispatch(checkout());

    alert(`Order placed successfully using ${paymentMethod}!`);
    navigate("/order-success");
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-16 lg:px-24 py-12 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center text-red-500 mb-8">Checkout 🛍️</h2>

      {cart.products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
       
          <div className="md:col-span-2 bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-red-500 mb-4">Order Summary</h3>
            <div className="space-y-4">
              {cart.products.map((product) => (
                <div key={product.id} className="flex items-center justify-between border-b border-gray-700 pb-4">
                  <div className="flex items-center gap-4">
                    <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-md" />
                    <div>
                      <p className="text-lg">{product.name}</p>
                      <p className="text-gray-400">${product.price.toFixed(2)} x {product.quantity}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 font-semibold">${(product.price * product.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>

        
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full">
            <h3 className="text-2xl font-semibold text-red-500 mb-4">Billing & Shipping</h3>
            <div className="mb-4">
              <p className="text-gray-300">Shipping Address:</p>
              <p className="text-gray-200">{address}</p>
              <button className="mt-2 text-sm text-red-500 hover:underline" onClick={() => setIsModalOpen(true)}>
                Change Address
              </button>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-300">Payment Method:</h3>
              <div className="flex flex-col space-y-2 mt-2">
                {["COD", "UPI", "Credit/Debit Card"].map((method) => (
                  <label key={method} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value={method}
                      checked={paymentMethod === method}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="accent-red-500"
                    />
                    <span className="text-gray-400">{method}</span>
                  </label>
                ))}
              </div>
            </div>

          
            <div className="flex justify-between text-xl font-semibold mt-6">
              <span className="text-gray-300">Total Price:</span>
              <span className="text-red-500">${cart.totalPrice.toFixed(2)}</span>
            </div>

       
            <button
              className="mt-6 w-full bg-red-500 text-black font-bold py-2 rounded-lg hover:bg-red-400 transition"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <img src={EmptyCart} className="h-80 object-contain opacity-75" alt="Empty Cart" />
          <p className="text-gray-400 mt-6 text-lg">Your cart is empty. Start shopping now! 🛍️</p>
        </div>
      )}

     
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <ChangeAddress setAddress={setAddress} closeModal={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </div>
  );
};

export default Checkout;
