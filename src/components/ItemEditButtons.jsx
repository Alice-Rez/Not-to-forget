import React, { useContext } from "react";
import { myContext } from "./context.jsx";
import tickV2 from "../images/tickV2.svg";
import cross from "../images/cross.svg";
import edit from "../images/edit.svg";

export default function ItemEditButtons(props) {
  const { deleteTask } = useContext(myContext);

  const deleteItem = (e) => {
    let task = e.target.id.split("-")[0];
    deleteTask(task);
  };

  return (
    <div className="icons">
      <button
        className="btn btn-icon"
        title="task finished"
        id={`${props.title}-finish`}
      >
        <img src={tickV2} alt="task finished icon" role="presentation" />
      </button>
      <button
        className="btn btn-icon"
        title="edit task"
        disabled={props.finished ? true : false}
      >
        <img
          src={edit}
          alt="task finished icon"
          role="presentation"
          id={`${props.title}-edit`}
        />
      </button>
      <button
        className="btn btn-icon"
        title="delete task"
        id={`${props.title}-delete`}
        onClick={deleteItem}
      >
        <img
          src={cross}
          alt="task finished icon"
          role="presentation"
          id={`${props.title}-deleteImage`}
        />
      </button>
    </div>
  );
}
