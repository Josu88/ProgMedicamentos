import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const Logout = () => {
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  setToken("");
  localStorage.clear();
  navigate("/");
};
