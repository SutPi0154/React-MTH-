import axios from "axios";
import React, { useState } from "react";

const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const createProduct = async () => {
    const { data } = await axios.post("http://localhost:3000/products", {
      title,
      image,
      description,
      rating,
      price,
      category,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    createProduct();
    console.log(title, image, rating, description, price, category);
  };

  return (
    <div className=" flex h-screen items-center justify-center">
      <form
        onSubmit={onSubmitHandler}
        className=" flex flex-col gap-4 rounded w-96 p-10 justify-center border items-center"
      >
        <h2 className=" text-xl mx-auto text-orange-500 tracking-wider font-bold ">
          Create New Product
        </h2>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          className=" w-full outline-none border-b-2 px-2 py-2"
          type="text"
          placeholder="Enter title..."
          required
        />
        <input
          onChange={(e) => {
            setImage(e.target.value);
          }}
          value={image}
          className=" w-full outline-none border-b-2 px-2 py-2"
          type="text"
          placeholder="Enter img Url..."
          required
        />
        <input
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          className=" w-full outline-none border-b-2 px-2 py-2"
          type="text"
          placeholder="Enter description..."
          required
        />
        <input
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          value={category}
          className=" w-full outline-none border-b-2 px-2 py-2"
          type="text"
          placeholder="Enter category..."
          required
        />

        <input
          onChange={(e) => {
            setRating(e.target.value);
          }}
          value={rating}
          className=" w-full outline-none border-b-2 px-2 py-2"
          type="text"
          placeholder="Enter rating..."
          required
        />
        <input
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          value={price}
          className=" w-full outline-none border-b-2 px-2 py-2"
          type="text"
          placeholder="Enter price..."
          required
        />
        <button
          type="submit"
          onSubmit={onSubmitHandler}
          className=" px-4 py-1 text-sm bg-orange-500 rounded shadow-lg text-white"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
