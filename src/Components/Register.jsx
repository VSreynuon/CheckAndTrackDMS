import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    // Password confirmation validation
    if (password !== confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }

    // Simulate a successful registration
    alert("✅ Registration Successful! You can now log in.");

    // Clear form fields
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4 fw-bold text-primary" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}>
              Register
            </h2>

            <form onSubmit={handleRegister}>
              {/* Name Field */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-medium text-dark text-start d-block">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control border-primary shadow-sm"
                  id="name"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* Email Field */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-medium text-dark text-start d-block">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control border-primary shadow-sm"
                  id="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password Field */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-medium text-dark text-start d-block">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control border-primary shadow-sm"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Confirm Password Field */}
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label fw-medium text-dark text-start d-block">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control border-primary shadow-sm"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-success w-100">
                Sign Up
              </button>
            </form>

            {/* Redirect to Login */}
            <div className="text-center mt-3">
              <p>
                Already have an account?{" "}
                <a href="/login" className="text-primary fw-bold">
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
