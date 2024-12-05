import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item";

const ShopCategory = ({ category }) => {
  const { all_product } = useContext(ShopContext);
  const [sortOption, setSortOption] = useState("Relevant");

  
  const categoryColors = {
    men: "#9297c8",
    women: "#ee7036",
    kid: "#f7cb9a",
    accessories: "#f6c1a7",
  };

  const bgColor = categoryColors[category] || "#b6c796"; 

  // Sort logic
  const sortProducts = (products) => {
    switch (sortOption) {
      case "Low to High":
        return products.sort((a, b) => a.new_price - b.new_price);
      case "High to Low":
        return products.sort((a, b) => b.new_price - a.new_price);
      default:
        return products;
    }
  };

  const filteredProducts = all_product.filter((item) => item.category === category);
  const sortedProducts = sortProducts([...filteredProducts]);

  return (
    <div className="bg-white pb-20">
      {/* Banner Section */}
      <div
        className="relative h-[200px] sm:h-[300px] md:h-[350px] flex items-center justify-center"
        style={{ backgroundColor: bgColor }}
      >
        <h1 className="text-white text-4xl md:text-5xl font-bold tracking-wide uppercase">
          {category}
        </h1>
      </div>

      {/* Filters and Sorting Section */}
      <div className="container mx-auto px-6 sm:px-10 mt-10 flex flex-wrap items-center justify-between pb-4">
        <p className="text-lg text-gray-800 font-semibold">
          Showing {Math.min(12, sortedProducts.length)} of {sortedProducts.length} products
        </p>
        <div className="relative flex items-center bg-gray-100 px-4 py-2 rounded-full shadow-lg">
          <label className="text-gray-600 text-sm mr-2 font-medium">SORT BY</label>
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

      {/* Product Grid */}
      <div className="container mx-auto px-6 sm:px-10 mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-10">
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
          <button
            className="flex items-center gap-2 px-8 py-3 rounded-full text-white text-lg font-medium shadow-lg hover:opacity-90 transition-all"
            style={{ backgroundColor: bgColor }}
          >
            Explore More
          </button>
        </div>
      )}
    </div>
  );
};

ShopCategory.propTypes = {
  category: PropTypes.string.isRequired,
};

export default ShopCategory;
