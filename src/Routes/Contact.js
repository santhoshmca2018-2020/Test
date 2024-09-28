import React, { useState } from "react";
import Todos from "./Todos";

const Contact = (props) => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["Todo1", "Todo2", "Todo3"]);

  const increment = (inc) => {
    setCount((inc) => inc + 1);
  };
  return (
    <div className="content-Layout">
      <div className="loginform">
        <h4>Contact Page</h4>
        <p>Count {count}</p>
        <button onClick={increment}>Click</button>
        <Todos parameter={todos} />
      </div>
    </div>
  );
};

export default Contact;
