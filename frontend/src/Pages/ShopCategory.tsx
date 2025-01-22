import { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item";
import Filter from "../Components/Filter";
import CategorySection from "../Components/CategorySection";

// Define types for the product and context
interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  subCategory: string;
  category: string;
  color: string;
  size: string;
}

interface ShopContextType {
  all_product: Product[];
}

interface ShopCategoryProps {
  category: "women" | "men" | "kids" | string;
}

const ShopCategory: React.FC<ShopCategoryProps> = ({ category }) => {
  const shopContext = useContext(ShopContext) as ShopContextType | null;

  if (!shopContext) {
    throw new Error(
      "ShopContext is null. Please ensure ShopContextProvider is properly set up."
    );
  }

  const { all_product } = shopContext;

  const [sortOption, setSortOption] = useState<
    "Relevant" | "Low to High" | "High to Low"
  >("Relevant");
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const categoryColors: Record<string, string> = {
    women: "#9297c8",
    men: "#b6c796",
    kids: "#f7cb9a",
    accessories: "#36a7ee",
    default: "#f6a7ec",
  };

  const categoryImages: Record<string, string> = {
    women:
      "https://i.ibb.co/dKJMHgd/20250109-1049-Lavender-Serenity-simple-compose-01jh454qxvedya32j870kb0wcf.gif",
    men: "https://i.ibb.co/S70tt03/20250109-1040-Mountain-Summit-Triumph-simple-compose-01jh44mphwe7m8nyjshr1cmbs0.gif",
    kids: "https://i.ibb.co/Tw0cjJC/20250109-1110-Children-Playing-Outdoors-storyboard-01jh46bbg6e7jb52sc3cs2beae.gif",
  };

  const backgroundColor: string =
    categoryColors[category] || categoryColors.default;

  const bannerImage: string =
    categoryImages[category] || categoryImages["women"];

  const toggleColor = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setSelectedColors((prev) =>
      prev.includes(value)
        ? prev.filter((color) => color !== value)
        : [...prev, value]
    );
  };

  const toggleSize = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setSelectedSizes((prev) =>
      prev.includes(value)
        ? prev.filter((size) => size !== value)
        : [...prev, value]
    );
  };

  const filterProducts = (products: Product[]): Product[] => {
    return products
      .filter((item) => item.category === category)
      .filter((item) =>
        selectedColors.length > 0 ? selectedColors.includes(item.color) : true
      )
      .filter((item) =>
        selectedSizes.length > 0 ? selectedSizes.includes(item.size) : true
      );
  };

  const sortProducts = (products: Product[]): Product[] => {
    const sorted = [...products];
    switch (sortOption) {
      case "Low to High":
        return sorted.sort((a, b) => a.price - b.price);
      case "High to Low":
        return sorted.sort((a, b) => b.price - a.price);
      default:
        return sorted;
    }
  };

  const filteredProducts = filterProducts(all_product);
  const sortedProducts = sortProducts(filteredProducts);

  return (
    <div className="bg-white pb-20">
      {/* Banner Section */}
      <div
        className="relative h-[600px] sm:h-[700px] md:h-[800px] flex items-center justify-center"
        style={{
          background: `linear-gradient(to bottom, ${backgroundColor} 40%, #fbf9f4 40%)`,
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <img
            src={bannerImage}
            alt="Category"
            className="relative -top-4 w-[90%] sm:w-[75%] md:w-[55%] h-auto object-cover border-4 border-gray-200 shadow-2xl rounded-lg"
          />
        </div>
        {/* Animated Name */}
        <div className="absolute bottom-8 sm:bottom-12 text-center animate-bounce">
          <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 uppercase">
            {category}
          </h4>
        </div>
      </div>

      {/* Filters and Product Count Section */}
      <div
        className={`w-full px-8 sm:px-10  flex justify-between items-center rounded-lg`}
        style={{
          backgroundColor: `${backgroundColor}`,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8))`,
        }}
      >
        <p className="text-lg text-gray-800 font-semibold">
          Showing {Math.min(12, sortedProducts.length)} of{" "}
          {sortedProducts.length} products
        </p>
        <button
          onClick={() => setShowFilter(true)}
          className="p-3 bg-white text-white rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105"
          aria-label="Open filter panel"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/124/124533.png"
            alt="Filter"
            className="h-6 w-6"
          />
        </button>
      </div>

      {/* Product Grid */}
      <div className="w-full px-8 sm:px-10 mt-10 flex flex-wrap items-start">
        <div className="flex-1">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-10">
            {sortedProducts.slice(0, 12).map((item) => (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
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

      {/* Filter Sidebar */}
      <div
        className={`fixed top-20 right-0 h-full w-50 bg-white shadow-lg transform ${
          showFilter ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="p-4 flex justify-between items-center border-b bg-white shadow-sm rounded-md">
          <button
            onClick={() => setShowFilter(false)}
            className="text-gray-500 hover:text-gray-800 transition-colors duration-200 p-1 rounded-md hover:bg-gray-100"
            aria-label="Close filter panel"
          >
            X
          </button>
          <div className="flex-grow">
            <Filter
              showFilter={showFilter}
              setShowFilter={setShowFilter}
              toggleColor={toggleColor}
              toggleSize={toggleSize}
              sortOption={sortOption}
              setSortOption={setSortOption}
            />
          </div>
        </div>
      </div>

      {/* Category Section */}
      <CategorySection currentCategory={category} />
    </div>
  );
};

export default ShopCategory;
