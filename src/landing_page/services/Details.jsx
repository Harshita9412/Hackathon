// Details.jsx
import React from 'react';
import { useParams } from 'react-router-dom';  // To access the dynamic route parameter

const Details = () => {
  const { id } = useParams();  // Grab the 'id' from the URL

  return (
    <div className="details">
      <h2>Details for Feature {id}</h2>
      {/* Here you can fetch and display more information based on the 'id' */}
      <p>Here is more info about feature with ID: {id}</p>
    </div>
  );
};

export default Details;
