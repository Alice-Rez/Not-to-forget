import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import AddToDo from "./AddToDo";
import ListToDo from "./ListToDo";
import Search from "./Search";
import Help from "./Help";

export default class App extends Component {
  state = {
    tasks: [
      {
        title: "learn React",
        deadline: "2021-01-21",
        importance: "1",
        description:
          "Learn React really in deep during my dci course, using FEM videos and Udemy course from Colt Steele",
      },
      {
        title: "silvester",
        deadline: "2020-12-31",
        importance: "4",
        description: "Finally end of this horror year!!!!",
      },
      {
        title: "Christmas",
        deadline: "2020-12-24",
        importance: "3",
        description:
          "Although there is covid, still celebrate Christmas at least a bit!",
      },
      {
        title: "final presentation",
        deadline: "2021-03-23",
        importance: "2",
        description: "Presentation of our final projects. last day in DCI.",
      },
    ],
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
              <ListToDo tasks={this.state.tasks} />
            </Route>
            <Route path="/search">
              <Search tasks={this.state.tasks} />
            </Route>
            <Route path="/help">
              <Help />
            </Route>
          </Switch>
        </main>
      </Router>
    );
  }
}
