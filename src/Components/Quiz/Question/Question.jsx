import React from "react";
import "./Question";
const Question = ({ question, index }) => {
  return (
    <h2>
      {index}.{question}
    </h2>
  );
};
export default Question;
