import { useState } from "react";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleProfileClick = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleLogout = () => {
    // Implement your logout functionality here
    alert("Logged out");
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Store Name */}
        <div className="flex items-center space-x-4">
          <img
            src="https://i.ibb.co/BZbmw7d/Screenshot-2024-02-03-at-12-44-12-pm.png"
            alt="logo"
            className="w-12 h-12 rounded-full shadow-md"
          />
          <h1 className="text-2xl font-extrabold tracking-wide">
            Rimberio Online Solution
          </h1>
        </div>

        {/* Profile Icon with Dropdown */}
        <div className="relative">
          <img
            src="https://img.icons8.com/?size=80&id=Cssf43cjx2fu&format=png"
            alt="profile"
            onClick={handleProfileClick}
            className="w-12 h-12 rounded-full border-2 border-white hover:border-yellow-400 transition duration-300 cursor-pointer"
          />
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 text-gray-700">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
