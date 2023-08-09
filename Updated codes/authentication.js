import React, { useState } from "react";
import axiosInterceptorInstance from "./axiosInterceptor"; 
import { useNavigate } from "react-router-dom";
import "./css/Login.css";
import Sidebar from "./Sidebar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setError("");
      setSuccessMessage("");

      if (!email || !password) {
        setError("Please enter email and password.");
        return;
      }

      const response = await axiosInterceptorInstance.post("/employee/authenticate", {
        email,
        password,
      });
      const { role, token } = response.data;
      localStorage.setItem("token", token);
      setSuccessMessage(`Login Successful! Welcome, ${role}.`);

      navigate(`/${role.toLowerCase()}Dashboard`);
    } catch (error) {
      setSuccessMessage("");
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert("Failed to authenticate user. Please try again.");
      }
    }
  };

  return (
    <div className="col-md-6">
      <div className="card1">
        <h5 className="card1-header bg-primary text-white">Login</h5>
        <div className="card1-body">
          {error && <div className="alert alert-danger">{error}</div>}
          {successMessage && <div className="alert alert-success">{successMessage}</div>}
          <form>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="button" className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
