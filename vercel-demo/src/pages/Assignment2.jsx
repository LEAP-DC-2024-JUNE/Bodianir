import { useState } from "react";

const Assignment2 = () => {
  const array = ["apple", "banana", "kiwi", "pear"];
  const [two, four] = useState("0");
  const filterByLength = array.filter((word) => {
    return word.length > two;
  });
  const handleChangeValue = (param1) => {
    four(param1);
  };

  return (
    <div>
      <div>Filter by length more than 4 words</div>
      <div>
        <button onClick={() => handleChangeValue(4)}>4</button>
      </div>
      <div>
        <button onClick={() => handleChangeValue(2)}>2</button>
      </div>
      <div>
        <button onClick={() => handleChangeValue(5)}>5</button>
      </div>
      {filterByLength.map((word, index) => {
        return <p key={index}>{word}</p>;
      })}
    </div>
  );
};
export default Assignment2;
