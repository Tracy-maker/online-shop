import { useEffect, useState } from "react";
import Item from "./Item";

// Define the type for a collection item
interface CollectionItem {
  id: number;
  name: string;
  image: string;
  price: number;
}

const NewCollections: React.FC = () => {
  const [newCollection, setNewCollection] = useState<CollectionItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/newcollections")
      .then((response) => response.json())
      .then((data: CollectionItem[]) => setNewCollection(data))
      .catch((error) => console.error("Error fetching collections:", error));
  }, []);

  return (
    <div className="w-4/5 mx-auto flex flex-col items-center gap-8 mb-24">
      {/* Title Section */}
      <div className="text-center">
        <p className="text-gray-500 text-lg font-light mt-2 lg:text-base md:text-sm sm:text-xs">
          Discover the latest trends and exclusive styles curated just for you.
        </p>
        <div className="mt-4 w-24 h-1 bg-gray-800 rounded-full mx-auto"></div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-4 gap-8 mt-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:gap-6">
        {newCollection.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
