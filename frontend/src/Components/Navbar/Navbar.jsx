import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

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
          <img
            src="https://i.ibb.co/BZbmw7d/Screenshot-2024-02-03-at-12-44-12-pm.png"
            alt="logo"
            className="w-8 md:w-10"
          />
          <span className="text-lg md:text-2xl font-bold text-gray-800">
            Rimberio
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-4 lg:space-x-8 font-medium">
          {["Home", "Men", "Women", "Kids", "Accessories"].map(
            (label, index) => (
              <li key={index}>
                <Link
                  to={`/${label.toLowerCase()}`}
                  className={`hover:text-gray-700 ${
                    menu === label.toLowerCase()
                      ? "text-black font-semibold"
                      : ""
                  }`}
                  onClick={() => setMenu(label.toLowerCase())}
                >
                  {label}
                </Link>
              </li>
            )
          )}
        </ul>
        {/* Desktop Search Icon */}
        <div className="hidden md:flex items-center">
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
        </div>

        {/* Profile and Cart */}
        <div className="flex items-center gap-4 md:gap-6">
          {localStorage.getItem("auth-token") ? (
            <>
              <Link to="/profile" className="hover:text-gray-700">
                <img
                  src="https://img.icons8.com/?size=32&id=108534&format=png"
                  alt="user-profile"
                  className="w-6"
                />
              </Link>
              <Link
                to="/orders"
                className="hidden md:block bg-gray-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition"
              >
                My Orders
              </Link>
              <button
                onClick={() => {
                  localStorage.removeItem("auth-token");
                  window.location.replace("/");
                }}
                className="hidden md:block bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="hidden md:block bg-gray-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition"
            >
              Login
            </Link>
          )}

          {/* Cart */}
          <Link to="/cart" className="relative">
            <img
              src="https://img.icons8.com/?size=60&id=2212PsH6OEOq&format=png"
              alt="cart-icon"
              className="w-6"
            />
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white rounded-full px-2 py-0.5 shadow">
              {getTotalCartItems()}
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={toggleRef}
          onClick={dropdown_toggle}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <img
            src="https://img.icons8.com/?size=32&id=zCbCPv6CY90G&format=png"
            alt="menu-icon"
          />
        </button>
      </div>

      {/* Search Bar Below */}
      {isSearchOpen && (
        <div className="bg-gray-100 shadow-md py-4 px-6">
          <div className="container mx-auto flex items-center bg-white rounded-lg border border-gray-300 shadow-sm">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 w-full text-sm bg-transparent focus:outline-none text-gray-700"
            />
            <button className="bg-gray-800 text-white px-6 py-2 rounded-r-lg hover:bg-gray-900 transition">
              Search
            </button>
          </div>
        </div>
      )}

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <ul
          ref={menuRef}
          className="md:hidden bg-white text-black space-y-4 p-4 shadow-lg border-t"
        >
          {["Home", "Men", "Women", "Kids", "Accessories"].map(
            (label, index) => (
              <li key={index}>
                <Link
                  to={`/${label.toLowerCase()}`}
                  className="block py-2 px-4 hover:bg-gray-100 rounded-lg"
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

          {/* Mobile Search */}
          <li className="mt-4">
            <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden border border-gray-300 shadow-sm">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 w-full text-sm bg-transparent focus:outline-none text-gray-700"
              />
              <button className="bg-gray-800 text-white px-4 py-2 hover:bg-gray-900 transition">
                Search
              </button>
            </div>
          </li>

          {/* User Section */}
          {localStorage.getItem("auth-token") ? (
            <>
              <Link
                to="/profile"
                className="block py-2 px-4 hover:bg-gray-100 rounded-lg"
              >
                Profile
              </Link>
              <Link
                to="/orders"
                className="block py-2 px-4 hover:bg-gray-100 rounded-lg"
              >
                My Orders
              </Link>
              <button
                onClick={() => {
                  localStorage.removeItem("auth-token");
                  window.location.replace("/");
                }}
                className="block py-2 px-4 text-left hover:bg-red-100 hover:text-red-600 rounded-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="block py-2 px-4 bg-gray-800 text-white rounded-lg text-sm text-center hover:bg-gray-700 transition"
            >
              Login
            </Link>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
