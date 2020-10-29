import React, { Component } from "react";
import Item from "./Item";

export default class ListToDo extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="buttons-group">
          <button className="btn btn-lg btn-list">&#11015; Importance</button>
          <button className="btn btn-lg btn-list">&#11015; Deadline</button>
          <button className="btn btn-lg btn-list">&#8681; Title</button>
        </section>
        <section className="list-card-deck">
          {this.props.tasks.map((task, index) => (
            <Item key={`task-${index + 1}`} task={task} />
          ))}
        </section>
      </React.Fragment>
    );
  }
}
