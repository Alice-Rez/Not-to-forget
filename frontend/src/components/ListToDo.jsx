import React, { Component } from "react";
import ListResults from "./ListResults";

export default class ListToDo extends Component {
  state = {
    displayCondition: "open",
  };

  static getDerivedStateFromProps(props, state) {
    let results;
    if (state.displayCondition === "open") {
      results = props.tasks.filter((item) => {
        return !item.finished;
      });
      return {
        ...state,
        tasks: results,
      };
    } else if (state.displayCondition === "finished") {
      results = props.tasks.filter((item) => {
        return item.finished;
      });
      return {
        ...state,
        tasks: results,
      };
    }
    return {
      ...state,
      tasks: props.tasks,
    };
  }

  getOpenTasks = () => {
    this.setState({ ...this.state, displayCondition: "open" });
  };

  getFinishedTasks = () => {
    this.setState({ ...this.state, displayCondition: "finished" });
  };

  getAllTasks = () => {
    this.setState({ ...this.state, displayCondition: "all" });
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
            onClick={this.getAllTasks}
          >
            All
          </button>
          <button
            className={
              this.state.displayCondition === "open"
                ? "btn btn-lg btn-list sort-active"
                : "btn btn-lg btn-list"
            }
            onClick={this.getOpenTasks}
          >
            Open
          </button>
          <button
            className={
              this.state.displayCondition === "finished"
                ? "btn btn-lg btn-list sort-active"
                : "btn btn-lg btn-list"
            }
            onClick={this.getFinishedTasks}
          >
            Finished
          </button>
        </section>

        <ListResults tasks={this.state.tasks} />
      </React.Fragment>
    );
  }
}
