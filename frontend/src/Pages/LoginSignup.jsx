import { useState } from "react";
import PrivacyPolicy from "../Components/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "../Components/TermsOfService/TermsOfService";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);
  const [errors, setErrors] = useState({});
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (state === "Sign Up" && !formData.username.trim()) {
      newErrors.username = "Username is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (!agreeToTerms) {
      newErrors.terms = "You must agree to the Terms and Privacy Policy.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const login = async () => {
    if (!validateForm()) return;
    // Login logic...
  };

  const signup = async () => {
    if (!validateForm()) return;
    // Signup logic...
  };

  return (
    <div
      className="w-full h-[100vh] bg-fit bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1732053989556-95d6a5fe31aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 relative">
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          {state === "Login" ? "Welcome Back!" : "Create an Account"}
        </h1>

        {/* Form Inputs */}
        <div className="flex flex-col gap-5">
          {state === "Sign Up" && (
            <div>
              <input
                name="username"
                value={formData.username}
                onChange={changeHandler}
                type="text"
                placeholder="Username"
                className={`w-full px-4 py-3 border ${
                  errors.username ? "border-red-500" : "border-gray-300"
                } rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none`}
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">{errors.username}</p>
              )}
            </div>
          )}
          <div>
            <input
              name="email"
              value={formData.email}
              onChange={changeHandler}
              type="email"
              placeholder="Email Address"
              className={`w-full px-4 py-3 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <input
              name="password"
              value={formData.password}
              onChange={changeHandler}
              type="password"
              placeholder="Password"
              className={`w-full px-4 py-3 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
        </div>

        {/* Terms & Privacy */}
        <div className="flex items-center gap-2 mt-6">
          <input
            type="checkbox"
            className="h-4 w-4 rounded"
            checked={agreeToTerms}
            onChange={() => {
              setAgreeToTerms(!agreeToTerms);
              setErrors({ ...errors, terms: "" });
            }}
          />
          <p className="text-sm text-gray-600">
            I agree to the{" "}
            <span
              onClick={() => setShowTermsOfService(true)}
              className="text-orange-900 hover:underline cursor-pointer"
            >
              Terms of Service
            </span>{" "}
            and{" "}
            <span
              onClick={() => setShowPrivacyPolicy(true)}
              className="text-orange-900 hover:underline cursor-pointer"
            >
              Privacy Policy
            </span>
            .
          </p>
        </div>
        {errors.terms && (
          <p className="text-red-500 text-sm mt-1">{errors.terms}</p>
        )}

        {/* Submit Button */}
        <button
          onClick={() => (state === "Login" ? login() : signup())}
          className="w-full mt-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          {state === "Login" ? "Log In" : "Sign Up"}
        </button>

        {/* Toggle Login/Signup */}
        <p className="text-center text-gray-600 mt-4">
          {state === "Login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <span
            onClick={() => setState(state === "Login" ? "Sign Up" : "Login")}
            className="text-blue-500 font-medium cursor-pointer hover:underline"
          >
            {state === "Login" ? "Sign up" : "Log in"}
          </span>
        </p>

        {/* Modals */}
        {showPrivacyPolicy && (
          <PrivacyPolicy onClose={() => setShowPrivacyPolicy(false)} />
        )}
        {showTermsOfService && (
          <TermsOfService onClose={() => setShowTermsOfService(false)} />
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
