import { useState } from "react";
export const State = () => {
  const [name, setName] = useState("Bodi");
  const handleClick = () => {
    setName("Anir");
  };

  return (
    <div>
      <p>{name}</p>
      <button onClick={handleClick}>Change name</button>
    </div>
  );
};
