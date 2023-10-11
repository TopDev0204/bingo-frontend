import React from "react";
import "./Card.css";

interface CardProps {
  num: number | string;
  crossed: boolean;
}

const Card = ({ num, crossed }: CardProps) => (
  <div className="card">
    <p className={`${crossed ? "crossed" : ""}`}>{num}</p>
  </div>
);

Card.defaultProps = {
  num: "Default Number",
  crossed: false,
};

export default Card;
