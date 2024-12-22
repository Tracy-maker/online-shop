import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item";
import Filter from "../Components/Filter";

const ShopCategory = ({ category }) => {
  const { all_product } = useContext(ShopContext);
  const [sortOption, setSortOption] = useState("Relevant");
  const [showFilter, setShowFilter] = useState(false);

  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedUsage, setSelectedUsage] = useState([]);

  const categoryColors = {
    women: "#9297c8",
    men: "#ee7036",
    kid: "#f7cb9a",
    accessories: "#b6c796",
    default: "#f6a7ec",
  };

  const backgroundColor = categoryColors[category] || categoryColors.default;

  // Toggle Color Filter
  const toggleColor = (e) => {
    const { value } = e.target;
    setSelectedColors((prev) =>
      prev.includes(value) ? prev.filter((color) => color !== value) : [...prev, value]
    );
  };

  // Toggle Size Filter
  const toggleSize = (e) => {
    const { value } = e.target;
    setSelectedSizes((prev) =>
      prev.includes(value) ? prev.filter((size) => size !== value) : [...prev, value]
    );
  };

  // Toggle Usage Filter
  const toggleUsage = (e) => {
    const { value } = e.target;
    setSelectedUsage((prev) =>
      prev.includes(value) ? prev.filter((usage) => usage !== value) : [...prev, value]
    );
  };

  // Filter and Sort Logic
  const filterProducts = (products) => {
    return products
      .filter((item) => item.category === category)
      .filter((item) =>
        selectedColors.length > 0 ? selectedColors.includes(item.color) : true
      )
      .filter((item) =>
        selectedSizes.length > 0 ? selectedSizes.includes(item.size) : true
      )
      .filter((item) =>
        selectedUsage.length > 0 ? selectedUsage.includes(item.usage) : true
      );
  };

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

  const filteredProducts = filterProducts(all_product);
  const sortedProducts = sortProducts([...filteredProducts]);

  return (
    <div className="bg-white pb-20">
      {/* Banner Section */}
      <div
        className="relative h-[200px] sm:h-[250px] md:h-[300px] flex items-center justify-center"
        style={{ backgroundColor }}
      >
        <h1 className="text-white text-4xl md:text-5xl font-bold tracking-wide uppercase">
          {category}
        </h1>
      </div>

      {/* Filters and Sorting Section */}
      <div className="w-full px-8 sm:px-10 mt-10 flex flex-wrap items-start">


        {/* Filter Sidebar */}
        <Filter
          showFilter={showFilter}
          setShowFilter={setShowFilter}
          toggleColor={toggleColor}
          toggleSize={toggleSize}
          toggleUsage={toggleUsage}
        />

        {/* Product Grid */}
        <div className="flex-1 ml-0 sm:ml-10">
          <div className="flex justify-between items-center text-base sm:text-2xl mb-4">
            <p className="text-lg text-gray-800 font-semibold">
              Showing {Math.min(12, sortedProducts.length)} of{" "}
              {sortedProducts.length} products
            </p>
            <div className="relative flex items-center bg-gray-100 px-4 py-2 rounded-full shadow-lg">
              <label className="text-gray-600 text-sm mr-2 font-medium">
                Sort by:
              </label>
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

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-10">
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
                style={{ backgroundColor }}
              >
                Explore More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ShopCategory.propTypes = {
  category: PropTypes.string.isRequired,
};

export default ShopCategory;
