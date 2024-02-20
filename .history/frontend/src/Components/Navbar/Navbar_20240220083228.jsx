import React, { useContext, useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const toggleRef = useRef();

  const dropdown_toggle = (e) => {
    const isVisible = menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");

    if (isVisible) {
      document.addEventListener("click", handleOutSideClick);
    } else {
      document.removeEventListener("click", handleOutSideClick);
    }
  };

  const handleOutSideClick = (e) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target) &&
      !toggleRef.current.contains(e.target)
    ) {
      menuRef.current.classList.remove("nav-menu-visible");
      toggleRef.current.classList.remove("open");
      document.removeEventListener("click", handleOutSideClick);
    }
  };

  useEffect(() => {
    return () => {
      document.removeEventListener("click", handleOutSideClick);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img
          src="https://i.ibb.co/BZbmw7d/Screenshot-2024-02-03-at-12-44-12-pm.png"
          alt="logo"
          style={{ width: "100px" }}
          border="0"
        />
        <p>EcoShop</p>
      </div>
      <img
        ref={toggleRef}
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src="https://img.icons8.com/?size=32&id=zCbCPv6CY90G&format=png"
        alt="dropdown"
      />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men
          </Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womans");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/womans">
            Woman
          </Link>
          {menu === "womans" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kid
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("auth_token")?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace()}}></button>}
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img
            src="https://img.icons8.com/?size=60&id=2212PsH6OEOq&format=png"
            alt="cart-icon"
          />
        </Link>

        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
