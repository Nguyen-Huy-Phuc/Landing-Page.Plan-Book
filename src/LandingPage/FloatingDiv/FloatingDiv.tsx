import React from "react";
import "./FloatingDiv.css";

interface FloatingDivProps {
  img: string;
  text1: string;
}

const FloatingDiv: React.FC<FloatingDivProps> = ({ img, text1 }) => {
  return (
    <div className="floatingDiv">
      <img src={img} alt="" />
      <span>{text1}</span>
    </div>
  );
};

export default FloatingDiv;
