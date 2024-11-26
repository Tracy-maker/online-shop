import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import menBanner from "./Assets/banner_mens.png";
import womenBanner from "./Assets/banner_womens.png";
import kidBanner from "./Assets/banner_kids.png";
import accessoriesBanner from "./Assets/banner_accessories.png";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import CheckoutPage from "./Pages/Checkout";
// import AIChatWindow from "./Components/AIChatWindow/AIChatWindow";

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
          <Route
            path="/accessories"
            element={
              <ShopCategory banner={accessoriesBanner} category="accessories" />
            }
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route />
        </Routes>
        {/* <AIChatWindow /> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
