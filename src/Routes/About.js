import React, { useState } from "react";

const About = () => {
  const [car, setCar] = useState({
    brand: "BMW",
    model: 2022,
    color: "Yellow",
  });

  console.log(car);
  return (
    <div className="content-Layout">
      <div className="loginform">
        <h6>About Page</h6>
        <h3>
          My car is {car.brand} {car.model} model with color in {car.color}
          {car}
        </h3>
        <button>update</button>
      </div>
    </div>
  );
};

export default About;
