import React from "react";

export default function Item(props) {
  return (
    <article className="border card-white">
      <h3>{props.task.title}</h3>
      <p className="test">
        {props.task.deadline.split("-").reverse().join(".")}
      </p>
      <p>{props.task.importance}</p>
      <p>{props.task.description}</p>
    </article>
  );
}
