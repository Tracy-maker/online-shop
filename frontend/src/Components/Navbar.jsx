import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [searchQuery, setSearchQuery] = useState("");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const toggleRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const dropdown_toggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOutSideClick = (e) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target) &&
      !toggleRef.current.contains(e.target)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("click", handleOutSideClick);
    } else {
      document.removeEventListener("click", handleOutSideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutSideClick);
    };
  }, [isMenuOpen]);

  return (
    <nav className="bg-white text-black shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/Home" className="flex items-center gap-3">
          <span className="text-lg md:text-2xl font-bold text-gray-800">
            Rimberio
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-4 lg:space-x-8 font-medium">
          {["Women", "Men", "Kids", "About", "Contact"].map((label, index) => (
            <li key={index}>
              <Link
                to={`/${label.toLowerCase()}`}
                className={`hover:text-gray-700 ${
                  menu === label.toLowerCase() ? "text-black font-semibold" : ""
                }`}
                onClick={() => setMenu(label.toLowerCase())}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Cart Icon */}
        <div className="flex items-center gap-4 md:gap-6">
          <Link to="/cart" className="relative">
            <img
              src="https://img.icons8.com/material-rounded/24/shopping-cart.png"
              alt="cart-icon"
              className="w-6"
            />

            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md">
              {getTotalCartItems()}
            </span>
          </Link>

          {/* Search Button */}
          <button
            className="bg-gray-300 p-2 rounded-lg hover:bg-gray-400 transition"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <img
              src="https://img.icons8.com/?size=32&id=7645&format=png"
              alt="search-icon"
              className="w-5"
            />
          </button>

          {/* Login/Logout Button */}
          {localStorage.getItem("auth-token") ? (
            <button
              onClick={() => {
                localStorage.removeItem("auth-token");
                window.location.replace("/");
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={toggleRef}
          onClick={dropdown_toggle}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <img
            src={
              isMenuOpen
                ? "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-round-64.png"
                : "https://cdn1.iconfinder.com/data/icons/neutro-essential/32/menu-64.png"
            }
            alt="menu-icon"
            className="w-6"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-white shadow-lg mt-2 rounded-lg overflow-hidden"
        >
          <ul className="flex flex-col items-start p-4 space-y-2 font-medium">
            {["Men", "Women", "Kids", "About", "Contact"].map(
              (label, index) => (
                <li key={index}>
                  <Link
                    to={`/${label.toLowerCase()}`}
                    className="block w-full hover:bg-gray-100 px-3 py-2 rounded"
                    onClick={() => {
                      setMenu(label.toLowerCase());
                      setIsMenuOpen(false);
                    }}
                  >
                    {label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}

      {/* Search Bar */}
      {isSearchOpen && (
        <SearchBar
          isSearchOpen={isSearchOpen}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      )}
    </nav>
  );
};

export default Navbar;
