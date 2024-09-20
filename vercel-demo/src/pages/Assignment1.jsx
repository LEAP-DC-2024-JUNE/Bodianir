import { useState } from "react";

const Assignment1 = () => {
  const array = [1, 2, 3, 4, 5, 6];
  const [isodd, even] = useState(true);
  const evenNumberArray = array.filter((number) => {
    return isodd ? number % 2 === 0 : number % 2 === 1;
  });
  const TegshToo = () => {
    even(true);
  };
  const Sondgoitoo = () => {
    even(false);
  };

  return (
    <div>
      <div>
        <button onClick={TegshToo}>Tegsh too</button>
      </div>
      <div>
        <button onClick={Sondgoitoo}>Sondgoitoo</button>
      </div>
      <div>Filter Even Numbers </div>
      {evenNumberArray.map((number, index) => {
        return <p key={index}>{number}</p>;
      })}
    </div>
  );
};
export default Assignment1;
