import React, { Component } from "react";
import { itemContext } from "./context";
import Item from "./Item";

export default class ListResults extends Component {
  state = {
    impClicked: false,
    deadClicked: false,
    titleClicked: false,
  };

  sortTasks = (property) => {
    let helper = [...this.props.tasks];
    helper.sort(function (a, b) {
      var keyA = a[property].toLowerCase();
      var keyB = b[property].toLowerCase();
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
    this.setState({ tasksSorted: helper });
    helper = [];
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
    if (e.target.id === "impClicked") {
      this.sortTasks("importance");
    }
    if (e.target.id === "deadClicked") {
      this.sortTasks("deadline");
    }
    if (e.target.id === "titleClicked") {
      this.sortTasks("title");
    }
  };
  render() {
    return (
      <React.Fragment>
        <section className="buttons-group">
          <button
            className={
              !this.state.titleClicked &&
              !this.state.deadClicked &&
              !this.state.impClicked
                ? "btn btn-lg btn-list sort-active"
                : "btn btn-lg btn-list"
            }
            onClick={this.showClicked}
          >
            {!this.state.titleClicked &&
            !this.state.deadClicked &&
            !this.state.impClicked ? (
              <span>&#11015;</span>
            ) : (
              <span>&#8681;</span>
            )}{" "}
            Added
          </button>
          <button
            className={
              this.state.impClicked
                ? "btn btn-lg btn-list sort-active"
                : "btn btn-lg btn-list"
            }
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
            className={
              this.state.deadClicked
                ? "btn btn-lg btn-list sort-active"
                : "btn btn-lg btn-list"
            }
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
            className={
              this.state.titleClicked
                ? "btn btn-lg btn-list sort-active"
                : "btn btn-lg btn-list"
            }
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
        </section>
        <section className="my-card-deck">
          {this.state.impClicked ||
          this.state.deadClicked ||
          this.state.titleClicked
            ? this.state.tasksSorted.map((task, index) => (
                <itemContext.Provider value={task} key={`task-${index + 1}`}>
                  <Item />
                </itemContext.Provider>
              ))
            : this.props.tasks.map((task, index) => (
                <itemContext.Provider value={task} key={`task-${index + 1}`}>
                  {" "}
                  <Item />
                </itemContext.Provider>
              ))}
        </section>
      </React.Fragment>
    );
  }
}
