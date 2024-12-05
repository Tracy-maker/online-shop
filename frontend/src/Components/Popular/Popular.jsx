import { useEffect, useState } from "react";
import PropTypes from "prop-types"; // 导入 PropTypes
import Item from "../Item/Item";

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

  const getDescription = (category) => {
    switch (category) {
      case "Women":
        return "Explore our most-loved styles designed just for women.";
      case "Men":
        return "Find the best looks that men love.";
      case "Kids":
        return "Discover playful and stylish picks for kids.";
      case "Accessories":
        return "Elevate your outfit with our top accessories.";
      default:
        return "Explore our popular products.";
    }
  };

  return (
    <div className="w-4/5 mx-auto flex flex-col items-center gap-8 mb-24">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-gray-800 text-4xl font-bold tracking-wide lg:text-3xl md:text-2xl sm:text-xl">
          Popular in {category}
        </h1>
        <p className="text-gray-600 text-lg font-light mt-2 lg:text-base md:text-sm sm:text-xs">
          {getDescription(category)}
        </p>
        <div className="mt-4 w-24 h-1 bg-gray-800 rounded-full mx-auto"></div>
      </div>

      {/* Products Section */}
      {isLoading ? (
        <div className="text-gray-600 text-lg font-light mt-8">Loading...</div>
      ) : (
        <div className="grid grid-cols-4 gap-8 mt-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {popularProducts.map((item, i) => (
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
      )}
    </div>
  );
};

Popular.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Popular;
