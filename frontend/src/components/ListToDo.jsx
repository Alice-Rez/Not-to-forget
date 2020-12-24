import React, { Component } from "react";
import ListResults from "./ListResults";

export default class ListToDo extends Component {
  state = {
    open: false,
    finished: false,
  };

  static getDerivedStateFromProps(props, state) {
    let results;
    if (state.open) {
      results = props.tasks.filter((item) => {
        return !item.finished;
      });
      return {
        ...state,
        tasks: results,
      };
    } else if (state.finished) {
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
    this.setState({ ...this.state, open: true, finished: false });
  };

  getFinishedTasks = () => {
    this.setState({ ...this.state, open: false, finished: true });
  };

  getAllTasks = () => {
    this.setState({ ...this.state, open: false, finished: false });
  };

  render() {
    return (
      <React.Fragment>
        <section className="buttons-group buttons-group-smaller">
          <button
            className={
              !this.state.open && !this.state.finished
                ? "btn btn-lg btn-list sort-active"
                : "btn btn-lg btn-list display-inactive"
            }
            onClick={this.getAllTasks}
          >
            All
          </button>
          <button
            className={
              this.state.open
                ? "btn btn-lg btn-list sort-active"
                : "btn btn-lg btn-list"
            }
            onClick={this.getOpenTasks}
          >
            Open
          </button>
          <button
            className={
              this.state.finished
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
