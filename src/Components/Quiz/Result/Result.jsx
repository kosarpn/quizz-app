import React from "react";
import "./Result";
const Result = ({ score, total, reset }) => {
  return (
    <>
      <h2 className="score">
        You scored {score} out of {total}
      </h2>
      <button onClick={reset} className="reset">
        Reset
      </button>
    </>
  );
};

export default Result;
