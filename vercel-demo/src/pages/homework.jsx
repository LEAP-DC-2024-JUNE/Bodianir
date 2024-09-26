//1
const numbers = [10, 20, 30, 40, 50]; // Note: Changed 'number' to 'numbers' for clarity
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
const average = sum / numbers.length;

console.log(average);
//
import { useState } from "react";

const Membership = () => {
  const [email, setEmail] = useState("");
  const handleInput = (param1) => {
    setEmail(param1);
  };
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center">
        <input
          type="radio"
          name="Membership"
          value={"Standart "}
          onChange={(event) => handleInput(event.target.value)}
        />
        <span>Standart </span>

        <input
          type="radio"
          name="Membership"
          value={"Premium "}
          onChange={(event) => handleInput(event.target.value)}
        />
        <span>Premium </span>
        <input
          type="radio"
          name="Membership"
          value={"Classic"}
          onChange={(event) => handleInput(event.target.value)}
        />
        <span>Classic </span>
        <button onClick={() => console.log(email)}>Submit</button>
      </div>
    </div>
  );
};
export default Membership;
