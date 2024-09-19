import { useState } from "react";

const Assignment1 = () => {
  const array = [1, 2, 3, 4, 5, 6];
  const [odd, even] = useState(2);
  const evenNumberArray = array.filter((number) => {
    return number % odd == 0;
  });
  const Tegshtoo = () => {
    even(2);
  };
  const Sondgoitoo = () => {
    even(1);
  };

  return (
    <div>
      <div>
        <button onClick={Tegshtoo}>Tegsh too</button>
      </div>
      <div>
        <button onClick={Sondgoitoo}>Sondgoitoo</button>
      </div>
      <div>Filter Even Numbers </div>
      {evenNumberArray.map((number) => {
        return <p>{number}</p>;
      })}
    </div>
  );
};
export default Assignment1;
