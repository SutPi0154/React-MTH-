import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("userData"));
  //   console.log(user);
  const navigate = useNavigate();
  const logoutUserData = () => {
    localStorage.removeItem("userData");
    navigate("/login");
  };
  return (
    <nav className=" flex justify-between items-center">
      <h1>SHOP</h1>
      <div className=" flex gap-4 items-center">
        <img
          src={user?.image}
          className=" border p-1 w-10 inline-block rounded-full"
          alt=""
        />
        {/* <h1 className=" inline-block">{user?.name}</h1> */}
        <button
          onClick={logoutUserData}
          className="  px-5 py-1 border bg-black text-white rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
