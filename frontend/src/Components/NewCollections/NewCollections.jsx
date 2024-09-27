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
    <div className="flex flex-col items-center gap-2 mb-24">
      <h1 className="text-gray-900 text-5xl font-semibold lg:text-4xl md:text-3xl sm:text-2xl">
        NEW COLLECTIONS
      </h1>
      <hr className="w-52 h-1.5 rounded-lg bg-gray-800 lg:w-40 lg:h-1 md:w-32 md:h-[3px] sm:w-24" />

      <div className="grid grid-cols-4 gap-8 mt-12 lg:gap-5 md:gap-4 sm:grid-cols-2">
        {newCollection.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollections;
