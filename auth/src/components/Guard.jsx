import React from "react";
import { Navigate } from "react-router-dom";

const Guard = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("userData"));
  // console.log(user);

  if (user?.token) return children;
  else return <Navigate to="/login" />;
};

export default Guard;
