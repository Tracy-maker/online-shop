import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const linkStyles = (path) =>
    `flex items-center gap-4 px-4 py-3 rounded-md transition-all duration-200 cursor-pointer ${
      location.pathname === path
        ? "bg-blue-600 text-white"
        : "bg-gray-300 text-gray-900"
    } hover:bg-blue-500 hover:text-white`;

  return (
    <div className="w-64 h-[300px] bg-gray-400 text-gray-200 flex flex-col pt-6 pb-6 shadow-md overflow-y-auto">
      {/* Sidebar Title */}
      <h2 className="text-lg font-bold text-gray-100 mb-4 px-6">Navigation</h2>

      {/* Add Product Link */}
      <Link to="/addproduct" className={linkStyles("/addproduct")}>
        <div className="bg-gray-100 p-2 rounded-full">
          <img
            src="https://img.icons8.com/?size=60&id=rXfexTqQIs7R&format=png"
            alt="Add Product Icon"
            className="w-6 h-6"
          />
        </div>
        <span>Add Product</span>
      </Link>

      {/* Product List Link */}
      <Link to="/listproduct" className={linkStyles("/listproduct")}>
        <div className="bg-gray-100 p-2 rounded-full">
          <img
            src="https://img.icons8.com/?size=48&id=eyfXBlvDyk9g&format=png"
            alt="Product List Icon"
            className="w-6 h-6"
          />
        </div>
        <span>Product List</span>
      </Link>
    </div>
  );
};

export default Sidebar;
