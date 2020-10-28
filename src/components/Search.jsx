import React, { useState } from "react";
import SearchItem from "./SearchItem";
import Item from "./Item";

export default function Search(props) {
  const [input, setInput] = useState("");
  const [visible, setVisible] = useState(true);
  const [item, setItem] = useState("");

  return (
    <React.Fragment>
      <section className="section card-white d-flex flex-column align-items-center justify-content-center">
        <h2 className="pb-3">Search items</h2>
        <form className="form-inline">
          <div className="form-group mx-sm-3 mb-2 input-wrapper">
            <input
              type="text"
              class="form-control form-control-lg"
              id="search"
              name="search"
              value={input}
              onInput={(e) => {
                setInput(e.target.value);
                setVisible(true);
              }}
            />
            <ul class="search-list list-group">
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
            type="submit"
            class="btn btn-search mb-2 btn-lg"
            onClick={(e) => {
              e.preventDefault();
              props.tasks.map((task) =>
                input === task.title ? setItem(task) : null
              );
              // console.log("clicked");
              // console.log(props.tasks);
              // console.log(input);
              // props.tasks.map((item, index) => {
              //   console.log(item.title);
              //   console.log(input === item.title);
              //   if (input === item.title) {
              //     console.log(item);
              //     return <Item key={`task-${index + 1}`} task={item} />;
              //   }
              // });
            }}
          >
            Search
          </button>
        </form>
      </section>
      <section className="search-results">
        {item ? <Item task={item} /> : null}
      </section>
    </React.Fragment>
  );
}
