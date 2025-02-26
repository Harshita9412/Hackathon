// Example Card component
import React from "react";
import "./Card.css"; // Your card-specific styles

const Card = ({ image, title, onClick }) => (
  <div className="card" onClick={onClick}>
    <img src={image} alt={title} />
    <h3>{title}</h3>
  </div>
);

export default Card;
