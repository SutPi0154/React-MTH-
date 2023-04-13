import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUserName] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  const [IsLoading, setIsLoading] = useState(false);

  const apiLogin = async (userData) => {
    const { data } = await axios.post(
      "https://dummyjson.com/auth/login",
      userData
    );
    console.log(data);
    setIsLoading(false);
    // console.log(user);
    if (data) {
      const user = {
        image: data?.image,
        name: data?.username,
        token: data?.token,
      };
      localStorage.setItem("userData", JSON.stringify(user));
      navigate("/");
    }
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await apiLogin({ username, password });
    // console.log(userData);
  };

  const navigate = useNavigate();
  return (
    <div className=" h-screen flex justify-center items-center ">
      <form className=" shadow-xl rounded p-5 w-96">
        <h1 className=" text-3xl mb-5"> Login Form</h1>
        <div className="mb-6">
          <label
            htmlFor="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="text"
            id="text"
            className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your Name"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          onClick={onSubmitHandler}
          className="text-white bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {IsLoading ? "Loading" : "login"}
        </button>
      </form>
    </div>
  );
};
export default Login;
