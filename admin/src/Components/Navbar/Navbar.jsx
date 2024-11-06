const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <img
          src="https://i.ibb.co/BZbmw7d/Screenshot-2024-02-03-at-12-44-12-pm.png"
          alt="logo"
          className="w-32"
        />
        <img
          src="https://img.icons8.com/?size=80&id=Cssf43cjx2fu&format=png"
          alt="profile"
          className="w-12 rounded-full border-2 border-white"
        />
      </div>
    </nav>
  );
};

export default Navbar;
