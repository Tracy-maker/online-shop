import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import CheckoutPage from "./Pages/Checkout";
import AIChatWindow from "./Components/AIChatWindow";
import ResetPassword from "./Pages/ResetPassword";
import Trend from "./Pages/Trend";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Shop />} />

          <Route path="/men" element={<ShopCategory category="men" />} />
          <Route path="/women" element={<ShopCategory category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kid" />} />
          <Route
            path="/accessories"
            element={<ShopCategory category="accessories" />}
          />
          <Route path="/trends" element={<Trend />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/signup" element={<LoginSignup />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route />
        </Routes>
        <AIChatWindow />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
