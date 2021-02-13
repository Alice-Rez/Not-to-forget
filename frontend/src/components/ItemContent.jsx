import React, { useContext } from "react";
import { itemContext } from "./context";
import tickFinished from "../images/tickV1.png";

export default function ItemContent(props) {
  const task = useContext(itemContext);

  return (
    <React.Fragment>
      <h3>{task.title}</h3>
      <p>{task.deadline.split("-").reverse().join(".")}</p>
      <p>
        <strong>Importance:</strong>
      </p>
      <p>{props.levels[task.importance - 1]}</p>
      <p>
        <strong>Details:</strong>
      </p>
      <p>{task.description}</p>
      <figure>
        {task.finished ? (
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
