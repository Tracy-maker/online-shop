import Sidebar from "../../Components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import AddProduct from "../../Components/AddProduct/AddProduct";
import ListProduct from "../../Components/ListProduct/ListProduct";
import Home from "../../Components/Home/Home";

const Admin = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      {/* Sticky Sidebar */}
      <div className="w-64 pt-36  text-gray-200 min-h-screen  fixed top-0 left-4">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-grow ml-64 p-10">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/listproduct" element={<ListProduct />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
