import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
// import Navigation from "./Navigation";
import AddToDo from "./AddToDo";

export default class App extends Component {
  state = {
    tasks: [],
  };

  addTask = (task) => {
    this.setState({ tasks: [...this.state.tasks, task] });
  };

  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header />
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
