import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

interface ItemProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

const Item: React.FC<ItemProps> = ({ id, name, price, image }) => {
  return (
    <div className="w-[280px] hover:scale-105 transition-transform duration-600 relative group">
      <div className="relative">
        <Link to={`/product/${id}`}>
          <img
            onClick={() => window.scrollTo(0, 0)}
            src={image}
            alt={name}
            className="w-[280px] md:w-[220px] sm:w-[160px] rounded-md"
          />
        </Link>

        <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition"
            aria-label="Add to Wishlist"
          >
            <AiOutlineHeart className="w-5 h-5 text-gray-700" />
          </button>
          <button
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition"
            aria-label="Add to Cart"
          >
            <AiOutlineShoppingCart className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      <p className="my-1 text-sm sm:text-xs">{name}</p>

      <div className="text-gray-800 text-lg font-semibold">
        ${price.toFixed(2)}
      </div>
    </div>
  );
};

export default Item;
