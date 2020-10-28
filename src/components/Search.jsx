import React, { useState } from "react";
import SearchItem from "./SearchItem";

export default function Search(props) {
  const [input, setInput] = useState("");
  const [visible, setVisible] = useState(true);

  return (
    <section className="d-flex flex-column align-items-center justify-content-center">
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
                  key={index + 1}
                />
              ) : null
            )}
          </ul>
        </div>
        <button type="submit" class="btn btn-search mb-2 btn-lg">
          Search
        </button>
      </form>
    </section>
  );
}
