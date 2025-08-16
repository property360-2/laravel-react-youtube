import { Link, Navigate } from "react-router-dom";
import "../styling/login.css";
import { useState } from "react";
import axiosClient from "../axios-client";

const Register = () => {
  const [acc, setAccount] = useState({
    email: "",
    password: "",
  });

  const { email, password } = acc; // destructure here

  const submitRegister = (ev) => {
    ev.preventDefault();
    axiosClient
      .post("/auth/register", acc)
      .then((res) => {

        console.log("Registration successful:", res.data);
        // redirect to login page after successful registration
        Navigate("/login");
      })
      .catch((err) => {
        console.error(
          "Registration error:",
          err.response?.data?.message || err
        );
        
      });
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setAccount((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <h1>Register Page</h1>
      <form onSubmit={submitRegister}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
      <p>
        have an Account? <Link to="/login">Login</Link>
      </p>
    </>
  );
};

export default Register;
