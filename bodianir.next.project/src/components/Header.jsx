import Shift from "../icons/Shift";
import Sun from "../icons/Sun";
import { useTheme } from "next-themes";

const Header = () => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <div className="flex justify-between items-center space-x-2 mr-20">
        <p className="text-4xl font-black ml-20">ANDY</p>
        <button className="ml-96">About</button>
        <button className="px-4">Work</button>
        <button className="px-4">Testimonials</button>
        <button className="px-4">Contact</button>
        <button onClick={toggleTheme} className="flex items-center">
          {theme === "dark" ? <Sun /> : <Shift />}
        </button>
        <button className="px-4 bg-black text-white rounded-lg h-10">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Header;
