import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../Stylesheets/Signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    termsAccepted: false,
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    setError("");

    if (formData.email === "") {
      setError("Please enter your email");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "https://coblog-backend.vercel.app/signup",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Account created successfully:", response.data);
      navigate("/");
    } catch (error) {
      console.error("Failed to create account:", error.message);
      setError("Failed to create account. Please try again.");
    }
  };

  return (
    <section className="signup-section">
      <div className="signup-container">
        <h1 className="signup-title">Create an account</h1>
        <form className="signup-form" onSubmit={handleSignup}>
          <div>

          <label htmlFor="name" className="signup-label">
              Your name
            </label>

            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="signup-input"
              placeholder="EX: Ahmed Mujtab "
              required
            />
         
          </div>
          <div>

          <label htmlFor="email" className="signup-label">
              Your email
            </label>

            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="signup-input"
              placeholder=" masadnazir1@gmail.com "
              required
            />
          
          </div>
          <div>

          <label htmlFor="password" className="signup-label">
              Password
            </label>

            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="signup-input"
              placeholder=" EX: 12345@GhiA"
              required
            />
          
          </div>
          <div>

          <label htmlFor="confirmPassword" className="signup-label">
              Confirm password
            </label>

            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="signup-input"
              placeholder=" EX: 12345@GhiA"
              required
            />
         
          </div>
          <div className="signup-checkbox-container">
            <input
              id="termsAccepted"
              name="termsAccepted"
              type="checkbox"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="signup-checkbox-input"
              required
            />
            <label htmlFor="termsAccepted" className="signup-checkbox-label">
              I accept the{" "}
              <a href="#" className="signup-login-link">
                Terms and Conditions
              </a>
            </label>
          </div>
          {error && <div className="signup-error">{error}</div>}
          <div className="signup-button-container">
            <button type="submit" className="signup-button">
              Create an Account
            </button>
          </div>
          <p className="signup-login-text">
            Already have an account?{" "}
            <Link to="/login" className="signup-login-link">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Signup;
