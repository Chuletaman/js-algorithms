import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import twoSum from "./algorithms/twoSum";

const getContent = () => (
  <React.Fragment>
    <h1>Random JS Algorithms</h1>
    <h2>running...</h2>
    <h3>{twoSum.name}</h3>
  </React.Fragment>
);

ReactDOM.render(getContent(), document.getElementById("root"));

console.log(twoSum([3, 2, 4], 6));
