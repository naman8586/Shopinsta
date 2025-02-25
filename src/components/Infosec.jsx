import React from "react";
import { FaHeadset, FaMoneyBillWave, FaShippingFast, FaLock, FaTag } from "react-icons/fa";

const InfoSec = () => {
  const infoItems = [
    {
      icon: <FaShippingFast className="text-5xl text-red-500 drop-shadow-lg" />,
      title: "Free Shipping",
      description: "Get your orders delivered at no extra cost.",
    },
    {
      icon: <FaHeadset className="text-5xl text-red-500 drop-shadow-lg" />,
      title: "24/7 Support",
      description: "We are here to assist you anytime, anywhere.",
    },
    {
      icon: <FaMoneyBillWave className="text-5xl text-red-500 drop-shadow-lg" />,
      title: "Money Back Guarantee",
      description: "Full refund if you’re not satisfied with your purchase.",
    },
    {
      icon: <FaLock className="text-5xl text-red-500 drop-shadow-lg" />,
      title: "Secure Payments",
      description: "Your payment details are encrypted & protected.",
    },
    {
      icon: <FaTag className="text-5xl text-red-500 drop-shadow-lg" />,
      title: "Best Discounts",
      description: "Enjoy the best prices on premium products.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black py-16">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 px-6 md:px-12">
        {infoItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-gray-800/80 border border-gray-700 
            backdrop-blur-md rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 
            hover:border-red-500 hover:shadow-red-500/50 cursor-pointer"
            role="button"
            tabIndex={0}
          >
            {item.icon}
            <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSec;
