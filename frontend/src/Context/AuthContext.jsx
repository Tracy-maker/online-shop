import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    if (token) {
      fetch("http://localhost:4000/verifytoken", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setIsLoggedIn(true);
            setUser(data.user);
          } else {
            setIsLoggedIn(false);
            setUser(null);
            localStorage.removeItem("auth-token");
          }
        })
        .catch(() => {
          setIsLoggedIn(false);
          setUser(null);
          localStorage.removeItem("auth-token");
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (credentials) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("auth-token", data.token);
        setIsLoggedIn(true);
        setUser(data.user);
        return { success: true };
      } else {
        return { success: false, message: data.message };
      }
    } catch (error) {
      console.error("Login failed:", error);
      return { success: false, message: "Login failed. Please try again." };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("auth-token");
    setIsLoggedIn(false);
    setUser(null);
  };

  const contextValue = {
    isLoggedIn,
    user,
    login,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
