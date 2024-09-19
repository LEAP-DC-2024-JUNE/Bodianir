import { useState } from "react";

const Assignment2 = () => {
  const array = ["apple", "banana", "kiwi", "pear"];
  const [two, four] = useState("4");
  const filterByLength = array.filter((word) => {
    return word.length > two;
  });
  const clickfour = () => {
    four(4);
  };
  const clicktwo = () => {
    four(2);
  };

  return (
    <div>
      <div>Filter by length more than 4 words</div>
      <div>
        <button onClick={clickfour}>4</button>
      </div>
      <div>
        <button onClick={clicktwo}>2</button>
      </div>
      {filterByLength.map((word) => {
        return <p>{word}</p>;
      })}
    </div>
  );
};
export default Assignment2;
