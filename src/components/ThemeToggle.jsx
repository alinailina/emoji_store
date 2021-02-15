import React from "react";
import { useThemeToggle } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const toggle = useThemeToggle();
  return (
    <div id="toggle">
      <label>
        <input type="checkbox" onClick={toggle} />
        <span></span>
      </label>
    </div>
  );
};

export default ThemeToggle;
