import React, { Component } from "react";
import { itemContext } from "../context";
import Item from "./Item";

export default class ListResults extends Component {
  state = {
    sort: "none",
  };

  static getDerivedStateFromProps(props, state) {
    const sortTasks = (property) => {
      return props.tasks.sort(function (a, b) {
        var keyA = a[property];
        var keyB = b[property];
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });
    };
    if (state.sort === "importance") {
      sortTasks("importance");
    } else if (state.sort === "deadline") {
      sortTasks("deadline");
    } else if (state.sort === "title") {
      sortTasks("title");
    } else {
      sortTasks("id");
    }
  }

  setSorting = (condition) => {
    this.setState({
      sort: condition,
    });
  };

  render() {
    return (
      <React.Fragment>
        <section className="buttons-group">
          <button
            className={
              this.state.sort === "none"
                ? "btn btn-lg btn-list sort-active"
                : "btn btn-lg btn-list"
            }
            onClick={() => {
              this.setSorting("reset");
            }}
          >
            {this.state.sort === "none" ? (
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
          {this.props.tasks.map((task, index) => (
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
