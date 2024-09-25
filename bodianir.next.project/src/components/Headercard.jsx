import Shift from "../icons/shift";
import Sun from "../icons/Sun";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Burger from "../icons/Burger";
import Closing from "../components/Close";
import { Menu } from "../components/Menu";
import Tovch from "../components/Tovch";

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
    <div className="flex-row pl-10 mt-10">
      <div className="flex gap-40">
        <p className="text-4xl font-black ">ANDY</p>
        <Tovch />{" "}
      </div>

      <div className="flex flex-row gap-20 pl-96 mb-20">
        <button className="hidden sm:block">About</button>
        <button className="hidden sm:block">Work</button>
        <button className="hidden sm:block">Testimonials</button>
        <button className="hidden sm:block">Contact</button>
        <button onClick={toggleTheme} className="items-center hidden sm:block">
          Switch theme
          {theme === "dark" ? <Sun /> : <Shift />}
        </button>

        <button className="bg-white text-black rounded-lg h-10 w-40 hidden sm:block">
          Download CV
        </button>
      </div>
    </div>
  );
};
