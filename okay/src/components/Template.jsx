import React, { Children } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Template = ({children}) => {
  return (
    <div>
      <div className=" relative">
        <Navbar />
        <h2>{children}</h2>
        <Footer />
      </div>
    </div>
  );
};

export default Template;
