import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";

const ShopCategory = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);
  const [sortOption, setSortOption] = useState("Relevant");

  // Sort logic
  const sortProducts = (products) => {
    switch (sortOption) {
      case "Low to High":
        return products.sort((a, b) => a.new_price - b.new_price);
      case "High to Low":
        return products.sort((a, b) => b.new_price - a.new_price);
      default:
        return products; // Default is "Relevant"
    }
  };

  const filteredProducts = all_product.filter((item) => item.category === category);
  const sortedProducts = sortProducts([...filteredProducts]);

  return (
    <div className="bg-gray-50 pb-20">
      {/* Banner Section */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
        <img
          src={banner}
          alt={`${category} Banner`}
          className="w-full h-full object-cover rounded-b-lg shadow-md"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/70 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-wide uppercase">
            {category}
          </h1>
        </div>
      </div>

      {/* Filters and Sorting Section */}
      <div className="container mx-auto px-6 sm:px-10 mt-10 flex flex-wrap items-center justify-between border-b border-gray-300 pb-4">
        <p className="text-lg text-gray-600">
          <span className="font-semibold">Showing 1-{Math.min(12, sortedProducts.length)} </span>
          of {sortedProducts.length} products
        </p>
        <div className="relative">
          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm cursor-pointer">
            <span className="text-gray-600 text-sm mr-2">Sort by:</span>
            <select
              className="bg-transparent focus:outline-none text-gray-800 font-medium text-sm"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="Relevant">Relevant</option>
              <option value="Low to High">Price: Low to High</option>
              <option value="High to Low">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-6 sm:px-10 mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-12">
        {sortedProducts.slice(0, 12).map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>

      {/* Explore More Button */}
      {sortedProducts.length > 12 && (
        <div className="flex justify-center mt-16">
          <button className="flex items-center gap-2 px-8 py-3 rounded-full bg-gray-800 text-white text-lg font-medium shadow-md hover:bg-gray-700 transition-all">
            Explore More
          </button>
        </div>
      )}
    </div>
  );
};

ShopCategory.propTypes = {
  banner: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default ShopCategory;
