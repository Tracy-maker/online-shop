import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img
          src="https://img.icons8.com/?size=60&id=AGeG6Wx3Id3W&format=png"
          alt="logo"
        />
        <p>Rimberio ONLINE SOLUTION</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img
            src="https://img.icons8.com/?size=60&id=Plswr633TJUP&format=png"
            alt="instagram"
          />
        </div>
        <div className="footer-icons-container">
          <img
            src="https://img.icons8.com/?size=60&id=nd6SS1Eo5syT&format=png"
            alt="Facebook"
          />
        </div>
        <div className="footer-icons-container">
          <img
            src="https://img.icons8.com/?size=60&id=TDvCl4bDEGpX&format=png"
            alt="Tik tok"
          />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>copyright @ 2023 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
