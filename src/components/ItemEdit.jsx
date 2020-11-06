import React, { useContext, useState } from "react";
import { itemContext } from "./context";

export default function ItemContent(props) {
  const task = useContext(itemContext);
  const [change, setChange] = useState({
    title: task.title,
    deadline: task.deadline,
    importance: task.importance,
    description: task.description,
  });

  const finishEdit = () => {
    props.setToEdit(false);
  };

  return (
    <form>
      <input
        type="text"
        name="title"
        id="title"
        className="form-control h3 edit-input"
        value={task.title}
      />
      <input
        type="date"
        name="deadline"
        id="deadline"
        className="form-control edit-input"
        value={task.deadline}
      />
      <div className="form-group mt-3">
        <label htmlFor="importance">Importance:</label>
        <select
          name="importance"
          id="importance"
          className="form-control edit-input"
        >
          <option value={task.importance - 1}>
            {props.levels[task.importance - 1]}
          </option>
          {props.levels.map((item, index) => {
            if (index !== Number(task.importance - 1)) {
              console.log("gotcha");
              return (
                <option value={index} key={item}>
                  {item}
                </option>
              );
            }
            return null;
          })}
        </select>
      </div>

      <div className="form-group mt-3">
        <label htmlFor="description">Details:</label>
        <textarea
          cols="30"
          rows="3"
          name="description"
          id="description"
          className="form-control edit-input"
          value={task.description}
        />
      </div>
      <button className="btn btn-edit" onClick={finishEdit}>
        Edit Item
      </button>
    </form>
  );
}
