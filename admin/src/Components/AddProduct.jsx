import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [productDetails, setProductDetails] = useState({
    name: "",
    description: "",
    category: "women",
    subcategory: "tops",
    price: "",
    color: "Black",
    usage: "work",
    sizes: { S: 0, M: 0, L: 0, XL: 0, XXL: 0 },
    bestSeller: false,
    newProduct: false,
  });
  const [loading, setLoading] = useState(false);

  const imageHandler = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 4) {
      alert("You can upload a maximum of 4 images.");
      return;
    }
    setImages(selectedFiles);
  };

  const changeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.startsWith("size-")) {
      const size = name.replace("size-", "");
      setProductDetails({
        ...productDetails,
        sizes: { ...productDetails.sizes, [size]: parseInt(value, 10) || 0 },
      });
    } else if (type === "checkbox") {
      setProductDetails({ ...productDetails, [name]: checked });
    } else {
      setProductDetails({ ...productDetails, [name]: value });
    }
  };

  const validateForm = () => {
    if (
      !productDetails.name ||
      !productDetails.description ||
      !productDetails.price ||
      images.length === 0
    ) {
      alert(
        "Please fill in all required fields and upload at least one image."
      );
      return false;
    }
    return true;
  };

  const add_Product = async () => {
    if (!validateForm()) return;

    setLoading(true);

    try {
      const formData = new FormData();
      images.forEach((image) => formData.append("images", image));

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

      const product = { ...productDetails, images: uploadData.image_urls };
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
        setProductDetails({
          name: "",
          description: "",
          category: "women",
          subcategory: "tops",
          price: "",
          color: "Black",
          usage: "work",
          sizes: { S: 0, M: 0, L: 0, XL: 0, XXL: 0 },
          bestSeller: false,
          newProduct: false,
        });
        setImages([]);
      } else {
        throw new Error("Failed to add product.");
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-12 bg-gradient-to-br from-gray-50 to-gray-100 shadow-xl rounded-2xl">
      {/* Go Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-6 py-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition"
      >
        Go Back
      </button>

      <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
        Add New Product
      </h2>

      {/* Form Fields */}
      <div className="space-y-8">
        {/* Product Name */}
        <div>
          <label className="block text-lg font-medium mb-2">
            Product Name <span className="text-red-500">*</span>
          </label>
          <input
            value={productDetails.name}
            onChange={changeHandler}
            type="text"
            name="name"
            placeholder="Enter product name"
            className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 text-gray-700"
          />
        </div>

        {/* Product Description */}
        <div>
          <label className="block text-lg font-medium mb-2">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            value={productDetails.description}
            onChange={changeHandler}
            name="description"
            rows="4"
            placeholder="Enter product description"
            className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 text-gray-700"
          ></textarea>
        </div>

        {/* Category and Subcategory */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium mb-2">Category</label>
            <select
              value={productDetails.category}
              onChange={changeHandler}
              name="category"
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 text-gray-700"
            >
              <option value="women">Women</option>
              <option value="men">Men</option>
              <option value="kids">Kids</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>
          <div>
            <label className="block text-lg font-medium mb-2">
              Subcategory
            </label>
            <select
              value={productDetails.subcategory}
              onChange={changeHandler}
              name="subcategory"
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 text-gray-700"
            >
              <option value="tops">Tops</option>
              <option value="pants">Pants</option>
              <option value="skirts">Skirts</option>
            </select>
          </div>
        </div>

        {/* Price */}
        <div>
          <label className="block text-lg font-medium mb-2">
            Price (in AUD) <span className="text-red-500">*</span>
          </label>
          <input
            value={productDetails.price}
            onChange={changeHandler}
            type="number"
            name="price"
            placeholder="Enter product price"
            className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 text-gray-700"
          />
        </div>
        {/* Color Dropdown */}
        <div>
          <label className="block text-lg font-medium mb-2">Color</label>
          <select
            value={productDetails.color}
            onChange={changeHandler}
            name="color"
            className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 text-gray-700"
          >
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Purple">Purple</option>
            <option value="Pink">Pink</option>
            <option value="Burgundy">Burgundy</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Orange">Orange</option>
            <option value="Beige">Beige</option>
            <option value="Green">Green</option>
            <option value="Brown">Brown</option>
            <option value="Yellow">Yellow</option>
            <option value="Grey">Grey</option>
            <option value="Multicolor">Multicolor</option>
            <option value="Brown Gray">Brown Gray</option>
          </select>
        </div>

        {/* Usage and Sizes */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium mb-2">Usage</label>
            <select
              value={productDetails.usage}
              onChange={changeHandler}
              name="usage"
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 text-gray-700"
            >
              <option value="work">Work</option>
              <option value="date">Date</option>
              <option value="anniversary">Anniversary</option>
            </select>
          </div>
          <div>
            <label className="block text-lg font-medium mb-2">Sizes</label>
            <div className="grid grid-cols-5 gap-4">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <div key={size} className="flex flex-col items-center">
                  <label className="text-sm">{size}</label>
                  <input
                    type="number"
                    name={`size-${size}`}
                    value={productDetails.sizes[size] || 0}
                    onChange={changeHandler}
                    min="0"
                    className="w-16 px-2 py-1 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 text-gray-700 text-center"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-lg font-medium mb-2">
            Product Images (1-4) <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="w-24 h-24 rounded-lg border border-gray-300 bg-gray-50 flex items-center justify-center"
              >
                {images[index] ? (
                  <img
                    src={URL.createObjectURL(images[index])}
                    alt={`Preview ${index + 1}`}
                    className="object-cover w-full h-full rounded-lg"
                  />
                ) : (
                  <span className="text-gray-400">No Image</span>
                )}
              </div>
            ))}
          </div>
          <input
            type="file"
            name="images"
            multiple
            accept="image/*"
            onChange={imageHandler}
            className="mt-4"
          />
        </div>

        {/* Best Seller */}
        <div className="flex gap-5">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="bestSeller"
              checked={productDetails.bestSeller}
              onChange={changeHandler}
              className="focus:ring-2 focus:ring-blue-500"
            />
            Add to Best Seller
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="newProduct"
              checked={productDetails.newProduct}
              onChange={changeHandler}
              className="focus:ring-2 focus:ring-blue-500"
            />
            Add to New Product
          </label>
        </div>

        {/* Add Button */}
        <button
          onClick={add_Product}
          disabled={loading}
          className={`w-full py-4 rounded-lg font-semibold shadow-md transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          {loading ? "Adding Product..." : "Add Product"}
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
