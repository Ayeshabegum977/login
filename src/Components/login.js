import React, { useState } from "react";


function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="app">
      <div className="card">
        <div className="title-pill">Login</div>

        <label className="label">Username/Email</label>
        <input type="text" className="input" />

        <span className="link">Use phone number instead</span>

        <label className="label">Enter Password</label>
        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            className="input"
          />
          <span
            className="eye"
            onClick={() => setShowPassword(!showPassword)}
          >
            👁
          </span>
        </div>

        <button className="login-btn">Login</button>

        <p className="footer-text">
          Forget your Password? <span>Create New Account</span>
        </p>

        <div className="or">
          <span></span>
          OR
          <span></span>
        </div>

        <button className="google-btn">Continue With Google</button>
      </div>
    </div>
  );
}

export default Login;
