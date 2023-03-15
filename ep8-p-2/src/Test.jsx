import React, { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    console.log("useEffect run");
    return () => {
      console.log("component unmounted");
    };
  });
  return <div>Test</div>;
};

export default Test;
