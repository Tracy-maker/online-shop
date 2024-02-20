import AddProduct from "../../Components/AddProduct/AddProduct";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Admin.css";
import { Routes, Route } from "react-router-dom";

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path="" element={<AddProduct/>} />
        <Route path="" element={} />
      </Routes>
    </div>
  );
};

export default Admin;
