import React from "react";

export default function Item(props) {
  return (
    <article className="border card-white">
      <h4>{props.task.title}</h4>
    </article>
  );
}
