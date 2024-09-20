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
      <p className="text-4xl font-black sm:block hidden mb-20">ANDY</p>
      <div className="flex items-center space-x-4">
        <button
          className="w-6 h-6 sm:hidden sm:right-0 "
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? <Closing /> : <Burger />}
        </button>

        {isVisible && (
          <div className="absolute flex flex-col top-10 right-0 w-full dark:bg-black bg-white text-black dark:text-black h-[800px] p-4">
            <div className="flex  w-full mb-4">
              <p className="text-4xl dark:text-white text-black font-black">
                ANDY
              </p>
            </div>
            <button className="mr-96 dark:text-white text-black">About</button>
            <button className="mr-96 dark:text-white text-black">Work</button>
            <button className="mr-96 dark:text-white text-black">
              Testimonials
            </button>
            <button className="mr-96 dark:text-white text-black">
              Contact
            </button>
            <button
              onClick={toggleTheme}
              className="flex items-center text-black dark:text-white"
            >
              Switch theme
              {theme === "dark" ? <Sun /> : <Shift />}
            </button>
            <button className="px-4 dark:bg-white bg-customDark dark:text-black text-white rounded-lg h-10">
              Download CV
            </button>
          </div>
        )}

        <div className="md:flex items-center space-x-4 hidden lg:flex">
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
