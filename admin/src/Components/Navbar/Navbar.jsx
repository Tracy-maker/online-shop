const Navbar = () => {
  return (
    <nav className="bg-gray-400 text-gray-100 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        
        {/* Store Name */}
        <div className="flex items-center space-x-4">
          <img
            src="https://i.ibb.co/BZbmw7d/Screenshot-2024-02-03-at-12-44-12-pm.png"
            alt="logo"
            className="w-10 h-10"
          />
          <h1 className="text-xl font-bold tracking-wide">
            Rimberio Online Solution
          </h1>
        </div>
        
     
        <div className="flex items-center space-x-8">
          <img
            src="https://img.icons8.com/?size=80&id=Cssf43cjx2fu&format=png"
            alt="profile"
            className="w-10 h-10 rounded-full border-2 border-white-600 hover:border-blue-400 transition-colors"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
