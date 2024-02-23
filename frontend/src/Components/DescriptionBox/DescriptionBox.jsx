import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122) </div>
      </div>
      <div className="descriptionbox-description">
        An e-commerce website is a platform that is facilitated for the buying
        and selling of products or services over the Internet. It is served as a
        virtual marketplace where products can be showcased by businesses and
        individuals, customers can be interacted with, and transactions can be
        conducted without the need for a physical presence. Immense popularity
        has been gained by e-commerce websites due to their convenience,
        accessibility, and the global reach they offer. Products or services,
        along with detailed descriptions, images, prices, and any available
        variations (e.g., sizes, colors), are typically displayed on these
        websites. A dedicated page with relevant information is usually provided
        for each product.
      </div>
    </div>
  );
};

export default DescriptionBox;
