import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hand-hand-icon">
            <p>new</p>
            <img
              src="https://img.icons8.com/?size=80&id=7wGVZVr6WbIO&format=png"
              alt="hand-icon"
            />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>

        <div className="hero-latest-btn">
          <div>Latest Collection</div>

          <img
            src="https://img.icons8.com/?size=60&id=pmL4uEZdVEpg&format=png"
            alt="arrow"
          />
        </div>
      </div>
      <div className="hero-right">
        <video
          src="https://player.vimeo.com/external/428946388.hd.mp4?s=93f3b8d625dd7d222135ef298ae2695136f8ec0e&profile_id=174&oauth2_token_id=57447761s"
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

export default Hero;
