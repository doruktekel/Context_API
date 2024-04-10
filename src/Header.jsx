import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./components/context/themeContext";

const Header = () => {
  const { changeTheme, isDark } = useContext(ThemeContext);

  const handleChangeTheme = () => {
    changeTheme();
  };
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Context API</Link>
      </div>

      <div className="right-header">
        <Link to="/about" className="btn-about">
          About
        </Link>
        <Link onClick={handleChangeTheme} className="btn-about">
          {isDark ? "Light Theme" : "Dark Theme"}
        </Link>
      </div>
    </div>
  );
};

export default Header;
