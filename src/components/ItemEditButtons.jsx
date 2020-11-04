import React, { useContext } from "react";
import { myContext } from "./context.jsx";
import tickV2 from "../images/tickV2.svg";
import cross from "../images/cross.svg";
import edit from "../images/edit.svg";

export default function ItemEditButtons(props) {
  const { deleteTask } = useContext(myContext);

  const deleteItem = (e) => {
    deleteTask(props.title);
  };

  return (
    <div className="icons">
      <button className="btn btn-icon" title="task finished">
        <img src={tickV2} alt="task finished icon" role="presentation" />
      </button>
      <button
        className="btn btn-icon"
        title="edit task"
        disabled={props.finished ? true : false}
      >
        <img src={edit} alt="task finished icon" role="presentation" />
      </button>
      <button
        className="btn btn-icon btn-delete"
        title="delete task"
        onClick={deleteItem}
      >
        <img src={cross} alt="delete task icon" role="presentation" />
      </button>
    </div>
  );
}
