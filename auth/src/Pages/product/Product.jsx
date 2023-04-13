import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";

const Product = () => {
  const [Products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    const { data } = await axios.get("http://localhost:3000/products");
    console.log(data);
    setProducts(data);
    setIsLoading(false);
    console.log(Products);
  };

  useEffect(() => {
    getProducts();
    setIsLoading(true);
  }, []);
  if (isLoading) return <Spinner />;
  return (
    <>
      <Link to={"/create-product"}>
        <button className=" px-6 py-2 shadow-lg text-white rounded bg-orange-500">
          Create New Product
        </button>
      </Link>
      <div className=" flex flex-wrap my-10 gap-5 justify-center items-center">
        {Products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Product;
