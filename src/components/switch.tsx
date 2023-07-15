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
    <label className="switch">
      <input
        className="cb"
        type="checkbox"
        onChange={handleChange}
        checked={currentTheme === "light"}
      />
      <span className="toggle">
        <span className="left">off</span>
        <span className="right">on</span>
      </span>
    </label>
  );
};

export default Switch;
