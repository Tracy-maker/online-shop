import React from "react";
import { createRoot } from "react-dom/client";
import ShopContextProvider from "./Context/ShopContext";
import AuthProvider from "./Context/AuthContext";
import App from "./App";
import "./index.css";

// Get the root element from the DOM
const rootElement = document.getElementById("root");

// Ensure the root element exists
if (!rootElement) {
  throw new Error(
    "Root element not found. Please check your HTML file and ensure a div with id 'root' exists."
  );
}

// Create the React root and render the app
createRoot(rootElement).render(
  <React.StrictMode>
    <AuthProvider>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </AuthProvider>
  </React.StrictMode>
);
