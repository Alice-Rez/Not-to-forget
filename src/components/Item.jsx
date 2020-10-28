import React from "react";
import pin1 from "../images/pin-lila.png";
import pin2 from "../images/pin-red.png";
import pin3 from "../images/pin-yellow.png";
import pin4 from "../images/pin-green.png";

export default function Item(props) {
  const levels = [
    "Yesterday was late",
    "It is time to look at it ;)",
    "No rush......",
    "Too early to just think about it",
  ];

  let pin;

  let choosePin = (number) => {
    switch (number) {
      case 1:
        pin = pin1;
        break;
      case 2:
        pin = pin2;
        break;
      case 3:
        pin = pin3;
        break;
      default:
        pin = pin4;
        break;
    }
  };

  choosePin(parseInt(props.task.importance));

  return (
    <article className="border card-white">
      <figure>
        <img src={pin} alt="" />
      </figure>
      <h3>{props.task.title}</h3>
      <p className="test">
        {props.task.deadline.split("-").reverse().join(".")}
      </p>
      <p>
        <strong>Importance:</strong>
      </p>
      <p>{levels[props.task.importance - 1]}</p>
      <p>
        <strong>Details:</strong>
      </p>
      <p>{props.task.description}</p>
    </article>
  );
}
