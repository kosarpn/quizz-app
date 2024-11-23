import React, { useRef, useState } from "react";
import "./Quiz.css";
import { data } from "../../assets/data";
import Question from "./Question/Question";
import Options from "./Options/Options";
import Result from "./Result/Result";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const optionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const checkAns = (e, ans) => {
    if (!lock) {
      if (data[index].ans === ans) {
        e.target.classList.add("correct");
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
        optionRefs[data[index].ans - 1].current.classList.add("correct");
      }
      setLock(true);
    }
  };

  const next = () => {
    if (lock) {
      if (index === data.length - 1) {
        setResult(true);
        return;
      }
      setIndex(index + 1);
      setLock(false);
      optionRefs.forEach((ref) => {
        ref.current.classList.remove("correct", "wrong");
      });
    }
  };

  const reset = () => {
    setIndex(0);
    setScore(0);
    setLock(false);
    setResult(false);
  };

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      {result ? (
        <Result score={score} total={data.length} reset={reset} />
      ) : (
        <>
          <Question question={data[index].question} index={index + 1} />
          <Options
            options={data[index]}
            checkAns={checkAns}
            optionRefs={optionRefs}
          />
          <button onClick={next} className="nextbtn">
            Next
          </button>
          <div className="index">
            {index + 1} of {data.length} questions
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
