import axios from "axios";
import authToken from "./components/authToken/authToken";
//axios instance
// let HTTP = axios.create({
//   baseURL: "https://ty-shop.herokuapp.com",
// });
let HTTP = axios.create({
  baseURL: "https://ty-shop-token.herokuapp.com",
  headers: {
    Authorization:`Bearer ${authToken() && authToken.token()}`
  }
});

export default HTTP;
