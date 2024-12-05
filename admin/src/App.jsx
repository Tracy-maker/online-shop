import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import AddProduct from "./Components/AddProduct";
import ListProduct from "./Components/ListProduct";
import Admin from "./Pages/Admin";
import OrderManagement from "./Components/OrderManagement";
import CustomerFeedback from "./Components/CustomerFeedback";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main className="flex-grow p-2">
        <Routes>
          {/* Admin Dashboard */}
          <Route path="/" element={<Home />} />

          {/* Authentication Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Admin Features */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/listproduct" element={<ListProduct />} />
          <Route path="/ordermanagement" element={<OrderManagement />} />
          <Route path="/customerfeedback" element={<CustomerFeedback />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
