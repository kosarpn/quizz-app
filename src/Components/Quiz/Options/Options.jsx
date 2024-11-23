import React from "react";
import "./Options.css";
const Options = ({ options, checkAns, optionRefs }) => {
  return (
    <ul>
      {Object.keys(options)
        .filter((key) => key.includes("option"))
        .map((key, idx) => (
          <li
            key={key}
            ref={optionRefs[idx]}
            onClick={(e) => checkAns(e, idx + 1)}
          >
            {options[key]}
          </li>
        ))}
    </ul>
  );
};

export default Options;
