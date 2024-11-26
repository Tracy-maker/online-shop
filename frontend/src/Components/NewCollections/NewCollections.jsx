import { useEffect, useState } from "react";
import Item from "../Item/Item";

const NewCollections = () => {
  const [newCollection, setNewCollection] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/newcollections")
      .then((response) => response.json())
      .then((data) => setNewCollection(data));
  }, []);

  return (
    <div className="w-4/5 mx-auto flex flex-col items-center gap-8 mb-24">
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-gray-800 text-4xl font-bold tracking-wider lg:text-3xl md:text-2xl sm:text-xl">
          New Collections
        </h1>
        <p className="text-gray-500 text-lg font-light mt-2 lg:text-base md:text-sm sm:text-xs">
          Discover the latest trends and exclusive styles curated just for you.
        </p>
        <div className="mt-4 w-24 h-1 bg-gray-800 rounded-full mx-auto"></div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-4 gap-8 mt-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:gap-6">
        {newCollection.map((item, i) => (
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

export default NewCollections;
