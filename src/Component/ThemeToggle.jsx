import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } 
    // else {
    //   setTheme("light"); // Fallback default
    // }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        data-tooltip-id="theme-tooltip"
        data-tooltip-content={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
        className="w-10 h-10 rounded-full flex items-center justify-center bg-[#b6ffb6]  hover:scale-110 transition-all duration-300"
      >
        {theme === "dark" ? (
          <FaSun className="text-[rgba(6,64,43,0.7)] text-xl" />
        ) : (
          <FaMoon className="text-[rgba(6,64,43,0.7)] text-xl" />
        )}
      </button>
      <Tooltip 
        id="theme-tooltip" 
        place="bottom" 
        effect="solid"
        delayShow={200}
        className="!bg-[[rgba(6,64,43,1)] !text-white !rounded-lg !px-3 !py-1 text-sm"
      />
    </>
  );
};

export default ThemeToggle;