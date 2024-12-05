import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="flex flex-wrap gap-10 p-10">
      {/* Left Section */}
      <div className="flex-1">
        <div className="flex flex-col gap-4">
          {/* Thumbnail Images */}
          <div className="grid grid-cols-2 gap-4">
            <img src={product.image} alt="product-thumbnail" className="w-full rounded-lg"/>
            <img src={product.image} alt="product-thumbnail" className="w-full rounded-lg"/>
            <img src={product.image} alt="product-thumbnail" className="w-full rounded-lg"/>
            <img src={product.image} alt="product-thumbnail" className="w-full rounded-lg"/>
          </div>
        </div>
        {/* Main Image */}
        <div className="mt-6">
          <img
            className="w-full rounded-lg"
            src={product.image}
            alt="product-main"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1">
        <h1 className="text-4xl font-bold">{product.name}</h1>
        
        {/* Star Rating */}
        <div className="flex items-center my-4 gap-2">
          {[...Array(4)].map((_, i) => (
            <img
              key={i}
              src="https://img.icons8.com/?size=48&id=qdQpy48X3Rjv&format=png"
              alt="star"
              className="w-6 h-6"
            />
          ))}
          <img
            src="https://img.icons8.com/?size=48&id=19295&format=png"
            alt="star_dull"
            className="w-6 h-6"
          />
          <p className="text-gray-600">(122)</p>
        </div>

        {/* Prices */}
        <div className="flex items-center gap-4">
          <div className="text-gray-500 line-through text-lg">
            ${product.old_price}
          </div>
          <div className="text-red-500 text-2xl font-semibold">
            ${product.new_price}
          </div>
        </div>

        {/* Description */}
        <div className="my-4 text-gray-700">
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer
          garment.
        </div>

        {/* Size Selector */}
        <div className="my-4">
          <h1 className="text-lg font-semibold">Select Size</h1>
          <div className="flex gap-4 mt-2">
            {["S", "M", "L", "XL", "XXL"].map((size, i) => (
              <div
                key={i}
                className="border border-gray-300 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-200"
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(product.id)}
          className="bg-black text-white px-8 py-3 rounded-lg mt-4 hover:bg-gray-800"
        >
          ADD TO CART
        </button>

        {/* Category and Tags */}
        <p className="mt-4 text-gray-500">
          <span className="font-semibold">Category:</span> Women, T-Shirt, Crop Top
        </p>
        <p className="text-gray-500">
          <span className="font-semibold">Tags:</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
