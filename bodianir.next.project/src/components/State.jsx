// 1. On and Off

import { useState } from "react";
export const State = () => {
  const [first, second] = useState("red");
  const click = () => {
    second((prev) => (prev === "blue" ? "red" : "blue"));
  };

  return (
    <div>
      <p>{first}</p>
      <button onClick={click}>Click here</button>
    </div>
  );
};

export const Same = () => {
  const [third, fourth] = useState("On");
  const dar = () => {
    fourth((prv) => (prv === "on" ? "off " : "on"));
  };
  return (
    <div>
      <p>{third}</p>
      <button onClick={dar}>Dar </button>
    </div>
  );
};

export const Last = () => {
  const [neg, hoyr] = useState("");
  return (
    <div>
      <button onClick={() => hoyr(!neg)}>Hdd</button>
      {neg && (
        <ul>
          <li>Hey</li>
          <li>hooy</li>
        </ul>
      )}
    </div>
  );
};
