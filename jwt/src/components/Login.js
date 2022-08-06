import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import HTTP from "../axiosConfig";

function Login() {
  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate()
  console.log("login form", userData);
  let updateUserData = (e) => {
    setuserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  let login = async () => {
    let response = await HTTP.post("api/users/login", userData);
    console.log("login response", response);
    localStorage.setItem("jwt",JSON.stringify(response.data))
    localStorage.setItem("jwtToken",JSON.stringify(response.data.token))
    navigate("/products")

  };

  let handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>LOGIN FORM</h1>
      <Form className="container border mt-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={userData.email}
            onChange={updateUserData}
            name="email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={userData.password}
            onChange={updateUserData}
            name="password"
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={login}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;
