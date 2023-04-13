import React from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";

const Card = ({ product }) => {
  const { title, id, description, image, price, category } = product;
  return (
    <div className="w-72 border shadow-lg rounded relative flex flex-col gap-5  p-5 ">
      <img className=" h-44 mx-auto" src={image} alt="" />

      <h1 className=" text-xl  tracking-wide text-orange-500 font-bold">
        {title?.substring(0, 15)}...
      </h1>
      <p className=" text-gray-500 text-sm  ">
        {description?.substring(0, 30)}...
      </p>
      <div className="flex  items-center gap-1 ">
        <AiOutlineDollarCircle className=" text-xl text-orange-500" />
        <p className=" text-gray-600 text-lg ">{price}</p>
      </div>
      <button className=" bg-orange-500 border-none px-6 py-2 shadow-lg rounded  text-white ">
        Add To Cart
      </button>
      <p className=" absolute top-2 px-2 left-[-10px] bg-orange-400 text-white rounded shadow-md p-1 capitalize text-sm ">{category}</p>
    </div>
  );
};

export default Card;
