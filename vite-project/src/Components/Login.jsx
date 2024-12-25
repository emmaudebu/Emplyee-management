import React from "react";
import "./style.css";

const Login = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
        <div className=" p-3 rounded w-25 border loginForm">
          <h2>Login page</h2>
          <form>
            <div className=" mb-3">
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
            <div className=" mb-3">
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
            <button className="btn btn-success w-100 rounded-0 mb-2">
              Login
            </button>
            <div className=" mb-1">
              <input type="checkbox" name="tick" className="me-2" />
              <label htmlFor="tick"> You agree with term and conditions</label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
