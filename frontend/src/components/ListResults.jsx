import React, { Component } from "react";
import { itemContext } from "./context";
import Item from "./Item";

export default class ListResults extends Component {
  state = {
    impClicked: false,
    deadClicked: false,
    titleClicked: false,
  };

  static getDerivedStateFromProps(props, state) {
    let result;
    const sortTasksInside = (property) => {
      let helper = [...props.tasks];
      helper.sort(function (a, b) {
        var keyA = a[property];
        var keyB = b[property];
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });
      return helper;
    };
    if (state.impClicked) {
      result = sortTasksInside("importance");
    } else if (state.deadClicked) {
      result = sortTasksInside("deadline");
    } else if (state.titleClicked) {
      result = sortTasksInside("title");
    } else {
      result = sortTasksInside("id");
    }
    return {
      ...state,
      tasksSorted: result,
    };
  }

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

  sortImportance = () => {
    this.setState({
      impClicked: true,
      deadClicked: false,
      titleClicked: false,
    });
  };

  sortDeadline = () => {
    this.setState({
      impClicked: false,
      deadClicked: true,
      titleClicked: false,
    });
  };

  sortTitle = () => {
    this.setState({
      impClicked: false,
      deadClicked: false,
      titleClicked: true,
    });
  };

  sortReset = () => {
    this.setState({
      impClicked: false,
      deadClicked: false,
      titleClicked: false,
    });
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
            onClick={this.sortReset}
          >
            {!this.state.titleClicked &&
            !this.state.deadClicked &&
            !this.state.impClicked ? (
              <span>&#11014;</span>
            ) : (
              <span>&#8679;</span>
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
            onClick={this.sortImportance}
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
            onClick={this.sortDeadline}
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
            onClick={this.sortTitle}
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
