import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import SearchBar from "./SearchBar";

// Define types for ShopContext
interface ShopContextType {
  getTotalCartItems: () => number;
}

const Navbar: React.FC = () => {
  const [menu, setMenu] = useState<string>("shop");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { getTotalCartItems } = useContext(ShopContext) as ShopContextType;

  const menuRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const dropdownToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target as Node) &&
      toggleRef.current &&
      !toggleRef.current.contains(e.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <nav className="bg-white/80 text-black shadow-lg top-0 z-50 fixed w-full">
      <div className="w-full px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Rimberio
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-6 font-medium">
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

        {/* Icons */}
        <div className="flex items-center gap-4">
          {/* Cart Icon */}
          <Link to="/cart" className="hidden md:block relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6h16.5M4.5 6l1.5 12h12l1.5-12M9.75 10.5v6m4.5-6v6"
              />
            </svg>
            <span className="absolute -top-1 -right-2 bg-blue-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {getTotalCartItems()}
            </span>
          </Link>

          {/* SearchBar */}
          <SearchBar
            isSearchOpen={isSearchOpen}
            setIsSearchOpen={setIsSearchOpen}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          {/* Login/Logout Icon */}
          {localStorage.getItem("auth-token") ? (
            <button
              onClick={() => {
                localStorage.removeItem("auth-token");
                window.location.replace("/");
              }}
              className="p-2 rounded hover:bg-gray-200 transition hidden md:block"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-9A2.25 2.25 0 002.25 5.25v13.5A2.25 2.25 0 004.5 21h9a2.25 2.25 0 002.25-2.25V15"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 15l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
            </button>
          ) : (
            <Link
              to="/login"
              className="p-2 rounded hover:bg-gray-200 transition hidden md:block"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-9A2.25 2.25 0 002.25 5.25v13.5A2.25 2.25 0 004.5 21h9a2.25 2.25 0 002.25-2.25V15"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 15l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={toggleRef}
          onClick={dropdownToggle}
          className="md:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-white/50 shadow-lg mt-2 rounded-lg overflow-hidden"
        >
          <ul className="flex flex-col items-start p-4 space-y-2 font-medium">
            {/* Links */}
            {["Women", "Men", "Kids", "About", "Contact"].map((label, index) => (
              <li key={index} className="w-full hover:bg-gray-100 rounded">
                <Link
                  to={`/${label.toLowerCase()}`}
                  className="block w-full px-3 py-2"
                  onClick={() => {
                    setMenu(label.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
