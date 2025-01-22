import React, { createContext, useEffect, useState } from "react";

// Define the types for products and the context
interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface ShopContextType {
  getTotalCartAmount: () => number;
  getTotalCartItems: () => number;
  all_product: Product[];
  cartItems: { [key: number]: number }; 
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  updateCartQuantity: (itemId: number, quantity: number) => void; 
}

export const ShopContext = createContext<ShopContextType | null>(null);

const getDefaultCart = (): { [key: number]: number } => {
  const cart: { [key: number]: number } = {};
  for (let index = 0; index <= 300; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<{ [key: number]: number }>(getDefaultCart());
  const [all_product, setAllProduct] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/allproducts")
      .then((response) => response.json())
      .then((data) => setAllProduct(data));
  }, []);

  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": localStorage.getItem("auth-token") || "",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };

   // Implement updateCartQuantity
   const updateCartQuantity = (itemId: number, quantity: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: Math.max(quantity, 0) }));
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/removefromcart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": localStorage.getItem("auth-token") || "",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };

  const getTotalCartAmount = (): number => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = all_product.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = (): number => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue: ShopContextType = {
    getTotalCartAmount,
    getTotalCartItems,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    updateCartQuantity, 
  };

  return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
