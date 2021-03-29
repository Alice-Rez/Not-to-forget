import React, { Component } from "react";
import { itemContext, myContext } from "../context";
import Item from "./Item";
import Message from "./Message";

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
    let notDisplayed = 0;
    const { tasks } = this.context;
    const { displayCondition, sort } = this.state;

    return (
      <React.Fragment>
        <section className="buttons-group buttons-group-smaller">
          <button
            className={
              displayCondition === "all"
                ? "btn btn-lg btn-list sort-active"
                : "btn btn-lg btn-list"
            }
            onClick={() => {
              this.toggleVisibility("all");
            }}
          >
            All
          </button>
          <button
            className={
              displayCondition === "open"
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
              displayCondition === "finished"
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
              sort === "id"
                ? "btn btn-lg btn-list sort-active"
                : "btn btn-lg btn-list"
            }
            onClick={() => {
              this.setSorting("id");
            }}
          >
            {sort === "id" ? <span>&#11014;</span> : <span>&#8679;</span>} Added
          </button>
          <button
            className={
              sort === "importance"
                ? "btn btn-lg btn-list sort-active"
                : "btn btn-lg btn-list"
            }
            id="impClicked"
            onClick={() => {
              this.setSorting("importance");
            }}
          >
            {sort === "importance" ? (
              <span>&#11015;</span>
            ) : (
              <span>&#8681;</span>
            )}{" "}
            Importance
          </button>
          <button
            className={
              sort === "deadline"
                ? "btn btn-lg btn-list sort-active"
                : "btn btn-lg btn-list"
            }
            id="deadClicked"
            onClick={() => {
              this.setSorting("deadline");
            }}
          >
            {sort === "deadline" ? <span>&#11015;</span> : <span>&#8681;</span>}{" "}
            Deadline
          </button>
          <button
            className={
              sort === "title"
                ? "btn btn-lg btn-list sort-active"
                : "btn btn-lg btn-list"
            }
            id="titleClicked"
            onClick={() => {
              this.setSorting("title");
            }}
          >
            {sort === "title" ? <span>&#11015;</span> : <span>&#8681;</span>}{" "}
            Title
          </button>
        </section>

        <section className="my-card-deck">
          {tasks.map((task, index) => {
            if (
              (displayCondition === "open" && !task.finished) ||
              (displayCondition === "finished" && task.finished) ||
              displayCondition === "all"
            ) {
              return (
                <itemContext.Provider value={task} key={`task-${index + 1}`}>
                  {" "}
                  <Item />
                </itemContext.Provider>
              );
            }
            notDisplayed = notDisplayed + 1;
            return null;
          })}
          {!tasks.length || notDisplayed === tasks.length ? (
            <Message type={displayCondition} />
          ) : null}
        </section>
      </React.Fragment>
    );
  }
}
