import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";

const CartItems: React.FC = () => {
  const context = useContext(ShopContext);

  if (!context) {
    // Handle null context gracefully
    return <div>No shop context available.</div>;
  }

  const {
    getTotalCartAmount,
    all_product,
    cartItems,
    removeFromCart,
    updateCartQuantity,
  } = context;

  const totalAmount = getTotalCartAmount();

  return (
    <div className="max-w-7xl mx-auto px-6 py-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">Your Cart</h1>
      {totalAmount === 0 ? (
        <div className="text-center py-20">
          <p className="text-lg text-gray-600 mb-6">
            Your cart is currently empty.
          </p>
          <Link
            to="/"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          {/* Render cart items */}
          {all_product.map((item) => {
            if (cartItems[item.id] > 0) {
              return (
                <div key={item.id} className="py-5 border-b border-gray-300">
                  <div className="grid grid-cols-6 items-center gap-8">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 object-cover rounded-md"
                    />
                    <p className="text-sm text-gray-800 font-medium">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center">
                      <button
                        onClick={() =>
                          updateCartQuantity(item.id, cartItems[item.id] - 1)
                        }
                        className="px-3 py-1 bg-gray-100 rounded-l-md"
                      >
                        -
                      </button>
                      <span className="px-4 py-2">{cartItems[item.id]}</span>
                      <button
                        onClick={() =>
                          updateCartQuantity(item.id, cartItems[item.id] + 1)
                        }
                        className="px-3 py-1 bg-gray-100 rounded-r-md"
                      >
                        +
                      </button>
                    </div>
                    <p>${(item.price * cartItems[item.id]).toFixed(2)}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            }
            return null;
          })}
          <div className="mt-6 text-right">
            <h2 className="text-xl font-bold">
              Total: ${totalAmount.toFixed(2)}
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItems;
