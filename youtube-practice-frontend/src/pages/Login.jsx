import { Link } from "react-router-dom";
import "../styling/login.css";
const Login = () => {
  const submitLogin = (ev) => {
    ev.preventDefault();
  };

  return (
    <>
      {" "}
      <h1>Login Page</h1>
      <form onSubmit={submitLogin}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" required />

        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </>
  );
};

export default Login;
