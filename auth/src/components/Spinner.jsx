import React from "react";
import { Puff } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className=" h-screen flex justify-center items-center">
      <Puff
        height="80"
        width="80"
        radius={1}
        color="#22f164"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Spinner;
