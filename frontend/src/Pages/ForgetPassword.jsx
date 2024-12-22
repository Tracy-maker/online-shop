import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";

const ForgetPassword = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }

    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/forgot-password",
        { email }
      );
      setMessage(data.message);
    } catch (error) {
      console.error(error);
      setError("Failed to send reset email. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Forgot Password
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Enter your email address to receive a password reset link.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className={`w-full px-4 py-3 border ${
                error ? "border-red-500" : "border-gray-300"
              } rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none`}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-black text-white font-medium rounded-md hover:bg-gray-700 focus:ring-2 focus:ring-gray-600 focus:outline-none transition-all duration-300"
          >
            Send Reset Link
          </button>
        </form>

        {/* Success Message */}
        {message && (
          <p className="text-green-500 text-sm mt-4 text-center">{message}</p>
        )}
      </div>
    </div>
  );
};

ForgetPassword.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ForgetPassword;
