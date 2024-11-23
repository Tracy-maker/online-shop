import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const linkStyles = (path) =>
    `flex items-center gap-4 px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer ${
      location.pathname === path
        ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg"
        : "bg-gray-50 text-gray-800"
    } hover:bg-gradient-to-r hover:from-indigo-400 hover:to-pink-400 hover:text-white hover:shadow-md`;

  return (
    <div className="w-64 h-full bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200 flex flex-col py-8 px-4 shadow-xl">
      {/* Sidebar Title */}
      <h2 className="text-2xl font-extrabold text-white mb-6 tracking-wide">
        Rimberio
      </h2>

      {/* Add Product Link */}
      <Link to="/addproduct" className={`${linkStyles("/addproduct")} mb-4`}>
        <div className="bg-indigo-500 text-white p-3 rounded-full shadow-md">
          <img
            src="https://img.icons8.com/?size=60&id=rXfexTqQIs7R&format=png"
            alt="Add Product Icon"
            className="w-6 h-6"
          />
        </div>
        <span className="font-semibold">Add Product</span>
      </Link>

      {/* Product List Link */}
      <Link to="/listproduct" className={linkStyles("/listproduct")}>
        <div className="bg-green-500 text-white p-3 rounded-full shadow-md">
          <img
            src="https://img.icons8.com/?size=48&id=eyfXBlvDyk9g&format=png"
            alt="Product List Icon"
            className="w-6 h-6"
          />
        </div>
        <span className="font-semibold">Product List</span>
      </Link>
    </div>
  );
};

export default Sidebar;
