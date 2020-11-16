import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png"
          alt=""
        />
      </Link>

      <div className="login_container">
        <h1>Sing-in</h1>
        <form action="" className="login_form">
          <h5>E-mail</h5>
          <input type="text" />

          <h5>Password</h5>
          <input type="password" />

          <button className="login_singInButton">Sign In</button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button className="login_registerButton">
          Create your amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
