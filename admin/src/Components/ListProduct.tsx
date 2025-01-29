import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Define types for Product
interface Product {
  id: string;
  name: string;
  image: string;
  old_price: number;
  new_price: number;
  category: string;
}

const ListProduct: React.FC = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]); // Explicitly type as an array of Product
  const navigate = useNavigate();

  // Fetch products from the server
  const fetchInfo = async (): Promise<void> => {
    try {
      const response = await fetch("http://localhost:4000/allproducts");
      const data: Product[] = await response.json(); // Explicitly type as Product[]
      setAllProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  // Remove a product
  const removeProduct = async (id: string): Promise<void> => {
    if (window.confirm("Are you sure you want to remove this product?")) {
      try {
        await fetch("http://localhost:4000/removeproduct", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        });
        await fetchInfo(); // Refresh the product list after removal
      } catch (error) {
        console.error("Failed to remove product:", error);
      }
    }
  };

  // Fetch products on component mount
  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Go Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-900 text-white font-semibold rounded-md shadow hover:bg-gray-700 transition"
      >
        Go Back
      </button>

      <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
        Product List
      </h1>

      {/* Table Header */}
      <div className="grid grid-cols-6 gap-4 bg-gray-900 text-white font-medium p-4 rounded-t-md">
        <p className="text-center">Image</p>
        <p className="text-center">Title</p>
        <p className="text-center">Old Price</p>
        <p className="text-center">New Price</p>
        <p className="text-center">Category</p>
        <p className="text-center">Action</p>
      </div>

      {/* Product List */}
      <div className="divide-y divide-gray-200">
        {allProducts.length > 0 ? (
          allProducts.map((product) => (
            <div
              key={product.id}
              className="grid grid-cols-6 gap-4 items-center p-4 hover:bg-gray-50 transition"
            >
              {/* Product Image */}
              <div className="flex justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-14 h-14 rounded-md object-cover"
                />
              </div>

              {/* Product Details */}
              <p className="text-gray-800 font-medium text-center">
                {product.name}
              </p>
              <p className="text-red-500 line-through text-center">
                ${product.old_price}
              </p>
              <p className="text-green-600 font-semibold text-center">
                ${product.new_price}
              </p>
              <p className="text-gray-600 text-center">{product.category}</p>

              {/* Action Button */}
              <div className="flex justify-center">
                <button
                  onClick={() => removeProduct(product.id)}
                  className="text-red-500 hover:text-red-600 transition"
                >
                  <img
                    src="https://img.icons8.com/?size=30&id=71200&format=png"
                    alt="remove"
                    className="w-5 h-5"
                  />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center py-6 text-gray-500">
            No products found. Please add some products.
          </p>
        )}
      </div>
    </div>
  );
};

export default ListProduct;
