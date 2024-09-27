import { useState } from "react";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login Function Executed", formData);

    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  const signup = async () => {
    console.log("Signup Function Executed", formData);
    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <div
      className="w-full h-[90vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=600')",
      }}
    >
      <div className="w-[580px] h-[600px] bg-white p-10 lg:max-w-md lg:max-h-[500px] lg:p-8">
        <h1 className="text-3xl font-semibold text-center mb-4">{state}</h1>
        <div className="flex flex-col gap-7 mt-6">
          {state === "Sign Up" && (
            <input
              name="username"
              value={formData.username}
              type="text"
              placeholder="Your Name"
              onChange={changeHandler}
              className="h-[72px] w-full px-5 border border-gray-300 outline-none text-gray-600 text-lg"
            />
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email Address"
            className="h-[72px] w-full px-5 border border-gray-300 outline-none text-gray-600 text-lg"
          />
          <input
            name="password"
            onChange={changeHandler}
            type="password"
            placeholder="Password"
            className="h-[72px] w-full px-5 border border-gray-300 outline-none text-gray-600 text-lg"
          />
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
          className="w-full h-[72px] bg-red-500 text-white mt-6 text-xl font-medium hover:bg-red-600"
        >
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className="text-gray-600 text-center mt-4">
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-red-500 font-semibold cursor-pointer"
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="text-gray-600 text-center mt-4">
            Create an account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-red-500 font-semibold cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}
        <div className="flex items-center mt-6 gap-4 text-gray-600 text-lg">
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
