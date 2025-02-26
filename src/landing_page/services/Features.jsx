import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import "./Features.css";

const Features = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Features data as provided
  const features = [
    { id: 1, image: "/media/images/chatbot.jpg", name: "Chatbot" },
    { id: 2, image: "/media/images/video_assistant.avif", name: "Video Assistant" },
    { id: 3, image: "/media/images/device_support.jpg", name: "Device Support" },
  ];

  // // Function to handle card click and navigate to another route
  // const handleCardClick = (id) => {
  //   // Navigate to a specific route (e.g., '/details/<id>')
  //   navigate(`/details/${id}`);
  // };

  return (
    <div className="features">
      <h2>Our Featured Services</h2>
      <div className="card-row">
        {/* Map over the features array and display the cards */}
        {features.map((feature) => (
          <div
            key={feature.id}
            className="card"
            onClick={() => handleCardClick(feature.id)} // Add click handler
          >
            <img src={feature.image} alt={feature.name} />
            <h3>{feature.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
