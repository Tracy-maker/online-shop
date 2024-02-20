import { useState } from "react";
import "./AddProduct.css";

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

  const Add_Product = async () => {
    console.log(productDetails);
  };

  return (
    <div className="add-product">
      <div className="add-product-itemfield">
        <p>Product title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Type here"
        />
      </div>
      <div className="add-product-price">
        <div className="add-product-itemfield">
          <p>Price</p>
          <input
            onChange={changeHandler}
            value={productDetails.old_price}
            type="text"
            name="old_price"
            placeholder="Type here"
          />
        </div>
        <div className="add-product-itemfield">
          <p>Offer Price</p>
          <input
            value={productDetails.new_price}
            type="text"
            name="new_price"
            placeholder="Type here"
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="add-product-itemfield">
        <p>Product Category</p>
        <select name="category" className="add-product-selector">
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kids">Kid</option>
        </select>
      </div>
      <div className="add-product-itemfield">
        <label htmlFor="file-input">
          <img
            src={
              image
                ? URL.createObjectURL(image)
                : "https://img.icons8.com/?size=80&id=uYiHjFyetVvU&format=png"
            }
            className="add-product-thumbnail-img"
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <button className="add-product-btn">ADD</button>
    </div>
  );
};

export default AddProduct;
