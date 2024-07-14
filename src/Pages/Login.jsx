import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../Stylesheets/Login.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: true,
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    if (formData.password === "") {
      setError("Enter your password");
      return;
    }

    if (formData.email === "") {
      setError("Please enter your email");
      return;
    }

    try {
      const response = await axios.post(
        "https://coblog-backend.vercel.app/Login",
        {
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );

      console.log("Login Successful:", response.data);

      // Set the user ID in local storage
      localStorage.setItem("user_id", response.data.user_id);

      navigate("/");
    } catch (error) {
      console.error("Failed to Login account:", error.message);
      setError("Failed to login. Please try again.");
    }
  };

  const signup = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    <section className="login-section">
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="login-label">
              Enter email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="login-input"
              placeholder="Ex:jamil@gmail.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="login-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="login-input"
              placeholder="Ex: 1234@GHk"
              required
            />
          </div>
          <div className="login-checkbox-container">
            <input
              id="rememberMe"
              name="rememberMe"
              type="checkbox"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="login-checkbox-input"
            />
            <label htmlFor="rememberMe" className="login-checkbox-label">
              Remember Me
            </label>
          </div>
          {error && <div className="login-error">{error}</div>}
          <div className="login-button-container">
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
          <p className="login-signup-text">
            Don't have an account?{" "}
            <Link to="/signup" className="login-signup-link">
              Sign up here
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;
