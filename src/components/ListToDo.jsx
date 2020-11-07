import React, { Component } from "react";
import ListResults from "./ListResults";

export default class ListToDo extends Component {
  state = {
    categoryChosen: false,
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
        categoryChosen: true,
      };
    } else if (state.finished) {
      results = props.tasks.filter((item) => {
        return item.finished;
      });
      return {
        ...state,
        tasks: results,
        categoryChosen: true,
      };
    }
    return null;
  }

  getOpenTasks = () => {
    this.setState({ ...this.state, open: true, finished: false });
  };

  getFinishedTasks = () => {
    this.setState({ ...this.state, open: false, finished: true });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.categoryChosen ? (
          <ListResults tasks={this.state.tasks} />
        ) : (
          <section className="buttons-group">
            <button className="btn btn-lg btn-list" onClick={this.getOpenTasks}>
              Open Tasks
            </button>
            <button
              className="btn btn-lg btn-list"
              onClick={this.getFinishedTasks}
            >
              Finished tasks
            </button>
          </section>
        )}
      </React.Fragment>
    );
  }
}
