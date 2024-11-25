import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Admin from "./Pages/Admin/Admin";
import Login from "./Pages/Login/Login";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import AddProduct from "./Components/AddProduct/AddProduct";
import ListProduct from "./Components/ListProduct/ListProduct";
import OrderInformation from "./Components/OrderInformation/OrderInformation";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main className="flex-grow p-6">
        <Routes>
          {/* Admin Dashboard */}
          <Route path="/" element={<Admin />} />
          
          {/* Authentication Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Admin Features */}
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/listproduct" element={<ListProduct />} />
          <Route path="/orderinformation" element={<OrderInformation />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
