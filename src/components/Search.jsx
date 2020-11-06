import React, { useState } from "react";
import { itemContext } from "./context";
import SearchItem from "./SearchItem";
import Item from "./Item";

export default function Search(props) {
  const [input, setInput] = useState("");
  const [visible, setVisible] = useState(true);
  const [showItem, setShowItem] = useState(false);

  return (
    <React.Fragment>
      <section className="section-main d-flex flex-column align-items-center justify-content-center">
        <form className="form-inline">
          <div className="form-group mx-sm-3 mb-2 input-wrapper">
            <input
              type="text"
              className="form-control form-control-lg"
              aria-labelledby="searchButton"
              id="search"
              name="search"
              value={input}
              onInput={(e) => {
                setShowItem(false);
                setInput(e.target.value);
                setVisible(true);
              }}
              onChange={(e) => {
                setInput(e.target.value);
                setVisible(true);
              }}
            />
            <ul className="search-list list-group">
              {props.tasks.map((item, index) =>
                item.title.toLowerCase().startsWith(input.toLowerCase()) &&
                input &&
                visible ? (
                  <SearchItem
                    title={item.title}
                    setInput={setInput}
                    setVisible={setVisible}
                    key={`searchItem${index + 1}`}
                  />
                ) : null
              )}
            </ul>
          </div>
          <button
            id="searchButton"
            type="submit"
            className="btn btn-search mb-2 btn-lg"
            onClick={(e) => {
              e.preventDefault();
              setVisible(false);
              setShowItem(true);
            }}
          >
            Search items
          </button>
        </form>
      </section>
      <section className="search-results">
        {showItem
          ? props.tasks.map((task, index) => {
              if (input === task.title) {
                return (
                  <itemContext.Provider value={task} key={`task-${index + 1}`}>
                    <Item />
                  </itemContext.Provider>
                );
              }
              return null;
            })
          : null}
      </section>
    </React.Fragment>
  );
}
