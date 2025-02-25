import React from "react";
import ManCategory from "../assets/images/man.jpg";
import WomanCategory from "../assets/images/woman.jpg";
import KidCategory from "../assets/images/kid.jpg";

const categories = [
  {
    title: "Men",
    imageUrl: ManCategory,
  },
  {
    title: "Women",
    imageUrl: WomanCategory,
  },
  {
    title: "Kids",
    imageUrl: KidCategory,
  },
];

const Categories = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-6 md:px-12 lg:px-20 py-14">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative h-72 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer bg-gradient-to-b from-gray-800 to-gray-900"
        >
          <img
            src={category.imageUrl}
            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
            alt={category.title}
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/50 hover:bg-black/60 transition-all duration-300">
            <p className="text-3xl font-bold tracking-wide drop-shadow-lg">{category.title}</p>
            <button className="mt-3 bg-red-600 px-5 py-2 rounded-full font-semibold text-sm hover:bg-red-500 transition">
              View Collection
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
