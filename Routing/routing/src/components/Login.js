import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });
console.log("loginData", loginData);

const [emailError, setEmailError] = useState("");
const [passwordError, setPasswordError] = useState("");
 //email validate
 const validateEmail = () => {
  if (loginData.email) {
    let regex = /^\S+@\S+$/;
    if (regex.test(loginData.email)) {
      setEmailError("");
      return true;
    } else {
      setEmailError("*Enter valid Email-id");
    }
  } else {
    setEmailError("*Email-id is Required");
  }
  return false;
};

  //password validate
  const validatePassword = () => {
    if (loginData.password) {
      let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (regex.test(loginData.password)) {
        setPasswordError("");
        return true;
      } else {
        setPasswordError(`*Enter valid password,Minimum eight characters, at least one letter and one number:
         `);
      }
    } else {
      setPasswordError("*Password is Required");
    }
    return false;
  };
  let updateLoginData = (event) => {
    setloginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
  };

  // to navigate programatically useNavigate
  let navigate = useNavigate();

  let navigateToSignUp = () => {
    navigate("/signup");
  };
  return (
    <div className="container border mt-3">
      <h2>Login Page</h2>
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
            value={loginData.email}
            onChange={(event) => {
              updateLoginData(event);
            }}
          />
   
   {emailError && <div className="errormsg">{emailError}</div>}

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
            value={loginData.password}
            onChange={(event) => {
              updateLoginData(event);
            }}
          />
          {passwordError && <div className="errormsg">{passwordError}</div>}
        </div>

        <button type="submit" className="btn btn-primary" >
          Submit
        </button>

        <h4 style={{ cursor: "pointer" }} onClick={navigateToSignUp}>
          Don't have an account? Signup here !
        </h4>
      </form>
    </div>
  );
}

export default Login;
