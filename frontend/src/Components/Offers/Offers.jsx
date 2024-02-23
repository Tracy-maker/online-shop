import React from "react";
import "./Offers.css";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <video
          src="https://player.vimeo.com/external/436029099.sd.mp4?s=b355c6440b90184699465959df38c350f1a3658b&profile_id=165&oauth2_token_id=57447761"
          autoPlay
          muted
          loop
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Offers;
