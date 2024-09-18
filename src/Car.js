import React from "react";
import MadeGoal from "./MadeGoal";
import MissedGoal from "./MissedGoal";
import Form from "./Form";
const isGoal = true;

const shoot = (a, b) => {
  alert(b.type);
};

const Car = (props) => {
  console.log(props.vehicle);
  console.log(isGoal);
  return (
    <div>
      {isGoal ? <MadeGoal /> : <MissedGoal />}
      <h2>This is my Car Component</h2>
      <ul>
        {props.vehicle.map((item, index) => (
          <li key={index}>
            {item.brand} {item.color}
          </li>
        ))}
        <li key={props.vehicle.id}>
          {/* {Object.entries(props).map(([key, value]) => (
            <p key={key}><strong>{key}:</strong> {value}</p>
          ))} */}
        </li>
      </ul>


      <button type="submit" onClick={(e) => shoot("Goal", e)}>
        Hello
      </button>

    </div>
  );
};

export default Car;
