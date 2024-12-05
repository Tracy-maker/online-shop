import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const ResetPassword = ({ userEmail }) => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setMessage("");
  };

  const validateForm = () => {
    if (!formData.password.trim()) {
      setError("Password is required.");
      return false;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Mock API call for demonstration purposes
      const response = await axios.post("/api/reset-password", {
        password: formData.password,
        email: userEmail, // Send the email for backend reference
      });
      setMessage("Password reset successfully. You can now log in.");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to reset password. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full h-[100vh] bg-fit bg-center flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 relative">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Reset Your Password
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Updating password for:{" "}
          <span className="font-medium text-black">{userEmail}</span>
        </p>
        <p className="text-gray-600 text-center mb-6">
          Please enter your new password below.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={changeHandler}
              placeholder="New Password"
              className={`w-full px-4 py-3 border ${
                error ? "border-red-500" : "border-gray-300"
              } rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none`}
            />
          </div>
          <div>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="Confirm New Password"
              className={`w-full px-4 py-3 border ${
                error ? "border-red-500" : "border-gray-300"
              } rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none`}
            />
          </div>
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          {message && <p className="text-green-500 text-sm mt-1">{message}</p>}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 ${
              isSubmitting ? "bg-gray-500 cursor-not-allowed" : "bg-black"
            } text-white font-medium rounded-md hover:bg-gray-700 focus:ring-2 focus:ring-gray-600 focus:outline-none transition-all duration-300`}
          >
            {isSubmitting ? "Submitting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};
ResetPassword.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default ResetPassword;
