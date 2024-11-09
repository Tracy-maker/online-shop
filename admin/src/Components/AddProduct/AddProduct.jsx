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

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const add_Product = async () => {
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      product.image = responseData.image_url;
      await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {
          data.success ? alert("Product Added") : alert("Failed");
        });
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-10 bg-white shadow-xl rounded-2xl ">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
        Add New Product
      </h2>

      <div className="mb-5">
        <label className="block text-gray-700 font-medium mb-2">
          Product Title
        </label>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Enter product name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 shadow-sm"
        />
      </div>

      <div className="flex gap-5 mb-5">
        <div className="w-1/2">
          <label className="block text-gray-700 font-medium mb-2">
            Original Price
          </label>
          <input
            onChange={changeHandler}
            value={productDetails.old_price}
            type="number"
            name="old_price"
            placeholder="Original price"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 shadow-sm"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-gray-700 font-medium mb-2">
            Offer Price
          </label>
          <input
            value={productDetails.new_price}
            type="number"
            name="new_price"
            placeholder="Offer price"
            onChange={changeHandler}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 shadow-sm"
          />
        </div>
      </div>

      <div className="mb-5">
        <label className="block text-gray-700 font-medium mb-2">Category</label>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 shadow-sm"
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kids">Kids</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Product Image
        </label>
        <div className="flex items-center">
          <label htmlFor="file-input" className="cursor-pointer">
            <img
              src={
                image
                  ? URL.createObjectURL(image)
                  : "https://img.icons8.com/?size=64&id=42879&format=png"
              }
              className="h-36 w-36 rounded-lg object-cover border border-gray-300 shadow-sm"
              alt="Product"
            />
          </label>
          <input
            onChange={imageHandler}
            type="file"
            name="image"
            id="file-input"
            className="hidden"
          />
          <label
            htmlFor="file-input"
            className="ml-4 bg-blue-500 text-white px-5 py-2 rounded-lg cursor-pointer hover:bg-blue-600 transition-colors shadow-sm"
          >
            Upload Image
          </label>
        </div>
      </div>

      <button
        onClick={add_Product}
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all font-medium shadow-lg"
      >
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
