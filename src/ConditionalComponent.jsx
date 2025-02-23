import React, { useState } from "react";
import "./styles.css"; 

const ConditionalComponent = ({ fullName }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="result-container">
      <button className="glow-button" onClick={toggleVisibility}>
        {isVisible ? "Hide Name" : "Show Name"}
      </button>
      {isVisible && <p className="neon-name">Full Name: {fullName}</p>}
    </div>
  );
};

export default ConditionalComponent;
