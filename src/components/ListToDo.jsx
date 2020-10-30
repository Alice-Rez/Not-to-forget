import React, { Component } from "react";
import Item from "./Item";

export default class ListToDo extends Component {
  state = {
    impClicked: false,
    deadClicked: false,
    titleClicked: false,
    styleBtn: {
      color: "#fbfbfb",
    },
  };
  showClicked = (e) => {
    this.setState({
      impClicked: false,
      deadClicked: false,
      titleClicked: false,
    });
    if (e.target.id) {
      this.setState({ [e.target.id]: true });
    }
  };
  render() {
    return (
      <React.Fragment>
        <section className="buttons-group">
          <button
            className="btn btn-lg btn-list"
            id="impClicked"
            onClick={this.showClicked}
          >
            {this.state.impClicked ? (
              <span>&#11015;</span>
            ) : (
              <span>&#8681;</span>
            )}{" "}
            Importance
          </button>
          <button
            className="btn btn-lg btn-list"
            id="deadClicked"
            onClick={this.showClicked}
          >
            {this.state.deadClicked ? (
              <span>&#11015;</span>
            ) : (
              <span>&#8681;</span>
            )}{" "}
            Deadline
          </button>
          <button
            className="btn btn-lg btn-list"
            id="titleClicked"
            onClick={this.showClicked}
          >
            {this.state.titleClicked ? (
              <span>&#11015;</span>
            ) : (
              <span>&#8681;</span>
            )}{" "}
            Title
          </button>
          <button className="btn btn-lg btn-list" onClick={this.showClicked}>
            {" "}
            Reset
          </button>
        </section>
        <section className="my-card-deck">
          {this.props.tasks.map((task, index) => (
            <Item key={`task-${index + 1}`} task={task} />
          ))}
        </section>
      </React.Fragment>
    );
  }
}
