import React from "react";

export default function Item(props) {
  const levels = [
    "Yesterday was late",
    "It is time to look at it ;)",
    "No rush......",
    "Too early to just think about it",
  ];

  return (
    <article className="border card-white">
      <h3>{props.task.title}</h3>
      <p className="test">
        {props.task.deadline.split("-").reverse().join(".")}
      </p>
      <p>{levels[props.task.importance - 1]}</p>
      <p>{props.task.description}</p>
    </article>
  );
}
