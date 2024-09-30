import Shift from "../icons/Image15";
import Sun from "../icons/Sun";
import { useTheme } from "next-themes";
import Closing from "./Close";
import { useState } from "react";

export const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { setTheme, theme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const darah = () => {
    setClose();
  };
  return (
    <div>
      <div className="flex w-full ">
        <p className="text-4xl font-black ">ANDY</p>
        <button onClick={() => setIsVisible(!isVisible)}>
          <Closing />
        </button>

        <p></p>
      </div>
      <div className="flex flex-col mt-20 gap-5 ">
        <button className="pr-10">About</button>
        <button className="pr-10">Work</button>
        <button>Testimonials</button>
        <button className="pr-10">Contact</button>
      </div>
      <div className=" flex flex-col mt-10 gap-5">
        <button onClick={toggleTheme} className="flex items-center">
          Switch theme
          {theme === "dark" ? <Sun /> : <Shift />}
        </button>
        <button className="px-4 bg-white text-black w-[160px] rounded-lg h-10">
          Download CV
        </button>
      </div>
    </div>
  );
};
