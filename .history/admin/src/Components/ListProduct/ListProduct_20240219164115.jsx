import { useEffect, useState } from "react";
import "./ListProduct.css";

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

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
        {allProducts.map((product, index) => {
          return (
            <div
              key={index}
              className="listproduct-format-main listproduct-format"
            >
              <img
                src={product.image}
                alt=""
                className="listproduct-product-icon"
              />
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img
                src="https://img.icons8.com/?size=30&id=71200&format=png"
                alt=""
                className="listproduct-remove-icon"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
