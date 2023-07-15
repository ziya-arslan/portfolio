import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const Switch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  const handleChange = () => {
    setTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <label className="switch relative flex flex-col justify-center items-center gap-[30px] w-[50px] h-[20px]">
      <input
        className="toggle opacity-0 w-0 h-0 peer"
        type="checkbox"
        onChange={handleChange}
        checked={currentTheme === "dark"}
      />
      <span className="slider box-border rounded-[5px] border-2 border-solid border-[#323232] shadow-3xl absolute cursor-pointer top-0 right-0 bottom-0 left-0 bg-[#fff] duration-300 transition-all ease-in before:box-border before:absolute before:content[''] before:h-[20px] before:w-[20px] before:border-2 before:border-solid before:border-[#323232] before:rounded-[5px] before:left-[-2px] before:bottom-[2px] before:bg-white before:shadow-slider before:duration-300 before:transition-all before:ease-in peer-checked:bg-[#242424] peer-checked:before:translate-x-[30px]"></span>
      <span className="card-side"></span>
    </label>
  );
};

export default Switch;
