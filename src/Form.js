import React, { useState } from "react";


const Form = (props) => {
  const [input, setInput] = useState({});

  const loginForm = (e) => {
    e.preventDefault();
    console.log(input);
  };

  const CollectLoginData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((data) => ({ ...data, [name]: value }));
  };
  return (
    <div>
      <form onSubmit={loginForm}>
        <label>Enter User Name</label>
        <input
          type="text"
          name="username"
          value={input.username || ""}
          onChange={CollectLoginData}
        />
        <label>Enter Password</label>
        <input
          type="password"
          name="pass"
          value={input.pass || ""}
          onChange={CollectLoginData}
        />
        <label>Choose </label>
        <select
          name="Favorite"
          value={input.Favorite || ""}
          onChange={CollectLoginData}
        >
          {props.favorite.map((item, index) => (
            <option key={index} value={item} name={input.Favorite}>
              {item}
            </option>

          ))}
        </select>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
