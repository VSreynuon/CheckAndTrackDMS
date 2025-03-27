import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  const [isRegister, setIsRegister] = useState(false); // Toggle
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setComfirmPassword] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      if (password !== comfirmPassword) {
        alert("Password do not mutch!");
        return;
      }
      alert("Registration succesfully, please log in!");
      setIsRegister(false);
    }
    if (email === "test@example.com" && password === "password") {
      alert("Login success!");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h2
              className="text-center mb-4 fw-bold text-primary"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
            >
              {isRegister ? "Register" : "Login"}
            </h2>

            {/* email */}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label fw-medium text-dark text-start d-block"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="email@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control border-primary shadow-sm "
                  required
                />
              </div>

              {/* password */}
              <div className="mt-3">
                <label
                  htmlFor="password"
                  className="form-label fw-medium text-dark text-start d-block"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control border-primary shadow-sm"
                  required
                />
              </div>

              {/* comfirmPassword */}
              {isRegister && (
                <div className="mt-3">
                  <label
                    htmlFor="comfirmPassword"
                    className="form-label mb-4 fw-medium text-dark text-start d-block"
                  >
                    ComfirmPassword
                  </label>
                  <input
                    type="comfirmPassword"
                    id="comfirmPassword"
                    placeholder=" "
                    value={comfirmPassword}
                    onChange={(e) => setComfirmPassword(e.target.value)}
                    className="form-control border-primary shadow-sm"
                    required
                  />
                </div>
              )}

              <button type="submit" className="btn mt-4 btn-success w-100">
                {isRegister ? "Sign Up" : "Login"}
              </button>
            </form>

            <div className="text-center mt-3">
              {isRegister ? (
                <p>
                  Already have an account?{" "}
                  <span
                    className="text-primary fw-bold"
                    style={{ cursor: "pointer" }}
                    onClick={() => setIsRegister(false)}
                  >
                    Login
                  </span>
                </p>
              ) : (
                <p>
                  Don’t have an account?{" "}
                  <span
                    className="text-primary fw-bold"
                    style={{ cursor: "pointer" }}
                    onClick={() => setIsRegister(true)}
                  >
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
}
