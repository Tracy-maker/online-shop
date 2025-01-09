import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Popular = ({ category }) => {
  const [popularProducts, setPopularProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPopularProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://localhost:4000/popularin${category.toLowerCase()}`
        );
        const data = await response.json();
        setPopularProducts(data);
      } catch (error) {
        console.error("Failed to fetch popular products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPopularProducts();
  }, [category]);

  return (
    <div className="w-4/5 mx-auto flex flex-col items-center gap-12 mb-24">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-gray-800 text-5xl font-extrabold tracking-wide lg:text-4xl md:text-3xl sm:text-2xl">
          Popular in {category}
        </h1>
        <p className="text-gray-600 text-lg font-light mt-2 lg:text-base md:text-sm sm:text-xs">
          Explore our popular picks for {category.toLowerCase()}.
        </p>
        <div className="mt-4 w-28 h-1 bg-gray-800 rounded-full mx-auto"></div>
      </div>

      {/* Products Section */}
      {isLoading ? (
        <div className="text-gray-600 text-lg font-light mt-8">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 gap-8">
          {popularProducts.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="relative bg-gray-100 rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex items-center"
            >
              {/* Product Image */}
              <div className="relative w-2/3 h-64">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <p className="text-white text-lg font-bold px-4">{item.name}</p>
                </div>
              </div>

              {/* Button */}
              <div className="w-1/3 p-6 flex justify-center items-center">
                <button className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-full shadow-md hover:bg-gray-600 transition-all lg:px-5 lg:py-2 lg:text-sm">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

Popular.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Popular;
