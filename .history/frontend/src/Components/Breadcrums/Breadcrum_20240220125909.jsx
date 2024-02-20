import React from "react";
import "./Breadcrum.css";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME{" "}
      <img
        src="https://img.icons8.com/?size=16&id=Y9LBY15WBaoL&format=png"
        alt="left-arrow"
      />{" "}
      SHOP{" "}
      <img
        src="https://img.icons8.com/?size=16&id=Y9LBY15WBaoL&format=png"
        alt="left-arrow"
      />{" "}
      {product.category}{" "}
      <img
        src="https://img.icons8.com/?size=16&id=Y9LBY15WBaoL&format=png"
        alt="left-arrow"
      />{" "}
      {product.name}{" "}
    </div>
  );
};

export default Breadcrum;
