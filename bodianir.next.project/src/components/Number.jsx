import { useState } from "react";
import { Menu } from "../components/Menu";

export const Onoff = () => {
  const [State, Setstate] = useState("On");
  const click = () => {
    Setstate((prevState) => (prevState === "On" ? "Off" : "On"));
  };
  const buttonClass = State === "On" ? "bg-green-700" : "bg-red-700";
  return (
    <div>
      <button className={buttonClass} onClick={click}>
        {State}
      </button>
    </div>
  );
};

export const Number = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      {/* <StateComponent /> */}
      <button onClick={() => setIsVisible(!isVisible)}>CLick</button>
      {isVisible && <Menu />}
    </div>
  );
};
