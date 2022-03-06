import axios from "axios";
import auth from "./authService";
import { toast } from "react-toastify";

const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:5000/api/";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    toast.error("An unexpected error occured.");
  }

  return Promise.reject(error.response);
});

export function setJWT(jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + auth.getJWT(jwt);
}

const http = {
  get: (endpoint) => axios.get(baseUrl + endpoint),
  post: (endpoint, data) => axios.post(baseUrl + endpoint, data),
  put: (endpoint, data) => axios.put(baseUrl + endpoint, data),
  delete: (endpoint) => axios.delete(baseUrl + endpoint),
  setJWT,
};

export default http;
