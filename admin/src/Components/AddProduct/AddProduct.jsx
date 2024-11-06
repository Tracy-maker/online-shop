import { useState } from "react";

const AddProduct = () => {
  const [image, setImage] = useState(false);
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
    <div className="max-w-3xl mx-auto p-10 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">Add New Product</h2>
      
      <div className="mb-4">
        <label className="block text-gray-600 mb-2">Product Title</label>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Enter product name"
          className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      
      <div className="flex gap-6 mb-4">
        <div className="w-1/2">
          <label className="block text-gray-600 mb-2">Price</label>
          <input
            onChange={changeHandler}
            value={productDetails.old_price}
            type="text"
            name="old_price"
            placeholder="Enter original price"
            className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-gray-600 mb-2">Offer Price</label>
          <input
            value={productDetails.new_price}
            type="text"
            name="new_price"
            placeholder="Enter offer price"
            onChange={changeHandler}
            className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-600 mb-2">Product Category</label>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kids">Kids</option>
        </select>
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-600 mb-2">Product Image</label>
        <label htmlFor="file-input">
          <img
            src={
              image
                ? URL.createObjectURL(image)
                : "https://img.icons8.com/?size=64&id=42879&format=png"
            }
            className="h-56 w-56 rounded-md object-cover border border-gray-300 p-2 mb-4"
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
          className="bg-blue-500 text-white px-6 py-2 rounded-md cursor-pointer hover:bg-blue-600"
        >
          Upload Image
        </label>
      </div>

      <button
        onClick={add_Product}
        className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition-colors"
      >
        ADD
      </button>
    </div>
  );
};

export default AddProduct;
