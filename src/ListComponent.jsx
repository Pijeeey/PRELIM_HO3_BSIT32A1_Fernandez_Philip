import React from "react";

const ListComponent = ({ items }) => {
  return (
    <div>
      <h3>List of Names:</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.firstName} {item.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
