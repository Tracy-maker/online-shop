import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Send Reset Link
        </button>
      </form>
      <div className="text-center mt-4">
        <Link to="/login" className="text-blue-500 hover:underline">
          Back to Login
        </Link>
      </div>
    </div>
  );
}

export default ForgotPassword;
