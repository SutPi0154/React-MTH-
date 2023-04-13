import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Guard from "./components/Guard";
import Navbar from "./components/Navbar";
import CreateProduct from "./Pages/product/CreateProduct";

function App() {
  return (
    <div className="App">
      <div className=" container mx-auto">
        <Routes>
          <Route
            path="/"
            element={
              <Guard>
                <Dashboard />
              </Guard>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/create-product"
            element={
              <Guard>
                <CreateProduct />
              </Guard>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
