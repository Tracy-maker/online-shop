import Sidebar from "../../Components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import AddProduct from "../../Components/AddProduct/AddProduct";
import ListProduct from "../../Components/ListProduct/ListProduct";

const Admin = () => {
  return (
    <div className="flex min-h-fit">
      <Sidebar />
      <div className="flex-grow mx-4">
        <Routes>
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/listproduct" element={<ListProduct />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
