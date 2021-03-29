import React, { Component } from "react";
import { itemContext, myContext } from "../context";
import Item from "./Item";

export default class ListToDo extends Component {
  state = {
    displayCondition: "open",
    sort: "id",
  };

  static contextType = myContext;

  sortTasks = (property) => {
    this.context.setTasks((prevTasks) =>
      prevTasks.sort(function (a, b) {
        var keyA = a[property];
        var keyB = b[property];
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      })
    );
  };

  setSorting = (condition) => {
    this.setState({
      ...this.state,
      sort: condition,
    });
    this.sortTasks(condition);
  };

  toggleVisibility = (condition) => {
    this.setState({ ...this.state, displayCondition: condition });
  };

  render() {
    return (
      <React.Fragment>
        <section className="buttons-group buttons-group-smaller">
          <button
            className={
              this.state.displayCondition === "all"
                ? "btn btn-lg btn-list sort-active"
                : "btn btn-lg btn-list display-inactive"
            }
            onClick={() => {
              this.toggleVisibility("all");
            }}
          >
            All
          </button>
          <button
            className={
              this.state.displayCondition === "open"
                ? "btn btn-lg btn-list sort-active"
                : "btn btn-lg btn-list"
            }
            onClick={() => {
              this.toggleVisibility("open");
            }}
          >
            Open
          </button>
          <button
            className={
              this.state.displayCondition === "finished"
                ? "btn btn-lg btn-list sort-active"
                : "btn btn-lg btn-list"
            }
            onClick={() => {
              this.toggleVisibility("finished");
            }}
          >
            Finished
          </button>
        </section>

        <section className="buttons-group">
          <button
            className={
              this.state.sort === "id"
                ? "btn btn-lg btn-list sort-active"
                : "btn btn-lg btn-list"
            }
            onClick={() => {
              this.setSorting("id");
            }}
          >
            {this.state.sort === "id" ? (
              <span>&#11014;</span>
            ) : (
              <span>&#8679;</span>
            )}{" "}
            Added
          </button>
          <button
            className={
              this.state.sort === "importance"
                ? "btn btn-lg btn-list sort-active"
                : "btn btn-lg btn-list"
            }
            id="impClicked"
            onClick={() => {
              this.setSorting("importance");
            }}
          >
            {this.state.sort === "importance" ? (
              <span>&#11015;</span>
            ) : (
              <span>&#8681;</span>
            )}{" "}
            Importance
          </button>
          <button
            className={
              this.state.sort === "deadline"
                ? "btn btn-lg btn-list sort-active"
                : "btn btn-lg btn-list"
            }
            id="deadClicked"
            onClick={() => {
              this.setSorting("deadline");
            }}
          >
            {this.state.sort === "deadline" ? (
              <span>&#11015;</span>
            ) : (
              <span>&#8681;</span>
            )}{" "}
            Deadline
          </button>
          <button
            className={
              this.state.sort === "title"
                ? "btn btn-lg btn-list sort-active"
                : "btn btn-lg btn-list"
            }
            id="titleClicked"
            onClick={() => {
              this.setSorting("title");
            }}
          >
            {this.state.sort === "title" ? (
              <span>&#11015;</span>
            ) : (
              <span>&#8681;</span>
            )}{" "}
            Title
          </button>
        </section>
        <section className="my-card-deck">
          {this.context.tasks.map((task, index) => {
            if (
              (this.state.displayCondition === "open" && !task.finished) ||
              (this.state.displayCondition === "finished" && task.finished) ||
              this.state.displayCondition === "all"
            ) {
              return (
                <itemContext.Provider value={task} key={`task-${index + 1}`}>
                  {" "}
                  <Item />
                </itemContext.Provider>
              );
            }
            return null;
          })}
        </section>
      </React.Fragment>
    );
  }
}
