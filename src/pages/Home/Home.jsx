import React, { useState, useEffect } from "react";
import "./Home.css";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { NavLink } from "react-router-dom";
import Web3 from 'web3';

const Home = () => {
  const [loginInput, setLoginInput] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [connectedAccount, setConnectedAccount] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const creds = { username: "user123", password: "password123" };


  // Mock user data for demonstration (replace this with your actual authentication logic)
  const mockUserData = {
    username: "user123",
    password: "password123"
  };

  // Function to handle login
  const loginHandler = () => {
    if (loginInput.username === mockUserData.username && loginInput.password === mockUserData.password) {
      setIsLoggedIn(true);
      alert("Login Successful!");
    } else {
      alert("Invalid username or password.");
    }
  };

  // Function to handle MetaMask wallet connection
  const connectWalletHandler = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setConnectedAccount(accounts[0]);
        console.log("Connected account:", accounts[0]);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  useEffect(() => {
    setLoginInput({ username: "", password: "" });
  }, []);

  return (
    <div className="home-main">
      <div className="home-container">
        <div className="login">
          <div className="login-container">
            {/* MetaMask connection status */}
            {connectedAccount ? (
              <p>Connected with: {connectedAccount}</p>
            ) : (
              <button onClick={connectWalletHandler}>Connect with MetaMask</button>
            )}

            {/* Login Form */}
            <div className="login-form">
              <label>Username:</label>
              <input
                type="text"
                value={loginInput.username}
                onChange={(e) => setLoginInput({ ...loginInput, username: e.target.value })}
                placeholder="Enter username"
              />
              <div className="password-container">
                <label>Password:</label>
                <div className="input-pass-div">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={loginInput.password}
                    onChange={(e) => setLoginInput({ ...loginInput, password: e.target.value })}
                    className="input-password"
                    placeholder="Enter password"
                  />
                  <span
                    id="password-eye"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </span>
                </div>
              </div>
              <button
                className="login-btn cta-btn"
                onClick={() => loginHandler(loginInput)}
              >
                Login
              </button>
              {isLoggedIn && <p>Welcome, {loginInput.username}!</p>}
                  <button
                id="btn-default"
                className="btn-default"
                onClick={() => {
                  setLoginInput(creds);
                  loginHandler(creds);
                }}
              >
                {" "}
                Login as Guest
              </button>

              {/* </div> */}
              <div className="signup-nav">
                Don't have an account?{" "}
                <NavLink to="/signup">Sign up here</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
