import { useState } from "react";

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost:4000/allProducts").then((res) => res.json());
  };

  return (
    <div className="list-product">
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
      </div>
    </div>
  );
};

export default ListProduct;
