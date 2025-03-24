import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false); // Toggle login/register
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegister) {
      // Registration Logic
      if (password !== confirmPassword) {
        alert("❌ Passwords do not match!");
        return;
      }
      alert("✅ Registration Successful! Please log in.");
      setIsRegister(false); // Switch to Login after sign-up
    } else {
      // Login Logic
      if (email === "test@example.com" && password === "password") {
        alert("✅ Login Successful!");
      } else {
        alert("❌ Invalid email or password. Please try again.");
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4 fw-bold text-primary" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}>
              {isRegister ? "Register" : "Login"}
            </h2>

            <form onSubmit={handleSubmit}>
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

              {/* Extra Field for Register Form */}
              {isRegister && (
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
              )}

              {/* Submit Button */}
              <button type="submit" className="btn btn-success w-100">
                {isRegister ? "Sign Up" : "Login"}
              </button>
            </form>

            {/* Toggle Between Login and Register */}
            <div className="text-center mt-3">
              {isRegister ? (
                <p>
                  Already have an account?{" "}
                  <span className="text-primary fw-bold" style={{ cursor: "pointer" }} onClick={() => setIsRegister(false)}>
                    Login
                  </span>
                </p>
              ) : (
                <p>
                  Don’t have an account?{" "}
                  <span className="text-primary fw-bold" style={{ cursor: "pointer" }} onClick={() => setIsRegister(true)}>
                    Sign up now.
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
