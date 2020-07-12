import axios from "axios";
export const login = (tokenKey) => {
  localStorage.setItem("TOKEN", tokenKey);
};

export const logout = () => {
  localStorage.removeItem("TOKEN");
};

export const isLogin = () => {
  if (localStorage.getItem("TOKEN")) {
    return true;
  }

  return false;
};
