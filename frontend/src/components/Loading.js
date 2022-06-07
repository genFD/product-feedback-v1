import React from "react";
import Spinner from "react-spinkit";

const Loading = () => {
  return (
    <>
      <div className="min-h-screen min-w-full absolute top-0 left-0  bg-Pale-Phthalo-Blue flex justify-center items-center">
        <Spinner name="wandering-cubes" color="#AD1FEA" />
      </div>
    </>
  );
};

export default Loading;
