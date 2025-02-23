import React, { useState } from "react";
import ConditionalComponent from "./ConditionalComponent";
import "./styles.css"; 

const InputComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = () => {
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div className="custom-container">
      <div className="card">
        <h2 className="neon-text">Enter Your Name</h2>
        <input
          type="text"
          className="input-field"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          className="input-field"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button className="glow-button" onClick={handleSubmit}>
          Submit
        </button>
        {fullName && <ConditionalComponent fullName={fullName} />}
      </div>
    </div>
  );
};

export default InputComponent;
