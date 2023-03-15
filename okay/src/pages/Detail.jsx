import React from "react";
import { Link, useLocation } from "react-router-dom";

const Detail = ({children}) => {
  const location = useLocation();
  const meal = location.state.meal;
  console.log(meal)
  console.log(children)
  return (
    <div>
      <Link to={"/"}>
        <button
          className=" bg-teal-500 px-2 py-1 text-white mt-10 ml-10
        "
        >
          Meal
        </button>
      </Link>
      <h2 className=" bg-black text-white">{meal.strMeal}</h2>
      {/* <h2>Detail</h2> */}
    </div>
  );
};

export default Detail;
