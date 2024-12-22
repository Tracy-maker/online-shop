import ShopContextProvider from "./Context/ShopContext";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./Context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </AuthProvider>
);
