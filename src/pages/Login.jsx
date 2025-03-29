import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      alert("Registration successful! Please log in.");
      setIsRegister(false);
    } else {
      if (email === "test@example.com" && password === "password") {
        alert("Login success!");
      } else {
        alert("Invalid email or password!");
      }
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
      <div className="row w-100">
      <div className="col-lg-5 col-md-9 col-sm-10 col-12 mx-auto">
          <div className="card shadow-lg p-3 rounded-3">
            <h3 className="text-center mb-3 fw-bold text-primary">
              {isRegister ? "Register" : "Login"}
            </h3>
            <form onSubmit={handleSubmit}>
              {/* Email */}
              <div className="mb-2">
                <label htmlFor="email" className="form-label fw-medium text-dark">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="email@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control border-primary shadow-sm p-2"
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-2">
                <label htmlFor="password" className="form-label fw-medium text-dark">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control border-primary shadow-sm p-2"
                  required
                />
              </div>

              {/* Confirm Password (only for registration) */}
              {isRegister && (
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label fw-medium text-dark">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Re-enter password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="form-control border-primary shadow-sm p-2"
                    required
                  />
                </div>
              )}

              <button type="submit" className="btn mt-3 btn-success w-100 p-2">
                {isRegister ? "Sign Up" : "Login"}
              </button>
            </form>

            {/* Toggle between Login and Register */}
            <div className="text-center mt-2">
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
                    Sign up now
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
