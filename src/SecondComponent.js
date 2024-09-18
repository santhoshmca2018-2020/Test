import React from "react";
import App from "./App";
import Car from "./Car";
const Fruits = ["apple", "orange", "Banana"];
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const [one, ...remaining] = numbersOne;
const combinedNo = [...numbersOne, ...numbersTwo];
const vehicle = [
  {
    id: 1,
    brand: "ford",
    color: "red",
    year: 2022,
    model: "S-Series",
    registration: {
      state: "karnataka",
      pincode: 560036,
    },
  },
  {
    id: 2,
    brand: "BMW",
    color: "Grey",
    year: 2022,
    model: "S-Series",
    registration: {
      state: "karnataka",
      pincode: 560090,
    },
  },
];

const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};

const UpdatedVehicle = { ...myVehicle, ...updateMyVehicle };

console.log(UpdatedVehicle);
const carColor = "red";

const SecondComponent = (props) => {
  return (
    <div>
      <Car vehicle={vehicle} />
      <h2>This is SecondComponent Component</h2>
      <ul>
        {Fruits.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        <li>{Fruits}</li>
      </ul>
      <ul>
        {vehicle.map((item, index) => (
          <li key={index}>
            {item.id} {item.brand} {item.color} {item.model}{" "}
            {item.registration.state} {item.registration.pincode}
          </li>
        ))}
      </ul>

      <h1>{combinedNo}</h1>
      <p id="demo"></p>
    </div>
  );
};

export default SecondComponent;
