import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

interface CardProps {
  icon: string;
  text?: string;
  subText?: string;
  state?: boolean;
  backgroundColor?: string;
  textColor?: string;
}

const Card: React.FC<CardProps> = ({
  icon,
  text,
  backgroundColor,
  subText,
  state,
}) => {
  const cardBackgroundColor = backgroundColor || "#F2F2F2 !mportant";

  return (
    <Link to="/order-here">
      <div
        className="card"
        style={{ backgroundColor: cardBackgroundColor }}
      >
        <div className="container">
          <img
            className="icon"
            src={icon}
            alt="icon"
          />
          <div className="text_active">
            <p className={`text `}>{text}</p>
            <p className={`subtext `}>{subText}</p>
            <p className={"state "}>{state}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
