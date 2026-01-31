import React from "react";


function Registration() {
  return (
    <div className="app">
      <div className="card">
        <div className="title-pill">Registration</div>

        <label className="label">Username/Email</label>
        <input type="text" className="input" />

        <label className="label">Enter Password</label>
        <input type="password" className="input" />

        <label className="label">Confirm Password</label>
        <input type="password" className="input" />

        <button className="create-btn">Create Account</button>
      </div>
    </div>
  );
}

export default Registration;
