import Shift from "../icons/Shift";
import Sun from "../icons/Sun";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Burger from "../icons/Burger";

import Closing from "../components/Close";
import { Menu } from "../components/Menu";

export const Headercard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="flex justify-between items-center p-4 mb-44">
      <p className="text-4xl font-black">ANDY</p>
      <div className="flex items-center space-x-4">
        <button
          className="w-6 h-6 md:hidden md:float-right z-1000"
          onClick={() => setIsVisible(!isVisible)}
        >
          <Burger />
        </button>
        {isVisible && <Menu />}

        <div>
          <button
            id="close-menu"
            class="absolute top-4 right-4 text-white hidden "
          >
            <Closing />
          </button>
        </div>
        <div className=" md:flex items-center space-x-4 hidden lg:hi">
          <button className="px-4">About</button>
          <button className="px-4">Work</button>
          <button className="px-4">Testimonials</button>
          <button className="px-4">Contact</button>
          <button onClick={toggleTheme} className="flex items-center">
            Switch theme
            {theme === "dark" ? <Sun /> : <Shift />}
          </button>
          <button className="px-4 bg-white text-black rounded-lg h-10">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};
