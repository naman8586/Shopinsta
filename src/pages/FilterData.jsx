import React from 'react';
import { useSelector } from 'react-redux';
import ProductCart from '../components/ProductCart';
import NoProduct from '../assets/images/not_found.jpg';

const FilterData = () => {
  const filterProducts = useSelector(state => state.products.filteredData);

  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24 bg-black">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">Shop</h2>

      {filterProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
          {filterProducts.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <img src={NoProduct} alt="No Product Found" className="w-64 h-64 object-cover" />
          <p className="text-gray-400 mt-4 text-lg">No products found.</p>
        </div>
      )}
    </div>
  );
};

export default FilterData;
