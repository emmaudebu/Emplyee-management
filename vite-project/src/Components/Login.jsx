import React from "react";

const Login = () => {
  return;
  <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
    <div className=" p-3 rounded w-25 border loginForm">
      <h2>Login page</h2>
      <form>
        <div>
          <label htmlFor="email">
            {" "}
            <strong>Email</strong>
          </label>
          <input
            type="email"
            name="email"
            id=""
            autoComplete="off"
            placeholder="Enter email"
            className="form-control rounded-0"
          />
        </div>
        <div>
          <label htmlFor="password">
            {" "}
            <strong>password</strong>
          </label>
          <input
            type="password"
            name="password"
            id=""
            placeholder="Enter password"
            className="form-control rounded-0"
          />
        </div>
        <button className="btn btn-success w-100 rounded-0">Login</button>
      </form>
      ;
    </div>
  </div>;
};

export default Login;
