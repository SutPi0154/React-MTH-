import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Product from "./product/Product";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userData"));
  console.log(user);
  const logOutHandler = () => {
    navigate("/login");
    localStorage.removeItem("userData");
  };

  return (
    <>
      <Navbar />
      <Product />
      {/* <img src={user?.image} />
      <h1>{user?.name}</h1> */}
      {/* <h1>{user?.token}</h1> */}
      {/* <button
        onClick={logOutHandler}
        className="px-6 py-1 rounded text-white bg-teal-500 hover:bg-teal-300"
      >
        Logout
      </button> */}
    </>
  );
};

export default Dashboard;
