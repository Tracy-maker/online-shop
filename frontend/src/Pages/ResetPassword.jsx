import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const { token } = useParams();
  const [formData, setFormData] = useState({ password: "", confirmPassword: "" });
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const { data } = await axios.get(`http://localhost:4000/api/reset-password/${token}`);
        setUserEmail(data.email);
      } catch (error) {
        console.error("Failed to fetch user email:", error);
        setError("Invalid or expired reset link.");
      }
    };

    fetchEmail();
  }, [token]);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setIsSubmitting(true);

    if (!formData.password || formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      setIsSubmitting(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      setIsSubmitting(false);
      return;
    }

    try {
      const { data } = await axios.post(
        `http://localhost:4000/api/reset-password/${token}`,
        { password: formData.password }
      );
      setMessage(data.message);
    } catch (error) {
      console.error(error);
      setError("Failed to reset password. Please try again.");
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
          <span className="font-medium text-black">{userEmail || "Unknown User"}</span>
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

export default ResetPassword;
