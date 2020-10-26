import React from "react";

export default function SearchItem(props) {
  return (
    <li
      class="list-group-item text-left"
      onClick={(e) => {
        props.setInput(e.target.textContent);
        props.setVisible(false);
      }}
    >
      {props.title}
    </li>
  );
}
