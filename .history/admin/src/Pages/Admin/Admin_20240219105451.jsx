import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Admin.css";
import { Routes, Route } from "react-router-dom";

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
     <Routes></Routes>
    </div>
  );
};

export default Admin;
