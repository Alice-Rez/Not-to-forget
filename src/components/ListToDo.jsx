import React, { Component } from "react";
import Item from "./Item";

export default class ListToDo extends Component {
  render() {
    return (
      <section>
        <h2>Your to-do items</h2>
        <section className="list-card-deck">
          {this.props.tasks.map((task, index) => (
            <Item key={`task-${index + 1}`} task={task} />
          ))}
        </section>
      </section>
    );
  }
}
