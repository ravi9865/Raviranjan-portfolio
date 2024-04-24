import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/adminLogin.css";
const Login = () => {
  const baseUrl = "https://protfolio-backend-hlx6.onrender.com";
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseUrl}/userLoginData`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, email, password }),
      });
      const data = await response.json();

      if (response.status === 200) {
        alert("Login successful!");
      } else {
        if (response.status === 401) {
            alert(data.message);
        } else if (response.status === 404 || data.message === "User not found") {
            alert(data.message);
        }else if (response.status === 500 || data.message === "Error connecting to MongoDB Atlas") {
            alert(data.message);
        } else {
            alert("Login failed. Please try again.");
        }
      }
    } catch (error) {
      alert("Login failed. Please try again.");
      console.error("Error:", error);
    }
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;