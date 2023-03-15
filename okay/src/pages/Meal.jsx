import React from "react";
import { Link } from "react-router-dom";
import { meals } from "../data";

const Meal = () => {
  return (
    <div>
      <Link to={"/"}>
        <button
          className=" bg-teal-500 px-2 py-1 text-white my-10 ml-10
        "
        >
          Meal
        </button>
      </Link>
      <div className=" flex flex-wrap gap-10 justify-center items-center">
        {meals.map((meal) => (
          <div key={meal.idMeal}>
            <img width="200px" src={meal.strMealThumb} alt="" />
            <Link to={`/detail/${meal.id}`} state={{ meal }}>
              <button className=" px-2 py-1 rounded bg-teal-500 text-white mt-2">
                Detail
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meal;
