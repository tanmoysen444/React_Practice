// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Users from "./components/Users";
import Products from "./components/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import AppBar from "./components/AppBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Prod from "./components/Prod";
import authToken from "./components/authToken/authToken";
import Register from "./components/authToken/Register";

function App() {
  let tokenCredentials = authToken();
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Users />  */}
        {/* <Products /> */}
        <AppBar />  
        {tokenCredentials && (
          <Routes>
            <Route path="/products" element={<Prod />} />
            {/* <Route path="/addProduct" element={<Prod />} /> */}
            </Routes>
        )}
        {!tokenCredentials && (
           <Routes>
             <Route path="/login" element={<Login />} />
             <Route path="/register" element={<Register/>} />
           </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}
export default App;