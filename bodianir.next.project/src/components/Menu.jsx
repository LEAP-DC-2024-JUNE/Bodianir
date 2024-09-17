import Shift from "../icons/Shift";
import Sun from "../icons/Sun";
import { useTheme } from "next-themes";
export const Menu = () => {
  const { setTheme, theme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className=" md:flex-row items-center space-x-4 sm:hidden ">
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
  );
};
