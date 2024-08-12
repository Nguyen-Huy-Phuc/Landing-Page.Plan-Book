import React from "react";
import "./Card.css";

interface CardProps {
  emoji: string;
  heading: string;
  detail: string;
  color?: string;
  contentSubmit: string;
}

const Card: React.FC<CardProps> = ({
  emoji,
  heading,
  detail,
  color,
  contentSubmit,
}) => {
  return (
    <div className="card" style={{ borderColor: color }}>
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">{contentSubmit}</button>
    </div>
  );
};

export default Card;
