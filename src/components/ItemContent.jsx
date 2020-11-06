import React from "react";

export default function ItemContent() {
  return (
    <React.Fragment>
      <figure>
        <img className="img-smaller" src={pin} alt="pin" />
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
      <figure>
        {props.task.finished ? (
          <img
            className="img-larger"
            src={tickFinished}
            alt="finished indicator icon"
          />
        ) : null}
      </figure>
    </React.Fragment>
  );
}
