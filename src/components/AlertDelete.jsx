import React, { useContext } from "react";
import { myContext } from "./context.jsx";

export default function AlertDelete(props) {
  const { deleteTask } = useContext(myContext);

  const deleteItem = (e) => {
    deleteTask(props.title);
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
