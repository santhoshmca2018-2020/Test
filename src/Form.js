import React, { useState } from "react";
const gender = ["Male", "Female"];
const Form = () => {
  const [input, setInput] = useState({});

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((info) => ({ ...info, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter User Name</label>
        <input
          type="text"
          name="username"
          value={input.username || ""}
          onChange={handleOnChange}
        />
        <label>Enter Age</label>
        <input
          type="number"
          name="age"
          step={8}
          value={input.age || ""}
          onChange={handleOnChange}
        />
        <label>Enter your Address</label>
        <textarea
          name="address"
          value={input.address || ""}
          onChange={handleOnChange}
        />

        <label>Gender</label>
        <select
          name="gender"
          value={input.gender || ""}
          onChange={handleOnChange}
        >
          {gender.map((item) => (
            <option>{item}</option>
          ))}
        </select>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
