import Shift from "../icons/Image15";
import Sun from "../icons/Sun";
import { useTheme } from "next-themes";

export const Toggle = () => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      {" "}
      <button onClick={toggleTheme} className="flex items-center">
        {theme === "dark" ? <Sun /> : <Shift />}
      </button>
    </div>
  );
};
