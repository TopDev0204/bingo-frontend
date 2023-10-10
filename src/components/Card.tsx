import React from "react";
import "./Card.css";

interface CardProps {
  num: number | string;
  crossed: boolean;
  // label: string;
  // onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  // list: string[];
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
