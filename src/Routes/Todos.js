import React, { memo } from "react";

const Todos = (props) => {
  const paragraph = {
    color: "red",
    background: "lightgrey",
    display: "inline-block",
    padding: "10px",
    cursor: "pointer",
  };

  return (
    <div>
      <h2>Todos</h2>

      {props.parameter.map((item, index) => (
        <p key={index} style={paragraph}>
          {item}
        </p>
      ))}
    </div>
  );
};

export default memo(Todos);
