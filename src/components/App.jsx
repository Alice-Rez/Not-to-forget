import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import AddToDo from "./AddToDo";
import ListToDo from "./ListToDo";
import Search from "./Search";
import Help from "./Help";

export default class App extends Component {
  state = {
    tasks: [],
    styleAddToDo: {
      opacity: "0",
    },
  };

  addTask = (task) => {
    this.setState({ tasks: [...this.state.tasks, task] });
  };

  changeStyle = (name, property, value) => {
    this.setState({ [name]: { ...this.state[name], [property]: value } });
  };

  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header />
          <main className="p-3">
            <Switch>
              <Route path="/add">
                <AddToDo
                  myStyle={this.state.styleAddToDo}
                  addTask={this.addTask}
                  changeStyle={this.changeStyle}
                />
              </Route>
              <Route path="/list">
                <ListToDo />
              </Route>
              <Route path="/search">
                <Search tasks={this.state.tasks} />
              </Route>
              <Route path="/help">
                <Help />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}
