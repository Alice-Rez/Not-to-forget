import React, { useContext, useState } from "react";
import { itemContext, myContext } from "../context";

export default function ItemContent(props) {
  const { editTask } = useContext(myContext);
  const task = useContext(itemContext);
  const [change, setChange] = useState({
    title: task.title,
    deadline: task.deadline,
    importance: task.importance,
    description: task.description,
    id: task.id,
  });

  const finishEdit = (e) => {
    e.preventDefault();
    editTask(task.id, change);
    props.setToEdit(false);
  };

  const getValue = (e) => {
    setChange({
      ...change,
      [e.target.name]: e.target.value,
    });
  };

  const cancelEdit = (e) => {
    e.preventDefault();
    props.setToEdit(false);
  };

  return (
    <form onSubmit={finishEdit}>
      <input
        type="text"
        name="title"
        id="title"
        className="form-control h3 edit-input"
        value={change.title}
        onInput={getValue}
      />
      <input
        type="date"
        name="deadline"
        id="deadline"
        className="form-control edit-input"
        value={change.deadline}
        onInput={getValue}
      />
      <div className="form-group mt-3">
        <label htmlFor="importance">Importance:</label>
        <select
          name="importance"
          id="importance"
          className="form-control edit-input"
          onChange={getValue}
          defaultValue={change.importance}
        >
          {/* <option value={change.importance - 1}>
            {props.levels[change.importance - 1]}
          </option> */}
          {props.levels.map((item, index) => {
            // if (index !== Number(change.importance - 1)) {
            return (
              <option value={index + 1} key={item}>
                {item}
              </option>
            );
            // }
            // return null;
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
          value={change.description}
          onInput={getValue}
        />
      </div>
      <button type="submit" className="btn btn-edit">
        Save
      </button>
      <button type="reset" className="btn" onClick={cancelEdit}>
        Cancel
      </button>
    </form>
  );
}
