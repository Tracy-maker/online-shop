import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import menBanner from "./Components/Assets/banner_mens.png";
import womenBanner from "./Components/Assets/banner_women.jpg";
import kidBanner from "./Components/Assets/banner_kids.png";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Shop />} />
          <Route
            path="/men"
            element={<ShopCategory banner={menBanner} category="men" />}
          />
          <Route
            path="/women"
            element={<ShopCategory banner={womenBanner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kidBanner} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
