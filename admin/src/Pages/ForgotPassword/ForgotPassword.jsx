import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="h-[calc(100vh-190px)] flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-black relative overflow-hidden">
      {/* Dynamic Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-purple-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 opacity-30 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Forgot Password Form */}
      <div className="z-10 max-w-md w-full bg-white bg-opacity-90 p-8 rounded-lg shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Forgot Password</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg font-semibold shadow-md hover:shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
            Send Reset Link
          </button>
        </form>
        <div className="text-center mt-6">
          <Link to="/login" className="text-blue-500 hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
