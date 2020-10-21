import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
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
      <Router>
        <div className="wrapper">
          <Header showAdd={this.showAdd} formVisible={this.state.formVisible} />
          <main className="p-3">
            <Switch>
              <Route path="/add">
                <AddToDo addTask={this.addTask} />
              </Route>
            </Switch>
            {/* {this.state.formVisible ? <AddToDo addTask={this.addTask} /> : null} */}
          </main>
        </div>
      </Router>
    );
  }
}
