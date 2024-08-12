import React, { useContext } from "react";
import "./Toggle.css";
import { CiCloudSun } from "react-icons/ci";
import { CiCloudMoon } from "react-icons/ci";

import { themeContext } from "../../Context";

const Toggle = () => {
  const theme: any = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    // debugger
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className="toggle" onClick={handleClick}>
      <CiCloudMoon />
      <CiCloudSun />
      {/*                              toggle.css mein left ki property aik assign hy ussy delete
                                          krna hy pehly */}
      <div
        className="t-button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
