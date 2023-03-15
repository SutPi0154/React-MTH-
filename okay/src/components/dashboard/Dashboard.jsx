import React from "react";
import { Link, Outlet } from "react-router-dom";
import Template from "../Template";

const Dashboard = () => {
  return (
    <div>
      <Template>
        <h2>min ga par par</h2>
        <Link to={"/dashboard/addCategory"}>
          <button className=" px-2 py-2 bg-teal-500 mr-5 text-white">
            addCategory
          </button>
        </Link>
        <Link to={"/dashboard/addPost"}>
          <button className=" px-2 py-2 bg-teal-500 mr-5 text-white">
            AddPost
          </button>
        </Link>
        <div>
          <Outlet />
        </div>
      </Template>
    </div>
  );
};

export default Dashboard;
