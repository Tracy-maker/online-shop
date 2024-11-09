import { useEffect, useState } from "react";

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  const removeProduct = async (id) => {
    await fetch("http://localhost:4000/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchInfo(); 
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-3 bg-white shadow-md rounded-lg ">
      <h1 className="text-2xl font-semibold text-center border-b pb-4 mb-6 text-gray-700">
        All Products
      </h1>

      <div className="grid grid-cols-6 gap-4 bg-gray-100 font-semibold p-4 rounded-t-md">
        <p className="col-span-1 text-gray-600">Product</p>
        <p className="col-span-1 text-gray-600">Title</p>
        <p className="col-span-1 text-gray-600">Old Price</p>
        <p className="col-span-1 text-gray-600">New Price</p>
        <p className="col-span-1 text-gray-600">Category</p>
        <p className="col-span-1 text-gray-600 text-center">Remove</p>
      </div>

      <div className="divide-y">
        {allProducts.map((product, index) => (
          <div key={index} className="grid grid-cols-6 gap-4 items-center p-4 hover:bg-gray-50 transition-all">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 rounded-md object-cover col-span-1"
            />
            <p className="col-span-1 text-gray-800">{product.name}</p>
            <p className="col-span-1 line-through text-red-500">${product.old_price}</p>
            <p className="col-span-1 font-semibold text-green-600">${product.new_price}</p>
            <p className="col-span-1 text-gray-600">{product.category}</p>
            <button
              onClick={() => removeProduct(product.id)}
              className="col-span-1 flex justify-center items-center text-red-500 hover:text-red-600 transition-colors"
            >
              <img
                src="https://img.icons8.com/?size=30&id=71200&format=png"
                alt="remove"
                className="w-6 h-6"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;