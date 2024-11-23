import { useState } from "react";

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });
  const [loading, setLoading] = useState(false); 

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!productDetails.name || !productDetails.new_price || !productDetails.old_price || !image) {
      alert("Please fill in all required fields and upload an image.");
      return false;
    }
    return true;
  };

  const add_Product = async () => {
    if (!validateForm()) return;

    setLoading(true); 

    try {
      // Upload the image
      const formData = new FormData();
      formData.append("product", image);

      const uploadResponse = await fetch("http://localhost:4000/upload", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!uploadResponse.ok) {
        throw new Error("Image upload failed.");
      }

      const uploadData = await uploadResponse.json();
      if (!uploadData.success) {
        throw new Error("Image upload failed.");
      }

      // Set the image URL in product details
      const product = { ...productDetails, image: uploadData.image_url };

      // Add the product
      const addResponse = await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (!addResponse.ok) {
        throw new Error("Failed to add product.");
      }

      const addData = await addResponse.json();
      if (addData.success) {
        alert("Product successfully added!");
        setProductDetails({ name: "", image: "", category: "women", new_price: "", old_price: "" });
        setImage(null); // Clear image preview
      } else {
        throw new Error("Failed to add product.");
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Add New Product
      </h2>

      {/* Product Title */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">
          Product Title <span className="text-red-500">*</span>
        </label>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Enter product name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 transition shadow-sm"
        />
      </div>

      {/* Price Inputs */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-gray-600 font-medium mb-2">
            Original Price <span className="text-red-500">*</span>
          </label>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type="number"
            name="old_price"
            placeholder="Enter original price"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 transition shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium mb-2">
            Offer Price <span className="text-red-500">*</span>
          </label>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            type="number"
            name="new_price"
            placeholder="Enter offer price"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 transition shadow-sm"
          />
        </div>
      </div>

      {/* Category Dropdown */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Category</label>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 transition shadow-sm"
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kids">Kids</option>
        </select>
      </div>

      {/* Image Upload */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">
          Product Image <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center gap-4">
          <label htmlFor="file-input" className="cursor-pointer">
            <img
              src={
                image
                  ? URL.createObjectURL(image)
                  : "https://img.icons8.com/?size=64&id=42879&format=png"
              }
              alt="Product"
              className="h-36 w-36 rounded-lg border border-gray-300 object-cover shadow-sm"
            />
          </label>
          <input
            type="file"
            id="file-input"
            name="image"
            onChange={imageHandler}
            className="hidden"
          />
          <label
            htmlFor="file-input"
            className="bg-blue-500 text-white px-5 py-2 rounded-lg cursor-pointer hover:bg-blue-600 transition-colors shadow-sm"
          >
            Upload Image
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={add_Product}
        disabled={loading}
        className={`w-full py-3 rounded-lg font-semibold shadow-md transition-all ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        {loading ? "Adding Product..." : "Add Product"}
      </button>
    </div>
  );
};

export default AddProduct;
