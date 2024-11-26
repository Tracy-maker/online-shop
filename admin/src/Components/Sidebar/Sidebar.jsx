import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const linkStyles = (path) =>
    `flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer ${
      location.pathname === path
        ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-md"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <div className="w-64 h-full bg-white shadow-lg flex flex-col py-8 px-6">
      {/* Sidebar Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-8 tracking-wide">
        Rimberio
      </h2>

      {/* Add Product Link */}
      <Link to="/addproduct" className={`${linkStyles("/addproduct")} mb-4`}>
        <div className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-lg shadow-md">
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/add-property.png"
            alt="Add Product Icon"
            className="w-5 h-5"
          />
        </div>
        <span className="font-medium">Add Product</span>
      </Link>

      {/* Product List Link */}
      <Link to="/listproduct" className={`${linkStyles("/listproduct")} mb-4`}>
        <div className="flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-lg shadow-md">
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/view-file.png"
            alt="Product List Icon"
            className="w-5 h-5"
          />
        </div>
        <span className="font-medium">Product List</span>
      </Link>

      {/* Order Information Link */}
      <Link
        to="/ordermanagement"
        className={`${linkStyles("/ordermanagement")}`}
      >
        <div className="flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-lg shadow-md">
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/order-history.png"
            alt="Order Information Icon"
            className="w-5 h-5"
          />
        </div>
        <span className="font-medium">Order management</span>
      </Link>
    </div>
  );
};

export default Sidebar;
