import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [signupData, setsignupData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });

  console.log("signupData", signupData);
  let updateLoginData = (event) => {
    setsignupData({
      ...signupData,
      [event.target.name]: event.target.value,
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
  };

  let navigate=useNavigate()

  let navigateToLogin=()=>{
    navigate("/login")
  }
  return (
    <div className="container border mt-3">
        <h2>Sign up Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={signupData.email}
            onChange={(event) => {
              updateLoginData(event);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
           Enter Name
          </label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={signupData.name}
            onChange={(event) => {
              updateLoginData(event);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={signupData.password}
            onChange={(event) => {
              updateLoginData(event);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
           Confirm Password
          </label>
          <input
            name="confirmPassword"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={signupData.confirmPassword}
            onChange={(event) => {
              updateLoginData(event);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        <h4 style={{ cursor: "pointer" }} onClick={navigateToLogin}>
         Already have an account? Login here !
        </h4>
      </form>
    </div>
  );
}

export default Signup;
