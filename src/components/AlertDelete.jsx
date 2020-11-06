import React, { useContext } from "react";
import { itemContext, myContext } from "./context.jsx";

export default function AlertDelete(props) {
  const { deleteTask } = useContext(myContext);

  const task = useContext(itemContext);

  const deleteItem = (e) => {
    deleteTask(task.title);
    props.setToDelete(false);
  };

  const notWantDelete = () => {
    props.setToDelete(false);
  };

  return (
    <div className="alert">
      <p className="alert-message">Delete item?</p>
      <div className="alert-buttons">
        <button className="btn btn-icon" onClick={deleteItem}>
          Yes
        </button>{" "}
        <button className="btn btn-icon" onClick={notWantDelete}>
          No
        </button>
      </div>
    </div>
  );
}
