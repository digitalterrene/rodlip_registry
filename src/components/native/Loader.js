import React from "react";
import PuffLoader from "react-spinners/PuffLoader";

const Loader = ({ loading, size }) => {
  return (
    <div className="">
      <PuffLoader
        color={"#22d3ee"}
        loading={loading}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
