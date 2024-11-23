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
    if (window.confirm("Are you sure you want to remove this product?")) {
      await fetch("http://localhost:4000/removeproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      await fetchInfo();
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gradient-to-br from-gray-50 to-gray-100 shadow-xl rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
        All Products
      </h1>

      {/* Table Header */}
      <div className="grid grid-cols-6 gap-4 bg-blue-500 text-white font-semibold p-4 rounded-t-lg">
        <p className="col-span-1">Image</p>
        <p className="col-span-1">Title</p>
        <p className="col-span-1">Old Price</p>
        <p className="col-span-1">New Price</p>
        <p className="col-span-1">Category</p>
        <p className="col-span-1 text-center">Remove</p>
      </div>

      {/* Product List */}
      <div className="bg-white divide-y divide-gray-200">
        {allProducts.length > 0 ? (
          allProducts.map((product, index) => (
            <div
              key={index}
              className="grid grid-cols-6 gap-4 items-center p-4 hover:bg-gray-50 transition-all"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 rounded-lg object-cover col-span-1"
              />
              <p className="col-span-1 font-medium text-gray-800">
                {product.name}
              </p>
              <p className="col-span-1 line-through text-red-500">
                ${product.old_price}
              </p>
              <p className="col-span-1 font-semibold text-green-600">
                ${product.new_price}
              </p>
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
          ))
        ) : (
          <p className="text-center py-6 text-gray-500 col-span-6">
            No products found. Please add some products.
          </p>
        )}
      </div>
    </div>
  );
};

export default ListProduct;
