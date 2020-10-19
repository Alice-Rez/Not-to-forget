import React, { Component } from "react";
import Header from "./Header";
// import Navigation from "./Navigation";
import AddToDo from "./AddToDo";

export default class App extends Component {
  state = {
    formVisible: false,
    tasks: [],
  };

  showAdd = (boolean) => {
    this.setState({ formVisible: boolean });
  };

  addTask = (task) => {
    this.setState({ tasks: [...this.state.tasks, task] });
  };

  render() {
    return (
      <div className="wrapper">
        <Header showAdd={this.showAdd} formVisible={this.state.formVisible} />
        <main className="p-3">
          {/* <Navigation
            showAdd={this.showAdd}
            formVisible={this.state.formVisible}
          /> */}
          {this.state.formVisible ? <AddToDo addTask={this.addTask} /> : null}
        </main>
      </div>
    );
  }
}
