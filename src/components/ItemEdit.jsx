import React, { useContext } from "react";
import { itemContext } from "./context";
import tickFinished from "../images/tickV1.svg";

export default function ItemContent(props) {
  const task = useContext(itemContext);

  const finishEdit = () => {
    props.setToEdit(false);
  };

  return (
    <React.Fragment>
      <input className="h3" type="text" value={task.title} />
      <input type="date" name="" id="" value={task.deadline} />
      <p>
        <strong>Importance:</strong>
      </p>
      <p>{props.levels[task.importance - 1]}</p>
      <p>
        <strong>Details:</strong>
      </p>
      <p>{task.description}</p>
      <button className="btn btn-edit" onClick={finishEdit}>
        Edit Item
      </button>
    </React.Fragment>
  );
}
