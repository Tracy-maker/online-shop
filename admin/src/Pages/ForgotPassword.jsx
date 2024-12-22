import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-t from-gray-900 via-gray-800 to-black">
      {/* Forgot Password Card */}
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Account Information
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Use the credentials below to access your account.
        </p>
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="text-sm text-gray-700 mb-2">
            <strong>Email:</strong> support@rimberio.com
          </p>
          <p className="text-sm text-gray-700">
            <strong>Password:</strong> 1234567890ydlvns
          </p>
        </div>
        <div className="text-center mt-6">
          <Link
            to="/login"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all duration-300"
          >
            Go to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
