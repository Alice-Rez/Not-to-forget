import React, { useContext } from "react";
import { myContext } from "./context.jsx";
import tickV2 from "../images/tickV2.svg";
import cross from "../images/cross.svg";
import edit from "../images/edit.svg";

export default function ItemEditButtons(props) {
  const { checkTask } = useContext(myContext);

  const wantDelete = () => {
    props.setToDelete(true);
  };

  const wantCheck = () => {
    checkTask(props.title);
  };

  return (
    <div className="icons">
      <button
        className="btn btn-icon"
        title="task finished"
        onClick={wantCheck}
      >
        <img src={tickV2} alt="task finished icon" role="presentation" />
      </button>
      <button
        className="btn btn-icon"
        title="edit task"
        disabled={props.finished}
      >
        <img src={edit} alt="task finished icon" role="presentation" />
      </button>
      <button className="btn btn-icon" title="delete task" onClick={wantDelete}>
        <img src={cross} alt="delete task icon" role="presentation" />
      </button>
    </div>
  );
}
