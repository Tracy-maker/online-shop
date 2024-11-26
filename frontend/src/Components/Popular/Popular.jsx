import { useEffect, useState } from "react";
import Item from "../Item/Item";

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/popularinwomen")
      .then((response) => response.json())
      .then((data) => setPopularProducts(data));
  }, []);

  return (
    <div className="w-4/5 mx-auto flex flex-col items-center gap-8 mb-24">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-gray-800 text-4xl font-bold tracking-wide lg:text-3xl md:text-2xl sm:text-xl">
          Popular in Women
        </h1>
        <p className="text-gray-600 text-lg font-light mt-2 lg:text-base md:text-sm sm:text-xs">
          Explore our most-loved styles designed just for women.
        </p>
        <div className="mt-4 w-24 h-1 bg-gray-800 rounded-full mx-auto"></div>
      </div>

      {/* Products Section */}
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
    </div>
  );
};

export default Popular;
