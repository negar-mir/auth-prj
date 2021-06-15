import http from "./http";
import jwtDecode from "jwt-decode";

const tokenKey = "token";

setTimeout(() => {
  http.setJWT(getJWT());
}, 1000);

export async function login(username, password) {
  const {
    data: { token },
  } = await http.post("auth", { username, password });
  localStorage.setItem(tokenKey, token);
}

export function loginWithJWT(token) {
  localStorage.setItem(tokenKey, token);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const token = localStorage.getItem(tokenKey);
    return jwtDecode(token);
  } catch (error) {
    return null;
  }
}

export function getJWT() {
  return localStorage.getItem(tokenKey);
}

const auth = {
  login,
  loginWithJWT,
  logout,
  getCurrentUser,
  getJWT,
};
export default auth;
