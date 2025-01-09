import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const navigate = useNavigate();

  // Logout functionality
  const handleLogout = () => {
    console.log("Logged out");
    setIsLoggedIn(false); 
    navigate("/login"); 
  };

  // Login functionality
  const handleLogin = () => {
    console.log("Logged in");
    setIsLoggedIn(true); 
    navigate("/login"); 
  };

  return (
    <nav className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Store Name */}
        <div className="flex items-center space-x-4">
        
          <h1 className="text-lg font-semibold tracking-wide text-gray-900">
            Rimberio ONLINE SOLUTION
          </h1>
        </div>

        {/* Right Section - User Actions */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-sm text-gray-800 bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="text-sm text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
