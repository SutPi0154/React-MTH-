import React from "react";
import { Route, Routes } from "react-router-dom";
import AddCategory from "./components/dashboard/AddCategory";
import AddPost from "./components/dashboard/AddPost";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Content from "./pages/Content";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/content" element={<Content />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/addCategory" element={<AddCategory />} />
          <Route path="/dashboard/addPost" element={<AddPost />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
